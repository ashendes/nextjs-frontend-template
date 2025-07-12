'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
  description?: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  showIcons?: boolean;
  showDescriptions?: boolean;
  onItemClick?: (item: NavigationItem) => void;
}

export function Navigation({
  items,
  className,
  orientation = 'horizontal',
  showIcons = false,
  showDescriptions = false,
  onItemClick,
}: NavigationProps) {
  const pathname = usePathname();

  const isActiveItem = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row space-x-6' : 'flex-col space-y-2',
        className
      )}
    >
      {items.map((item) => {
        const isActive = isActiveItem(item.href);
        const ItemIcon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={cn(
              'group flex items-center text-sm font-medium transition-colors hover:text-primary',
              orientation === 'vertical' && 'py-2',
              isActive ? 'text-foreground' : 'text-foreground/60'
            )}
            onClick={() => onItemClick?.(item)}
          >
            {showIcons && ItemIcon && (
              <ItemIcon className="mr-2 h-4 w-4" />
            )}
            <div className="flex flex-col">
              <span>{item.name}</span>
              {showDescriptions && item.description && (
                <span className="text-xs text-foreground-muted group-hover:text-foreground/80">
                  {item.description}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavigation({
  items,
  className,
  onItemClick,
}: Omit<NavigationProps, 'orientation'>) {
  const pathname = usePathname();

  const isActiveItem = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className={cn('flex flex-col space-y-1', className)}>
      {items.map((item) => {
        const isActive = isActiveItem(item.href);
        const ItemIcon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className={cn(
              'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground',
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-foreground/60'
            )}
            onClick={() => onItemClick?.(item)}
          >
            {ItemIcon && <ItemIcon className="mr-3 h-4 w-4" />}
            <div className="flex flex-col">
              <span>{item.name}</span>
              {item.description && (
                <span className="text-xs text-foreground-muted mt-0.5">
                  {item.description}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function BreadcrumbNavigation({
  items,
  className,
}: {
  items: Array<{ name: string; href?: string }>;
  className?: string;
}) {
  return (
    <nav
      className={cn('flex items-center space-x-2 text-sm', className)}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          {index > 0 && (
            <span className="text-foreground-muted" aria-hidden="true">
              /
            </span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-foreground">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
} 