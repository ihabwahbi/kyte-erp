import Link from 'next/link'
import { 
  Building2, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const modules = [
  {
    name: 'Inventory Management',
    description: 'Track stock levels, manage warehouses, and automate reordering',
    icon: Package,
    href: '/inventory',
    color: 'bg-blue-500',
  },
  {
    name: 'Sales & CRM',
    description: 'Manage customers, track orders, and analyze sales performance',
    icon: ShoppingCart,
    href: '/sales',
    color: 'bg-green-500',
  },
  {
    name: 'Human Resources',
    description: 'Employee management, payroll, attendance, and performance tracking',
    icon: Users,
    href: '/hr',
    color: 'bg-purple-500',
  },
  {
    name: 'Financial Management',
    description: 'Accounting, invoicing, budgeting, and financial reporting',
    icon: BarChart3,
    href: '/finance',
    color: 'bg-amber-500',
  },
]

const features = [
  'Real-time inventory tracking',
  'Multi-location warehouse support',
  'Automated purchase orders',
  'Customer relationship management',
  'Sales analytics & forecasting',
  'Employee self-service portal',
  'Payroll automation',
  'Financial reporting & dashboards',
  'Role-based access control',
  'API integrations',
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ERP Showcase</span>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Dashboard
              </Link>
              <Link 
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Modern ERP for
            <span className="text-blue-600"> Growing Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Streamline your operations with our comprehensive enterprise resource planning solution. 
            Built for businesses and retail operations of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
            >
              View Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors font-semibold text-lg"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Integrated Business Modules
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your business efficiently, all in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.name}
                href={module.href}
                className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${module.color} text-white`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {module.name}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {module.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Everything you need to scale your business
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our ERP solution provides all the tools and features you need to manage 
                your business operations effectively.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-6 text-blue-100">
                Join thousands of businesses already using our ERP solution to 
                streamline their operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Quick Setup</div>
                    <div className="text-sm text-blue-200">Get started in minutes</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-sm text-blue-200">We&apos;re here to help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-500" />
              <span className="text-white font-semibold">ERP Showcase</span>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} ERP Showcase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
