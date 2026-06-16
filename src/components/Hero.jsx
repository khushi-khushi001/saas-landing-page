import { ArrowRight } from "lucide-react";

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center 
        justify-center px-6 pt-32  ">

            <div className="max-w-7xl mx-auto grid lg:grid-cols2 md:grid-cols-2 gap-16
            items-center">

                <div>

                    <div className="inline-flex items-center gap-2 mb-8 rounded-xl
                    border border-indigo-500/30 px-5 py-3  text-indigo-400">
                        Trusted by startups
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black leading-none">
                        Build

                        <span className="block bg-gradient-to-r from-indigo-500 
                        to-purple-500 text-transparent bg-clip-text">
                            Smarter
                        </span>
                    </h1>

                    <p className="mt-8 text-gray-400 text-lg max-w-xl">
                        Launch modern products with beautiful UI and powerful 
                        performance.
                    </p>

                    <div className="mt-10 flex gap-4">

                        <button className="px-8 py-4 bg-indigo-600 rounded-2xl
                        flex items-center gap-2 hover:scale-105 duration-300">
                            Start Free

                            <ArrowRight/>
                        </button>

                        <button className="px-8 py-4 border border-white/10 rounded-2xl">
                            Watch Demo
                        </button>
                    </div>
                </div>

                 <div> 
                <div className=" relative h-[550px] max-w-[600px] mx-auto rounded-[40px] 
                bg-gradient-to-r
                from-indigo-600/30 to-purple-600/20 border border-white/10 
                backdrop-blur-3xl shadow-[0_0_120px_rgba(99,102,241,.25)] hover:scale-[1.02] duration-700">

                    <div className="absolute top-0 left-0 right-0 h-14
                    border-b border-white/10 flex items-center px-6 gap-2 ">

                        <div className="w-3 h-3 rounded-full bg-red-500"/>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                        <div className="w-3 h-3 rounded-full bg-green-500"/>

                    </div>

                    <div className="pt-20 px-8">

                        <div className="h-28 rounded-3xl bg-white/5
                        border border-white/10 mb-6"/>

                        <div className="grid grid-cols-2 gap-5">

                            <div className="h-40 rounded-3xl bg-indigo-500/20
                            border border-indigo-400/20" />

                            <div className="h-40 rounded-3xl bg-indigo-500/20
                            border border-indigo-400/20" />

                        </div>
                    

                    <div className="absolute top-10 -right-6 px-5 py-4
                        rounded-2xl bg-[#10182d] border border-white/10 backdrop-blur-xl">

                            <div className="text-xs text-gray-400">
                                Revenue
                            </div>

                            <div className="text-2xl font-bold">
                                +142
                            </div>
                    </div>
                        

                    <div className="absolute bottom-10 -left-6 px-5 py-4
                    rounded-2xl bg-[#10182d] border border-white/10">

                        <div className="text-xs text-gray-400">
                            Active Users
                        </div>

                        <div className="text-2xl font-bold">18.2k</div>
                    </div>
                </div>
                </div>
                </div>  
            </div>
        </section>
      );
}

export default Hero;