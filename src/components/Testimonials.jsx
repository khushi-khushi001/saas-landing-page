import { Star } from "lucide-react";

function Testimonials() {

    const reviews = [
        {
            name: "Sarah Chen",
            role: "Product Designer",
            text: "The experience feels incredibly smooth and premium."
        },

        {
            name: "Alex Morgan",
            role: "Startup Founder",
            text: "We launched faster and improved conversions immediately."
        },

        {
            name: "David Wilson",
            role: "Growth Manager",
            text: "Beautiful dashboard experience with modern interactions."
        },

    ]
    return ( 
         
        <section className="py-32 px-6 ">

            <div className="max-w-7xl mx-auto relative">

                <div className="text-center mb-20">

                    <p className="text-indigo-400 mb-4 text-3xl">
                        TESTIMONIALS
                    </p>

                    <h2 className="text-5xl font-black">
                        Loved By Growing Teams
                    </h2>

                    <p className="mt-6 text-gray-400 text-xl">
                        Real experiences from teams using NovaFlow.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (

                        <div key={index}
                        className="group relative rounded-[36px] bg-white/[0.04]
                        border border-white/10 backdrop-blur-3xl p-8
                        overflow-hidden hover:-translate-y-2 duration-300 ">

                            <div className="absolute top-0 left-0 w-full h-full
                            opacity-0 group-hover:opacity-100 duration-500
                            bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>

                            <div className="relative z-10">

                                <div className="flex gap-1 mb-8">

                                    {[1,2,3,4,5].map((s) =>(
                                        <Star key={s} size={18} fill="currentColor"
                                        className="text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-8">
                                    "{review.text}"
                                </p>

                                <div className="mt-10 flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-full 
                                    bg-gradient-to-br from-indigo-500 to-purple-600 flex
                                    items-center justify-center font-bold text-lg">

                                        {review.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="font-bold">{review.name} </h4>

                                        <p className="text-gray-500 text-sm">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}

export default Testimonials;