import { Check } from "lucide-react";

function Pricing() {

    const plans = [
        {
            name: "Starter",
            price: "19",
            popular: false,
            features: [
                "Unlimited Projects",
                "Analytics",
                "Basic Support"
            ]
        },

        {
            name: "Pro",
            price: "49",
            popular: true,
            features: [
                "Everything in Starter",
                "AI Automation",
                "Priority Support",
                "Advanced Dashboard"
            ]
        },
        
        {
            name: "Scale",
            price: "99",
            popular: false,
            features: [
                "Unlimited Team",
                "API Access",
                "Custom Reports"
            ]
        },
        
    ]
    return ( 
        <section className="py-30 px-6 ">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">

                    <p className="text-indigo-400 mb-4 text-3xl">
                        Pricing
                    </p>

                    <h2 className="text-5xl font-black">
                        Simple Pricing
                    </h2>

                    <p className="mt-6 text-gray-400 text-xl">
                        Choose the plan that grows with you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {plans.map((plan, index) => (
                        <div key={index} 
                        className={`relative rounded-[36px] p-8 flex flex-col
                            min-h-[500px] border
                            backdrop-blur-3xl duration-300 hover:-translate-y-3
                            ${plan.popular ? `scale-[1.03] bg-gradient-to-b
                                from-indigo-500/20 to-purple-500/10 border-indigo-500/40`
                            : `bg-white/[0.04] border-white/10`} `}>

                                {plan.popular && (
                                    <div className="absolute top-5 right-5 px-4
                                    py-2 rounded-full bg-indigo-600 text-sm">

                                        Most Popular

                                    </div>
                                )}

                                <h3 className="text-3xl font-bold mt-5">

                                    {plan.name}
                                </h3>

                                <div className="mt-8">

                                    <span className="text-6xl font-black">

                                        {plan.price}

                                    </span>

                                    <span className="text-gray-400">

                                        /month
                                    </span>
                                </div>

                                <div className="mt-10 space-y-5 flex-1">

                                    {plan.features.map((feature, i) => (
                                        <div key={i}
                                        className="flex gap-4 items-center">

                                            <Check size={18} className="text-indigo-400" />

                                            <span>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full mt-auto py-4 rounded-2xl font-semibold
                                    duration-300 ${plan.popular ? `bg-indigo-600 hover:scale-[1.02]`:
                                        `bg-white/10`
                                     } `}>
                                        Get Started
                                     </button>
                            </div>
                    ))}
                </div>
            </div>
        </section>
     );
}

export default Pricing;