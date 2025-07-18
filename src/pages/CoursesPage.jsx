import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ethers } from 'ethers';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/CoursesPage.css';

// 导入课程图片
import blockchainBasicsIcon from '../assets/courses/blockchain-basics.svg';
import airdropGuideIcon from '../assets/courses/airdrop-guide.svg';
import techServiceIcon from '../assets/courses/tech-service.svg';

// 从环境变量获取Arbitrum网络RPC节点
const RPC_URL = import.meta.env.VITE_RPC_URL || 'https://arb1.arbitrum.io/rpc';
console.log('DEBUG: 使用RPC节点:', RPC_URL);

// 创建provider实例
let provider;
try {
  provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  console.log('DEBUG: Provider实例创建成功');
  
  // 测试provider连接
  provider.getNetwork().then(network => {
    console.log('DEBUG: 成功连接到网络:', network.name, '(chainId:', network.chainId, ')');
    // 验证是否为Arbitrum网络
    if (network.chainId !== 42161) {
      console.error('DEBUG: 错误的网络链ID:', network.chainId);
      console.warn('连接到了错误的网络，请确保RPC节点连接到Arbitrum主网');
    } else {
      console.log('DEBUG: 确认连接到Arbitrum主网');
    }
  }).catch(error => {
    console.error('DEBUG: 网络连接测试失败:', error);
  });
} catch (error) {
  console.error('DEBUG: 创建Provider实例失败:', error);
  // 不要在catch块中再次尝试创建，这可能导致无限循环
  console.warn('无法初始化Provider，部分功能可能不可用');
  provider = null;
}

// 从环境变量获取USDT合约地址（Arbitrum网络上的USDT）
const USDT_CONTRACT = import.meta.env.VITE_USDT_CONTRACT || '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9';

// USDT合约ABI（仅包含Transfer事件）
const USDT_ABI = [
  'event Transfer(address indexed from, address indexed to, uint256 value)'
];

// 检查是否为开发模式
const DEV_MODE = import.meta.env.VITE_DEV_MODE === 'true';
if (DEV_MODE) {
  console.log('DEBUG: 当前处于开发模式，部分验证可能被简化');
}

