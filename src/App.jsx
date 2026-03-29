import { Suspense, useState } from "react"
import NavBar from "./Components/Navbar/NavBar"
import PremiumDText from "./Components/PremiumDigitalTools/PremiumDText"
import ToggleButton from "./Components/PremiumDigitalTools/ToggleButton";
import Tools from "./Components/PremiumDigitalTools/Tools";


const loadProductData = async()=>{

   const res = await fetch("/tools.json");

   return res.json();

}

const productPromise = loadProductData();






function App() 
{
  // const [activeMode , setAciveMode] = useState("product");

  return (
    <>
      <NavBar></NavBar>

      {/* Ekhane Banner Ashbe, Pore korbo */}
      {/* Ekhane Count er choto div ta ashbe. */}  




      {/* On Click Product or by default */}

    <PremiumDText></PremiumDText>

    <ToggleButton></ToggleButton>


    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Tools productPromise={productPromise}></Tools>
    </Suspense>
    

       

 

 
    </>
  )
}

export default App
