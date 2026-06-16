import { Zap, Shield, BarChart3, Sparkles } from "lucide-react";

function Features() {

    const items = [
        {
        icon: <Zap size={34}/>,
        title: "Lightning Fast",
        desc: "Optimized performance and instant loading."
        },

        {
        icon: <Shield size={34}/>,
        title: "Secure Platform",
        desc: "Enterprise grade protection and reliablity."
        },

        {
        icon: <BarChart3 size={34}/>,
        title: "Advanced Analytics",
        desc: "Track growth with beautiful insights."
        },

        {
        icon: <Sparkles size={34}/>,
        title: "AI Automation",
        desc: "Automate workflows and save time."
        },
    ]

    return ( 
        <section className=" py-32 px-6 ">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <p className="text-indigo-400 mb-4 text-3xl">Features</p>

                    <h2 className="text-5xl font-black">
                        Built for Modern Teams
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                <div className="md:row-span-2 rounded-[32px] p-10
                bg-white/[0.04] border border-white/10 
                backdrop-blur-xl hover:scale-[1.02] duration-300">

                    <div className="mb-8">
                        <Sparkles size={40}/>
                    </div>

                    <h3 className="text-3xl font-bold mb-4">
                        Smart Workspace
                    </h3>

                    <p className="text-gray-400 leading-8">
                        Manage projects, analytics and AI from one dashboard.
                    </p>

                    <div className="mt-10 h-[260px] rounded-3xl bg-gradient-to-r
                    from-indigo-500/20 to-purple-500/20 "></div>
                </div>

                {items.map((item, index) => (
                    <div key={index} 
                    className="rounded-[32px] p-8 bg-white/[0.04]
                    backdrop-blur-xl hover:translate-y-[-6px] duration-300 ">

                        <div className="mb-8 text-indigo-400">
                            {item.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-400">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
            </div>
        </section>
     );
}

export default Features;