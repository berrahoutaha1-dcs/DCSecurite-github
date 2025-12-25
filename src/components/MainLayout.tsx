import { Outlet, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { toast } from "sonner";
import { SignIn } from "./SignIn";
import { CustomerLogin } from "./CustomerLogin";
import { AdminLogin } from "./AdminLogin";
import { StudentMemberLogin } from "./StudentMemberLogin";
import { CustomerSignUp } from "./CustomerSignUp";
import { StudentMemberSignUp } from "./StudentMemberSignUp";
import { useState, useEffect } from "react";
import { ROUTES } from "../routes";
import { API_BASE_URL } from "../config";

import { useTheme } from "./ThemeContext";

export const MainLayout = () => {
  const navigate = useNavigate();
  const { setTheme } = useTheme(); // Use the theme context
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCustomerLogin, setShowCustomerLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showStudentMemberLogin, setShowStudentMemberLogin] = useState(false);
  const [showCustomerSignUp, setShowCustomerSignUp] = useState(false);
  const [showStudentMemberSignUp, setShowStudentMemberSignUp] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Check for email verification success
    if (searchParams.get("verified") === "1") {
      toast.success("Email verified successfully! Please log in.");
      setShowCustomerLogin(true);
      // Clean up URL
      setSearchParams((params) => {
        params.delete("verified");
        return params;
      });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    // Enforce dark mode on public pages using Context to ensure state consistency
    setTheme("dark");
    // Also force class just in case context update is async/laggy
    document.documentElement.classList.add("dark");

    return () => {
      // Optional: Logic to revert theme if needed when leaving MainLayout
    };
  }, [setTheme]);

  useEffect(() => {
    // Track general website visit (exclude pure AI page if you want separate counts, 
    // or keep it to track total site traffic including AI page entrance)
    // Here we track 'website' for everything except strictly the AI interaction frame if separate
    if (location.pathname !== ROUTES.EAGLO_AI) {
      fetch(`${API_BASE_URL}/api/analytics/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "website" }),
      }).catch(() => { });
    }
  }, [location.pathname]); // Track on path change to count page views? Or just session? 
  // User asked for "visitors". Usually means sessions. 
  // But simplistic "page hits" is safer for "visits" in this context without cookies.
  // Actually, the backend throttles (5 mins). So [location.pathname] is fine.

  const isCTFPage = location.pathname === ROUTES.CTF_PROGRAM;
  const isCompetitionsPage = location.pathname === ROUTES.COMPETITIONS;
  const isJobsPage = location.pathname === ROUTES.JOBS;
  const isEagloAIPage = location.pathname === ROUTES.EAGLO_AI;
  const shouldHideHeader =
    isCTFPage || isCompetitionsPage || isJobsPage || isEagloAIPage;
  const shouldHideFooter = isEagloAIPage;

  // Navigation Wrappers for Header Callbacks
  // These now use useNavigate or simple state for modals
  const navigateTo = (path: string) => () => navigate(path);

  return (
    <div className="min-h-screen relative">
      {!shouldHideHeader && (
        <Header
          isMainPage={
            location.pathname === ROUTES.HOME ||
            location.pathname === ROUTES.WHATS_NEW
          }
          onSignInClick={() => setShowSignIn(true)}
          onCustomerLoginClick={() => setShowCustomerLogin(true)}
          onAdminLoginClick={() => setShowAdminLogin(true)}
          onStudentMemberLoginClick={() => setShowStudentMemberLogin(true)}
          onCustomerSignUpClick={() => setShowCustomerSignUp(true)}
          onStudentMemberSignUpClick={() => setShowStudentMemberSignUp(true)}
          onSignUpModalOpen={() => setShowSignUpModal(true)}
          onUnderAttackClick={() => {
            navigate(ROUTES.UNDER_ATTACK);
          }}
        />
      )}
      {/* Page Content Renders Here */}
      {/* Page Content Renders Here */}
      <Outlet context={{ openCustomerLogin: () => setShowCustomerLogin(true) }} />

      {!shouldHideFooter && <Footer />}

      {/* Global Modals */}
      <SignIn isOpen={showSignIn} onClose={() => setShowSignIn(false)} />
      <CustomerLogin
        isOpen={showCustomerLogin}
        onClose={() => setShowCustomerLogin(false)}
        onSwitchToSignUp={() => {
          setShowCustomerLogin(false);
          setShowCustomerSignUp(true);
        }}
      />
      <AdminLogin isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
      <StudentMemberLogin
        isOpen={showStudentMemberLogin}
        onClose={() => setShowStudentMemberLogin(false)}
        onSwitchToSignUp={() => {
          setShowStudentMemberLogin(false);
          setShowStudentMemberSignUp(true);
        }}
      />
      <CustomerSignUp
        isOpen={showCustomerSignUp}
        onClose={() => setShowCustomerSignUp(false)}
        onSwitchToLogin={() => {
          setShowCustomerSignUp(false);
          setShowCustomerLogin(true);
        }}
      />
      <StudentMemberSignUp
        isOpen={showStudentMemberSignUp}
        onClose={() => setShowStudentMemberSignUp(false)}
        onSwitchToLogin={() => {
          setShowStudentMemberSignUp(false);
          setShowStudentMemberLogin(true);
        }}
      />
    </div>
  );
};
