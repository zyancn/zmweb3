import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  
  // 文章数据
  const articles = {
    '97933': {
      title: '第〇章：必修課！進入新世界前的心態與安全鐵律',
      source: 'ZMWeb3原创',
      date: '2024-05-01',
      time: '10:00',
      summary: '在進入Web3世界前，你必須了解的安全鐵律和心態建設，避免因無知和疏忽而血本無歸。',
      tags: ['Web3', '安全', '心態建設', '必修課'],
      content: (
        <>
          <p>朋友，歡迎你。</p>
          
          <p>我知道，你此刻心中充滿了激動、好奇，或許還有一絲對錯過時代列車的焦慮（FOMO）。你聽說了比特幣、以太坊、NFT，聽說了 Web3 將如何顛覆未來，你渴望推開這扇門，親眼看看裡面的世界。</p>
          
          <p>請先停下你準備註冊、入金的手。</p>
          
          <p>在按下「開始」鍵之前，我們必須先完成這堂<strong>最重要的必修課</strong>。因為你即將踏入的，不僅是一個充滿機遇的新大陸，更是一片遵循「黑暗森林法則」的未知領域。在這裡，最大的風險往往不是市場的漲跌，而是那些潛伏在暗處、稍有不慎便會讓你血本無歸的陷阱。</p>
          
          <p>本章不教你如何賺錢，只教你<strong>如何不虧錢</strong>——不是因為投資失利，而是因為無知和疏忽。請將接下來的每一個字都牢記在心，這將是你進入 Web3 世界最堅固的安全帶。</p>
          
          <hr />
          
          <h2>第一部分：心態建設 —— 這不是一夜暴富的賭場</h2>
          
          <p>在學習任何技巧之前，心態是決定你能走多遠的根本。請拋棄所有不切實際的幻想，建立以下三個核心認知：</p>
          
          <h3>1. 接受雲霄飛車般的波動</h3>
          
          <p>加密貨幣市場的波動性，是傳統金融市場的數倍甚至數十倍。一天之內上漲 50%，或是一覺醒來資產縮水 70%，都是可能發生的常態。如果你無法接受這種劇烈的波動，或是期待一條只漲不跌的直線，那麼這個市場不適合你。</p>
          
          <blockquote>
            <p><strong>核心原則：</strong> 永遠只投資你能承受<strong>完全虧損</strong>的金額。這筆錢，應該是即使明天歸零，你的日常生活、家庭開銷、未來規劃也絲毫不受影響的閒錢。<strong>不要借貸、不要押上身家、不要動用生活費！</strong></p>
          </blockquote>
          
          <h3>2. 奉行「DYOR」的黃金法則</h3>
          
          <p>在 Web3 的世界裡，你會聽到一個被無數次重複的詞：<strong>DYOR (Do Your Own Research)</strong>，即「做你自己的研究」。</p>
          
          <p>這意味著，任何人的建議都只能作為參考，包括你朋友的、社群裡"大神"的、甚至是某個你非常崇拜的KOL。真正的決策，必須基於你自己的研究和判斷。你需要學會閱讀專案的白皮書，了解它的基本運作原理，查看它的社群活躍度，而不是盲目地跟風投資。</p>
          
          <blockquote>
            <p><strong>核心原則：</strong> 學會對自己的錢包負責。每一次點擊「確認」之前，問問自己：「我真的了解我正在投資的是什麼嗎？」</p>
          </blockquote>
          
          <h3>3. 這是一場馬拉松，不是百米衝刺</h3>
          
          <p>Web3 技術和生態系統仍處於極度早期的階段，充滿了不確定性。想要在這裡生存並有所收穫，需要的是持續的學習能力和長期的耐心，而不是尋求短線暴利的賭徒心態。把眼光放長遠，專注於學習，你會發現比金錢更有價值的收穫。</p>
          
          <hr />
          
          <h2>第二部分：安全鐵律 —— Web3世界的黑暗森林法則</h2>
          
          <p>如果說心態決定了你的上限，那麼安全守則就決定了你的底線。以下鐵律，請像呼吸一樣自然地去遵守，它們將保護你的資產免於絕大多數的威脅。</p>
          
          <h3>鐵律一：私鑰與助記詞，你的絕對主權</h3>
          
          <p>你很快就會創建自己的「鏈上錢包」，並得到一組由12或24個單詞組成的「助記詞」（Seed Phrase），它能生成你所有的「私鑰」（Private Key）。</p>
          
          <p>請記住這句血的教訓：<strong>助記詞，就是你的身家性命。</strong></p>
          
          <ul>
            <li><strong>私鑰/助記詞是什麼？</strong> 它是你對錢包內所有資產的<strong>唯一、絕對的所有權證明</strong>。它就像是你數位保險箱的萬能鑰匙和最高權限密碼。</li>
            <li><strong>誰掌握了助記詞，誰就掌握了你的所有資產。</strong> 不需要你的同意，不需要任何驗證，他可以隨時轉走你的一切。</li>
          </ul>
          
          <blockquote>
            <p><strong>【操作天條】</strong></p>
            <ul>
              <li><strong>✓ 必須做：</strong>
                <ul>
                  <li><strong>物理備份：</strong> 用筆<strong>手抄</strong>在紙上、金屬板上。</li>
                  <li><strong>多份備份：</strong> 至少抄寫2-3份。</li>
                  <li><strong>離線保存：</strong> 將備份存放在不同、絕對安全的物理地點（例如，家裡的保險箱、銀行的保險櫃）。</li>
                </ul>
              </li>
              <li><strong>✗ 絕對禁止：</strong>
                <ul>
                  <li><strong>禁止截圖</strong>或拍照。</li>
                  <li><strong>禁止複製貼上</strong>或保存在任何電腦文件、備忘錄中。</li>
                  <li><strong>禁止上傳</strong>到任何雲端硬碟、Email、通訊軟體。</li>
                  <li><strong>禁止告訴任何人！</strong> 任何以"客服"、"專案方"、"警察"等名義向你索要助記詞或私鑰的人，<strong>100% 是騙子！</strong></li>
                </ul>
              </li>
            </ul>
          </blockquote>
          
          <h3>鐵律二：零信任原則 —— 不信任，去驗證</h3>
          
          <p>在 Web3 的匿名世界裡，你必須像一名身經百戰的特工，對所有資訊保持懷疑，直到你親自驗證其真偽。</p>
          
          <ul>
            <li><strong>陌生私訊 = 詐騙：</strong> 任何在 Discord、Telegram、Twitter 上主動私訊你，告訴你有「空投」、「內線消息」、「高收益挖礦」機會的人，<strong>一律視為詐騙，直接封鎖。</strong></li>
            <li><strong>釣魚連結無處不在：</strong> 騙子會製作與官方網站一模一樣的假網站，通過社群、Email、甚至Google廣告誘騙你點擊。
              <blockquote>
                <p><strong>操作習慣：</strong> 永遠不要點擊來源不明的連結。養成<strong>手動輸入官方網址</strong>或從已驗證的書籤訪問的習慣。在授權任何操作前，<strong>反覆核對瀏覽器地址欄的網址</strong>是否正確。</p>
              </blockquote>
            </li>
            <li><strong>假冒的永遠比真的更主動：</strong> 當你遇到問題時，官方客服絕對不會主動私訊你，更不會向你索要助記詞或要求你點擊連結、下載軟體。</li>
          </ul>
          
          <h3>鐵律三：小額測試 —— 你的安全網</h3>
          
          <p>在進行任何轉帳，特別是向一個新地址轉帳時，<strong>永遠先用一筆極小的金額（例如 1 美元）進行測試。</strong></p>
          
          <blockquote>
            <p><strong>操作流程：</strong></p>
            <ol>
              <li>複製對方地址，或你的新錢包地址。</li>
              <li>發起一筆極小額的轉帳。</li>
              <li>耐心等待，直到在區塊鏈瀏覽器上或接收方錢包確認<strong>到帳無誤</strong>。</li>
              <li>確認地址正確、網路無誤、流程通暢後，再進行大額的轉帳。</li>
            </ol>
          </blockquote>
          
          <p>這個簡單的習慣，可以避免因地址複製錯誤、選擇了錯誤的轉帳網路等低級但致命的失誤而導致的永久資產損失。</p>
          
          <hr />
          
          <h2>結語：帶著敬畏之心前行</h2>
          
          <p>朋友，我知道以上內容聽起來有些嚇人，甚至可能澆熄了你一部分的熱情。但請相信我，這份「恐懼」是健康的，它源於對未知風險的<strong>敬畏</strong>。</p>
          
          <p>只有當你將這些心態和鐵律內化為本能，你才能真正安全地開始你的探索之旅。Web3 的世界宏大而迷人，它所倡導的用戶主權、去中心化理念，值得我們每一個人去學習和體驗。</p>
          
          <p>現在，你已經拿到了進入新世界最重要的地圖和護身符。</p>
          
          <p>歡迎來到 Web3。請繫好您的安全帶，我們的旅程，下一章正式開始。</p>
        </>
      )
    },
    '97932': {
      title: '什么是区块链交易TXID？TXID怎么查询交易地址？',
      source: 'Bella区块链致富日记',
      date: '2024-04-24',
      time: '16:23',
      summary: '加密货币交易ID，也被称为交易哈希或TXID，是用于识别区块链上每一笔交易的唯一标识符。',
      tags: ['区块链', 'TXID', '交易哈希', '加密货币'],
      content: (
        <>
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
        </>
      )
    }
  };
  
  // 获取当前文章数据
  const article = articles[id];
  
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    if (article) {
      document.title = `${article.title} - ZMWeb3`;
    } else {
      document.title = 'ZMWeb3';
    }
  }, [article]);
  
  // 如果文章不存在
  if (!article) {
    return (
      <div className="article-page">
        <ScrollToTopOnMount />
        <div className="article-header">
          <div className="container">
            <h1>文章未找到</h1>
          </div>
        </div>
        <section className="article-section">
          <div className="container">
            <p>抱歉，您请求的文章不存在或已被移除。</p>
          </div>
        </section>
      </div>
    );
  }
  
  return (
    <div className="article-page">
      <ScrollToTopOnMount />
      <div className="article-header">
        <div className="container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span className="article-source">来源：{article.source}</span>
            <span className="article-time">时间：{article.date} {article.time}</span>
          </div>
        </div>
      </div>
      
      <section className="article-section">
        <div className="container">
          <div className="article-content">
            <div className="article-summary">
              <p>{article.summary}</p>
            </div>
            
            {article.content}
            
            <div className="article-tags">
              {article.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;