
import { Hero } from "./components/Hero";
import { CollaborationBar } from "./components/CollaborationBar";
import { AIWorldSections } from "./components/AIWorldSections";
import { DefenseStatsSection } from "./components/DefenseStatsSection";
import { SecureComplexitySection } from "./components/SecureComplexitySection";
import { ThreatIntelSection } from "./components/ThreatIntelSection";
import { SecurityAssessment } from "./components/SecurityAssessment";
import { PartnerBanner } from "./components/PartnerBanner";
import { NationalRecognitionBanner } from "./components/NationalRecognitionBanner";
import { UnderAttack } from "./components/UnderAttack";

import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";
import { LocationsPage } from "./components/LocationsPage";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { CookiePolicy } from "./components/CookiePolicy";
import { ThreatMap } from "./components/ThreatMap";
import { SecurityTestPage } from "./components/SecurityTestPage";
import { EthicsCompliancePage } from "./components/EthicsCompliancePage";
import { CorporateResponsibilityPage } from "./components/CorporateResponsibilityPage";
import { CollaborationDonationPage } from "./components/CollaborationDonationPage";
import { PrecisionAISecurityPage } from "./components/PrecisionAISecurityPage";
import { AccelerateTransformationPage } from "./components/AccelerateTransformationPage";
import { AwardsRecognitionPage } from "./components/AwardsRecognitionPage";
import { CustomerStoriesPage } from "./components/CustomerStoriesPage";
import { CTFProgramPage } from "./components/CTFProgramPage";
import { CompetitionsPage } from "./components/CompetitionsPage";
import { JobsPage } from "./components/JobsPage";
import { CareersOverviewPage } from "./components/CareersOverviewPage";
import { TeamPage } from "./components/TeamPage";
import { EventsPage } from "./components/EventsPage";
import ERPPage from "./components/ERPPage";
import CRMPage from "./components/CRMPage";
import HRMPage from "./components/HRMPage";
import IndustrialPage from "./components/IndustrialPage";
import ConstructionPage from "./components/ConstructionPage";
import Logisoft360Page from "./components/Logisoft360Page";
import { UIUXDesignPage } from "./components/UIUXDesignPage";
import { WebDevelopmentPage } from "./components/WebDevelopmentPage";
import { MobileDevelopmentPage } from "./components/MobileDevelopmentPage";
import { IndustriesPage } from "./components/IndustriesPage";
import { EstimateProjectPage } from "./components/EstimateProjectPage";
import { LegalReferencesPage } from "./components/LegalReferencesPage";
import WhatsNew from "./components/WhatsNew";
import EagloAI from "./components/EagloAI";
import CloudNetworkSecurityPage from "./components/CloudNetworkSecurityPage";
import IDSIPSPage from "./components/IDSIPSPage";
import WebPhishingSecurityPage from "./components/WebPhishingSecurityPage";
import SecureWorkDevicePage from "./components/SecureWorkDevicePage";
import CSPMPage from "./components/CSPMPage";
import DSPMPage from "./components/DSPMPage";
import MDRPage from "./components/MDRPage";
import CDRPage from "./components/CDRPage";
import ASMPage from "./components/ASMPage";
import SIEMPage from "./components/SIEMPage";
import SOCAutomationPage from "./components/SOCAutomationPage";
import EPPPage from "./components/EPPPage";
import RansomwareProtectionPage from "./components/RansomwareProtectionPage";
import DeviceSecurityHardeningPage from "./components/DeviceSecurityHardeningPage";
import { OTSecurityPage } from "./components/OTSecurityPage";
import WAASPage from "./components/WAASPage";
import CWPPage from "./components/CWPPage";
import ASPMPage from "./components/ASPMPage";
import XDRPage from "./components/XDRPage";
import WebAppPenTestPage from "./components/WebAppPenTestPage";
import MobileAppPenTestPage from "./components/MobileAppPenTestPage";
import NetworkPenTestPage from "./components/NetworkPenTestPage";
import CloudPenTestPage from "./components/CloudPenTestPage";
import APISecurityTestingPage from "./components/APISecurityTestingPage";
import WirelessNetworkPenTestPage from "./components/WirelessNetworkPenTestPage";
import RedTeamAssessmentsPage from "./components/RedTeamAssessmentsPage";
import SocialEngineeringPage from "./components/SocialEngineeringPage";
import ZeroDayDetectionPage from "./components/ZeroDayDetectionPage";
import MalwareAnalysisPage from "./components/MalwareAnalysisPage";
import VulnerabilityResearchPage from "./components/VulnerabilityResearchPageWrapper";
import EthicalExploitDevelopmentPage from "./components/EthicalExploitDevelopmentPageWrapper";
import ContinuousSecurityTestingPage from "./components/ContinuousSecurityTestingPage";
import PublicSectorPage from "./components/PublicSectorPage";
import FinancialServicesPage from "./components/FinancialServicesPage";
import HealthcarePage from "./components/HealthcarePage";
import ManufacturingPage from "./components/ManufacturingPage";
import SMBPage from "./components/SMBPage";

