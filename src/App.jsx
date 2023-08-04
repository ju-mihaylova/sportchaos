import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products, About, Contact, Footer, Header } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Products/>} />
                <Route path="home" element={<Products />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
