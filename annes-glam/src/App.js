import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import PaymentForm from './components/PaymentForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'; // Import Elements from @stripe/react-stripe-js
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe from @stripe/stripe-js
import CompleteOrder from './components/CompleteOrder';

// Replace with your actual Stripe public key
const stripePromise = loadStripe('pk_test_51Pqf9jP6pFU5eeDnmOtsAIwHBUmgx68GIqm1gt3EvrlcJu7XHoVULwuVPGCsEX79iCU2Kr2fh1HJZQky63F1I9Rm00J1nfbG7V');

function App() {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Routes>
        <Route path='/PaymentForm' element={<PaymentForm />} />
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/CompleteOrder" element={<CompleteOrder />} />
            <Route path='/:slug' element={<Detail />} />
          </Route>
        </Routes>
      </Elements>
    </BrowserRouter>
  );
}

export default App;

