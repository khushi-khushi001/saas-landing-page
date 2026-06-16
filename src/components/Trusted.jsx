

function Trusted() {

    const companies = ["Google", "Microsoft", "Stripe",
        "Slack", "Notion", "Vercel"
    ]

    return ( 
        <section className="relative py-32 px-6 border-y border-white/5 ">

            <div className="max-w-7xl mx-auto">

                <p className="text-center text-gray-500 uppercase
                tracking-[4px] mb-12">
                    Trusted by innovative teams
                </p>

                <div className="overflow-hidden relative">

                    <div className="flex gap-6 w-max animate-scroll">

                        {[...companies,...companies].map (
                            (company, index) => (
                                <div key={index} 
                                className="min-w-[220px] h-[90px]
                                rounded-3xl bg-white/[0.04]
                                border border-white/10 backdrop-blur-xl
                                flex items-center justify-center text-xl
                                font-bold text-gray-300 hover:scale-105 duration-300">

                                    {company}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Trusted;