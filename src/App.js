import "./App.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Tour } from "./components/ourTour/Tour";
import { Booking } from "./components/booking/Booking";
import { Home } from "./components/Home";
import { Footer } from "./components/footer/Footer";
import { ViewContent } from "./components/crud/ViewContent";
import { Create } from "./components/crud/Create";
import { Update } from "./components/crud/Update";
import { Login } from "./components/login/Login";
import { AdminTour } from "./components/ourTour/AdminTour";
import { Faq } from "./components/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="tour" element={<Tour />} />
          <Route path="admin" element={<AdminTour />} />
          <Route path="booking" element={<Booking />} />
          <Route path="faq" element={<Faq/>} />
          <Route path="view/:id" element={<ViewContent />} />
          <Route path="edit/:id" element={<Update />} />
          <Route path="Create" element={<Create/>} />
          <Route path="Login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
