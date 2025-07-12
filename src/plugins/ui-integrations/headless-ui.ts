/**
 * Headless UI Integration Plugin
 * 
 * This file provides setup instructions and examples for integrating Headless UI
 * with the Next.js 15 Frontend Template.
 */

// Installation Instructions:
// npm install @headlessui/react

// Import examples and component configurations
export const headlessUIComponents = {
  dialog: {
    install: 'npm install @headlessui/react',
    import: "import { Dialog } from '@headlessui/react'",
    example: `
import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/25" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
          </div>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}`
  },
  
  menu: {
    import: "import { Menu } from '@headlessui/react'",
    example: `
import { Menu } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Options
        <ChevronDown className="-mr-1 h-5 w-5 text-gray-400" />
      </Menu.Button>
      
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={\`\${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm\`}
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={\`\${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm\`}
              >
                Support
              </a>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}`
  },

  tabs: {
    import: "import { Tab } from '@headlessui/react'",
    example: `
import { Tab } from '@headlessui/react'

export function TabsExample() {
  const categories = {
    Recent: [
      { id: 1, title: 'Does drinking coffee make you smarter?', date: '5h ago' },
      { id: 2, title: 'So you've bought coffee... now what?', date: '2h ago' },
    ],
    Popular: [
      { id: 1, title: 'Is tech making coffee better or worse?', date: 'Jan 7' },
      { id: 2, title: 'The most innovative things happening in coffee', date: 'Mar 19' },
    ],
  }

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                \`w-full rounded-lg py-2.5 text-sm font-medium leading-5 \${
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                }\`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.entries(categories).map(([category, posts]) => (
            <Tab.Panel key={category} className="rounded-xl bg-white p-3">
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100">
                    <h3 className="text-sm font-medium leading-5">{post.title}</h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}`
  },

  disclosure: {
    import: "import { Disclosure } from '@headlessui/react'",
    example: `
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from 'lucide-react'

export function FAQ() {
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "How do you make holy water?",
      answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
  ]

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {faqs.map((faq, index) => (
          <Disclosure key={index} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={\`\${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500\`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}`
  }
};

// Styling integration with Tailwind CSS
export const tailwindIntegration = {
  setup: `
// Add these utilities to your globals.css for better Headless UI integration:

@layer utilities {
  .headlessui-focus {
    @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2;
  }
  
  .headlessui-transition {
    @apply transition duration-200 ease-in-out;
  }
  
  .headlessui-overlay {
    @apply fixed inset-0 bg-black/25 backdrop-blur-sm;
  }
  
  .headlessui-panel {
    @apply relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all;
  }
}`,

  darkMode: `
// Dark mode support for Headless UI components:
// Use these classes in your components for consistent dark mode styling

.dark .headlessui-panel {
  @apply bg-gray-800 text-white;
}

.dark .headlessui-overlay {
  @apply bg-black/50;
}
`
};

// Best practices and accessibility notes
export const bestPractices = {
  accessibility: [
    "Always use semantic HTML elements as the base",
    "Provide proper ARIA labels and descriptions",
    "Ensure keyboard navigation works correctly",
    "Test with screen readers",
    "Use focus management appropriately"
  ],
  
  performance: [
    "Use React.memo for expensive components",
    "Implement proper key props for dynamic lists",
    "Consider lazy loading for heavy modals",
    "Use CSS transforms for animations when possible"
  ],
  
  styling: [
    "Use Tailwind utilities for consistent styling",
    "Implement proper hover and focus states",
    "Consider dark mode from the start",
    "Test on different screen sizes"
  ]
};

export default {
  name: 'headless-ui',
  version: '1.0.0',
  components: headlessUIComponents,
  tailwindIntegration,
  bestPractices,
  setup: {
    install: 'npm install @headlessui/react',
    import: "import { Dialog, Menu, Tab } from '@headlessui/react'",
    docs: 'https://headlessui.com/'
  }
}; 