export const ROUTES = {
  HOME: "/",
  CONTACT: "/contact",
  ABOUT: "/about",
  LOCATIONS: "/locations",
  PRIVACY: "/privacy-policy",
  TERMS: "/terms-of-service",
  COOKIES: "/cookie-policy",
  THREAT_MAP: "/threat-map",
  SECURITY_TEST: "/security-test",
  ETHICS_COMPLIANCE: "/company/ethics-compliance",
  CORPORATE_RESPONSIBILITY: "/company/corporate-responsibility",
  COLLABORATION_DONATION: "/company/collaboration-donation",
  PRECISION_AI_SECURITY: "/why-dcsecurite/precision-ai-security",
  ACCELERATE_TRANSFORMATION: "/why-dcsecurite/accelerate-transformation",
  AWARDS_RECOGNITION: "/why-dcsecurite/awards-recognition",
  CUSTOMER_STORIES: "/why-dcsecurite/customer-stories",
  CTF_PROGRAM: "/why-dcsecurite/ctf-program",
  COMPETITIONS: "/careers/competitions",
  JOBS: "/careers/jobs",
  CAREERS_OVERVIEW: "/careers/overview",
  TEAM: "/company/team",
  EVENTS: "/events",
  ERP_MANAGEMENT: "/solutions/enterprise/erp",
  CRM: "/solutions/enterprise/crm",
  HRM: "/solutions/enterprise/hrm",
  INDUSTRIAL: "/solutions/enterprise/industrial",
  CONSTRUCTION: "/solutions/enterprise/construction",
  LOGISOFT360: "/solutions/commerce/logisoft360",
  UI_UX_DESIGN: "/solutions/programming/ui-ux-design",
  WEB_DEVELOPMENT: "/solutions/programming/web-development",
  MOBILE_DEVELOPMENT: "/solutions/programming/mobile-development",
  INDUSTRIES: "/solutions/programming/industries",
  ESTIMATE_PROJECT: "/solutions/programming/estimate-project",
  LEGAL_REFERENCES: "/legal/references",
  WHATS_NEW: "/whats-new",
  EAGLO_AI: "/eagloai",
  CLOUD_NETWORK_SECURITY: "/security/network/cloud-network-security",
  IDS_IPS: "/security/network/ids-ips",
  WEB_PHISHING_SECURITY: "/security/network/web-phishing-security",
  SECURE_WORK_DEVICE: "/security/network/secure-work-device",
  OT_SECURITY: "/security/network/ot-security",
  CSPM: "/security/cloud/cspm",
  DSPM: "/security/cloud/dspm",
  ASPM: "/security/cloud/aspm",
  CWP: "/security/cloud/cwp",
  WAAS: "/security/cloud/waas",
  MDR: "/security/operations/mdr",
  CDR: "/security/operations/cdr",
  ASM: "/security/operations/asm",
  SIEM: "/security/operations/siem",
  SOC_AUTOMATION: "/security/operations/soc-automation",
  EPP: "/security/endpoint/epp",
  XDR: "/security/endpoint/xdr",
  RANSOMWARE_PROTECTION: "/security/endpoint/ransomware-protection",
  DEVICE_SECURITY_HARDENING: "/security/endpoint/device-hardening",
  WEB_APP_PEN_TEST: "/security/pentest/web-app",
  MOBILE_APP_PEN_TEST: "/security/pentest/mobile-app",
  NETWORK_PEN_TEST: "/security/pentest/network",
  CLOUD_PEN_TEST: "/security/pentest/cloud",
  API_SECURITY_TESTING: "/security/pentest/api-security",
  WIRELESS_NETWORK_PEN_TEST: "/security/pentest/wireless-network",
  RED_TEAM_ASSESSMENTS: "/security/pentest/red-team",
  SOCIAL_ENGINEERING: "/security/pentest/social-engineering",
  ZERO_DAY_DETECTION: "/security/pentest/zero-day-detection",
  MALWARE_ANALYSIS: "/security/pentest/malware-analysis",
  VULNERABILITY_RESEARCH: "/security/pentest/vulnerability-research",
  ETHICAL_EXPLOIT_DEVELOPMENT: "/security/pentest/exploit-development",
  CONTINUOUS_SECURITY_TESTING: "/security/pentest/continuous-testing",
  PUBLIC_SECTOR: "/industries/public-sector",
  FINANCIAL_SERVICES: "/industries/financial-services",
  HEALTHCARE: "/industries/healthcare",
  MANUFACTURING: "/industries/manufacturing",
  SMB: "/industries/smb",
  UNDER_ATTACK: "/under-attack",
};

