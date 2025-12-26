'use client'

import Link from 'next/link'
import { 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Sparkles,
  Bot,
  Clock,
  Globe,
  Rocket,
  ChevronRight,
  Play,
  MapPin,
  Lock,
  FileCheck,
  Server
} from 'lucide-react'
import { useState, useEffect } from 'react'

const modules = [
  {
    name: 'Inventory Management',
    description: 'AI-powered stock predictions, automated reordering, multi-warehouse tracking',
    icon: Package,
    href: '/inventory',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Sales & CRM',
    description: 'Smart customer insights, automated follow-ups, revenue forecasting',
    icon: ShoppingCart,
    href: '/sales',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Human Resources',
    description: 'Streamlined payroll, attendance tracking, performance analytics',
    icon: Users,
    href: '/hr',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    name: 'Financial Management',
    description: 'Real-time reporting, automated invoicing, cash flow predictions',
    icon: BarChart3,
    href: '/finance',
    gradient: 'from-amber-500 to-orange-500',
  },
]

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Deploy in days, not months. Start seeing value immediately.' },
  { icon: Sparkles, title: 'AI-Powered', description: 'Agentic AI that learns your workflows and automates the mundane.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade security without the enterprise complexity.' },
  { icon: Globe, title: 'Work Anywhere', description: 'Cloud-native, mobile-ready, works on any device.' },
]

const stats = [
  { value: '10x', label: 'Faster deployment' },
  { value: '60%', label: 'Time saved on operations' },
  { value: '99.9%', label: 'Uptime guarantee' },
  { value: '24/7', label: 'AI assistant support' },
]

const testimonials = [
  {
    quote: "Kyte transformed how we operate. What used to take our team hours now happens automatically.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "TechFlow Solutions",
    location: "Sydney"
  },
  {
    quote: "The AI assistant is like having an expert consultant available 24/7. Game changer for our small team.",
    author: "Marcus Thompson",
    role: "CEO",
    company: "Rapid Retail Co",
    location: "Melbourne"
  },
  {
    quote: "We evaluated SAP, Odoo, and NetSuite. Kyte was up and running while the others were still in 'discovery phase'.",
    author: "Emma Richards",
    role: "CFO",
    company: "GrowthWorks Australia",
    location: "Brisbane"
  }
]

const australianFeatures = [
  {
    icon: Server,
    title: 'Australian Hosted',
    description: 'All data stored securely in Australian data centres. Your data never leaves the country.'
  },
  {
    icon: FileCheck,
    title: 'ATO Compliant',
    description: 'Fully compliant with Australian Taxation Office requirements including STP Phase 2.'
  },
  {
    icon: Shield,
    title: 'Privacy Act Ready',
    description: 'Built to meet Australian Privacy Principles (APPs) and data protection standards.'
  },
  {
    icon: Lock,
    title: 'Australian Standards',
    description: 'ISO 27001 certified with compliance to Australian cyber security frameworks.'
  }
]

const aiCapabilities = [
  'Predict inventory needs before stockouts',
  'Generate financial reports with natural language',
  'Automate customer follow-ups at scale',
  'Detect anomalies and flag issues proactively',
  'Answer any question about your business instantly',
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">Kyte</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              <Link href="#modules" className="text-gray-400 hover:text-white transition-colors">Modules</Link>
              <Link href="#ai" className="text-gray-400 hover:text-white transition-colors">AI</Link>
              <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard"
                className="text-gray-400 hover:text-white font-medium transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/dashboard"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all font-medium shadow-lg shadow-blue-500/25"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Powered by Agentic AI</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Future of ERP
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Is Here
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Kyte is the AI-powered ERP built for small businesses ready to compete with the giants. 
            <span className="text-white font-medium"> Simple. Flexible. Lightning fast.</span>
            {' '}Deploy in days, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all font-semibold text-lg shadow-xl shadow-blue-500/25"
            >
              View Live Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-all font-semibold text-lg"
            >
              <Play className="h-5 w-5" />
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Small Businesses Choose Kyte
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Enterprise power without the enterprise complexity. Built different from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Bot className="h-4 w-4 text-violet-400" />
                <span className="text-sm text-violet-300">Agentic AI Inside</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your AI-Powered
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Business Copilot
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-8">
                Kyte&apos;s AI isn&apos;t just a chatbot—it&apos;s an intelligent agent that understands your 
                business context, learns your workflows, and takes action on your behalf.
              </p>

              <div className="space-y-4">
                {aiCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* AI Chat mockup */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Kyte AI</div>
                    <div className="text-sm text-gray-500">Always online</div>
                  </div>
                  <div className="ml-auto h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
                      <p className="text-sm">What products are running low on stock?</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-white/5 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-gray-300 mb-3">I found 3 products that need attention:</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs bg-red-500/10 rounded-lg px-3 py-2">
                          <span>Pro Tool Set</span>
                          <span className="text-red-400 font-medium">Out of stock</span>
                        </div>
                        <div className="flex items-center justify-between text-xs bg-amber-500/10 rounded-lg px-3 py-2">
                          <span>Premium Widget</span>
                          <span className="text-amber-400 font-medium">15 remaining</span>
                        </div>
                        <div className="flex items-center justify-between text-xs bg-amber-500/10 rounded-lg px-3 py-2">
                          <span>Safety Equipment</span>
                          <span className="text-amber-400 font-medium">8 remaining</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-3">Should I create purchase orders for these items?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center gap-3">
                  <input
                    type="text"
                    placeholder="Ask Kyte anything..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-violet-500/50"
                    disabled
                  />
                  <button className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 blur-xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything Integrated. Nothing Missing.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Four powerful modules that work together seamlessly. 
              No more juggling multiple tools and spreadsheets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative flex items-start gap-5">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <module.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {module.name}
                    </h3>
                    <p className="text-gray-400">{module.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by Growing Businesses
            </h2>
            <p className="text-lg text-gray-400">
              Join hundreds of companies already transforming their operations with Kyte.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeTestimonial 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 absolute inset-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-medium text-gray-200 mb-8 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-500">{testimonial.role} at {testimonial.company}</div>
                      <div className="flex items-center justify-center gap-1 text-gray-600 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{testimonial.location}, Australia</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'w-8 bg-cyan-500' 
                      : 'w-2 bg-white/20 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Australian Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Proudly Australian</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Australian Businesses
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              100% Australian owned and operated. Your data stays in Australia, 
              protected by Australian law and hosted on local infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {australianFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Sydney</div>
              <div className="text-xs text-gray-500">Primary Data Centre</div>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Melbourne</div>
              <div className="text-xs text-gray-500">Backup Data Centre</div>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-500">Local Support</div>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">AEST</div>
              <div className="text-xs text-gray-500">Business Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-12 md:p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />
            </div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Rocket className="h-4 w-4" />
                <span className="text-sm">Free 14-day trial</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to transform your business?
              </h2>
              
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                Join the ERP revolution. Start your free trial today and see why 
                businesses are switching to Kyte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <p className="text-sm text-blue-200 mt-6">
                <Clock className="h-4 w-4 inline mr-1" />
                Setup in under 5 minutes. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">Kyte</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="hover:text-white transition-colors">Security</Link>
              <Link href="#" className="hover:text-white transition-colors">Contact</Link>
            </div>
            
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Kyte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
