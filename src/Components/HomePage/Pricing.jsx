import React from 'react';
import { ImCheckmark } from 'react-icons/im';

const Pricing = () => {
    return (
        <div className="w-full py-16 bg-gray-50 flex justify-center ">

             <div className="w-[95%] md:w-[90%] max-w-6xl">

   
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-purple-800 via-purple-400 to-amber-400 bg-clip-text text-transparent p-5">Simple, Transparent Pricing</h2>
                     <p className="text-gray-500 text-sm md:text-base"> Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
               </div>

  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

     
                    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                        <div>
                        <h3 className="text-xl font-bold mb-1">Starter</h3>
                        <p className="text-gray-500 text-sm mb-4">Perfect for getting started</p>

                        <h2 className="text-3xl font-bold mb-4"> $0 <span className="text-gray-400 text-base font-normal">/ Month</span></h2>

                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Basic templates</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Community support</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> 1 project per month</li>
                        </ul>
                        </div>

                        <button className="btn mt-6 w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA]"> Get Started Free </button>
                    </div>

     
      <div className="relative rounded-2xl p-6 flex flex-col justify-between text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg">

        
            <span className="absolute -top-3 left-45 md:left-35  bg-yellow-200 text-yellow-700 font-bold text-xs px-3 py-1 rounded-full">Most Popular</span>

            <div>
                    <h3 className="text-xl font-semibold mb-1">Pro</h3>
                    <p className="text-white/80 text-sm mb-4">Best for professionals</p>

                    <h2 className="text-3xl font-bold mb-4">$29 <span className="text-white text-base font-normal">/ Month</span></h2>

                    <ul className="space-y-2 text-sm">
                        <li className='flex items-center gap-2'><ImCheckmark />Access to all premium tools</li>
                        <li className='flex items-center gap-2'><ImCheckmark />Unlimited templates</li>
                        <li className='flex items-center gap-2'><ImCheckmark /> Priority support</li>
                        <li className='flex items-center gap-2'><ImCheckmark />Unlimited projects</li>
                        <li className='flex items-center gap-2'><ImCheckmark /> Cloud sync</li>
                        <li className='flex items-center gap-2'><ImCheckmark />Advanced analytics</li>
                    </ul>
            </div>

             <button className="btn font-bold mt-6 w-full py-3 rounded-full bg-white text-purple-600 "> Start Pro Trial</button>
      </div>

      
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">

                <div>
                        <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
                        <p className="text-gray-500 text-sm mb-4">For teams and businesses</p>

                        <h2 className="text-3xl font-bold mb-4"> $99 <span className="text-gray-400 text-base font-normal">/ Month</span></h2>

                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Everything in Pro</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Team collaboration</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Custom integrations</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Dedicated support</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> SLA guarantee</li>
                            <li className='flex items-center gap-2'><span className='text-green-600'><ImCheckmark /></span> Custom branding</li>
                        </ul>
                </div>

                <button className="btn font-bold mt-6 w-full py-3 rounded-full text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA]"> Contact Sales </button>
      </div>

    </div>

  </div>

</div>
);
};

export default Pricing;