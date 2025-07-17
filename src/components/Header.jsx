import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">ZMWeb3</Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/exchanges">交易所</Link></li>
            <li><Link to="/ucards">U卡推广</Link></li>
            <li><Link to="/courses">教程资料</Link></li>
            <li><Link to="/about">关于我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;