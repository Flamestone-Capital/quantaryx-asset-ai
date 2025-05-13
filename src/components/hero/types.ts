
import { ReactNode } from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  details: string; // Adding the missing property
  chartType: 'bar' | 'pie' | 'line' | 'advanced';
  capabilities: string[];
  uniqueFeature: string;
  aiInsight: string;
}

export interface AIFeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  chartType: 'bar' | 'pie' | 'line' | 'advanced';
  cardTitle: string;
  cardValue: string;
  insight: string;
  chartData: any; // This could be more specifically typed based on chart data structure
  detailedDescription: string;
}
