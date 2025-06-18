import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Users, Database, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // 获取当前日期
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  // 格式化日期显示
  const formatDate = () => {
    if (i18n.language === 'zh') {
      return `最後更新：${year}年${month}月${date}日`;
    } else {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      return `Last Updated: ${monthNames[month - 1]} ${date}, ${year}`;
    }
  };

  const getSections = () => [
    {
      id: "collection",
      title: t('pages.privacyPolicy.sections.collection.title'),
      icon: <Database className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.collection.content', { returnObjects: true }) as string[]
    },
    {
      id: "usage",
      title: t('pages.privacyPolicy.sections.usage.title'),
      icon: <Eye className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.usage.content', { returnObjects: true }) as string[]
    },
    {
      id: "protection",
      title: t('pages.privacyPolicy.sections.protection.title'),
      icon: <Lock className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.protection.content', { returnObjects: true }) as string[]
    },
    {
      id: "sharing",
      title: t('pages.privacyPolicy.sections.sharing.title'),
      icon: <Users className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.sharing.content', { returnObjects: true }) as string[]
    },
    {
      id: "rights",
      title: t('pages.privacyPolicy.sections.rights.title'),
      icon: <Shield className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.rights.content', { returnObjects: true }) as string[]
    },
    {
      id: "updates",
      title: t('pages.privacyPolicy.sections.updates.title'),
      icon: <Bell className="h-6 w-6" />,
      content: t('pages.privacyPolicy.sections.updates.content', { returnObjects: true }) as string[]
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
              {t('pages.privacyPolicy.backHome')}
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">{t('pages.privacyPolicy.title')}</span>
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
            {t('pages.privacyPolicy.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pages.privacyPolicy.subtitle')}
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {formatDate()}
          </div>
        </motion.div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {getSections().map((section, index) => (
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
            {t('pages.privacyPolicy.contact.title')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('pages.privacyPolicy.contact.description')}
          </p>
          <div className="text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">{t('footer.contact.emailLabel')}：</strong>
              <br />
              <a href={`mailto:${t('pages.privacyPolicy.contact.email')}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                {t('pages.privacyPolicy.contact.email')}
              </a>
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
            {t('pages.privacyPolicy.backHome')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 