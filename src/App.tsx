import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

// Pages
import Homepage from "./pages/Homepage";
import ReportIssue from "./pages/ReportIssue";
import CitizenDashboard from "./pages/CitizenDashboard";
import ReportDetail from "./pages/ReportDetail";
import Help from "./pages/Help";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminIssues from "./pages/admin/AdminIssues";
import AdminIssueDetail from "./pages/admin/AdminIssueDetail";
import AdminAssign from "./pages/admin/AdminAssign";
import AdminAnalytics from "./pages/admin/AdminAnalytics";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Citizen Routes */}
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/report" element={<Layout><ReportIssue /></Layout>} />
          <Route path="/dashboard" element={<Layout><CitizenDashboard /></Layout>} />
          <Route path="/report/:id" element={<Layout><ReportDetail /></Layout>} />
          <Route path="/help" element={<Layout><Help /></Layout>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Layout type="admin"><AdminDashboard /></Layout>} />
          <Route path="/admin/issues" element={<Layout type="admin"><AdminIssues /></Layout>} />
          <Route path="/admin/issues/:id" element={<Layout type="admin"><AdminIssueDetail /></Layout>} />
          <Route path="/admin/assign" element={<Layout type="admin"><AdminAssign /></Layout>} />
          <Route path="/admin/analytics" element={<Layout type="admin"><AdminAnalytics /></Layout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
