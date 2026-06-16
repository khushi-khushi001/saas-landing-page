import { ArrowRight } from "lucide-react";

function CTA() {
    return ( 

        <section className=" px-6 pb-20 ">

            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden
                rounded-[40px] border border-white/10 bg-gradient-to-br
                from-indigo-500/20 to-purple-500/10 backdrop-blur-3xl
                px-10 py-24 text-center ">

                    <div className="absolute top-[-100px] left-[-100px] 
                    w-[300px] h-[300px] rounded-full bg-indigo-500/20 blur-[120px] "></div>

                    <div className="absolute bottom-[-100px] right-[-100px] w-[300px]
                    h-[300px] rounded-full bg-purple-500/20 blur-[120px] "></div>

                    <div className="relative z-10">

                        <p className="text-indigo-300 text-2xl mb-2">
                            GET STARTED
                        </p>

                        <h2 className="text-5xl md:text-6xl font-blacl leading-tight">
                            Launch Your Next Product Faster
                        </h2>

                        <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-xl">
                            Build beautiful products, move faster and grow without limits.
                        </p>

                        <div className="mt-12 flex flex-col md:flex-row justify-center gap-5">

                            <button className="px-8 py-5 rounded-2xl bg-indigo-600 hover:scale-[1.03]
                            duration-300 flex items-center justify-center gap-3">
                                Start Free

                                <ArrowRight />
                            </button>

                            <button className="px-8 py-5 rounded-2xl border 
                            border-white/10">
                                Book Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CTA;