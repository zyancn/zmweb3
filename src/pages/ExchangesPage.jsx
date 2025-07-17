import React from 'react';
import LinkCard from '../components/LinkCard';
import '../styles/ExchangesPage.css';

// 示例数据
const exchanges = [
  {
    id: 1,
    title: 'Binance 币安交易所',
    description: '全球领先的加密货币交易所，提供多种数字资产交易服务。币安提供了丰富的交易对和低廉的交易费用，是全球用户量最大的加密货币交易平台之一。',
    image: '/src/imges/biance.png',
    link: 'https://www.binance.com/zh-CN/register?ref=YOUR_REF_CODE',
    tags: ['交易所', '热门', '现货', '合约']
  },
  {
    id: 2,
    title: 'OKX 欧易交易所',
    description: '安全稳定的数字资产交易平台，支持多种加密货币交易。OKX提供现货、合约、杠杆等多种交易方式，界面友好，适合各类交易者使用。',
    image: '/src/imges/okx.png',
    link: 'https://www.okx.com/join/YOUR_REF_CODE',
    tags: ['交易所', '推荐', '现货', '合约']
  },
  {
    id: 3,
    title: 'Gate.io 芝麻开门',
    description: '老牌加密货币交易所，支持多种小众币种交易。Gate.io以上线小众优质币种而闻名，为用户提供多样化的投资选择。',
    image: '/src/assets/images/gate.svg',
    link: 'https://www.gate.io/signup/YOUR_REF_CODE',
    tags: ['交易所', '小众币']
  },
  {
    id: 4,
    title: 'Bybit 交易所',
    description: '专注于加密货币衍生品交易的平台，提供高达100倍杠杆的永续合约交易。Bybit以其稳定的交易引擎和用户友好的界面受到合约交易者的欢迎。',
    image: '/src/imges/bybit.svg',
    link: 'https://www.bybit.com/zh-CN/register?affiliate_id=YOUR_REF_CODE',
    tags: ['交易所', '合约', '杠杆']
  },
  {
    id: 5,
    title: 'Bitget 交易所',
    description: '创新型加密货币交易平台，提供现货、合约和社交交易功能。Bitget的社交交易功能允许用户跟随顶级交易者的策略进行交易。',
    image: '/src/assets/images/bitget.svg',
    link: 'https://www.bitget.com/zh-CN/register?inviteCode=YOUR_REF_CODE',
    tags: ['交易所', '社交交易']
  },
  {
    id: 6,
    title: 'HTX 火币交易所',
    description: '全球知名的数字资产交易平台，提供安全、可靠的区块链资产交易和投资服务。HTX拥有严格的安全标准和丰富的交易品种。',
    image: '/src/assets/images/htx.svg',
    link: 'https://www.htx.com/invite/YOUR_REF_CODE',
    tags: ['交易所', '安全']
  }
];

const ExchangesPage = () => {
  return (
    <div className="exchanges-page">
      <div className="page-header">
        <div className="container">
          <h1>交易所推广</h1>
          <p>我们精选了市场上最优质的加密货币交易所，为您提供高质量的推广链接</p>
        </div>
      </div>
      
      <section className="exchanges-section">
        <div className="container">
          <div className="exchanges-grid">
            {exchanges.map(exchange => (
              <LinkCard 
                key={exchange.id}
                title={exchange.title}
                description={exchange.description}
                image={exchange.image}
                link={exchange.link}
                tags={exchange.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="info-section">
        <div className="container">
          <h2>如何选择适合您的交易所？</h2>
          <div className="info-content">
            <p>选择合适的加密货币交易所对于您的投资体验至关重要。以下是一些选择交易所时应考虑的因素：</p>
            <ul>
              <li><strong>安全性</strong>：查看交易所的安全措施，如冷钱包存储、双因素认证等。</li>
              <li><strong>费用结构</strong>：了解交易所的手续费、提现费等费用结构。</li>
              <li><strong>支持的币种</strong>：确保交易所支持您想要交易的加密货币。</li>
              <li><strong>流动性</strong>：高流动性意味着更容易以公平价格买卖加密货币。</li>
              <li><strong>用户界面</strong>：选择界面友好、易于使用的交易所。</li>
              <li><strong>客户支持</strong>：良好的客户支持对解决问题至关重要。</li>
            </ul>
            <p>通过我们提供的推广链接注册交易所，您可以获得额外的注册奖励和交易返佣。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExchangesPage;