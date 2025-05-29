import React from "react";
import { motion } from "framer-motion";

interface AssetCardProps {
  assetName: string;
  percentage: number;
  icon: string;
  delay: number;
}

const AssetCard: React.FC<AssetCardProps> = ({
  assetName,
  percentage,
  icon,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-slate-200 dark:border-indigo-500/50 hover:border-indigo-400 dark:hover:border-indigo-400 transition-all duration-300 shadow-lg shadow-slate-200/50 dark:shadow-indigo-900/20"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="text-3xl mr-3">{icon}</span>
          <h3 className="text-slate-800 dark:text-white font-medium text-lg">{assetName}</h3>
        </div>
        <div className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white text-sm font-bold px-2 py-1 rounded-full">
          {percentage}%
        </div>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400"
        ></motion.div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse mr-2"></span>
          <span className="text-slate-500 dark:text-slate-400 text-sm">AI建議配置</span>
        </div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          className="text-yellow-400 font-bold"
        >
          🎰 {percentage}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AssetCard; 