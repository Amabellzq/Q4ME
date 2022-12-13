import { Link } from "react-router-dom"; 

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <img src="/imgs/homepage.jpg" alt=""/>
      <div className="orderbtndiv">
        <Link to="/store" className="btn btn-primary">Click to Order</Link>
        
        <Link to="" className="about btn btn-primary">About Us</Link>
      </div>
      {/* <div className="aboutchickenricebtndiv">
        <Link to="" className="btn btn-primary">About Us</Link>
      </div> */}
    </>
  )
}
