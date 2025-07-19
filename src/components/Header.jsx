import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  // 阻止事件冒泡，确保导航链接可点击
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">ZMWeb3</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/" onClick={handleLinkClick}>首页</Link></li>
            <li><Link to="/airdrops" onClick={handleLinkClick}>空投战绩</Link></li>
            <li><Link to="/exchanges" onClick={handleLinkClick}>交易所</Link></li>
            <li><Link to="/ucards" onClick={handleLinkClick}>U卡推荐</Link></li>
            <li><Link to="/courses" onClick={handleLinkClick}>教程资料</Link></li>
            <li><Link to="/lifetime-service" onClick={handleLinkClick}>终身技术服务</Link></li>
            <li><Link to="/articles" onClick={handleLinkClick}>文章</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>关于我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;