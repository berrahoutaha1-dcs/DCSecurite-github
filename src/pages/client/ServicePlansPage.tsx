import { useNavigate, useParams } from "react-router-dom";
import { ServicePricing } from "../../components/shared/ServicePricing";
import { servicePlans } from "../../data/servicePlans";
import { ArrowLeft } from "lucide-react";

export function ServicePlansPage() {
    const { serviceSlug } = useParams<{ serviceSlug: string }>();
    const navigate = useNavigate();

    const service = serviceSlug ? servicePlans[serviceSlug] : null;

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h2>
                <p className="text-slate-500 mb-6">The requested service plan could not be loaded.</p>
                <button
                    onClick={() => navigate("/client/security")}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Security Services
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate("/client/security")}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                    <div className="text-sm text-slate-400">Dashboard &gt; Security Services &gt; {service.title}</div>
                    {/* Title is handled by ServicePricing, but we can add breadcrumbs here */}
                </div>
            </div>

            {/* Reusing exact UI from main website */}
            <ServicePricing
                title={service.title}
                description={service.description}
                plans={service.plans}
                hidePricing={false}
            />
        </div>
    );
}
