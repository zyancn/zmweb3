import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/ArticlesListPage.css';

const ArticlesListPage = () => {
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = '文章列表 - ZMWeb3';
  }, []);
  
  // 文章列表数据
  const articles = [
    {
      id: '97932',
      title: '什么是区块链交易TXID？TXID怎么查询交易地址？',
      summary: '加密货币交易ID，也被称为交易哈希或TXID，是用于识别区块链上每一笔交易的唯一标识符。',
      date: '2024-04-24',
      source: 'Bella区块链致富日记',
      tags: ['区块链', 'TXID', '交易哈希']
    },
    // 可以添加更多文章
  ];
  
  return (
    <div className="articles-list-page">
      <ScrollToTopOnMount />
      <div className="articles-header">
        <div className="container">
          <h1>区块链文章</h1>
          <p>探索区块链技术的最新资讯和教程</p>
        </div>
      </div>
      
      <section className="articles-section">
        <div className="container">
          <div className="articles-grid">
            {articles.map(article => (
              <div className="article-card" key={article.id}>
                <div className="article-card-content">
                  <h2>
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                  </h2>
                  <p className="article-summary">{article.summary}</p>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <span className="article-source">{article.source}</span>
                  </div>
                  <div className="article-tags">
                    {article.tags.map(tag => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesListPage;