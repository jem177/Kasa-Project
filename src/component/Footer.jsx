import houseLogo from "../assets/images/houseLogo.svg";

export default function footer() {
  return <div className="footer-container">
    <h3 className="footer-logo">K<img src={houseLogo} alt="footer-logo" />sa</h3>
    
    <p className="footer-text">© 2020 Kasa. All rights reserved</p>
  </div>;
}
