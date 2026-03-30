import { Suspense, useState } from "react"
import NavBar from "./Components/Navbar/NavBar"
import PremiumDText from "./Components/PremiumDigitalTools/PremiumDText"
import ToggleButton from "./Components/PremiumDigitalTools/ToggleButton";
import Tools from "./Components/PremiumDigitalTools/Tools";
import Cart from "./Components/Cart/Cart";
import GetStarted from "./Components/HomePage/GetStarted";
import Banner from "./Components/HomePage/Banner";
import Counter from "./Components/HomePage/Counter";
import Pricing from "./Components/HomePage/Pricing";
import Workflow from "./Components/HomePage/Workflow";



const loadProductData = async()=>{

   const res = await fetch("/tools.json");

   return res.json();

}

const productPromise = loadProductData();




function App() 
{
  const [activeMode , setActiveMode] = useState("product");

  const [cart, setCart]= useState([]);

  // console.log(activeMode);

  // console.log(cart);

  return (
    <>
      <NavBar cartLength={cart.length} setActiveMode={setActiveMode}></NavBar>

      {/* Ekhane Banner Ashbe, Pore korbo */}
      {/* Ekhane Count er choto div ta ashbe. */}  




      {/* On Click Product or by default */}

      {
        activeMode==="product" && <Banner></Banner>
      }

      {
        activeMode==="product" && <Counter></Counter>
      }
    
     <PremiumDText></PremiumDText>
    

    

    
    <ToggleButton cart={cart} setActiveMode={setActiveMode}></ToggleButton>

    {
        
        activeMode==="product" &&

    <Suspense fallback={  <div className="flex items-center justify-center min-h-[10vh] text-purple-600"><span className="loading loading-spinner loading-xl"></span></div> }>
      <Tools cart={cart} setCart={setCart} productPromise={productPromise}></Tools>
    </Suspense>
    }

    {
      activeMode==="cart" && <Cart  cart={cart} setCart={setCart}></Cart>
    }


  
    {
      activeMode==="product" &&<GetStarted></GetStarted>
    }

    {
      activeMode==="product" &&<Pricing></Pricing>
    }
    
    {
      activeMode==="product" && <Workflow></Workflow>
    }
    
  
    
    
    

       

 

 
    </>
  )
}

export default App
