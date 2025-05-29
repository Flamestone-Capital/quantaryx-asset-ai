import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Server, Eye, Fingerprint, Zap, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Security = () => {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      id: "encryption",
      title: "端到端加密",
      icon: <Lock className="h-8 w-8" />,
      description: "所有數據傳輸和存儲均採用 AES-256 軍用級加密標準",
      details: [
        "傳輸中的數據使用 TLS 1.3 加密協議",
        "靜態數據採用 AES-256 加密算法",
        "密鑰管理通過 AWS KMS 進行",
        "定期密鑰輪換確保長期安全性"
      ]
    },
    {
      id: "authentication",
      title: "多因素身份驗證",
      icon: <Fingerprint className="h-8 w-8" />,
      description: "多層身份驗證機制保護您的賬戶安全",
      details: [
        "支持 SMS、郵件和驗證器應用程序",
        "生物識別登錄（指紋、面部識別）",
        "硬件安全密鑰支持（FIDO2/WebAuthn）",
        "智能風險評估和自適應認證"
      ]
    },
    {
      id: "infrastructure",
      title: "安全基礎設施",
      icon: <Server className="h-8 w-8" />,
      description: "企業級雲基礎設施提供 99.9% 可用性保證",
      details: [
        "AWS 多區域部署確保災備恢復",
        "實時監控和異常檢測系統",
        "自動備份和版本控制",
        "物理安全數據中心防護"
      ]
    },
    {
      id: "privacy",
      title: "隱私保護",
      icon: <Eye className="h-8 w-8" />,
      description: "嚴格的數據隱私政策和訪問控制機制",
      details: [
        "最小權限原則訪問控制",
        "數據去標識化和匿名化處理",
        "GDPR 和其他隱私法規合規",
        "定期隱私影響評估"
      ]
    },
    {
      id: "monitoring",
      title: "實時監控",
      icon: <Zap className="h-8 w-8" />,
      description: "24/7 安全運營中心監控所有系統活動",
      details: [
        "AI 驅動的威脅檢測系統",
        "實時日誌分析和異常警報",
        "自動化事件響應機制",
        "持續安全態勢評估"
      ]
    },
    {
      id: "compliance",
      title: "合規認證",
      icon: <Award className="h-8 w-8" />,
      description: "通過多項國際安全標準認證",
      details: [
        "ISO 27001 信息安全管理體系",
        "SOC 2 Type II 合規審計",
        "PCI DSS 支付卡行業標準",
        "定期第三方安全滲透測試"
      ]
    }
  ];

  const securityStats = [
    { number: "256位", label: "AES加密強度" },
    { number: "99.9%", label: "系統可用性" },
    { number: "24/7", label: "安全監控" },
    { number: "< 1秒", label: "威脅檢測速度" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              返回首頁
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">安全性</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            企業級安全保護
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            QuantaryX 採用銀行級安全標準，通過多層防護體系確保您的資產數據和隱私信息得到最高級別的保護。
            我們的安全架構經過嚴格的第三方審計，符合國際金融行業最嚴格的安全標準。
          </p>
        </motion.div>

        {/* 安全统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {securityStats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 安全功能网格 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 安全流程图 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-800/50 dark:to-green-900/20 rounded-2xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            多層安全防護架構
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                應用層安全
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                端到端加密、身份驗證、權限控制
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Server className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                基礎設施安全
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                雲端安全、網絡隔離、災備恢復
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                運營安全
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                24/7監控、威脅檢測、事件響應
              </p>
            </div>
          </div>
        </motion.div>

        {/* 合规认证 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            國際認證與合規
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ISO 27001", desc: "信息安全管理" },
              { name: "SOC 2", desc: "服務組織控制" },
              { name: "PCI DSS", desc: "支付卡行業標準" },
              { name: "GDPR", desc: "歐盟數據保護" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 安全承诺 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-700 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            我們的安全承諾
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            QuantaryX 將安全視為最高優先級。我們承諾持續投資於最先進的安全技術，
            定期進行安全審計，並與領先的安全專家合作，確保您的資產數據始終受到最高級別的保護。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">零容忍安全漏洞</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">透明的安全報告</span>
            </div>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">持續安全改進</span>
            </div>
          </div>
        </motion.div>

        {/* 联系安全团队 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            安全問題報告
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            如果您發現任何安全漏洞或有安全相關問題，請立即聯繫我們的安全團隊：
          </p>
          <div className="text-center">
            <a
              href="mailto:security@quantaryx.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Shield className="h-5 w-5" />
              security@quantaryx.com
            </a>
          </div>
        </motion.div>

        {/* 底部返回按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
          >
            返回首頁
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Security; 