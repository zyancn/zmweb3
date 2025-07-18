import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">ZMWeb3</NavLink>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>首页</NavLink></li>
            <li><NavLink to="/airdrops" className={({ isActive }) => isActive ? 'active' : ''}>空投战绩</NavLink></li>
            <li><NavLink to="/exchanges" className={({ isActive }) => isActive ? 'active' : ''}>交易所</NavLink></li>
            <li><NavLink to="/ucards" className={({ isActive }) => isActive ? 'active' : ''}>U卡推广</NavLink></li>
            <li><NavLink to="/courses" className={({ isActive }) => isActive ? 'active' : ''}>教程资料</NavLink></li>
            <li><NavLink to="/articles" className={({ isActive }) => isActive ? 'active' : ''}>文章</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>关于我们</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;