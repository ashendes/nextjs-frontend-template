import { ReactNode } from 'react';

/**
 * Common component props
 */
export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Button variant types
 */
export type ButtonVariant = 
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

/**
 * Button size types
 */
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Theme types
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Card variant types
 */
export type CardVariant = 'default' | 'outline' | 'filled';

/**
 * Navigation item interface
 */
export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

/**
 * Feature interface
 */
export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * SEO metadata interface
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

/**
 * API response interface
 */
export interface APIResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Form field interface
 */
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
  options?: { value: string; label: string }[];
}

/**
 * Modal props interface
 */
export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

/**
 * Toast types
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

/**
 * Toast interface
 */
export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
} 