// Helper component for the Home page to keep App.tsx clean
export const HomePage = () => (
  <>
    <Hero />
    <CollaborationBar />
    <AIWorldSections />
    <DefenseStatsSection />
    <SecureComplexitySection />
    <ThreatIntelSection />
    <SecurityAssessment />
    <PartnerBanner />
    <NationalRecognitionBanner />
  </>
);

export const routesConfig = [
  { path: ROUTES.HOME, component: HomePage },
  { path: ROUTES.CONTACT, component: ContactPage },
  { path: ROUTES.ABOUT, component: AboutPage },
  { path: ROUTES.LOCATIONS, component: LocationsPage },
  { path: ROUTES.PRIVACY, component: PrivacyPolicy },
  { path: ROUTES.TERMS, component: TermsOfService },
  { path: ROUTES.COOKIES, component: CookiePolicy },
  { path: ROUTES.THREAT_MAP, component: ThreatMap },
  { path: ROUTES.SECURITY_TEST, component: SecurityTestPage },
  { path: ROUTES.ETHICS_COMPLIANCE, component: EthicsCompliancePage },
  { path: ROUTES.CORPORATE_RESPONSIBILITY, component: CorporateResponsibilityPage },
  { path: ROUTES.COLLABORATION_DONATION, component: CollaborationDonationPage },
  { path: ROUTES.PRECISION_AI_SECURITY, component: PrecisionAISecurityPage },
  { path: ROUTES.ACCELERATE_TRANSFORMATION, component: AccelerateTransformationPage },
  { path: ROUTES.AWARDS_RECOGNITION, component: AwardsRecognitionPage },
  { path: ROUTES.CUSTOMER_STORIES, component: CustomerStoriesPage },
  { path: ROUTES.CTF_PROGRAM, component: CTFProgramPage },
  { path: ROUTES.COMPETITIONS, component: CompetitionsPage },
  { path: ROUTES.JOBS, component: JobsPage },
  { path: ROUTES.CAREERS_OVERVIEW, component: CareersOverviewPage },
  { path: ROUTES.TEAM, component: TeamPage },
  { path: ROUTES.EVENTS, component: EventsPage },
  { path: ROUTES.ERP_MANAGEMENT, component: ERPPage },
  { path: ROUTES.CRM, component: CRMPage },
  { path: ROUTES.HRM, component: HRMPage },
  { path: ROUTES.INDUSTRIAL, component: IndustrialPage },
  { path: ROUTES.CONSTRUCTION, component: ConstructionPage },
  { path: ROUTES.LOGISOFT360, component: Logisoft360Page },
  { path: ROUTES.UI_UX_DESIGN, component: UIUXDesignPage },
  { path: ROUTES.WEB_DEVELOPMENT, component: WebDevelopmentPage },
  { path: ROUTES.MOBILE_DEVELOPMENT, component: MobileDevelopmentPage },
  { path: ROUTES.INDUSTRIES, component: IndustriesPage },
  { path: ROUTES.ESTIMATE_PROJECT, component: EstimateProjectPage },
  { path: ROUTES.LEGAL_REFERENCES, component: LegalReferencesPage },
  { path: ROUTES.WHATS_NEW, component: WhatsNew },
  { path: ROUTES.EAGLO_AI, component: EagloAI },
  { path: ROUTES.CLOUD_NETWORK_SECURITY, component: CloudNetworkSecurityPage },
  { path: ROUTES.IDS_IPS, component: IDSIPSPage },
  { path: ROUTES.WEB_PHISHING_SECURITY, component: WebPhishingSecurityPage },
  { path: ROUTES.SECURE_WORK_DEVICE, component: SecureWorkDevicePage },
  { path: ROUTES.OT_SECURITY, component: OTSecurityPage },
  { path: ROUTES.CSPM, component: CSPMPage },
  { path: ROUTES.DSPM, component: DSPMPage },
  { path: ROUTES.ASPM, component: ASPMPage },
  { path: ROUTES.CWP, component: CWPPage },
  { path: ROUTES.WAAS, component: WAASPage },
  { path: ROUTES.MDR, component: MDRPage },
  { path: ROUTES.CDR, component: CDRPage },
  { path: ROUTES.ASM, component: ASMPage },
  { path: ROUTES.SIEM, component: SIEMPage },
  { path: ROUTES.SOC_AUTOMATION, component: SOCAutomationPage },
  { path: ROUTES.EPP, component: EPPPage },
  { path: ROUTES.XDR, component: XDRPage },
  { path: ROUTES.RANSOMWARE_PROTECTION, component: RansomwareProtectionPage },
  { path: ROUTES.DEVICE_SECURITY_HARDENING, component: DeviceSecurityHardeningPage },
  { path: ROUTES.WEB_APP_PEN_TEST, component: WebAppPenTestPage },
  { path: ROUTES.MOBILE_APP_PEN_TEST, component: MobileAppPenTestPage },
  { path: ROUTES.NETWORK_PEN_TEST, component: NetworkPenTestPage },
  { path: ROUTES.CLOUD_PEN_TEST, component: CloudPenTestPage },
  { path: ROUTES.API_SECURITY_TESTING, component: APISecurityTestingPage },
  { path: ROUTES.WIRELESS_NETWORK_PEN_TEST, component: WirelessNetworkPenTestPage },
  { path: ROUTES.RED_TEAM_ASSESSMENTS, component: RedTeamAssessmentsPage },
  { path: ROUTES.SOCIAL_ENGINEERING, component: SocialEngineeringPage },
  { path: ROUTES.ZERO_DAY_DETECTION, component: ZeroDayDetectionPage },
  { path: ROUTES.MALWARE_ANALYSIS, component: MalwareAnalysisPage },
  { path: ROUTES.VULNERABILITY_RESEARCH, component: VulnerabilityResearchPage },
  { path: ROUTES.ETHICAL_EXPLOIT_DEVELOPMENT, component: EthicalExploitDevelopmentPage },
  { path: ROUTES.CONTINUOUS_SECURITY_TESTING, component: ContinuousSecurityTestingPage },
  { path: ROUTES.PUBLIC_SECTOR, component: PublicSectorPage },
  { path: ROUTES.FINANCIAL_SERVICES, component: FinancialServicesPage },
  { path: ROUTES.HEALTHCARE, component: HealthcarePage },
  { path: ROUTES.MANUFACTURING, component: ManufacturingPage },
  { path: ROUTES.SMB, component: SMBPage },
  { path: ROUTES.UNDER_ATTACK, component: UnderAttack },
];
