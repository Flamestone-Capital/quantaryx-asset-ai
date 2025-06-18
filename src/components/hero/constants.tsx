import React from 'react';
import { Brain, ChartBar, Database, Search, Briefcase, Activity, Repeat, ChartPie } from 'lucide-react';
import { FeatureItem } from './types';

export const advancedFeatures: FeatureItem[] = [
  {
    id: "wealth-overview",
    title: "hero.advancedFeatures.wealthOverview.title",
    icon: <ChartPie className="h-6 w-6 text-quantaryx-purple dark:text-quantaryx-purple" />,
    description: "hero.advancedFeatures.wealthOverview.description",
    details: "hero.advancedFeatures.wealthOverview.details",
    chartType: "pie",
    capabilities: [
      "hero.advancedFeatures.wealthOverview.capabilities.0",
      "hero.advancedFeatures.wealthOverview.capabilities.1",
      "hero.advancedFeatures.wealthOverview.capabilities.2",
      "hero.advancedFeatures.wealthOverview.capabilities.3"
    ],
    uniqueFeature: "hero.advancedFeatures.wealthOverview.uniqueFeature",
    aiInsight: "hero.advancedFeatures.wealthOverview.aiInsight"
  },
  {
    id: "alternative-investments",
    title: "hero.advancedFeatures.alternativeInvestments.title",
    icon: <Briefcase className="h-6 w-6 text-quantaryx-purple dark:text-quantaryx-purple" />,
    description: "hero.advancedFeatures.alternativeInvestments.description",
    details: "hero.advancedFeatures.alternativeInvestments.details",
    chartType: "pie",
    capabilities: [
      "hero.advancedFeatures.alternativeInvestments.capabilities.0",
      "hero.advancedFeatures.alternativeInvestments.capabilities.1",
      "hero.advancedFeatures.alternativeInvestments.capabilities.2",
      "hero.advancedFeatures.alternativeInvestments.capabilities.3"
    ],
    uniqueFeature: "hero.advancedFeatures.alternativeInvestments.uniqueFeature",
    aiInsight: "hero.advancedFeatures.alternativeInvestments.aiInsight"
  },
  {
    id: "real-time-tracking",
    title: "hero.advancedFeatures.realTimeTracking.title",
    icon: <Activity className="h-6 w-6 text-quantaryx-purple dark:text-quantaryx-purple" />,
    description: "hero.advancedFeatures.realTimeTracking.description",
    details: "hero.advancedFeatures.realTimeTracking.details",
    chartType: "line",
    capabilities: [
      "hero.advancedFeatures.realTimeTracking.capabilities.0",
      "hero.advancedFeatures.realTimeTracking.capabilities.1",
      "hero.advancedFeatures.realTimeTracking.capabilities.2",
      "hero.advancedFeatures.realTimeTracking.capabilities.3"
    ],
    uniqueFeature: "hero.advancedFeatures.realTimeTracking.uniqueFeature",
    aiInsight: "hero.advancedFeatures.realTimeTracking.aiInsight"
  },
  {
    id: "automated-trading",
    title: "hero.advancedFeatures.automatedTrading.title",
    icon: <Repeat className="h-6 w-6 text-quantaryx-purple dark:text-quantaryx-purple" />,
    description: "hero.advancedFeatures.automatedTrading.description",
    details: "hero.advancedFeatures.automatedTrading.details",
    chartType: "bar",
    capabilities: [
      "hero.advancedFeatures.automatedTrading.capabilities.0",
      "hero.advancedFeatures.automatedTrading.capabilities.1",
      "hero.advancedFeatures.automatedTrading.capabilities.2",
      "hero.advancedFeatures.automatedTrading.capabilities.3"
    ],
    uniqueFeature: "hero.advancedFeatures.automatedTrading.uniqueFeature",
    aiInsight: "hero.advancedFeatures.automatedTrading.aiInsight"
  },
  {
    id: "full-ai",
    title: "hero.advancedFeatures.fullAi.title",
    icon: <Brain className="h-6 w-6 text-quantaryx-purple dark:text-quantaryx-purple" />,
    description: "hero.advancedFeatures.fullAi.description",
    details: "hero.advancedFeatures.fullAi.details",
    chartType: "advanced",
    capabilities: [
      "hero.advancedFeatures.fullAi.capabilities.0",
      "hero.advancedFeatures.fullAi.capabilities.1",
      "hero.advancedFeatures.fullAi.capabilities.2",
      "hero.advancedFeatures.fullAi.capabilities.3"
    ],
    uniqueFeature: "hero.advancedFeatures.fullAi.uniqueFeature",
    aiInsight: "hero.advancedFeatures.fullAi.aiInsight"
  }
];
