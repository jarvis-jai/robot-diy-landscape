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
 */

import React, { useState } from 'react';
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
        <title>{t.common.siteName}</title>
        <meta name="description" content={t.common.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
              locale={locale}
            />
            
            {/* Alternative Paths */}
            <div className="alternative-paths">
              <h3>{t.result.alternativePath}</h3>
              <div className="path-thumbnails">
                {Object.entries(learningPaths.paths)
                  .filter(([id]) => id !== selectedPath)
                  .map(([id, path]: [string, any]) => (
                    <button
                      key={id}
                      className="path-thumbnail"
                      onClick={() => setSelectedPath(id)}
                    >
                      <span className="thumbnail-emoji">{path.emoji}</span>
                      <span className="thumbnail-name">{path.name}</span>
                    </button>
                  ))
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
