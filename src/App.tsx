import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bottom bg-none bg-no-repeat bg- lg:bg-dogFood mx-auto">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
