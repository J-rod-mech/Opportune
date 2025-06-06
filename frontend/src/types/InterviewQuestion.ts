import { Company } from "./Company";
import { User } from "./User";

export interface InterviewQuestionJSON {
  _id: string;
  company: Company;
  user: User;
  question: string;
  date?: string;
}

export interface InterviewQuestion {
  _id: string;
  company: Company;
  user: User;
  question: string;
  date?: Date;
}

export interface CreateInterviewQuestionRequest {
  company: Company;
  user: string;
  question: string;
  date?: Date;
}

export interface UpdateInterviewQuestionRequest {
  company?: Company;
  user?: User;
  question?: string;
  date?: Date;
}

export interface GetInterviewQuestionsQuery {
  page?: number;
  perPage?: number;
  query?: string;
  sortBy?: string;
}
