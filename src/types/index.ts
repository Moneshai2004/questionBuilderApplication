export type Role = 'ADMIN' | 'TRAINER' | 'EMPLOYEE';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  topic: string;
  technology: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionBank {
  id: string;
  title: string;
  description: string;
  technology: string;
  topics: string[];
  questions: Question[];
  difficulty: {
    easy: number;
    medium: number;
    hard: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface LearningPlan {
  id: string;
  userId: string;
  title: string;
  description: string;
  technology: string;
  goals: string[];
  timeline: {
    startDate: string;
    endDate: string;
  };
  resources: {
    id: string;
    title: string;
    type: string;
    url: string;
  }[];
  progress: number;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
}