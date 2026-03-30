import { FaFacebook, FaInstagram } from "react-icons/fa";
// import logo from "../../assets/DigiTools.png"
import { BsTwitterX } from "react-icons/bs";
import footerLOGO from "../../assets/FooterPng.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727]  pt-16 pb-10 sticky  z-60 ">
      <div className="w-[90%] mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={footerLOGO} alt="AI Hub Logo" className="h-10 w-auto" />
             
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

            <div className="mt-8 hover:text-purple-500 flex gap-6 text-2xl text-zinc-500">

                            <span>N</span>
                            <span>A</span>
                            <span>F</span>
                            <span>I</span>
                            <span>S</span>
                          
            </div>

            
          </div>

        
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white ">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white ">
                  About 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white ">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li> <a href="#" className="hover:text-white transition"> Documentation </a> </li>
              <li> <a href="#" className="hover:text-white transition">
                  Help Service</a>
              </li>
              <li><a href="#" className="hover:text-white transition">Contact </a></li>
            </ul>
          </div>

          <div className="md:col-span-2">

            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>


            <div className="space-y-4 text-zinc-400 flex gap-5">
              <span><a href="#" className="hover:text-white transition text-4xl"><FaFacebook /></a></span>
              <span><a href="#" className="hover:text-white transition text-4xl"><FaInstagram /></a></span>
              <span><a href="#" className="hover:text-white transition text-4xl"><BsTwitterX /></a></span>
            </div>


          </div>



          
        </div>

     
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© 2026 -  Nafis - All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Terms & Services
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;