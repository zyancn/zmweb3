import React, { useEffect } from 'react';
import AirdropPanel from '../components/AirdropPanel';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/AirdropsPage.css';

const AirdropsPage = () => {
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = '空投战绩 - ZMWeb3';
  }, []);
  
  return (
    <div className="airdrops-page">
      <ScrollToTopOnMount />
      <div className="airdrops-hero">
        <div className="container">
          <h1>我的空投战绩</h1>
          <p>查看我参与过的所有空投项目及收益详情</p>
        </div>
      </div>
      
      <section className="airdrops-content">
        <div className="container">
          <div className="airdrops-description">
            <h2>空投收获记录</h2>
            <p>
              在Web3世界中，空投是项目方向社区用户免费发放代币的行为，通常作为早期参与者的奖励或推广手段。
              以下是我参与过的所有空投项目及其详细信息，包括获得的代币数量、当前价值和参与方式。
            </p>
          </div>
          
          <div className="full-airdrop-panel">
            <AirdropPanel />
          </div>
          
          <div className="airdrops-strategy">
            <h2>我的空投策略</h2>
            <div className="strategy-content">
              <div className="strategy-item">
                <h3>持续关注新项目</h3>
                <p>我会定期关注Twitter、Discord和加密货币新闻，了解最新的项目动态和潜在的空投机会。</p>
              </div>
              
              <div className="strategy-item">
                <h3>积极参与测试网</h3>
                <p>许多项目在主网上线前会发布测试网，参与测试网活动通常是获得空投的重要途径。</p>
              </div>
              
              <div className="strategy-item">
                <h3>多元化交互</h3>
                <p>我会与不同类型的DeFi协议、NFT项目和跨链桥进行交互，增加获得空投的机会。</p>
              </div>
              
              <div className="strategy-item">
                <h3>社区参与</h3>
                <p>积极参与项目的社区讨论、治理投票和提案，这些活动通常会被项目方记录并在空投时考虑。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirdropsPage;