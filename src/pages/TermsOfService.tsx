import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertTriangle, Gavel, CreditCard, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "acceptance",
      title: "接受條款",
      icon: <Scale className="h-6 w-6" />,
      content: [
        "通過訪問或使用 QuantaryX 服務，您同意受本服務條款約束",
        "如果您不同意這些條款，請不要使用我們的服務",
        "我們可能會不時更新這些條款，更新後的條款將在發布後立即生效",
        "繼續使用服務表示您接受修訂後的條款"
      ]
    },
    {
      id: "services",
      title: "服務描述",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "QuantaryX 提供基於人工智能的資產管理和投資分析服務",
        "我們的服務包括但不限於：投資組合分析、風險評估、市場洞察、交易建議",
        "服務內容可能根據您的訂閱計劃而有所不同",
        "我們保留隨時修改、暫停或終止任何服務功能的權利"
      ]
    },
    {
      id: "user-obligations",
      title: "用戶義務",
      icon: <Gavel className="h-6 w-6" />,
      content: [
        "您必須年滿18歲且具有完全民事行為能力",
        "提供真實、準確、完整的註冊信息",
        "保護您的賬戶安全，不得與他人共享登錄憑據",
        "遵守所有適用的法律法規和監管要求",
        "不得將服務用於非法或未經授權的目的",
        "不得干擾或破壞服務的正常運行"
      ]
    },
    {
      id: "financial-disclaimers",
      title: "金融免責聲明",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        "我們提供的所有信息和建議僅供參考，不構成投資建議",
        "投資有風險，您可能損失部分或全部投資",
        "過往表現不代表未來結果",
        "您應該在做出投資決定前諮詢專業的財務顧問",
        "我們不對您的投資決定或結果承擔責任"
      ]
    },
    {
      id: "fees",
      title: "費用和付款",
      icon: <CreditCard className="h-6 w-6" />,
      content: [
        "服務費用將根據您選擇的訂閱計劃收取",
        "費用將提前披露，並在確認訂閱時支付",
        "我們可能會調整服務費用，但會提前30天通知",
        "退款政策依據具體服務條款執行",
        "逾期付款可能導致服務暫停"
      ]
    },
    {
      id: "intellectual-property",
      title: "知識產權",
      icon: <RefreshCw className="h-6 w-6" />,
      content: [
        "QuantaryX 及其內容受版權、商標和其他知識產權法保護",
        "您不得未經授權複製、修改、分發或使用我們的內容",
        "您對自己上傳的內容保留所有權，但授予我們使用許可",
        "我們尊重他人的知識產權，並期望用戶也這樣做"
      ]
    },
    {
      id: "limitation",
      title: "責任限制",
      icon: <Scale className="h-6 w-6" />,
      content: [
        "在法律允許的最大範圍內，我們不對任何間接、特殊、偶然或後果性損害承擔責任",
        "我們的總責任不會超過您在過去12個月內支付給我們的費用",
        "某些司法管轄區不允許排除或限制某些損害，在此情況下上述限制可能不適用"
      ]
    },
    {
      id: "termination",
      title: "終止條款",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        "您可以隨時停止使用我們的服務並取消賬戶",
        "我們可能因違反條款或其他合理原因終止您的賬戶",
        "終止後，您使用服務的權利將立即停止",
        "終止不影響在終止前產生的權利和義務"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">服務條款</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 头部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            服務條款
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            這些條款管轄您對 QuantaryX 服務的使用。請仔細閱讀這些條款，因為它們包含重要的法律權利和義務。
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            生效日期：2024年{new Date().getMonth() + 1}月{new Date().getDate()}日
          </div>
        </motion.div>

        {/* 重要提醒 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">重要提醒</h3>
          </div>
          <p className="text-amber-700 dark:text-amber-300">
            QuantaryX 提供的服務涉及金融投資，存在固有風險。我們強烈建議您在使用服務前仔細考慮您的財務狀況和風險承受能力。
          </p>
        </motion.div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 管辖法律 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            管轄法律和爭議解決
          </h3>
          <div className="text-gray-700 dark:text-gray-300 space-y-3">
            <p>
              本服務條款受香港特別行政區法律管轄並據其解釋。
            </p>
            <p>
              任何因本條款或服務使用而產生的爭議將首先通過協商解決。如協商失敗，爭議將提交香港國際仲裁中心按其仲裁規則進行仲裁。
            </p>
          </div>
        </motion.div>

        {/* 联系信息 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            聯繫我們
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            如果您對這些服務條款有任何疑問，請聯繫我們：
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">法務部門：</strong>
              <br />
              <a href="mailto:legal@quantaryx.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                legal@quantaryx.com
              </a>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">客戶服務：</strong>
              <br />
              <a href="mailto:support@quantaryx.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                support@quantaryx.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* 底部返回按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
          >
            返回首頁
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 