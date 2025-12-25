import { ThemeProvider } from "./components/ThemeContext";
import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "./routes";
import { MainLayout } from "./components/MainLayout";
import { useEffect } from "react";
import { CookieBanner, CookiePreferences } from "./components/CookieBanner";

import ScrollToTop from "./components/ScrollToTop";

import { AdminLayout } from "./components/admin/AdminLayout";
import { DashboardPage } from "./pages/admin/Dashboard";
import { ClientsPage } from "./pages/admin/Clients";
import { StudentsPage } from "./pages/admin/Students";
import { ContactSubmissionsPage } from "./pages/admin/Contact";
import { SubscriptionsPage } from "./pages/admin/Subscriptions";
import { EventOffersPage } from "./pages/admin/EventOffers";
import { SettingsPage } from "./pages/admin/Settings";
import { AdminLoginPage } from "./pages/admin/Login";
import { AdminNewsTicker } from "./components/admin/AdminNewsTicker";
import { AnalyticsDashboard } from "./components/admin/AnalyticsDashboard"; // Add this

import { ClientLayout } from "./components/client/ClientLayout";
import { ClientDashboard } from "./pages/client/Dashboard";
import { ClientSecurity } from "./pages/client/Security";
import { ClientProgramming } from "./pages/client/Programming";
import { ClientNCFUnit } from "./pages/client/NCFUnit";
import { ClientSupport } from "./pages/client/Support";
import { ClientSettings } from "./pages/client/Settings";
import { ClientPayment } from "./pages/client/Payment";
import { ServicePlansPage } from "./pages/client/ServicePlansPage";
import { ClientSubscriptions } from "./pages/client/billing/Subscriptions";
import { ClientPaymentHistory } from "./pages/client/billing/PaymentHistory";
import { ClientPaymentMethods } from "./pages/client/billing/PaymentMethods";
import { PropositionHistory } from "./pages/client/PropositionHistory";



export default function App() {
  const handleAcceptAllCookies = () => {
    console.log("All cookies accepted");
  };

  const handleRejectAllCookies = () => {
    console.log("All cookies rejected (except necessary)");
  };

  const handleSaveCookiePreferences = (preferences: CookiePreferences) => {
    console.log("Cookie preferences saved:", preferences);
  };

  const handleDoNotSell = () => {
    alert(
      "Your 'Do Not Sell or Share My Personal Information' request has been recorded. We will not sell or share your personal information."
    );
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Route>


          {/* Admin Routes */}
          <Route path="/thewalkingdead***9134.caroliana25/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="contact" element={<ContactSubmissionsPage />} />
            <Route path="event-offers" element={<EventOffersPage />} />
            <Route path="subscriptions" element={<SubscriptionsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="news-ticker" element={<AdminNewsTicker />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
          </Route>

          {/* Client Routes */}
          <Route path="/client" element={<ClientLayout />}>
            <Route index element={<ClientDashboard />} />
            <Route path="security" element={<ClientSecurity />} />
            <Route path="security/:serviceSlug" element={<ServicePlansPage />} />
            <Route path="programming" element={<ClientProgramming />} />
            <Route path="programming/history" element={<PropositionHistory />} />
            <Route path="ncf-unit" element={<ClientNCFUnit />} />
            <Route path="support" element={<ClientSupport />} />
            <Route path="settings" element={<ClientSettings />} />
            <Route path="payment" element={<ClientPayment />} />
            {/* Billing Routes */}
            <Route path="billing/subscriptions" element={<ClientSubscriptions />} />
            <Route path="billing/history" element={<ClientPaymentHistory />} />
            <Route path="billing/methods" element={<ClientPaymentMethods />} />
          </Route>
        </Routes>
        <CookieBanner
          onAcceptAll={handleAcceptAllCookies}
          onRejectAll={handleRejectAllCookies}
          onSavePreferences={handleSaveCookiePreferences}
          onDoNotSellClick={handleDoNotSell}
        />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </ThemeProvider>
  );
}
