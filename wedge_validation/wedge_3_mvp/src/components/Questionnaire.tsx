/**
 * Questionnaire Component
 * 
 * 核心路徑推薦器問卷 UI
 * 
 * 功能：
 * 1. 依序顯示 5 個問題
 * 2. 收集用戶回答
 * 3. 根據權重計算推薦路徑
 * 4. 顯示個人化結果
 * 
 * Props:
 * - questions: 來自 wedge_3_learning_paths.json 的問題陣列
 * - paths: 來自 wedge_3_learning_paths.json 的路徑定義
 * - resources: 來自 wedge_3_curated_resources.json 的資源
 * - locale: 'en' | 'zh-TW'
 * - onComplete: (pathId: string, answers: Answers) => void
 */

import React, { useState } from 'react';

// Types
interface QuestionOption {
  value: string;
  label: string;
  weight?: Record<string, number>;
  budgetTier?: number;
  resourceType?: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface Answers {
  experience: string;
  goal: string;
  type: string;
  budget: string;
  style: string;
}

interface Props {
  questions: Question[];
  paths: Record<string, any>;
  locale: 'en' | 'zh-TW';
  onComplete: (pathId: string, answers: Answers) => void;
}

export default function Questionnaire({ questions, paths, locale, onComplete }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  
  const currentQuestion = questions[currentStep];
  const totalSteps = questions.length;
  const isLastStep = currentStep === totalSteps - 1;
  
  const handleSelect = (value: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value
    };
    setAnswers(newAnswers);
    
    if (isLastStep) {
      // 計算推薦路徑
      const recommendedPath = calculatePath(newAnswers as Answers, questions);
      onComplete(recommendedPath, newAnswers as Answers);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="questionnaire">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
      
      {/* Question Counter */}
      <p className="step-counter">
        {locale === 'zh-TW' 
          ? `問題 ${currentStep + 1} / ${totalSteps}`
          : `Question ${currentStep + 1} / ${totalSteps}`
        }
      </p>
      
      {/* Question */}
      <h2 className="question-text">{currentQuestion.text}</h2>
      
      {/* Options */}
      <div className="options-grid">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            className={`option-button ${answers[currentQuestion.id as keyof Answers] === option.value ? 'selected' : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      
      {/* Navigation */}
      {currentStep > 0 && (
        <button className="back-button" onClick={handleBack}>
          {locale === 'zh-TW' ? '← 上一題' : '← Previous'}
        </button>
      )}
    </div>
  );
}

/**
 * 計算推薦路徑
 * 
 * 算法：
 * 1. 如果用戶明確選擇了機器人類型（非 unsure），直接返回該類型
 * 2. 否則，根據所有問題的權重累加計算最高分的路徑
 */
function calculatePath(answers: Answers, questions: Question[]): string {
  // 如果用戶明確選擇了類型
  if (answers.type !== 'unsure') {
    return answers.type;
  }
  
  // 計算權重分數
  const scores: Record<string, number> = {
    wheeled: 0,
    arm: 0,
    drone: 0,
    unsure: 0
  };
  
  questions.forEach(question => {
    const answerValue = answers[question.id as keyof Answers];
    const selectedOption = question.options.find(opt => opt.value === answerValue);
    
    if (selectedOption?.weight) {
      Object.entries(selectedOption.weight).forEach(([pathId, weight]) => {
        scores[pathId] += weight;
      });
    }
  });
  
  // 返回最高分的路徑
  const sortedPaths = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sortedPaths[0][0];
}
