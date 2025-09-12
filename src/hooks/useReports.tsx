import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export interface Report {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'submitted' | 'acknowledged' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  location_address?: string;
  location_lat?: number;
  location_lng?: number;
  photo_urls?: string[];
  voice_note_url?: string;
  user_id?: string;
  assigned_department?: string;
  staff_notes?: string;
  public_notes?: string;
  created_at: string;
  updated_at: string;
}

export const useReports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchReports = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('civic_reports')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReports((data || []) as Report[]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load reports: " + error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createReport = async (reportData: {
    title: string;
    description: string;
    category: string;
    location_address?: string;
    location_lat?: number;
    location_lng?: number;
    photo_urls?: string[];
  }) => {
    try {
      if (!user) {
        throw new Error('You must be logged in to submit a report');
      }

      const { data, error } = await supabase
        .from('civic_reports')
        .insert({
          ...reportData,
          user_id: user.id,
          status: 'submitted',
          priority: 'medium'
        })
        .select()
        .single();

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Report submitted successfully!",
      });

      await fetchReports(); // Refresh reports
      return data;
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to submit report: " + error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const uploadPhotos = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `${user?.id}/${fileName}`;

      const { error, data } = await supabase.storage
        .from('civic-reports')
        .upload(filePath, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('civic-reports')
        .getPublicUrl(filePath);

      return publicUrl;
    });

    return Promise.all(uploadPromises);
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return {
    reports,
    loading,
    fetchReports,
    createReport,
    uploadPhotos
  };
};