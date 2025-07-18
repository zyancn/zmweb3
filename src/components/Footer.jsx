import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // 阻止事件冒泡，确保导航链接可点击
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>ZMWeb3</h3>
            <p>优质项目推荐平台，提供交易所、U卡等多种项目的推荐</p>
          </div>
          
          <div className="footer-section">
            <h3>快速链接</h3>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>首页</Link></li>
              <li><Link to="/exchanges" onClick={handleLinkClick}>交易所</Link></li>
              <li><Link to="/ucards" onClick={handleLinkClick}>U卡推荐</Link></li>
              <li><Link to="/articles" onClick={handleLinkClick}>文章</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>关于我们</Link></li>
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