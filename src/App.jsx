import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products, About, Contact, Footer, Header, PrivacyPolicy, TermsAndConditions } from './components';
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
                <Route path="policy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsAndConditions />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;
