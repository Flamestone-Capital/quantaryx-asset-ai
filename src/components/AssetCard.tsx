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
      className="bg-slate-800 rounded-lg p-4 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 shadow-lg"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-white font-medium text-lg">{assetName}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
        ></motion.div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-slate-400 text-sm">建議配置</span>
        <span className="text-white font-bold">{percentage}%</span>
      </div>
    </motion.div>
  );
};

export default AssetCard; 