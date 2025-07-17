import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ZMWeb3</h3>
            <p>优质项目推广链接平台，提供交易所、U卡等多种项目的推广链接</p>
          </div>
          
          <div className="footer-section">
            <h3>快速链接</h3>
            <ul>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/exchanges">交易所</Link></li>
              <li><Link to="/ucards">U卡推广</Link></li>
              <li><Link to="/about">关于我们</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>联系我们</h3>
            <p>邮箱: contact@zmweb3.com</p>
            <p>微信: ZMWeb3</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ZMWeb3. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;