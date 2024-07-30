import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppProvider, AppContext } from './AppContext';
import ProductContainer from './components/ProductContainer';
import AddProduct from './components/AddProduct';
import PaymentPage from './components/PaymentPage';
import './App.css';
import Logo from '../src/assets/logo.jpg';

const App = () => {
  const { cart, isPaymentView, setIsPaymentView } = React.useContext(AppContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  React.useEffect(() => {
    if (isPaymentView) {
      navigate('/payment');
    } else {
      navigate('/');
    }
  }, [isPaymentView, navigate]);

  return (
    <div className='w-screen h-screen'>
      <nav className='w-full h-1/10 bg-[#03011a] flex justify-center items-center text-white fixed'>
        <ul className='w-4/5 flex justify-between items-center'>
          <li><img src={Logo} alt="Logo" className='w-24'/></li>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className='pt-20 w-full h-auto flex flex-wrap justify-evenly'>
        <div className='w-1/2 h-auto'>
          <div className='w-full rounded-lg h-16 bg-[#fca311] flex justify-center items-center'>
            <h1>{isPaymentView ? 'Payment Page' : 'Product Lists'}</h1>
          </div>
          <div className='p-8 w-full h-[500px] flex flex-wrap justify-center items-center backdrop-blur-lg overflow-auto gap-10'>
            <Routes>
              <Route path='/' element={<ProductContainer />} />
              <Route path='/payment' element={<PaymentPage />} />
            </Routes>
          </div>
        </div>
        <div className='w-1/3 h-auto flex flex-col justify-between items-center'>
          <div className='w-full h-16 bg-[#778da9] flex justify-center items-center rounded-lg'>
            <h1>Shoe Store</h1>
          </div>
          <div className='h-96 w-full flex flex-col gap-2.5 overflow-y-auto'>
            {cart.length > 0 ? cart.map((item, index) => (
              <AddProduct key={index} item={item} />
            )) : null}
          </div>
          <div className='w-11/12 h-20 text-xl rounded-2xl bg-[#f2bbf7] flex justify-center items-center'>
            <p>Total: ₹<span>{total.toFixed(2)}</span></p>
          </div>
          {cart.length > 0 && (
            <button
              className='border-none text-xl p-2.5 rounded-lg text-[#dcf6fe] bg-gradient-to-br from-green-500 to-green-900 shadow-lg hover:scale-110 transition-transform mt-4'
              onClick={() => setIsPaymentView(!isPaymentView)}
            >
              {isPaymentView ? 'Back to Browse' : 'Proceed to Payment'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default () => (
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
);
