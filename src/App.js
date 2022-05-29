import {Route, Routes} from "react-router-dom";
import Homepage from "./components/routes/Homepage";
import Dresses from "./components/routes/Dresses";
import Shirts from "./components/routes/Shirts";
import Shoes from "./components/routes/Shoes";
import Jackets from "./components/routes/Jackets";
import Pants from "./components/routes/Pants";

const App = ()=>{
  return (<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/dresses" element={<Dresses/>}/>
  <Route path="/shirts" element={<Shirts/>}/>
  <Route path="/shoes" element={<Shoes/>}/>
  <Route path="/jackets" element={<Jackets/>}/>
  <Route path="/pants" element={<Pants/>}/>
</Routes>);
}
export default App;
