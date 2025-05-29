import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: "collection",
      title: "信息收集",
      icon: <Database className="h-6 w-6" />,
      content: [
        "個人身份信息：姓名、電子郵件地址、電話號碼、通訊地址",
        "財務信息：投資組合數據、交易記錄、資產信息（在您明確授權下）",
        "技術信息：設備信息、IP地址、瀏覽器類型、使用統計",
        "身份驗證信息：用於驗證您身份的文件和數據"
      ]
    },
    {
      id: "usage",
      title: "信息使用",
      icon: <Eye className="h-6 w-6" />,
      content: [
        "提供和改善我們的AI資產管理服務",
        "個性化投資建議和風險分析",
        "安全監控和欺詐防護",
        "客戶支持和技術維護",
        "法律合規和監管要求"
      ]
    },
    {
      id: "protection",
      title: "數據保護",
      icon: <Lock className="h-6 w-6" />,
      content: [
        "端到端加密：所有敏感數據均採用銀行級加密技術",
        "訪問控制：嚴格的權限管理和多因素身份驗證",
        "定期安全審計：委託第三方安全公司進行滲透測試",
        "災備恢復：多地數據備份確保業務連續性",
        "員工培訓：所有員工需通過數據安全認證"
      ]
    },
    {
      id: "sharing",
      title: "信息共享",
      icon: <Users className="h-6 w-6" />,
      content: [
        "我們不會出售您的個人信息給第三方",
        "僅在獲得您明確同意下與合作金融機構共享必要信息",
        "遵循法律要求向監管機構提供信息",
        "與服務提供商共享技術和運營支持信息",
        "在公司重組時可能轉移數據（將提前通知用戶）"
      ]
    },
    {
      id: "rights",
      title: "您的權利",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "查看權：隨時查看我們收集的您的個人信息",
        "修正權：要求修正錯誤或不完整的信息",
        "刪除權：要求刪除您的個人數據（在法律允許範圍內）",
        "可攜權：以機器可讀格式獲取您的數據",
        "撤回同意：隨時撤回對數據處理的同意"
      ]
    },
    {
      id: "updates",
      title: "政策更新",
      icon: <Bell className="h-6 w-6" />,
      content: [
        "我們可能會定期更新此隱私政策",
        "重要變更將提前30天通過電子郵件通知",
        "建議您定期查看最新版本",
        "繼續使用服務即表示接受更新後的政策"
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
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">隱私政策</span>
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
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            隱私政策
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            QuantaryX 致力於保護您的隱私並確保您的個人信息安全。本政策說明我們如何收集、使用和保護您的信息。
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            最後更新：2024年{new Date().getMonth() + 1}月{new Date().getDate()}日
          </div>
        </motion.div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 联系信息 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            聯繫我們
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            如果您對此隱私政策有任何疑問或想要行使您的權利，請通過以下方式聯繫我們：
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">電子郵件：</strong>
              <br />
              <a href="mailto:privacy@quantaryx.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                privacy@quantaryx.com
              </a>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">郵寄地址：</strong>
              <br />
              <span className="text-gray-700 dark:text-gray-300">
                QuantaryX 隱私保護部<br />
                香港中環金融街1號<br />
                郵編：000000
              </span>
            </div>
          </div>
        </motion.div>

        {/* 底部返回按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3"
          >
            返回首頁
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 