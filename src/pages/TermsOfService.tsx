import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Scale, AlertTriangle, Gavel, CreditCard, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
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
      return `生效日期：${year}年${month}月${date}日`;
    } else {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      return `Effective Date: ${monthNames[month - 1]} ${date}, ${year}`;
    }
  };

  const getSections = () => [
    {
      id: "acceptance",
      title: t('pages.termsOfService.sections.acceptance.title'),
      icon: <Scale className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.acceptance.content', { returnObjects: true }) as string[]
    },
    {
      id: "services",
      title: t('pages.termsOfService.sections.services.title'),
      icon: <FileText className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.services.content', { returnObjects: true }) as string[]
    },
    {
      id: "user-obligations",
      title: t('pages.termsOfService.sections.userObligations.title'),
      icon: <Gavel className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.userObligations.content', { returnObjects: true }) as string[]
    },
    {
      id: "financial-disclaimers",
      title: t('pages.termsOfService.sections.financialDisclaimers.title'),
      icon: <AlertTriangle className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.financialDisclaimers.content', { returnObjects: true }) as string[]
    },
    {
      id: "fees",
      title: t('pages.termsOfService.sections.fees.title'),
      icon: <CreditCard className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.fees.content', { returnObjects: true }) as string[]
    },
    {
      id: "intellectual-property",
      title: t('pages.termsOfService.sections.intellectualProperty.title'),
      icon: <RefreshCw className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.intellectualProperty.content', { returnObjects: true }) as string[]
    },
    {
      id: "limitation",
      title: t('pages.termsOfService.sections.limitation.title'),
      icon: <Scale className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.limitation.content', { returnObjects: true }) as string[]
    },
    {
      id: "termination",
      title: t('pages.termsOfService.sections.termination.title'),
      icon: <AlertTriangle className="h-6 w-6" />,
      content: t('pages.termsOfService.sections.termination.content', { returnObjects: true }) as string[]
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
              {t('pages.termsOfService.backHome')}
            </Button>
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">{t('pages.termsOfService.title')}</span>
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
            {t('pages.termsOfService.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('pages.termsOfService.subtitle')}
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {formatDate()}
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
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">{t('pages.termsOfService.importantNotice.title')}</h3>
          </div>
          <p className="text-amber-700 dark:text-amber-300">
            {t('pages.termsOfService.importantNotice.content')}
          </p>
        </motion.div>

        {/* 内容区域 */}
        <div className="space-y-8">
          {getSections().map((section, index) => (
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
            {t('pages.termsOfService.jurisdiction.title')}
          </h3>
          <div className="text-gray-700 dark:text-gray-300 space-y-3">
            {(t('pages.termsOfService.jurisdiction.content', { returnObjects: true }) as string[]).map((content, index) => (
              <p key={index}>{content}</p>
            ))}
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
            {t('pages.termsOfService.contact.title')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t('pages.termsOfService.contact.description')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-900 dark:text-white">{t('pages.termsOfService.contact.legal')}</strong>
              <br />
              <a href={`mailto:${t('pages.termsOfService.contact.legalEmail')}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {t('pages.termsOfService.contact.legalEmail')}
              </a>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white">{t('pages.termsOfService.contact.support')}</strong>
              <br />
              <a href={`mailto:${t('pages.termsOfService.contact.supportEmail')}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {t('pages.termsOfService.contact.supportEmail')}
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
            {t('pages.termsOfService.backHome')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 