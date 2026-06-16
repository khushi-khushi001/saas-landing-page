

function Footer() {
    return ( 
        <footer className="px-6 pb-10">

            

            <div className="max-w-7xl mx-auto border-t border-white/10 pt-10
            ">

            <div className="grid md:grid-cols-4 gap-10">

                <div>

                    <h2 className="text-3xl font-black bg-gradient-to-r 
                    from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                        NovaFlow
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Modern AI SaaS experience.
                    </p>
                </div>

                <div>

                    <h4 className="font-bold mb-5">Product</h4>

                    <div className="space-y-3 text-gray-400">
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>Dashboard</div>
                    </div>
                </div>

                <div>

                    <h4 className="font-bold mb-5">Resources</h4>

                    <div className="space-y-3 text-gray-400">
                        <div>Docs</div>
                        <div>Help</div>
                        <div>Community</div>
                    </div>
                </div>

                <div>

                    <h4 className="font-bold mb-5">Company</h4>

                    <div className="space-y-3 text-gray-400">
                        <div>About</div>
                        <div>Contact</div>
                        <div>Privacy</div>
                    </div>
                </div>

            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex
            flex-col md:flex-row justify-between gap-4 text-gray-500">

                <div>
                    &copy; 2026 NovaFlow
                </div>

                <div>Built with React + Tailwind</div>
            </div>
            </div>
        </footer>
     );
}

export default Footer;