// Global type definitions for Andrew Distribution website

export interface RouteConfig {
  path: string;
  name: string;
  component: string;
  description?: string;
}

export interface NavigationLink {
  name: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface ServiceItem {
  name: string;
  href: string;
  description: string;
  icon?: string;
}

export interface TestimonialItem {
  name: string;
  company: string;
  content: string;
  rating?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
}

export interface CompanyStats {
  years: number;
  vehicles: number;
  states: number;
  onTimeRate: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
}
