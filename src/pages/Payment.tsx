import { Link } from "react-router-dom"; 
import {Routes, Route, useNavigate} from 'react-router-dom'
import Connect2Phantom from "../components/Connect2Phantom"


export function Payment() {
  const navigate = useNavigate();

  const navigateToPayment = () => {
    //navigate to /Payment
    navigate('/Payment');
  };
  const navigateToCashPayment = () => {
    //navigate to /Payment
    navigate('/Payment');
  };
  const navigateBackCart = () => {
    //navigate back to shoppingcart 
    navigate('/Store');
  };

  return (
    <>
      <h1>Payment</h1>
      <div className="solanapaydiv">
        {/* <Link to="/store" className="solanabtn btn btn-primary">Pay By Solana</Link> */}
        <Connect2Phantom/>
      </div>
      <div className="cashpaydiv">
        <Link to="/cash" className="cashbtn btn btn-primary">Cash</Link>
      </div>
      <div className="backtoStorediv">
        <Link to="/store" className="storebtn btn btn-primary">Continue Ordering</Link>
      </div>
    </>
  )
}
