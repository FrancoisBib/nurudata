// In-memory user store (replace with database in production)
export type PlanType = 'basic' | 'pro';

export interface User {
  id: string;
  email: string;
  password: string;
  plan: PlanType;
  credits: number;
  monthlyConversions: number;
  lastResetDate: string; // ISO date string for monthly reset
}

export const users: User[] = [];