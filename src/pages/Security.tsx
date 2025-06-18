import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Server, Eye, Fingerprint, Zap, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Security = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getSecurityFeatures = () => [
    {
      id: "encryption",
      title: t('pages.security.features.encryption.title'),
      icon: <Lock className="h-8 w-8" />,
      description: t('pages.security.features.encryption.description'),
      details: t('pages.security.features.encryption.details', { returnObjects: true }) as string[]
    },
    {
      id: "authentication",
      title: t('pages.security.features.authentication.title'),
      icon: <Fingerprint className="h-8 w-8" />,
      description: t('pages.security.features.authentication.description'),
      details: t('pages.security.features.authentication.details', { returnObjects: true }) as string[]
    },
    {
      id: "infrastructure",
      title: t('pages.security.features.infrastructure.title'),
      icon: <Server className="h-8 w-8" />,
      description: t('pages.security.features.infrastructure.description'),
      details: t('pages.security.features.infrastructure.details', { returnObjects: true }) as string[]
    },
    {
      id: "privacy",
      title: t('pages.security.features.privacy.title'),
      icon: <Eye className="h-8 w-8" />,
      description: t('pages.security.features.privacy.description'),
      details: t('pages.security.features.privacy.details', { returnObjects: true }) as string[]
    },
    {
      id: "monitoring",
      title: t('pages.security.features.monitoring.title'),
      icon: <Zap className="h-8 w-8" />,
      description: t('pages.security.features.monitoring.description'),
      details: t('pages.security.features.monitoring.details', { returnObjects: true }) as string[]
    },
    {
      id: "compliance",
      title: t('pages.security.features.compliance.title'),
      icon: <Award className="h-8 w-8" />,
      description: t('pages.security.features.compliance.description'),
      details: t('pages.security.features.compliance.details', { returnObjects: true }) as string[]
    }
  ];

  const getSecurityStats = () => t('pages.security.stats', { returnObjects: true }) as Array<{number: string, label: string}>;

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
              {t('pages.security.backHome')}
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-lg text-gray-900 dark:text-white">{t('pages.security.title')}</span>
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
            {t('pages.security.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('pages.security.subtitle')}
          </p>
        </motion.div>

        {/* 安全统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {getSecurityStats().map((stat, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {getSecurityFeatures().map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 安全架构 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('pages.security.architecture.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('pages.security.architecture.layers', { returnObjects: true }) as Array<{title: string, description: string}>).map((layer, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  {index === 0 && <Shield className="h-10 w-10 text-white" />}
                  {index === 1 && <Lock className="h-10 w-10 text-white" />}
                  {index === 2 && <Eye className="h-10 w-10 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {layer.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {layer.description}
                </p>
              </div>
            ))}
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
            {t('pages.security.compliance.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(t('pages.security.compliance.certifications', { returnObjects: true }) as Array<{name: string, desc: string}>).map((cert, index) => (
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
            {t('pages.security.commitment.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            {t('pages.security.commitment.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {(t('pages.security.commitment.promises', { returnObjects: true }) as string[]).map((promise, index) => (
              <div key={index} className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">{promise}</span>
              </div>
            ))}
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
            {t('pages.security.contact.title')}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
            {t('pages.security.contact.description')}
          </p>
          <div className="text-center">
            <a
              href={`mailto:${t('pages.security.contact.email')}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Shield className="h-5 w-5" />
              {t('pages.security.contact.email')}
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
            {t('pages.security.backHome')}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Security; 