const CoursesPage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, processing, completed, failed
  const [transactionId, setTransactionId] = useState('');
  const [paymentAddress, setPaymentAddress] = useState('');
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');
  const [exactAmount, setExactAmount] = useState(0); // 存储随机生成的精确金额
  
  // 页面加载时滚动到顶部并设置页面标题
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = '精选教程与技术服务 - ZMWeb3';
  }, []);
  
  // 模拟课程数据
  const courses = [
    {
      id: 1,
      title: '区块链入门教程',
      description: '从零开始学习区块链技术，掌握基础概念和应用场景',
      price: 9.9,
      image: blockchainBasicsIcon,
      preview: '本教程包含10个章节，从区块链基础概念到实际应用案例...',
      benefits: ['掌握区块链核心概念', '了解主流公链特点', '学习加密货币基础知识'],
      type: 'course'
    },
    {
      id: 2,
      title: '空投终极指南',
      description: '掌握空投活动参与技巧，最大化您的空投收益',
      price: 19.9,
      image: airdropGuideIcon,
      preview: '本教程详细介绍如何寻找、参与和管理各类空投活动，提高获取空投的成功率...',
      benefits: ['了解空投活动类型', '掌握筛选优质项目技巧', '学习安全参与策略'],
      type: 'course'
    },
    {
      id: 3,
      title: '终身技术服务',
      description: '获得我们团队的专业技术支持，解决您在Web3领域遇到的各种问题',
      price: 99.9,
      image: techServiceIcon,
      preview: '付款后即可获得专属客服联系方式，提供一对一技术咨询和问题解决方案...',
      benefits: ['专业技术团队支持', '快速响应各类问题', '提供个性化解决方案', '终身不限次数咨询'],
      type: 'service',
      contactInfo: {
        wechat: 'wx123456', // 微信号
        telegram: '@web3support', // Telegram用户名
        wechatQRCode: import.meta.env.VITE_WECHAT_QR_URL || 'https://example.com/wechat-qr.jpg', // 从环境变量获取微信二维码URL
        telegramQRCode: import.meta.env.VITE_TELEGRAM_QR_URL || 'https://example.com/telegram-qr.jpg' // 从环境变量获取Telegram二维码URL
      }
    }
  ];

  // 生成唯一订单号
  const generateOrderNumber = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    return `ORDER-${timestamp}-${random}`;
  };

  // 生成特定的支付地址
  const generatePaymentAddress = (course, orderNum) => {
    // 在实际应用中，这里应该调用后端API生成唯一的支付地址
    // 每个订单对应不同的支付地址，便于后端跟踪和验证
    
    // 从环境变量获取支付地址
    return import.meta.env.VITE_PAYMENT_ADDRESS || '0xAB90C9aD1Cd135429ef5BC553B3a0C6133430aA2';
  };
  
  // 根据课程ID获取下载链接
  const getDownloadUrl = (courseId) => {
    switch(courseId) {
      case 1:
        return import.meta.env.VITE_DOWNLOAD_URL_COURSE1 || 'https://example.com/downloads/blockchain-basics.pdf';
      case 2:
        return import.meta.env.VITE_DOWNLOAD_URL_COURSE2 || 'https://example.com/downloads/exchange-rebate.pdf';
      case 3:
        return import.meta.env.VITE_DOWNLOAD_URL_COURSE3 || 'https://example.com/downloads/web3-marketing.pdf';
      default:
        return '#';
    }
  };

  // 处理购买点击
  const handleBuyClick = (course) => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setSelectedCourse(course);
    setShowPaymentModal(true);
    setPaymentStatus('pending');
    setTransactionId('');
    setVerificationAttempts(0);
    
    // 生成随机精确金额，保留两位小数
    const randomCents = Math.floor(Math.random() * 100);
    const preciseAmount = parseFloat((course.price + randomCents / 10000).toFixed(4));
    setExactAmount(preciseAmount);
    
    // 生成该订单的专属支付地址
    const address = generatePaymentAddress(course, newOrderNumber);
    setPaymentAddress(address);
  };

  // 复制到剪贴板
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('已复制到剪贴板');
      })
      .catch(err => {
        console.error('复制失败:', err);
      });
  };

  // 验证交易ID - 直接在前端验证链上交易
  const verifyTransaction = async () => {
    if (!transactionId.trim()) {
      alert('请输入交易ID');
      return;
    }
    
    console.log('开始验证交易:', transactionId);
    console.log('DEBUG: 验证步骤1 - 检查交易ID格式');
    
    // 检查交易ID格式是否正确
    if (!transactionId.startsWith('0x')) {
      console.log('DEBUG: 交易ID格式无效 - 不是以0x开头');
      alert('请输入有效的Arbitrum网络交易ID (0x开头的66位哈希值)');
      return;
    }
    
    if (transactionId.length !== 66) {
      console.log('DEBUG: 交易ID格式无效 - 长度不是66位:', transactionId.length);
      alert('交易ID长度必须为66个字符（包括0x前缀）');
      return;
    }
    
    // 检查是否只包含有效的十六进制字符
    const hexRegex = /^0x[0-9a-fA-F]{64}$/;
    if (!hexRegex.test(transactionId)) {
      console.log('DEBUG: 交易ID格式无效 - 包含非十六进制字符');
      alert('交易ID只能包含十六进制字符（0-9, a-f, A-F）');
      return;
    }
    
    console.log('DEBUG: 交易ID格式有效');
    
    console.log('DEBUG: 验证步骤2 - 检查交易ID是否已使用');
    // 检查是否已经使用过该交易ID
    const usedTransactions = JSON.parse(localStorage.getItem('usedTransactions') || '[]');
    console.log('DEBUG: 已使用的交易ID列表:', usedTransactions);
    if (usedTransactions.includes(transactionId)) {
      console.log('DEBUG: 交易ID已被使用');
      alert('该交易ID已被使用，请使用新的交易');
      return;
    }
    console.log('DEBUG: 交易ID未被使用过');
    
    setPaymentStatus('processing');
    setVerificationAttempts(prev => prev + 1);
    console.log('DEBUG: 验证步骤3 - 开始链上验证');
    
    try {
      // 1. 获取交易收据
      console.log('DEBUG: 尝试获取交易收据...');
      let txReceipt;
      try {
        // 添加调试信息，输出完整的交易ID
      console.log('DEBUG: 正在查询的交易ID:', transactionId, '长度:', transactionId.length);
      
      // 检查是否为开发模式下的测试交易ID
      if (transactionId === '0x1234567890123456789012345678901234567890123456789012345678901234') {
        console.log('DEBUG: 检测到测试交易ID');
        
        // 在开发模式下允许使用测试交易ID
        if (DEV_MODE) {
          console.log('DEBUG: 开发模式下允许使用测试交易ID');
          // 模拟交易收据
          txReceipt = {
            transactionHash: transactionId,
            status: 1,
            blockNumber: 12345678,
            confirmations: 10,
            logs: []
          };
          console.log('DEBUG: 已创建模拟交易收据');
        } else {
          console.log('DEBUG: 非开发模式下禁用测试交易ID');
          alert('测试交易ID已禁用，请使用真实交易ID');
          setPaymentStatus('failed');
          return;
        }
      }
        
        txReceipt = await provider.getTransactionReceipt(transactionId);
        console.log('DEBUG: 交易收据:', txReceipt);
      } catch (error) {
        console.error('DEBUG: 获取交易收据失败:', error);
        alert(`获取交易收据失败: ${error.message}`);
        setPaymentStatus('failed');
        return;
      }
      
      if (!txReceipt) {
        console.log('DEBUG: 未找到交易收据');
        alert('无法找到该交易，请确认交易ID正确且交易已确认');
        setPaymentStatus('failed');
        return;
      }
      console.log('DEBUG: 成功获取交易收据');
      console.log('DEBUG: 交易收据完整性检查:', {
        存在: !!txReceipt,
        哈希: txReceipt.transactionHash,
        状态: txReceipt.status,
        区块号: txReceipt.blockNumber,
        确认数: txReceipt.confirmations
      });
      
      // 检查交易哈希是否与输入的交易ID匹配
      if (txReceipt.transactionHash.toLowerCase() !== transactionId.toLowerCase()) {
        console.log('DEBUG: 交易哈希不匹配', {
          收据哈希: txReceipt.transactionHash.toLowerCase(),
          输入ID: transactionId.toLowerCase()
        });
        alert('交易ID验证失败，哈希不匹配');
        setPaymentStatus('failed');
        return;
      }
      
      if (!txReceipt.status) {
        console.log('DEBUG: 交易状态失败');
        alert('该交易执行失败，请提供成功的交易');
        setPaymentStatus('failed');
        return;
      }
      console.log('DEBUG: 交易状态成功');
      
      // 2. 获取交易详情，检查交易时间
      console.log('DEBUG: 获取交易详情和区块信息...');
      let transaction;
      let block;
      try {
        transaction = await provider.getTransaction(transactionId);
        console.log('DEBUG: 交易详情:', transaction);
        
        block = await provider.getBlock(transaction.blockNumber);
        console.log('DEBUG: 区块信息:', block);
      } catch (error) {
        console.error('DEBUG: 获取交易详情或区块信息失败:', error);
        alert(`获取交易详情失败: ${error.message}`);
        setPaymentStatus('failed');
        return;
      }
      
      const txTimestamp = block.timestamp * 1000; // 转换为毫秒
      const currentTime = Date.now();
      const twentyFourHoursAgo = currentTime - 24 * 60 * 60 * 1000; // 24小时前的时间戳
      
      console.log('DEBUG: 交易时间戳:', new Date(txTimestamp).toLocaleString());
      console.log('DEBUG: 当前时间:', new Date(currentTime).toLocaleString());
      console.log('DEBUG: 24小时前时间:', new Date(twentyFourHoursAgo).toLocaleString());
      console.log('DEBUG: 交易是否在24小时内:', txTimestamp >= twentyFourHoursAgo);
      
      // 只验证24小时内的交易
      if (txTimestamp < twentyFourHoursAgo) {
        console.log('DEBUG: 交易时间超过24小时');
        alert('只接受24小时内的交易，请提供最新交易');
        setPaymentStatus('failed');
        return;
      }
      console.log('DEBUG: 交易时间在24小时内');
      
      // 3. 创建合约接口用于解析事件
      console.log('DEBUG: 创建USDT合约接口...');
      let usdtContract;
      try {
        // 验证合约地址格式
        if (!USDT_CONTRACT || !USDT_CONTRACT.startsWith('0x') || USDT_CONTRACT.length !== 42) {
          throw new Error('USDT合约地址格式无效');
        }
        
        usdtContract = new ethers.Contract(USDT_CONTRACT, USDT_ABI, provider);
        
        // 验证合约接口
        if (!usdtContract || !usdtContract.filters || !usdtContract.filters.Transfer) {
          throw new Error('USDT合约接口创建失败');
        }
        
        console.log('DEBUG: USDT合约接口创建成功');
      } catch (error) {
        console.error('DEBUG: 创建USDT合约接口失败:', error);
        alert(`创建USDT合约接口失败: ${error.message}`);
        setPaymentStatus('failed');
        return;
      }
      
      // 4. 解析交易日志，查找USDT转账事件
      console.log('DEBUG: 解析交易日志...');
      console.log('DEBUG: 交易日志数量:', txReceipt.logs.length);
      console.log('DEBUG: 交易日志:', txReceipt.logs);
      
      if (!txReceipt.logs || txReceipt.logs.length === 0) {
        console.log('DEBUG: 交易日志为空');
        
        // 在开发模式下，如果是测试交易ID，添加模拟的转账日志
        if (DEV_MODE && transactionId === '0x1234567890123456789012345678901234567890123456789012345678901234') {
          console.log('DEBUG: 开发模式下为测试交易ID创建模拟转账日志');
          
          // 获取当前支付地址和金额
          const paymentAddr = paymentAddress.toLowerCase();
          console.log('DEBUG: 当前支付地址:', paymentAddr);
          console.log('DEBUG: 当前支付金额:', exactAmount);
          
          // 创建模拟的USDT转账事件
          const mockTransferEvent = {
            address: USDT_CONTRACT,
            topics: [
              '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
              '0x000000000000000000000000742d35cc6634c0532925a3b844bc454e4438f44e',
              '0x000000000000000000000000' + paymentAddr.slice(2)
            ],
            data: ethers.utils.hexlify(
              ethers.utils.parseUnits(exactAmount.toString(), 6)
            ),
            logIndex: 0,
            blockNumber: 12345678,
            transactionHash: transactionId
          };
          
          txReceipt.logs = [mockTransferEvent];
          console.log('DEBUG: 已添加模拟转账日志:', txReceipt.logs);
        } else {
          alert('交易日志为空，无法验证USDT转账');
          setPaymentStatus('failed');
          return;
        }
      }
      
      console.log('DEBUG: 开始过滤USDT合约日志...');
      // 输出所有日志的地址，用于调试
      console.log('DEBUG: 所有日志的合约地址:', txReceipt.logs.map(log => log.address));
      
      const transferEvents = txReceipt.logs
        .filter(log => {
          const isUsdtContract = log.address.toLowerCase() === USDT_CONTRACT.toLowerCase();
          console.log('DEBUG: 日志地址:', log.address, '是否USDT合约:', isUsdtContract);
          return isUsdtContract;
        })
        .map(log => {
          console.log('DEBUG: 尝试解析日志:', log);
          try {
            const parsedLog = usdtContract.interface.parseLog(log);
            console.log('DEBUG: 解析日志成功:', parsedLog);
            return parsedLog;
          } catch (e) {
            console.error('DEBUG: 解析日志失败:', e);
            return null;
          }
        })
        .filter(event => {
          if (!event) {
            console.log('DEBUG: 事件为null，已过滤');
            return false;
          }
          const isTransfer = event.name === 'Transfer';
          console.log('DEBUG: 事件名称:', event.name, '是否Transfer事件:', isTransfer);
          return isTransfer;
        });
      
      console.log('DEBUG: 找到的Transfer事件数量:', transferEvents.length);
      console.log('DEBUG: Transfer事件详情:', transferEvents);
      
      if (transferEvents.length === 0) {
        console.log('DEBUG: 未找到USDT转账事件');
        alert('该交易不包含USDT转账事件');
        setPaymentStatus('failed');
        return;
      }
      console.log('DEBUG: 找到USDT转账事件，继续验证');
      
      // 5. 验证转账目标地址和金额
      console.log('DEBUG: 验证转账目标地址和金额...');
      console.log('DEBUG: 期望收款地址:', paymentAddress.toLowerCase());
      console.log('DEBUG: 期望收款金额:', exactAmount);
      
      // 检查paymentAddress和exactAmount是否有效
      if (!paymentAddress || paymentAddress.length !== 42 || !paymentAddress.startsWith('0x')) {
        console.error('DEBUG: 收款地址无效:', paymentAddress);
        alert('收款地址配置错误，请联系管理员');
        setPaymentStatus('failed');
        return;
      }
      
      if (!exactAmount || isNaN(parseFloat(exactAmount))) {
        console.error('DEBUG: 收款金额无效:', exactAmount);
        alert('收款金额配置错误，请联系管理员');
        setPaymentStatus('failed');
        return;
      }
      
      // 调试: 输出所有转账事件的详细信息
      transferEvents.forEach((event, index) => {
        try {
          const to = event.args.to.toLowerCase();
          const value = ethers.utils.formatUnits(event.args.value, 6); // USDT使用6位小数
          console.log(`DEBUG: 转账事件 #${index+1}:`);
          console.log(`DEBUG: - 发送方: ${event.args.from}`);
          console.log(`DEBUG: - 接收方: ${to}`);
          console.log(`DEBUG: - 金额: ${value} USDT`);
          console.log(`DEBUG: - 地址匹配: ${to === paymentAddress.toLowerCase()}`);
          console.log(`DEBUG: - 金额匹配: ${parseFloat(value) === exactAmount}`);
          console.log(`DEBUG: - 金额比较详情:`, {
            实际金额: parseFloat(value),
            期望金额: exactAmount,
            差值: Math.abs(parseFloat(value) - exactAmount)
          });
        } catch (e) {
          console.error(`DEBUG: 处理转账事件 #${index+1} 时出错:`, e);
        }
      });
      
      const validTransfer = transferEvents.find(event => {
        try {
          const to = event.args.to.toLowerCase();
          // 将链上金额转换为与exactAmount相同的小数位数进行比较
          const value = ethers.utils.formatUnits(event.args.value, 6); // USDT使用6位小数
          
          console.log('DEBUG: 检查转账 - 目标地址:', to, '是否匹配:', to === paymentAddress.toLowerCase(), {
            实际地址: to,
            期望地址: paymentAddress.toLowerCase()
          });
          console.log('DEBUG: 检查转账 - 转账金额:', value, '是否匹配:', parseFloat(value) === exactAmount, {
            实际金额: parseFloat(value),
            期望金额: exactAmount
          });
          
          // 使用更可靠的浮点数比较方法，允许0.0001的误差
          const amountDiff = Math.abs(parseFloat(value) - exactAmount);
          const isAmountMatch = amountDiff < 0.0001;
          
          console.log('DEBUG: 金额比较详情:', {
            实际金额: parseFloat(value),
            期望金额: exactAmount,
            差值: amountDiff,
            是否匹配: isAmountMatch
          });
          
          return to === paymentAddress.toLowerCase() && isAmountMatch;
        } catch (e) {
          console.error('DEBUG: 验证转账时出错:', e);
          return false;
        }
      });
      
      console.log('DEBUG: 是否找到有效转账:', !!validTransfer);
      
      if (validTransfer) {
        console.log('DEBUG: 验证成功，记录交易ID并保存订单');
        // 再次检查交易ID是否已被使用
        if (usedTransactions.includes(transactionId)) {
          console.error('DEBUG: 交易ID已被使用，这不应该发生，因为我们在函数开始时已经检查过');
          alert('该交易ID已被使用，请使用新的交易');
          setPaymentStatus('failed');
          return;
        }
        
        try {
          // 记录已使用的交易ID
          console.log('DEBUG: 记录交易ID到已使用列表:', transactionId);
          usedTransactions.push(transactionId);
          localStorage.setItem('usedTransactions', JSON.stringify(usedTransactions));
          
          // 保存订单信息
          console.log('DEBUG: 保存已完成订单');
          saveCompletedOrder();
          
          console.log('DEBUG: 设置支付状态为completed');
          setPaymentStatus('completed');
          
          console.log('DEBUG: 验证流程全部完成，支付成功');
        } catch (error) {
          console.error('DEBUG: 完成订单过程中出错:', error);
          alert(`完成订单过程中出错: ${error.message}`);
          setPaymentStatus('failed');
        }
      } else {
        console.log('DEBUG: 验证失败，未找到匹配的转账记录');
        alert('未找到匹配的USDT转账记录，请确认收款地址和金额正确');
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error('DEBUG: 验证交易失败:', error);
      console.log('DEBUG: 错误类型:', error.constructor.name);
      console.log('DEBUG: 错误消息:', error.message);
      console.log('DEBUG: 错误堆栈:', error.stack);
      
      // 检查是否是网络连接问题
      if (error.message.includes('network') || error.message.includes('connection')) {
        console.log('DEBUG: 检测到网络连接问题');
        alert(`网络连接错误: ${error.message}`);
      } 
      // 检查是否是RPC节点问题
      else if (error.message.includes('server') || error.message.includes('timeout')) {
        console.log('DEBUG: 检测到RPC节点问题');
        alert(`RPC节点错误: ${error.message}`);
      }
      // 其他错误
      else {
        alert(`验证过程发生错误: ${error.message || '未知错误'}`);
      }
      
      setPaymentStatus('failed');
    }
  };
  
  // 保存已完成的订单到localStorage
  const saveCompletedOrder = () => {
    try {
      console.log('DEBUG: 开始保存订单信息...');
      
      const completedOrder = {
        orderNumber,
        courseId: selectedCourse.id,
        courseTitle: selectedCourse.title,
        amount: exactAmount,
        transactionId,
        timestamp: new Date().toISOString()
      };
      console.log('DEBUG: 新订单信息:', completedOrder);
      
      // 检查订单信息是否完整
      if (!completedOrder.courseId || !completedOrder.courseTitle) {
        console.error('DEBUG: 订单信息不完整:', completedOrder);
        throw new Error('订单信息不完整');
      }
      
      // 从localStorage获取已完成订单列表
      let savedOrders = [];
      try {
        const ordersStr = localStorage.getItem('completedOrders');
        console.log('DEBUG: 从localStorage获取的订单字符串:', ordersStr);
        savedOrders = JSON.parse(ordersStr || '[]');
        console.log('DEBUG: 现有已完成订单数量:', savedOrders.length);
      } catch (parseError) {
        console.error('DEBUG: 解析已完成订单失败，重置为空数组:', parseError);
        savedOrders = [];
      }
      
      // 检查是否已存在相同的订单
      const existingOrderIndex = savedOrders.findIndex(order => 
        order.transactionId === completedOrder.transactionId
      );
      
      if (existingOrderIndex >= 0) {
        console.log('DEBUG: 已存在相同的订单，更新时间戳');
        savedOrders[existingOrderIndex].timestamp = completedOrder.timestamp;
      } else {
        console.log('DEBUG: 添加新订单');
        savedOrders.push(completedOrder);
      }
      
      // 保存到localStorage
      const ordersJson = JSON.stringify(savedOrders);
      console.log('DEBUG: 保存到localStorage的订单JSON:', ordersJson);
      localStorage.setItem('completedOrders', ordersJson);
      
      console.log('DEBUG: 订单保存成功');
    } catch (error) {
      console.error('DEBUG: 保存订单时出错:', error);
      throw error; // 重新抛出错误，让调用者处理
    }
  };
  
  // 处理支付提交
  const handlePayment = () => {
    verifyTransaction();
  };

  // 关闭模态框
  const closeModal = () => {
    setShowPaymentModal(false);
    // 如果支付已完成，等待一段时间再重置状态
    if (paymentStatus === 'completed') {
      setTimeout(() => {
        setPaymentStatus('pending');
        setSelectedCourse(null);
      }, 1000);
    } else {
      setPaymentStatus('pending');
      setSelectedCourse(null);
    }
  };

  // 不再需要选项卡，显示所有课程和服务
  const allCoursesAndServices = courses; // 直接使用所有课程和服务

  return (
    <div className="courses-page">
      <ScrollToTopOnMount />
      <div className="container">
        <div className="courses-header">
          <h1>精选教程与技术服务</h1>
          <p>一次付费，终身受益，助您在Web3世界快人一步</p>
        </div>

        {/* 所有内容显示在同一页面 */}
        <div className="courses-grid">
          <div className="category-grid">
            {allCoursesAndServices.map(item => (
              <div className="course-card" key={item.id}>
                <div className="course-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="course-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="course-preview">
                    <h4>内容预览</h4>
                    <p>{item.preview}</p>
                  </div>
                  <div className="course-benefits">
                    <h4>{item.type === 'course' ? '学习收获' : '服务内容'}</h4>
                    <ul>
                      {item.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-footer">
                    <div className="course-price">{item.price} USDT</div>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => handleBuyClick(item)}
                    >
                      {item.type === 'course' ? '立即购买' : '获取服务'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="courses-info">
          <h2>为什么选择我们的产品与服务</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>专业内容</h3>
              <p>所有教程均由Web3领域资深从业者撰写，确保内容专业、实用</p>
            </div>
            <div className="info-item">
              <h3>即买即用</h3>
              <p>支付完成后系统自动发货，无需等待，立即获取完整内容</p>
            </div>
            <div className="info-item">
              <h3>持续更新</h3>
              <p>一次购买，享受该教程的所有后续更新，内容永不过时</p>
            </div>
            <div className="info-item">
              <h3>技术支持</h3>
              <p>购买后遇到问题，可获得专人解答，确保学习效果</p>
            </div>
          </div>
        </div>
      </div>

      {/* 支付模态框 */}
      {showPaymentModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <div className="modal-header">
              <h3>购买教程</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              {paymentStatus === 'pending' && (
                <>
                  <div className="payment-details">
                    <h4>{selectedCourse.title}</h4>
                    <div className="payment-price">
                      <span>价格:</span>
                      <span className="price">{exactAmount} USDT</span>
                    </div>
                    <div className="payment-instructions">
                        <p>请使用USDT(Arbitrum网络)转账至以下地址:</p>
                        <div className="payment-qr-container">
                          <div className="payment-address">
                            <code>Arbitrum: {paymentAddress}</code>
                            <button className="copy-btn" onClick={() => copyToClipboard(paymentAddress)}>复制</button>
                          </div>
                          <div className="qrcode-container">
                            <QRCodeSVG value={paymentAddress} size={150} />                            
                            <p className="qrcode-hint">扫描二维码进行转账</p>
                          </div>
                        </div>
                      <div className="order-info">
                        <p><strong>订单号:</strong> {orderNumber}</p>
                        <p><strong>注意:</strong> 请务必转账<strong>准确金额 {exactAmount} USDT</strong>，否则将无法自动确认</p>
                        <p className="amount-note"><strong>重要:</strong> 系统通过精确金额验证您的交易，请勿修改金额</p>
                      </div>
                      <div className="transaction-id-input">
                        <label htmlFor="transaction-id">
                          <span className="txid-icon">🔍</span>请输入交易ID:
                        </label>
                        <input 
                          type="text" 
                          id="transaction-id" 
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="输入Arbitrum网络USDT转账交易ID"
                        />
                        <div className="txid-help">
                          Arbitrum网络交易哈希值(0x开头) 
                          <a href="/article/97932" target="_blank" className="txid-article-link">不知道如何查找TXID？点击这里查看教程</a>
                        </div>
                      </div>
                      <p className="payment-note">转账完成后输入交易ID并点击"验证支付"按钮，系统将自动验证并发送教程至您的邮箱</p>
                      <div className="payment-restrictions">
                        <p><strong>重要提示:</strong></p>
                        <ul>
                          <li>系统只接受<strong>24小时内</strong>的交易</li>
                          <li>每个交易ID只能使用一次</li>
                          <li>请确保转账金额<strong>精确匹配</strong>上方显示的金额</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="payment-actions">
                    <button className="btn btn-secondary" onClick={closeModal}>取消</button>
                    <button className="btn btn-primary btn-verify" onClick={handlePayment}>
                      <span className="verify-icon">✓</span> 验证支付
                    </button>
                  </div>
                </>
              )}

              {paymentStatus === 'processing' && (
                <div className="payment-processing">
                  <div className="spinner"></div>
                  <p>正在验证付款，请稍候...</p>
                </div>
              )}

              {paymentStatus === 'completed' && (
                <div className="payment-completed">
                  <div className="success-icon">✓</div>
                  <h4>购买成功!</h4>
                  
                  {selectedCourse.type === 'course' ? (
                    <>
                      <p>教程已发送至您的邮箱，请注意查收</p>
                      <p>同时您也可以通过以下链接下载:</p>
                      <a href={getDownloadUrl(selectedCourse.id)} className="download-link" target="_blank" rel="noopener noreferrer">点击下载 {selectedCourse.title}</a>
                    </>
                  ) : selectedCourse.type === 'service' ? (
                    <div className="contact-info">
                      <p>请通过以下方式联系客服获取技术支持:</p>
                      
                      <div className="contact-methods">
                        <div className="contact-method">
                          <h5>微信客服</h5>
                          <div className="qrcode-container service-qr">
                            <img src={selectedCourse.contactInfo.wechatQRCode} alt="微信二维码" />
                            <p>微信号: {selectedCourse.contactInfo.wechat}</p>
                          </div>
                        </div>
                        
                        <div className="contact-method">
                          <h5>Telegram客服</h5>
                          <div className="qrcode-container service-qr">
                            <img src={selectedCourse.contactInfo.telegramQRCode} alt="Telegram二维码" />
                            <p>Telegram: {selectedCourse.contactInfo.telegram}</p>
                          </div>
                        </div>
                      </div>
                      
                      <p className="contact-note">请保存上述联系方式，您可随时联系我们获取技术支持</p>
                    </div>
                  ) : null}
                  
                  <button className="btn btn-primary" onClick={closeModal}>完成</button>
                </div>
              )}

              {paymentStatus === 'failed' && (
                <div className="payment-failed">
                  <div className="error-icon">!</div>
                  <h4>支付验证失败</h4>
                  <p>我们未能验证您的付款，请确认转账信息或联系客服</p>
                  <div className="payment-actions">
                    <button className="btn btn-secondary" onClick={closeModal}>取消</button>
                    <button className="btn btn-primary" onClick={handlePayment}>重试</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;