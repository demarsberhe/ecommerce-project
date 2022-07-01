import {Route, Routes} from "react-router-dom";
import Homepage from "./components/routes/Homepage";
import Dresses from "./components/routes/Dresses";
import Shirts from "./components/routes/Shirts";
import Shoes from "./components/routes/Shoes";
import Jackets from "./components/routes/Jackets";
import Pants from "./components/routes/Pants";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Authentication from "./components/routes/authentication/Authentication";
import About from "./components/routes/About";
import Brands from "./components/routes/Brands";

const App = ()=>{
  return (<>
  <Header/>
  <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/dresses" element={<Dresses/>}/>
  <Route path="/shirts" element={<Shirts/>}/>
  <Route path="/shoes" element={<Shoes/>}/>
  <Route path="/jackets" element={<Jackets/>}/>
  <Route path="/pants" element={<Pants/>}/>
  <Route path="/auth" element={<Authentication/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/brands" element={<Brands/>}/>
</Routes>
<Footer/>
</>);
}
export default App;
