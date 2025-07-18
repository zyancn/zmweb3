import React, { useState, useEffect } from 'react';
import '../styles/AlphaPanel.css';

const AlphaPanel = () => {
  const [selectedToken, setSelectedToken] = useState('MERL');
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  // 代币配置信息
  const TOKENS = {
    MERL: { 
      name: "MERL",
      perUserAmount: 1000,
      totalSupply: 31364000,
      claimedUsers: 25091,
      endTime: "2025-05-28T20:00:00+08:00"
    },
    XTER: { 
      name: "XTER",
      perUserAmount: 294,
      totalSupply: 9967000,
      claimedUsers: 27132,
      endTime: "2025-06-15T20:00:00+08:00"
    },
    TGT: { 
      name: "TGT",
      perUserAmount: 500,
      totalSupply: 9963000,
      claimedUsers: 15946,
      endTime: "2025-06-30T20:00:00+08:00"
    },
    SOON: { 
      name: "SOON",
      perUserAmount: 180,
      totalSupply: 14964000,
      claimedUsers: 66467,
      endTime: "2025-07-15T20:00:00+08:00"
    },
  };

  // 模拟获取价格数据
  const fetchTokenPrice = async (token) => {
    // 实际项目中应该调用API获取价格
    // 这里使用模拟数据
    const mockPrices = {
      MERL: 0.0325,
      XTER: 0.1142,
      TGT: 0.0678,
      SOON: 0.0893
    };
    
    return mockPrices[token];
  };

  // 计算剩余时间
  const calculateTimeLeft = (endTime) => {
    const difference = new Date(endTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // 更新代币数据
  const updateTokenData = async () => {
    setLoading(true);
    try {
      const token = TOKENS[selectedToken];
      const price = await fetchTokenPrice(selectedToken);
      
      const totalTokens = token.totalSupply;
      const claimedTokens = token.perUserAmount * token.claimedUsers;
      const unclaimedTokens = totalTokens - claimedTokens;
      
      const claimedValue = claimedTokens * price;
      const unclaimedValue = unclaimedTokens * price;
      const remainingPerUser = (unclaimedTokens / token.claimedUsers) * 0.7;
      
      setTokenData({
        name: token.name,
        price: price,
        totalTokens,
        claimedTokens,
        unclaimedTokens,
        claimedValue,
        unclaimedValue,
        claimedUsers: token.claimedUsers,
        perUserAmount: token.perUserAmount,
        remainingPerUser,
        claimedPercentage: (claimedTokens / totalTokens) * 100
      });
      
      setTimeLeft(calculateTimeLeft(token.endTime));
    } catch (error) {
      console.error('Error updating token data:', error);
    } finally {
      setLoading(false);
    }
  };

  // 初始加载和代币切换时更新数据
  useEffect(() => {
    updateTokenData();
    
    // 设置定时器每秒更新倒计时
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TOKENS[selectedToken].endTime));
    }, 1000);
    
    return () => clearInterval(timer);
  }, [selectedToken]);

  // 格式化数字显示
  const formatNumber = (num) => {
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  // 格式化价格显示
  const formatPrice = (price) => {
    return price.toFixed(6);
  };

  // 格式化美元价值
  const formatUSD = (value) => {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="alpha-panel">
      <div className="alpha-header">
        <h2>币安 Alpha 空投数据</h2>
        <div className="token-selector">
          <select 
            value={selectedToken} 
            onChange={(e) => setSelectedToken(e.target.value)}
          >
            {Object.keys(TOKENS).map(token => (
              <option key={token} value={token}>{TOKENS[token].name}</option>
            ))}
          </select>
          <button onClick={updateTokenData} disabled={loading}>
            {loading ? '加载中...' : '🔄 刷新数据'}
          </button>
        </div>
      </div>
      
      {tokenData && (
        <div className="alpha-content">
          <div className="token-info">
            <div className="info-item">
              <span className="label">当前价格:</span>
              <span className="value">${formatPrice(tokenData.price)}</span>
            </div>
            <div className="info-item">
              <span className="label">每用户数量:</span>
              <span className="value">{formatNumber(tokenData.perUserAmount)}</span>
            </div>
            <div className="info-item">
              <span className="label">总供应量:</span>
              <span className="value">{formatNumber(tokenData.totalTokens)}</span>
            </div>
          </div>
          
          <div className="progress-section">
            <div className="progress-info">
              <div>
                <span className="label">已领取:</span>
                <span className="value">{formatNumber(tokenData.claimedTokens)} ({tokenData.claimedPercentage.toFixed(2)}%)</span>
              </div>
              <div>
                <span className="label">未领取:</span>
                <span className="value">{formatNumber(tokenData.unclaimedTokens)}</span>
              </div>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${tokenData.claimedPercentage}%` }}
              ></div>
            </div>
          </div>
          
          <div className="value-section">
            <div className="info-item">
              <span className="label">已领取价值:</span>
              <span className="value">${formatUSD(tokenData.claimedValue)}</span>
            </div>
            <div className="info-item">
              <span className="label">未领取价值:</span>
              <span className="value">${formatUSD(tokenData.unclaimedValue)}</span>
            </div>
            <div className="info-item highlight">
              <span className="label">剩余可分配:</span>
              <span className="value">{formatNumber(tokenData.remainingPerUser)} 枚/人</span>
            </div>
          </div>
          
          <div className="countdown-section">
            <h3>领取截止时间</h3>
            <div className="countdown">
              {Object.keys(timeLeft).length ? (
                <>
                  <div className="countdown-item">
                    <span className="count">{timeLeft.days}</span>
                    <span className="unit">天</span>
                  </div>
                  <div className="countdown-item">
                    <span className="count">{timeLeft.hours}</span>
                    <span className="unit">时</span>
                  </div>
                  <div className="countdown-item">
                    <span className="count">{timeLeft.minutes}</span>
                    <span className="unit">分</span>
                  </div>
                  <div className="countdown-item">
                    <span className="count">{timeLeft.seconds}</span>
                    <span className="unit">秒</span>
                  </div>
                </>
              ) : (
                <span>已结束</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphaPanel;