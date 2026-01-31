/**
 * ResourceCard Component
 * 
 * 顯示單一資源的卡片
 * 
 * 功能：
 * 1. 顯示資源名稱、類型、描述
 * 2. 顯示新手友善度（1-3 星）
 * 3. 顯示語言、價格標籤
 * 4. 優缺點列表
 * 5. 外連按鈕
 * 
 * Props:
 * - resource: 來自 wedge_3_curated_resources.json 的單一資源
 * - locale: 'en' | 'zh-TW'
 */

import React from 'react';

interface Resource {
  id: string;
  name: string;
  type: string;
  url: string;
  description: string;
  language: string;
  price: string;
  beginnerFriendly: number;
  topics?: string[];
  strengths?: string[];
  weaknesses?: string[];
  region?: string;
  shipping?: string;
}

interface Props {
  resource: Resource;
  locale: 'en' | 'zh-TW';
  category: 'learning' | 'commerce' | 'tools' | 'communities' | 'kits';
}

export default function ResourceCard({ resource, locale, category }: Props) {
  // 渲染新手友善度星星
  const renderStars = (level: number) => {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(
        <span key={i} className={i < level ? 'star filled' : 'star empty'}>
          ★
        </span>
      );
    }
    return stars;
  };
  
  // 價格標籤顏色
  const getPriceClass = (price: string) => {
    switch (price) {
      case 'free': return 'price-free';
      case 'freemium': return 'price-freemium';
      case 'paid': return 'price-paid';
      default: return '';
    }
  };
  
  // 語言標籤
  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case 'en': return '🇺🇸 EN';
      case 'zh': return '🇨🇳 中文';
      case 'multi': return '🌐 Multi';
      default: return lang.toUpperCase();
    }
  };
  
  // 類型 emoji
  const getTypeEmoji = (type: string) => {
    const typeMap: Record<string, string> = {
      'YouTube': '📺',
      'Tutorial Platform': '📖',
      'Tutorial Blog': '✍️',
      'Learning Platform': '🎓',
      'MOOC': '🏫',
      'Docs': '📚',
      'IDE': '💻',
      'Online Simulator': '🎮',
      'Simulation Platform': '🤖',
      'Framework': '⚙️',
      'CAD Software': '📐',
      'Retailer': '🛒',
      'Manufacturer': '🏭',
      'Manufacturer/Retailer': '🏭',
      'Reddit': '🔴',
      'Discord': '💬',
      'Forum': '💭',
      'Arduino Kit': '🔌',
      'Quadruped Kit': '🐕',
      'Raspberry Pi Kit': '🍓',
      'Educational Kit': '🎒',
      'ROS Platform': '🤖'
    };
    return typeMap[type] || '📦';
  };

  return (
    <div className={`resource-card category-${category}`}>
      {/* Header */}
      <div className="resource-header">
        <span className="resource-type-emoji">{getTypeEmoji(resource.type)}</span>
        <h3 className="resource-name">{resource.name}</h3>
        <span className="resource-type">{resource.type}</span>
      </div>
      
      {/* Description */}
      <p className="resource-description">{resource.description}</p>
      
      {/* Tags */}
      <div className="resource-tags">
        {/* Beginner Friendly */}
        {resource.beginnerFriendly && (
          <span className="tag beginner-tag" title={locale === 'zh-TW' ? '新手友善度' : 'Beginner Friendly'}>
            {renderStars(resource.beginnerFriendly)}
          </span>
        )}
        
        {/* Price */}
        {resource.price && (
          <span className={`tag ${getPriceClass(resource.price)}`}>
            {resource.price === 'free' ? (locale === 'zh-TW' ? '免費' : 'Free') :
             resource.price === 'freemium' ? (locale === 'zh-TW' ? '免費增值' : 'Freemium') :
             (locale === 'zh-TW' ? '付費' : 'Paid')}
          </span>
        )}
        
        {/* Language */}
        {resource.language && (
          <span className="tag language-tag">
            {getLanguageLabel(resource.language)}
          </span>
        )}
        
        {/* Region (for commerce) */}
        {resource.region && (
          <span className="tag region-tag">
            📍 {resource.region}
          </span>
        )}
      </div>
      
      {/* Topics */}
      {resource.topics && resource.topics.length > 0 && (
        <div className="resource-topics">
          {resource.topics.map(topic => (
            <span key={topic} className="topic-tag">#{topic}</span>
          ))}
        </div>
      )}
      
      {/* Strengths & Weaknesses */}
      <div className="resource-details">
        {resource.strengths && resource.strengths.length > 0 && (
          <div className="strengths">
            <span className="detail-label">✅ {locale === 'zh-TW' ? '優點' : 'Pros'}:</span>
            <ul>
              {resource.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        
        {resource.weaknesses && resource.weaknesses.length > 0 && (
          <div className="weaknesses">
            <span className="detail-label">⚠️ {locale === 'zh-TW' ? '注意' : 'Note'}:</span>
            <ul>
              {resource.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* CTA */}
      <a 
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="resource-cta"
      >
        {locale === 'zh-TW' ? '前往 →' : 'Visit →'}
      </a>
    </div>
  );
}
