import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Dentist } from "./Pages/Dentist";
// import Detail from "./Pages/Detail";
// import Favs from "./Pages/Favs";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/dentist:id" element={ <Dentist /> }/>
        {/* <Route path="/favs" element={ <Favs /> }/> */}
        {/* <Route path="/detail" element={ <Detail /> }/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
