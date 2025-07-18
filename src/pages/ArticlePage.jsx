import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = '什么是区块链交易TXID？TXID怎么查询交易地址？ - ZMWeb3';
  }, []);
  
  return (
    <div className="article-page">
      <ScrollToTopOnMount />
      <div className="article-header">
        <div className="container">
          <h1>什么是区块链交易TXID？TXID怎么查询交易地址？</h1>
          <div className="article-meta">
            <span className="article-source">来源：Bella区块链致富日记</span>
            <span className="article-time">时间：2024-04-24 16:23</span>
          </div>
        </div>
      </div>
      
      <section className="article-section">
        <div className="container">
          <div className="article-content">
            <div className="article-summary">
              <p>加密货币交易ID，也被称为交易哈希或TXID，是用于识别区块链上每一笔交易的唯一标识符。</p>
            </div>
            
            <h2>什么是交易ID</h2>
            <p>加密货币交易ID，也被称为交易哈希或TXID，是用于识别区块链上每一笔交易的唯一标识符。</p>
            <p>每当加密货币网络（无论是比特币、以太坊还是其他类型的加密货币）发生一笔交易时，该交易的详细信息，如发送方地址、接收方地址、发送金额、时间等相关信息，都会被记录并加密成一个唯一的字母数字字符串。这个字符串或哈希就是交易ID。</p>
            
            <p>交易 ID (TXID) 是区块链上每笔经过核实的交易都拥有的一个唯一字符串，由字母和数字组成。当您在区块链上发起交易时，该交易会立即获得一个交易 ID，从而可以在区块链上轻松追踪和识别该交易。您可以使用交易 ID 在区块链浏览器上查找该交易的发送金额、转移日期、发送和接收地址以及网络确认次数等信息。</p>
            
            <p>就像从在线商店订购商品时会获得一个订单确认码，其中包含有关包裹、到达日期和提货地点等信息，交易 ID 的运作原理也与此相似。交易 ID 是一个含 64 个字符的唯一字符串，由数字和字母组成，例如：</p>
            
            <div className="code-block">
              <code>0x13f94f2a1718a9b540e2283b189f7e989bf6739d780ba83e0c8ff5c8c81fa610</code>
            </div>
            
            <h2>如何在区块链浏览器中找到交易ID</h2>
            <p>以以太坊创始人V神推特公开的ETHENS 为例，在以太坊浏览器（https://etherscan.io/）中输入ENS"vitalik.eth"，即可查看此域名下的地址的所有交易ID。</p>
            
            <p>当您从中心化交易所提取加密货币时，您账户的交易历史记录部分会显示您的交易 ID。但是，如果是从钱包提款，则需要使用区块链浏览器来查找 TXID，步骤如下：</p>
            
            <ol className="steps-list">
              <li>打开区块链浏览器，例如 blockchain.com、etherscan.io、或 solscan.io。（使用哪个浏览器取决于您使用的区块链，例如以太坊、比特币、Solana。）</li>
              <li>将您的钱包连接到浏览器。</li>
              <li>转到已完成的交易部分，其中会显示所有 TXID。</li>
              <li>点击交易 ID 即可看到交易详情。</li>
            </ol>
            
            <h2>为什么需要交易 ID？</h2>
            <p>如果您将资金发送到了错误的地址或使用了错误的区块链，则需要交易 ID 才能开始资产找回流程（如有可能）。您还可以使用 TXID 来核实发件人是否已将加密货币款项发送到您的钱包地址。</p>
            
            <h2>著名的比特币交易ID示例</h2>
            <p>这是中本聪发送给哈尔·芬尼的第一笔比特币交易的TXID：</p>
            <div className="code-block">
              <code>F4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16</code>
            </div>
            
            <p>这是著名的比特币披萨交易的TXID：</p>
            <div className="code-block">
              <code>Cca7507897abc89628f450e8b1e0c6fca4ec3f7b34cccf55f3f531c659ff4d79</code>
            </div>
            
            <p>比特币使用SHA-256（安全哈希算法256位）加密哈希函数生成交易ID。该函数将交易数据作为输入，并输出一个256位的哈希值，表示为64个字符长的十六进制数。</p>
            
            <p>您可以通过将TXID复制到比特币区块浏览器（如blockchain.com或blockchair.com）中自行查找这些交易。交易ID可通过区块链浏览器访问，使所有相关交易详细信息公开可见。这种透明度意味着任何人都可以检查与特定交易或地址相关的所有信息。</p>
            
            <div className="article-tags">
              <span className="tag">区块链</span>
              <span className="tag">TXID</span>
              <span className="tag">交易哈希</span>
              <span className="tag">加密货币</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;