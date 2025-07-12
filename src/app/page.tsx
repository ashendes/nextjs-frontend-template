import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { 
  ArrowRight, 
  Zap, 
  Palette, 
  Shield, 
  Smartphone, 
  Search, 
  Github, 
  ExternalLink,
  Code,
  Layers,
  Moon,
  Sun
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="section-padding py-6 border-b border-border/50">
        <div className="container-width flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold">Next.js 15 Template</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-blur opacity-50" />
        <div className="container-width relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Build{' '}
              <span className="text-gradient">
                Modern
              </span>{' '}
              <br />
              Web Apps Fast
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto text-pretty">
              A comprehensive Next.js 15 frontend template with TypeScript, Tailwind CSS v4, 
              and everything you need to build production-ready applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding py-20 bg-background-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Built with modern technologies and best practices for optimal performance and developer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-foreground-muted">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding py-20">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built With Modern Tech
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Carefully selected technologies that work together seamlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <div className="mb-4">
                  <tech.icon className="h-8 w-8 mx-auto text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{tech.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20 bg-primary/5">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground-muted mb-8 max-w-2xl mx-auto">
            Clone this template and start building your next amazing project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8">
              <Github className="mr-2 h-4 w-4" />
              Clone Repository
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-12 border-t border-border/50">
        <div className="container-width text-center">
          <p className="text-foreground-muted">
            Built with ❤️ using Next.js 15 and Tailwind CSS v4
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: 'Next.js 15',
    description: 'Latest version with App Router, React Server Components, and improved performance.',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS v4',
    description: 'The latest version with new features and improved performance.',
  },
  {
    icon: Shield,
    title: 'TypeScript',
    description: 'Full TypeScript support with strict configuration for type safety.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach with beautiful designs across all devices.',
  },
  {
    icon: Moon,
    title: 'Dark Mode',
    description: 'Built-in dark mode support with system preference detection.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Comprehensive SEO setup with meta tags and structured data.',
  },
];

const techStack = [
  { name: 'Next.js', icon: Code },
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Tailwind', icon: Palette },
  { name: 'Geist Font', icon: Layers },
  { name: 'Lucide Icons', icon: Sun },
]; 