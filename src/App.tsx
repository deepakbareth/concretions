import Navbar from './components/Layout/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Layout/Footer'
function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App