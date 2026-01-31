/**
 * PathCard Component
 * 
 * 顯示推薦路徑的結果卡片
 * 
 * 功能：
 * 1. 顯示路徑名稱、描述、emoji
 * 2. 根據用戶預算顯示對應的步驟
 * 3. 每個步驟包含：硬體推薦、學習資源、預估時間、社群
 * 4. 提供儲存/分享功能
 * 
 * Props:
 * - path: 來自 wedge_3_learning_paths.json 的單一路徑
 * - budgetTier: 1-4 (對應 <$100 / $100-300 / $300-500 / $500+)
 * - resources: 來自 wedge_3_curated_resources.json 的資源映射
 * - locale: 'en' | 'zh-TW'
 */

import React from 'react';

interface Step {
  step: number;
  title: string;
  duration: string;
  budget: Record<string, any>;
  resources: string[];
  goals: string[];
  communities?: string[];
}

interface Path {
  id: string;
  name: string;
  emoji: string;
  description: string;
  steps: Step[];
}

interface Resource {
  id: string;
  name: string;
  type: string;
  url: string;
  description: string;
  language: string;
  price: string;
  beginnerFriendly: number;
}

interface Props {
  path: Path;
  budgetTier: number;
  resources: Record<string, Resource>;
  communities: Record<string, any>;
  locale: 'en' | 'zh-TW';
}

export default function PathCard({ path, budgetTier, resources, communities, locale }: Props) {
  const budgetTierKey = `tier${budgetTier}`;
  
  // 計算總預算和總時間
  let totalBudget = 0;
  let totalWeeks = 0;
  
  path.steps.forEach(step => {
    const stepBudget = step.budget[budgetTierKey];
    if (!stepBudget?.skip) {
      totalBudget += stepBudget?.cost || 0;
      const weeks = parseInt(step.duration) || 0;
      totalWeeks += weeks;
    }
  });
  
  return (
    <div className="path-card">
      {/* Header */}
      <div className="path-header">
        <span className="path-emoji">{path.emoji}</span>
        <h1 className="path-name">{path.name}</h1>
        <p className="path-description">{path.description}</p>
      </div>
      
      {/* Summary */}
      <div className="path-summary">
        <div className="summary-item">
          <span className="summary-label">
            {locale === 'zh-TW' ? '預估時間' : 'Est. Time'}
          </span>
          <span className="summary-value">
            ~{totalWeeks} {locale === 'zh-TW' ? '週' : 'weeks'}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">
            {locale === 'zh-TW' ? '預估預算' : 'Est. Budget'}
          </span>
          <span className="summary-value">~${totalBudget}</span>
        </div>
      </div>
      
      {/* Steps */}
      <div className="path-steps">
        {path.steps.map((step, index) => {
          const stepBudget = step.budget[budgetTierKey];
          
          // 跳過超出預算的步驟
          if (stepBudget?.skip) {
            return (
              <div key={step.step} className="step-card skipped">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-skip-reason">
                    {stepBudget.reason || (locale === 'zh-TW' ? '超出預算' : 'Over budget')}
                  </p>
                </div>
              </div>
            );
          }
          
          return (
            <div key={step.step} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-duration">⏱️ {step.duration}</p>
                
                {/* Hardware */}
                {stepBudget?.hardware && (
                  <div className="step-hardware">
                    <strong>🔧 {locale === 'zh-TW' ? '硬體' : 'Hardware'}:</strong>
                    <span>{stepBudget.hardware}</span>
                    {stepBudget.cost > 0 && <span className="cost">~${stepBudget.cost}</span>}
                  </div>
                )}
                
                {/* Goals */}
                <div className="step-goals">
                  <strong>🎯 {locale === 'zh-TW' ? '目標' : 'Goals'}:</strong>
                  <ul>
                    {step.goals.map((goal, i) => (
                      <li key={i}>{goal}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Resources */}
                {step.resources.length > 0 && (
                  <div className="step-resources">
                    <strong>📚 {locale === 'zh-TW' ? '資源' : 'Resources'}:</strong>
                    <div className="resource-links">
                      {step.resources.map(resourceId => {
                        const resource = resources[resourceId];
                        if (!resource) return null;
                        return (
                          <a 
                            key={resourceId}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resource-link"
                          >
                            {resource.name}
                            {resource.beginnerFriendly === 3 && ' ⭐'}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* Communities */}
                {step.communities && step.communities.length > 0 && (
                  <div className="step-communities">
                    <strong>💬 {locale === 'zh-TW' ? '社群' : 'Communities'}:</strong>
                    <div className="community-links">
                      {step.communities.map(communityId => {
                        const community = communities[communityId];
                        if (!community) return null;
                        return (
                          <a 
                            key={communityId}
                            href={community.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="community-link"
                          >
                            {community.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Actions */}
      <div className="path-actions">
        <button className="action-button primary">
          {locale === 'zh-TW' ? '儲存結果' : 'Save Result'}
        </button>
        <button className="action-button secondary">
          {locale === 'zh-TW' ? '分享' : 'Share'}
        </button>
        <button className="action-button tertiary">
          {locale === 'zh-TW' ? '重新測驗' : 'Start Over'}
        </button>
      </div>
    </div>
  );
}
