import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Pets from './pages/Pets'


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bottom bg-none bg-no-repeat bg- lg:bg-dogFood mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/animais" element={ <Pets /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
