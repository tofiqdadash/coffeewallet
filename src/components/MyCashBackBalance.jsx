import React,{useState , useEffect} from "react";
import creditcard from '../coffeephotos/creditcard.jpeg';
import QRCode from "qrcode";


const MyCashBackBalance = ({text}) => {

  const [src, setSrc] = useState("");


  useEffect(() => {
    QRCode.toDataURL(text).then(setSrc);
  }, [text]);
  return (
    <div className="mycashback">
      <nav className="userprofile-nav">
        <ul>
          <li>My dashboard</li>
          <li>FAQ</li>
          <li>Profile Info</li>
        </ul>
      </nav>

      <div className="cashback-container">
        <img src={creditcard} alt="credit card" />
        <div className="cashback-content">
          <div className="current-balance">
          <h4>Current balance</h4>
        <span>$ 730</span>
          </div>

          <div className="card-owner">
            <h4>Name</h4>
            <span>Bray Wyatt</span>
          </div>

        </div>
      </div>

      <img src={src} className="qrcode" alt="qr code" />
    </div>
  );
};

export default MyCashBackBalance;
