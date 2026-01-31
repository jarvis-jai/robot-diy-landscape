/**
 * Home Page - Robotics DIY Onramp
 * 
 * 首頁結構：
 * 1. Hero Section - 標語 + CTA
 * 2. Questionnaire Component - 5 題問卷
 * 3. Result Section - 顯示推薦路徑（問卷完成後）
 * 
 * 狀態管理：
 * - showResult: boolean - 控制顯示問卷 vs 結果
 * - selectedPath: string - 推薦的路徑 ID
 * - answers: Answers - 用戶的回答
 * - budgetTier: number - 預算等級
 * 
 * SEO 優化（第 29 輪）：
 * - Open Graph tags for social sharing
 * - Twitter Card tags
 * - JSON-LD structured data
 * - Canonical URL
 * - hreflang for multilingual
 */

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Questionnaire from '../components/Questionnaire';
import PathCard from '../components/PathCard';

// 靜態數據導入
import curatedResources from '../../wedge_3_curated_resources.json';
import learningPaths from '../../wedge_3_learning_paths.json';

// 翻譯導入
import enTranslations from '../i18n/en.json';
import zhTWTranslations from '../i18n/zh-TW.json';

type Locale = 'en' | 'zh-TW';

// SEO 配置
const SEO_CONFIG = {
  siteUrl: 'https://robotics-onramp.vercel.app',
  defaultImage: '/og-image.png',
  twitterHandle: '@roboticsonramp',
  locale: {
    'en': 'en_US',
    'zh-TW': 'zh_TW'
  }
};

interface Answers {
  experience: string;
  goal: string;
  type: string;
  budget: string;
  style: string;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [showResult, setShowResult] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [answers, setAnswers] = useState<Answers | null>(null);
  
  const t = locale === 'zh-TW' ? zhTWTranslations : enTranslations;
  
  // 更新 html lang attribute 當 locale 變化
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  
  // SEO 數據
  const seoTitle = t.seo?.title || t.common.siteName;
  const seoDescription = t.seo?.description || t.common.tagline;
  const seoKeywords = t.seo?.keywords || 'robotics, DIY, robot, learning, beginner, Arduino, ROS';
  const ogLocale = SEO_CONFIG.locale[locale];
  
  // JSON-LD 結構化數據
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': t.common.siteName,
    'description': seoDescription,
    'url': SEO_CONFIG.siteUrl,
    'applicationCategory': 'EducationalApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'author': {
      '@type': 'Organization',
      'name': 'Robot DIY Landscape Project',
      'url': 'https://github.com/robot-diy-landscape'
    },
    'inLanguage': [locale],
    'isAccessibleForFree': true,
    'educationalUse': ['Self-study', 'Guided learning'],
    'learningResourceType': 'Learning pathway',
    'audience': {
      '@type': 'Audience',
      'audienceType': 'Hobbyist, Maker, Student'
    }
  };
  
  // 根據預算答案計算 budgetTier
  const getBudgetTier = (budget: string): number => {
    const tierMap: Record<string, number> = {
      'low': 1,
      'medium': 2,
      'high': 3,
      'pro': 4
    };
    return tierMap[budget] || 2;
  };
  
  // 問卷完成回調
  const handleQuestionnaireComplete = (pathId: string, userAnswers: Answers) => {
    setSelectedPath(pathId);
    setAnswers(userAnswers);
    setShowResult(true);
  };
  
  // 重新開始
  const handleStartOver = () => {
    setShowResult(false);
    setSelectedPath('');
    setAnswers(null);
  };
  
  // 建立資源映射（id -> resource）
  const resourcesMap: Record<string, any> = {};
  Object.values(curatedResources).forEach((category: any) => {
    if (Array.isArray(category)) {
      category.forEach((resource: any) => {
        resourcesMap[resource.id] = resource;
      });
    }
  });
  
  // 建立社群映射
  const communitiesMap: Record<string, any> = {};
  curatedResources.communities.forEach((community: any) => {
    communitiesMap[community.id] = community;
  });

  return (
    <>
      <Head>
        {/* 基本 Meta */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={SEO_CONFIG.siteUrl} />
        
        {/* hreflang for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href={`${SEO_CONFIG.siteUrl}?lang=en`} />
        <link rel="alternate" hrefLang="zh-TW" href={`${SEO_CONFIG.siteUrl}?lang=zh-TW`} />
        <link rel="alternate" hrefLang="x-default" href={SEO_CONFIG.siteUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_CONFIG.siteUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Robotics DIY Onramp - Find your path" />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={locale === 'en' ? 'zh_TW' : 'en_US'} />
        <meta property="og:site_name" content={t.common.siteName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SEO_CONFIG.siteUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`} />
        <meta name="twitter:image:alt" content="Robotics DIY Onramp - Find your path" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      
      <main className="container">
        {/* Language Toggle */}
        <div className="language-toggle">
          <button 
            className={locale === 'en' ? 'active' : ''}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
          <button 
            className={locale === 'zh-TW' ? 'active' : ''}
            onClick={() => setLocale('zh-TW')}
          >
            繁中
          </button>
        </div>
        
        {/* Hero Section */}
        {!showResult && (
          <section className="hero">
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
          </section>
        )}
        
        {/* Questionnaire or Result */}
        {!showResult ? (
          <Questionnaire
            questions={learningPaths.questions}
            paths={learningPaths.paths}
            translations={t}
            locale={locale}
            onComplete={handleQuestionnaireComplete}
          />
        ) : (
          <div className="result-container">
            <PathCard
              path={learningPaths.paths[selectedPath as keyof typeof learningPaths.paths]}
              budgetTier={answers ? getBudgetTier(answers.budget) : 2}
              resources={resourcesMap}
              communities={communitiesMap}
              translations={t}
              locale={locale}
            />
            
            {/* Alternative Paths - Using i18n translated names */}
            <div className="alternative-paths">
              <h3>{t.result.alternativePath}</h3>
              <div className="path-thumbnails">
                {Object.entries(learningPaths.paths)
                  .filter(([id]) => id !== selectedPath)
                  .map(([id, path]: [string, any]) => {
                    const pathTranslation = t.paths[id as keyof typeof t.paths];
                    const translatedName = pathTranslation?.name || path.name;
                    return (
                      <button
                        key={id}
                        className="path-thumbnail"
                        onClick={() => setSelectedPath(id)}
                      >
                        <span className="thumbnail-emoji">{path.emoji}</span>
                        <span className="thumbnail-name">{translatedName}</span>
                      </button>
                    );
                  })
                }
              </div>
            </div>
            
            {/* Start Over Button */}
            <button className="start-over-button" onClick={handleStartOver}>
              {t.result.startOver}
            </button>
          </div>
        )}
        
        {/* Quick Links (always visible) */}
        <nav className="quick-links">
          <a href="/resources">{t.nav.resources}</a>
          <a href="/communities">{t.nav.communities}</a>
          <a href="/about">{t.nav.about}</a>
        </nav>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>{t.footer.madeWith}</p>
        <p>{t.footer.dataSource}</p>
      </footer>
    </>
  );
}
