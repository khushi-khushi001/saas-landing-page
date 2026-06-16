import { div } from "framer-motion/client";


function Dashboard() {
    return (  
        <section className="relative py-32 px-6 ">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">

                    <p className="text-indigo-400 mb-4 text-3xl">
                        Product
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
                        See Everything In One Place
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Analytics, automation and business insights 
                        inside one premium dashboard.
                    </p>
                </div>

                <div className="relative rounded-[40px] bg-white/[0.03] border
                border-white/10 backdrop-blur-3xl  p-8 overflow-hidden 
                hover:scale-[1.01] duration-700 ">

                <div className="h-14 flex items-center gap-2
                border-b border-white/10 pb-6">

                    <div className="w-3 h-3 bg-red-500 rounded-full"/>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                    <div className="w-3 h-3 bg-green-500 rounded-full"/>

                </div>

                <div className="grid lg:grid-cols-[240px_1fr] gap-6 mt-8 ">

                    <div className="rounded-[32px] bg-white/[0.03] 
                    border border-white/10 p-6">

                        <div className="space-y-4">

                            <div className="h-14 rounded-2xl bg-indigo-500/20"/>
                            <div className="h-14 rounded-2xl bg-white/5"/>
                            <div className="h-14 rounded-2xl bg-white/5"/>
                            <div className="h-14 rounded-2xl bg-white/5"/> 
                            
                        </div>
                        </div>
                    
                    <div className="space-y-6">
                    <div className="grid md:grid-cols-3  gap-6">

                        {[
                            ["Revenue", "$128k"],
                            ["Growth", "+48%"],
                            ["Users", "18.2k"]
                        ].map((card) => (
                            <div key={card[0]}
                            className="rounded-[32px] bg-gradient-to-br from-white/[0.06]
                            to-white/[0.03] border border-white/10 p-7 h-[190px] ">

                                <p className="text-gray-400">{card[0]} </p>

                                <h3 className="mt-5 text-5xl font-black">{card[1]}</h3>
                            </div>
                        ))}
                    </div>

                    <div className=" rounded-[32px] h-[300px] 
                    bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                    border border-white/10 p-10 ">

                    <div className="h-full flex items-end gap-4">

                        <div className="h-[25%] flex-1 rounded-t-2xl bg-indigo-500 "/>
                        <div className="h-[45%] flex-1 rounded-t-2xl bg-indigo-500 "/>
                        <div className="h-[70%] flex-1 rounded-t-2xl bg-indigo-500 "/>
                        <div className="h-[55%] flex-1 rounded-t-2xl bg-indigo-500 "/>
                        <div className="h-[85%] flex-1 rounded-t-2xl bg-indigo-500 "/>
                        <div className="h-full flex-1 rounded-t-2xl bg-indigo-500 "/>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Dashboard;