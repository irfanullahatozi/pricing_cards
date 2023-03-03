import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h5 className="badge">Pricing Plans</h5>
        <h1 className="heading">Choose Your Best Pricing Plan</h1>
        <div className="card_group">
          <div className="pricing-card">
            <i className="fab fa-telegram-plane"></i>
            <span>Basic</span>
            <h4 className="price">$4.99</h4>
            <ul className="package_list">
              <li>Unlimited Website</li>
              <li>Unlimited Storage</li>
              <li>Free SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <a href="#" className="get_started_btn">
              Get Started
            </a>
          </div>
          <div className="pricing-card">
            <i className="fas fa-plane"></i>
            <span>Intermediate</span>
            <h4 className="price">$12.99</h4>
            <ul className="package_list">
              <li>Unlimited Website</li>
              <li>Unlimited Storage</li>
              <li>Free SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <a href="#" className="get_started_btn">
              Get Started
            </a>
          </div>
          <div className="pricing-card">
            <i className="fas fa-rocket"></i>
            <span>Advanced</span>
            <h4 className="price">$19.99</h4>
            <ul className="package_list">
              <li>Unlimited Website</li>
              <li>Unlimited Storage</li>
              <li>Free SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <a href="#" className="get_started_btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
