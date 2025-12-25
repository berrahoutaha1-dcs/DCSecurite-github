import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { PricingPlan } from "../../data/servicePlans";
import { ROUTES } from "../../routes";
import { useTheme } from "../ThemeContext";

interface ServicePricingProps {
    title: string;
    description: string;
    plans: PricingPlan[];
    forceTheme?: 'light' | 'dark';
    highlightColor?: 'cyan' | 'orange' | 'emerald' | 'violet';
    hidePricing?: boolean;
}

interface LoginContext {
    openCustomerLogin: () => void;
}

export function ServicePricing({ title, description, plans, forceTheme, highlightColor = 'cyan', hidePricing = true }: ServicePricingProps) {
    const navigate = useNavigate();
    const { openCustomerLogin } = useOutletContext<LoginContext>();
    const { theme: globalTheme } = useTheme();
    const theme = forceTheme || globalTheme;

    // Color configurations
    const colors = {
        cyan: {
            gradientFrom: "from-cyan-500",
            gradientTo: "to-blue-500",
            hoverFrom: "hover:from-cyan-400",
            hoverTo: "hover:to-blue-400",
            simpleText: "text-cyan-400",
            simpleTextLight: "text-cyan-500",
            border: "border-cyan-500/50",
            shadow: "shadow-cyan-500/20",
            shadowButton: "shadow-cyan-500/25",
            badge: "MOST POPULAR",
            buttonText: "Get Started"
        },
        orange: {
            gradientFrom: "from-orange-500",
            gradientTo: "to-red-500",
            hoverFrom: "hover:from-orange-400",
            hoverTo: "hover:to-red-400",
            simpleText: "text-orange-400",
            simpleTextLight: "text-orange-500",
            border: "border-orange-500/50",
            shadow: "shadow-orange-500/20",
            shadowButton: "shadow-orange-500/25",
            badge: "RECOMMENDED",
            buttonText: "Start Trial"
        },
        emerald: {
            gradientFrom: "from-emerald-500",
            gradientTo: "to-teal-500",
            hoverFrom: "hover:from-emerald-400",
            hoverTo: "hover:to-teal-400",
            simpleText: "text-emerald-400",
            simpleTextLight: "text-emerald-500",
            border: "border-emerald-500/50",
            shadow: "shadow-emerald-500/20",
            shadowButton: "shadow-emerald-500/25",
            badge: "MOST POPULAR",
            buttonText: "Get Advanced"
        },
        violet: {
            gradientFrom: "from-violet-500",
            gradientTo: "to-purple-500",
            hoverFrom: "hover:from-violet-400",
            hoverTo: "hover:to-purple-400",
            simpleText: "text-violet-400",
            simpleTextLight: "text-violet-500",
            border: "border-violet-500/50",
            shadow: "shadow-violet-500/20",
            shadowButton: "shadow-violet-500/25",
            badge: "MOST POPULAR",
            buttonText: "Start Protection"
        }
    };

    const c = colors[highlightColor] || colors.cyan;

    return (
        <section
            className="relative py-24 transition-colors duration-300"
            id="pricing-plans"
        >
            {/* Light Mode-only Background Gradient */}
            {theme === "light" && (
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white pointer-events-none -z-10" />
            )}

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 text-transparent bg-clip-text py-1">
                        {title}
                    </h2>
                    <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        {description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`relative group ${plan.highlighted ? "transform md:-translate-y-4" : ""}`}
                            >
                                {/* Most Popular/Recommended Badge */}
                                {plan.highlighted && (
                                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                                        {/* Badge Removed */}
                                    </div>
                                )}

                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradientFrom.replace("from-", "from-")}/10 ${c.gradientTo.replace("to-", "to-")}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                {plan.highlighted && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${c.gradientFrom.replace("from-", "from-")}/20 ${c.gradientTo.replace("to-", "to-")}/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                                )}

                                {/* Card */}
                                <div
                                    className={`relative backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${plan.highlighted
                                        ? theme === "light"
                                            ? `bg-white/90 border-2 ${c.border} shadow-2xl ${c.shadow}`
                                            : `bg-slate-900/80 border-2 ${c.border} shadow-2xl ${c.shadow}`
                                        : theme === "light"
                                            ? "bg-white/50 border border-slate-200 shadow-sm hover:shadow-md"
                                            : "bg-slate-900/50 border border-slate-800"
                                        }`}
                                >
                                    {/* Plan Name */}
                                    <h3 className={`text-2xl font-bold mb-2 ${theme === "light" ? "text-slate-900" : "text-white"}`}>{plan.name}</h3>

                                    {/* Price */}
                                    {!hidePricing && (
                                        <div className={`text-4xl font-bold ${c.simpleText} mb-6`}>
                                            {plan.price}
                                            {plan.price !== "Custom" && <span className={`text-lg font-normal ${theme === "light" ? "text-slate-500" : "text-slate-500"}`}>{plan.period}</span>}
                                        </div>
                                    )}

                                    <p className={`mb-8 ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>{plan.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature: string, idx: number) => (
                                            <li key={idx} className={`flex items-start gap-3 ${theme === "light" ? "text-slate-600" : "text-slate-300"}`}>
                                                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? c.simpleText : c.simpleTextLight}`} />
                                                <span className={plan.highlighted ? (theme === "light" ? "text-slate-900 font-medium" : "text-white") : ""}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        className={`w-full py-3 rounded-lg font-bold transition-all ${plan.highlighted
                                            ? `bg-gradient-to-r ${c.gradientFrom} ${c.gradientTo} text-white hover:from-transparent hover:to-transparent hover:text-white hover:border-2 hover:${c.border} shadow-lg ${c.shadowButton}`
                                            : `border-2 ${c.border} ${c.simpleText} hover:bg-gradient-to-r hover:${c.gradientFrom} hover:${c.gradientTo} hover:text-white`
                                            }`}
                                        onClick={openCustomerLogin}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section >
    );
}
