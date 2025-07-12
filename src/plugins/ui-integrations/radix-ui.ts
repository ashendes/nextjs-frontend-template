/**
 * Radix UI Integration Plugin
 * 
 * This file provides setup instructions and examples for integrating Radix UI
 * with the Next.js 15 Frontend Template.
 */

// Installation Instructions:
// npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-accordion

// Common Radix UI components and their configurations
export const radixUIComponents = {
  dialog: {
    install: 'npm install @radix-ui/react-dialog',
    import: "import * as Dialog from '@radix-ui/react-dialog'",
    example: `
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ModalProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export function Modal({ trigger, title, children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg max-w-md w-full max-h-[85vh] overflow-y-auto">
          <Dialog.Title className="text-lg font-medium mb-4">
            {title}
          </Dialog.Title>
          {children}
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`
  },

  dropdownMenu: {
    install: 'npm install @radix-ui/react-dropdown-menu',
    import: "import * as DropdownMenu from '@radix-ui/react-dropdown-menu'",
    example: `
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreHorizontal, Edit, Trash2, Copy } from 'lucide-react'

export function ActionsDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white rounded-md shadow-lg border p-1 min-w-[160px]">
          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-sm cursor-pointer">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-sm cursor-pointer">
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
          <DropdownMenu.Item className="flex items-center px-3 py-2 text-sm hover:bg-red-50 text-red-600 rounded-sm cursor-pointer">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}`
  },

  accordion: {
    install: 'npm install @radix-ui/react-accordion',
    import: "import * as Accordion from '@radix-ui/react-accordion'",
    example: `
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It comes with no styles by default, giving you freedom over the look and feel.'
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use CSS or JavaScript to animate the accordion.'
  }
]

export function AccordionExample() {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible className="w-full">
      {accordionItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value} className="border-b">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:underline">
              {item.title}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pb-4 pt-0">
              {item.content}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}`
  },

  tooltip: {
    install: 'npm install @radix-ui/react-tooltip',
    import: "import * as Tooltip from '@radix-ui/react-tooltip'",
    example: `
import * as Tooltip from '@radix-ui/react-tooltip'
import { Info } from 'lucide-react'

export function TooltipExample() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <Info className="h-4 w-4" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm shadow-lg"
            sideOffset={5}
          >
            This is a tooltip
            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}`
  },

  tabs: {
    install: 'npm install @radix-ui/react-tabs',
    import: "import * as Tabs from '@radix-ui/react-tabs'",
    example: `
import * as Tabs from '@radix-ui/react-tabs'

export function TabsExample() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-full">
      <Tabs.List className="flex border-b">
        <Tabs.Trigger
          value="tab1"
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
        >
          Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
        >
          Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab3"
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
        >
          Tab 3
        </Tabs.Trigger>
      </Tabs.List>
      
      <Tabs.Content value="tab1" className="mt-4">
        <p>Content for Tab 1</p>
      </Tabs.Content>
      
      <Tabs.Content value="tab2" className="mt-4">
        <p>Content for Tab 2</p>
      </Tabs.Content>
      
      <Tabs.Content value="tab3" className="mt-4">
        <p>Content for Tab 3</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}`
  }
};

// Styling integration with Tailwind CSS
export const tailwindIntegration = {
  animations: `
// Add these animations to your tailwind.config.js:
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
}`,

  darkMode: `
// Dark mode utilities for Radix UI components:
@layer utilities {
  .dark .radix-dropdown-content {
    @apply bg-gray-800 border-gray-700 text-white;
  }
  
  .dark .radix-dropdown-item {
    @apply hover:bg-gray-700 text-gray-200;
  }
  
  .dark .radix-dialog-overlay {
    @apply bg-black/70;
  }
  
  .dark .radix-dialog-content {
    @apply bg-gray-800 text-white border-gray-700;
  }
  
  .dark .radix-tooltip-content {
    @apply bg-gray-700 text-white;
  }
}`
};

// Advanced configuration and customization
export const advancedConfig = {
  theming: `
// Create a consistent theme system for Radix UI components
export const radixTheme = {
  colors: {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    muted: 'hsl(var(--muted))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    border: 'hsl(var(--border))',
  },
  radius: {
    sm: 'calc(var(--radius) - 4px)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  }
};`,

  customHooks: `
// Custom hooks for Radix UI components
import { useState, useEffect } from 'react';

export function useRadixDialog(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);
  
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const toggleDialog = () => setOpen(!open);
  
  return {
    open,
    setOpen,
    openDialog,
    closeDialog,
    toggleDialog
  };
}

export function useRadixDropdown() {
  const [open, setOpen] = useState(false);
  
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  
  return {
    open,
    onOpenChange: handleOpenChange
  };
}`
};

// Best practices and accessibility
export const bestPractices = {
  accessibility: [
    "Radix UI components are accessible by default",
    "Always provide meaningful labels and descriptions",
    "Test keyboard navigation thoroughly",
    "Use semantic HTML structure",
    "Consider screen reader experience"
  ],
  
  performance: [
    "Lazy load heavy components when possible",
    "Use React.memo for expensive renders",
    "Implement proper key props for dynamic lists",
    "Consider virtualization for large datasets"
  ],
  
  styling: [
    "Use data attributes for state-based styling",
    "Implement consistent spacing and sizing",
    "Consider all interactive states (hover, focus, active)",
    "Test dark mode thoroughly"
  ],
  
  customization: [
    "Create wrapper components for consistency",
    "Use CSS custom properties for theming",
    "Implement proper TypeScript types",
    "Document component APIs clearly"
  ]
};

export default {
  name: 'radix-ui',
  version: '1.0.0',
  components: radixUIComponents,
  tailwindIntegration,
  advancedConfig,
  bestPractices,
  setup: {
    install: 'npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-accordion @radix-ui/react-tooltip @radix-ui/react-tabs',
    import: "import * as Dialog from '@radix-ui/react-dialog'",
    docs: 'https://www.radix-ui.com/'
  }
}; 