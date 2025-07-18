import React, { useState, useEffect } from 'react';
import '../styles/AirdropPanel.css';
import { Link } from 'react-router-dom';

// 导入代币图标
import opIcon from '../assets/op-token.svg';
import galIcon from '../assets/gal-token.svg';
import hftIcon from '../assets/hft-token.svg';
import aptIcon from '../assets/apt-token.svg';
import cowIcon from '../assets/cow-token.svg';
import nationIcon from '../assets/nation-token.svg';
import cantoIcon from '../assets/canto-token.svg';
import evmosIcon from '../assets/evmos-token.svg';
import rss3Icon from '../assets/rss3-token.svg';
import hopIcon from '../assets/hop-token.svg';
import veloIcon from '../assets/velo-token.svg';
import axlIcon from '../assets/axl-token.svg';
import rbnIcon from '../assets/rbn-token.svg';
import acxIcon from '../assets/acx-token.svg';

const AirdropPanel = ({ featuredOnly = false, featuredTokens = [] }) => {
  const [selectedToken, setSelectedToken] = useState('OP');
  const [showAllTokens, setShowAllTokens] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [displayTokens, setDisplayTokens] = useState([]);
  
  // 当featuredTokens属性变化时更新显示的代币
  useEffect(() => {
    if (featuredOnly && featuredTokens.length > 0) {
      setDisplayTokens(featuredTokens);
      setSelectedToken(featuredTokens[0]);
    } else {
      setDisplayTokens(Object.keys(AIRDROPS));
    }
  }, [featuredOnly, featuredTokens]);

  // 空投数据
  const AIRDROPS = {
    OP: { 
      name: "Optimism",
      symbol: "OP",
      icon: opIcon,
      amount: "17000",
      price: 3.25,
      color: "#FF0420",
      description: "因为本身就特别看好L2会出大毛，所以交互的比较多，单账号17000 OP，也是本年度个人拿到的最大的空投，希望能再接再厉"
    },
    GAL: { 
      name: "Project Galaxy",
      symbol: "GAL",
      icon: galIcon,
      amount: "350",
      price: 1.85,
      color: "#6A00EA",
      description: "最开始看好的任务平台其实是兔子洞，但是自从Galaxy上线之后，其产品体验的丝滑以及发掘新的优质项目的特质也是让我直接爱了，所以只要有大型活动基本都会参与，最后上线时的空投也算是大毛了，单账号350 GAL"
    },
    HFT: { 
      name: "Hashflow",
      symbol: "HFT",
      icon: hftIcon,
      amount: "3000",
      price: 0.45,
      color: "#0052FF",
      description: "HFT也是从去年一直跟到上线的项目，拿到NFT之后其实是有挺不错的价钱可以出手的，但是因为银河女孩有一部分卖飞的前车之鉴，所以HFT的NFT是一直拿着到快照结束的，最终单账号3000 HFT"
    },
    APT: { 
      name: "Aptos",
      symbol: "APT",
      icon: aptIcon,
      amount: "150",
      price: 8.20,
      color: "#2DD8A7",
      description: "APT是比较看好会给空投的项目，但是没想到会给的如此随意，注册官方账号并Mint官方测试网NFT即可拿到空投，最终单账号150 APT"
    },
    COW: { 
      name: "CoW Protocol",
      symbol: "COW",
      icon: cowIcon,
      amount: "1000",
      price: 0.12,
      color: "#DE5D00",
      description: "很多KOL都不看好COW能成为大毛，但是我自己还是比较看好Gnosis的产品的，从收购XDAI链到COW、Gnosis Auction以及Gnosis Safe这些产品的布局其实可以看到Gnosis是有想打造自己的生态的，并且也是不缺钱的，虽然到目前为止COW已经斩到脚踝了，但是当时空投的时候还是值一些钱的，个人拿到的不算多，单账号1000 COW"
    },
    NATION: { 
      name: "Nation3",
      symbol: "NATION",
      icon: nationIcon,
      amount: "1",
      price: 1200.00,
      color: "#F0B90B",
      description: "这也是个随意的主，直接推特留地址就给空投，而且一给就是上千美元，单账号1 NATION"
    },
    CANTO: { 
      name: "Canto",
      symbol: "CANTO",
      icon: cantoIcon,
      amount: "2000",
      price: 0.35,
      color: "#06FC99",
      description: "CANTO当时注册测试网就给低保2000 CANTO，个人也是每个账号只拿到低保"
    },
    EVMOS: { 
      name: "Evmos",
      symbol: "EVMOS",
      icon: evmosIcon,
      amount: "500",
      price: 0.18,
      color: "#ED4E33",
      description: "EVMOS算是Cosmos上比较给力的空投了，不止给Cosmos生态用户，还给ETH生态用户，覆盖面之广算是少见了，最终单账号500 EVMOS"
    },
    RSS3: { 
      name: "RSS3",
      symbol: "RSS3",
      icon: rss3Icon,
      amount: "3000",
      price: 0.08,
      color: "#FF5505",
      description: "RSS3算是当时不错的SocialFi项目，还有CB的光环，因为当时还是比较看好该赛道的，所以Mint的RSS3的NFT，最终单账号拿到 3000 RSS3"
    },
    HOP: { 
      name: "Hop Protocol",
      symbol: "HOP",
      icon: hopIcon,
      amount: "1000",
      price: 0.05,
      color: "#E9167C",
      description: "很多人都是HOP是史上最烂的项目，而且跨链无大毛也是从HOP空投开始传开，个人倒是没有多讨厌HOP这个项目，毕竟我没有任何账号被女巫，而且确实也收到HOP空投了，单账号1000 HOP"
    },
    VELO: { 
      name: "Velodrome",
      symbol: "VELO",
      icon: veloIcon,
      amount: "500",
      price: 0.20,
      color: "#00EBAB",
      description: "OP之后没几天就收到VELO空投，单账号好像是可以卖100 美元？"
    },
    AXL: { 
      name: "Axelar",
      symbol: "AXL",
      icon: axlIcon,
      amount: "200",
      price: 0.60,
      color: "#0D1126",
      description: "AXL测试网和主网交互都做过，但是体验确实一般，最终单账号200 AXL"
    },
    RBN: { 
      name: "Ribbon Finance",
      symbol: "RBN",
      icon: rbnIcon,
      amount: "300",
      price: 0.30,
      color: "#00DBDF",
      description: "Ribbon借贷产品出来之后使用过，也算是体验了产品的Beta功能，最终也收到了RBN空投，卖出好像不到100美元"
    },
    ACX: { 
      name: "Across Protocol",
      symbol: "ACX",
      icon: acxIcon,
      amount: "6000",
      price: 0.03,
      color: "#3B82F6",
      description: "跨链无大毛在ACX上体现的淋漓尽致，刷过ACX的交易挖矿的应该都被反撸了，倒不是说亏损多少，其实最终能卖出的价格和交易挖矿成本差不多，只是浪费了时间和精力，那些直接进DC拿role的倒是舒服了，最终单账号3000+3000 ACX"
    },
  };

  // 空投获取技巧
  const airdropTips = [
    '关注潜在空投项目的官方社交媒体和公告',
    '参与测试网活动和社区贡献',
    '使用多个钱包分散风险，但避免女巫攻击',
    '定期与DeFi协议和新兴项目交互',
    '参与治理投票和提案讨论',
    '持有项目的NFT可能带来额外空投',
    '关注跨链桥和Layer 2解决方案',
    '参与任务平台如Galxe的活动',
    '保持钱包活跃，定期进行小额交易',
    '加入项目的Discord社区并获取角色'
  ];

  // 计算总价值
  const calculateTotalValue = () => {
    return Object.values(AIRDROPS).reduce((total, token) => {
      return total + (parseFloat(token.amount) * token.price);
    }, 0);
  };

  // 格式化数字
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // 格式化价格
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className={`airdrop-panel ${featuredOnly ? 'featured-mode' : ''}`}>
      <div className="airdrop-panel-header">
        <h3>{featuredOnly ? '精选空投战绩' : '我的空投收获记录'}</h3>
        <div className="token-selector">
          {displayTokens.slice(0, featuredOnly ? displayTokens.length : 5).map(symbol => (
            <div 
              key={symbol}
              className={`token-option ${selectedToken === symbol ? 'active' : ''}`}
              style={{
                borderColor: selectedToken === symbol ? AIRDROPS[symbol].color : 'transparent',
                boxShadow: selectedToken === symbol ? `0 0 10px ${AIRDROPS[symbol].color}40` : 'none'
              }}
              onClick={() => setSelectedToken(symbol)}
            >
              <img src={AIRDROPS[symbol].icon} alt={symbol} />
              <span>{symbol}</span>
            </div>
          ))}
          {!featuredOnly && (
            <div 
              className="token-option more"
              onClick={() => setShowAllTokens(!showAllTokens)}
            >
              <span>{showAllTokens ? '收起' : '更多'}</span>
            </div>
          )}
        </div>
      </div>

      {showAllTokens && !featuredOnly && (
        <div className="all-tokens-grid">
          {Object.keys(AIRDROPS).slice(5).map(symbol => (
            <div 
              key={symbol}
              className={`mini-token-card ${selectedToken === symbol ? 'active' : ''}`}
              onClick={() => {
                setSelectedToken(symbol);
                setShowAllTokens(false);
              }}
            >
              <img src={AIRDROPS[symbol].icon} alt={symbol} />
              <div className="mini-token-info">
                <span className="symbol">{symbol}</span>
                <span className="amount">{AIRDROPS[symbol].amount}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="token-card" style={{ borderColor: AIRDROPS[selectedToken].color }}>
        <div className="token-icon" style={{ backgroundColor: AIRDROPS[selectedToken].color }}>
          <img src={AIRDROPS[selectedToken].icon} alt={AIRDROPS[selectedToken].symbol} />
        </div>
        <div className="token-details">
          <h4>{AIRDROPS[selectedToken].name} ({AIRDROPS[selectedToken].symbol})</h4>
          <div className="token-amount">
            <span className="amount-value">{AIRDROPS[selectedToken].amount}</span>
            <span className="token-symbol">{AIRDROPS[selectedToken].symbol}</span>
          </div>
          <div className="token-price">
            <span className="price-label">当前价格:</span>
            <span className="price-value">{formatPrice(AIRDROPS[selectedToken].price)}</span>
          </div>
          <div className="token-value">
            <span className="value-label">总价值:</span>
            <span className="value-amount">
              {formatPrice(parseFloat(AIRDROPS[selectedToken].amount) * AIRDROPS[selectedToken].price)}
            </span>
          </div>
          <p className="token-description">{AIRDROPS[selectedToken].description}</p>
        </div>
      </div>

      <div className="airdrop-summary">
        <div className="summary-item">
          <span className="summary-label">单账号空投总数量:</span>
          <span className="summary-value">{Object.keys(AIRDROPS).length} 种代币</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">单账号估计总价值:</span>
          <span className="summary-value highlight">{formatPrice(calculateTotalValue())}</span>
        </div>
      </div>

      <div className="airdrop-tips-toggle" onClick={() => setShowTips(!showTips)}>
        <h4>{showTips ? '收起空投获取技巧' : '查看空投获取技巧'}</h4>
        <span className={`toggle-icon ${showTips ? 'open' : ''}`}>▼</span>
      </div>

      {showTips && (
        <div className="airdrop-tips">
          <ul>
            {airdropTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AirdropPanel;