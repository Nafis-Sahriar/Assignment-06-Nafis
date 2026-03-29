import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import digiLogo from "../../assets/DigiTools.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import LittleCount from './LittleCount';

const NavBar = ({cartLength, setActiveMode}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:w-[90%] mx-auto mt-5 sticky z-10 top-0">

             <div className="navbar-start">
                <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                        <AiOutlineMenuFold />
                     </div>
                  <ul  tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       <li><a>Products</a></li>
                       <li><a>Features</a></li>
                       <li><a>Pricing</a></li>
                       <li><a>Testimonials</a></li>
                       <li><a>FAQ</a></li>
                 </ul>
               </div>

                <a className="btn btn-ghost text-xl"><img className='w-20 md:w-40' src={digiLogo} alt="" /></a>
            </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

       <li className='hover:bg-primary font-semibold hover:text-white hover:rounded-xl'><a>Products</a></li>
       <li className='hover:bg-primary font-semibold hover:text-white hover:rounded-xl'><a>Features</a></li>
       <li className='hover:bg-primary font-semibold hover:text-white hover:rounded-xl'><a>Pricing</a></li>
       <li className='hover:bg-primary font-semibold hover:text-white hover:rounded-xl'><a>Testimonials</a></li>
       <li className='hover:bg-primary font-semibold hover:text-white hover:rounded-xl'><a>FAQ</a></li>

    </ul>
  </div>

  <div className="navbar-end gap-2">
    <button onClick={()=>setActiveMode("cart")} className='btn rounded-full relative text-shadow-purple-800 text-2xl'>  <LittleCount cartLength={cartLength}></LittleCount>  <CiShoppingCart /></button>
    <button className='btn btn-ghost'>Log In</button>
    <a className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514fa] font-semibold text-white">Get Started</a>
  </div>
</div>
    
    );
};

export default NavBar;