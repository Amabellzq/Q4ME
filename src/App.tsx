import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Payment } from "./pages/Payment"
import { Cash } from "./pages/Cash"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Connect2Phantom from './components/Connect2Phantom';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cash" element={<Cash />} />
        </Routes>
        <div>
        <div>
      </div>
    </div>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App