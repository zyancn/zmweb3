import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ExchangesPage from './pages/ExchangesPage'
import UCardsPage from './pages/UCardsPage'
import CoursesPage from './pages/CoursesPage'
import AirdropsPage from './pages/AirdropsPage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticlesListPage from './pages/ArticlesListPage'
import NotFoundPage from './pages/NotFoundPage'
import useScrollToTop from './hooks/useScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/ucards" element={<UCardsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/airdrops" element={<AirdropsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

// ScrollToTop组件，使用自定义钩子
function ScrollToTop() {
  const location = useLocation();
  
  // 使用 useEffect 直接在这里处理，确保每次路由变化时滚动到顶部
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    console.log('ScrollToTop component triggered for:', location.pathname);
  }, [location]);
  
  // 同时也使用自定义钩子作为备份
  useScrollToTop();
  return null;
}

export default App
