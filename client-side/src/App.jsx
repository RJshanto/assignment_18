import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Login from "./pages/login";
import Registrasion from "./pages/registrasion";


const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/create" element={<Registrasion/>}/>

    </Routes>
    
    
    </BrowserRouter>
  );
};

export default App;