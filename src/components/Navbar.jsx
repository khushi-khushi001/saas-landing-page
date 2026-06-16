import { useState } from "react";
import {Menu, X} from "lucide-react";

function Navbar() {
    
    const [open, setOpen] = useState(false);

    return (  

        <nav className="fixed top-0 left-0 right-0 h-24 w-full z-50
         backdrop-blur-xl bg-white/5 border-b border-white/10">

            <div className="max-w-7xl mx-auto h-full px-6
             flex justify-between items-center">

                <h1 className="text-transparent text-3xl font-black
                 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">
                    
                    NovaFlow
                </h1>

               <ul className="hidden md:flex gap-10 items-center">

                <li>Features</li>
                <li>Pricing</li>
                <li>Reviews</li>

                <button className="px-5 py-3 rounded-xl bg-indigo-600
                hover:scale-105 duration-300">
                    Start Free
                </button>

               </ul>

               <button className="md:hidden"
               onClick={() => setOpen(!open)}>

                {open ? <X/> : <Menu/>}
               </button>

            </div>

            {open && (
                <div className="md:hidden px-6 pb-8 space-y-5">
                    <div>Features</div>
                    <div>Pricing</div>
                    <div>Reviews</div>

                    <button className="w-full bg-indigo-600 py-3 rounded-xl">
                        Start Free
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;