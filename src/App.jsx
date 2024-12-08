import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Dentist } from "./Pages/Dentist";
import { Contact } from "./Pages/Contact";
import { Favs } from "./Pages/Favs";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { ThemeProvider } from './Store/Theme';


function App() {

  return (
    <>
    <ThemeProvider>
      <div className="min-h-screen bg-gray-300 dark:bg-gray-900 ">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/dentist/:id" element={ <Dentist /> }/>
            <Route path="/contact" element={ <Contact /> }/>
            <Route path="/favs" element={ <Favs /> }/>
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
