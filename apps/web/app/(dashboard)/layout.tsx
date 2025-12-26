'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  User,
  Sparkles,
  Command,
  MessageSquare,
  X,
  Menu
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Sales', href: '/sales', icon: ShoppingCart },
  { name: 'HR', href: '/hr', icon: Users },
  { name: 'Finance', href: '/finance', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [aiPanelOpen, setAiPanelOpen] = useState(false)

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileSidebarOpen(false)
  }, [pathname])

  // Close mobile sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileSidebarOpen(false)
        setAiPanelOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 text-white transition-all duration-300",
          // Desktop: show based on collapsed state
          "hidden lg:flex",
          sidebarCollapsed ? "lg:w-16" : "lg:w-64"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-white/10">
          {!sidebarCollapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Kyte</span>
            </Link>
          )}
          {sidebarCollapsed && (
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold text-lg">K</span>
            </div>
          )}
        </div>

        {/* AI Assistant Button */}
        <div className={cn("px-2 py-4", sidebarCollapsed && "px-2")}>
          <button
            onClick={() => setAiPanelOpen(true)}
            className={cn(
              "w-full flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-sm font-medium shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-purple-500 transition-all",
              sidebarCollapsed && "justify-center px-0"
            )}
          >
            <Sparkles className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <>
                <span className="flex-1 text-left">Ask Kyte AI</span>
                <kbd className="hidden xl:inline-flex h-5 items-center gap-1 rounded bg-white/10 px-1.5 text-[10px] font-medium">
                  <Command className="h-3 w-3" />K
                </kbd>
              </>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                      isActive
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-cyan-400")} />
                    {!sidebarCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Collapse Button */}
        <div className="border-t border-white/10 p-2">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="flex w-full items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col w-72 bg-gradient-to-b from-slate-900 to-slate-950 text-white transition-transform duration-300 lg:hidden",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile Logo */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Kyte</span>
          </Link>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile AI Assistant Button */}
        <div className="px-3 py-4">
          <button
            onClick={() => {
              setMobileSidebarOpen(false)
              setAiPanelOpen(true)
            }}
            className="w-full flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-medium shadow-lg shadow-violet-500/25"
          >
            <Sparkles className="h-5 w-5 flex-shrink-0" />
            <span className="flex-1 text-left">Ask Kyte AI</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                      isActive
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-cyan-400")} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile User Info */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300",
          // Desktop padding based on sidebar state
          sidebarCollapsed ? "lg:pl-16" : "lg:pl-64"
        )}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-2 sm:gap-4 border-b bg-white/80 backdrop-blur-xl px-4 sm:px-6 shadow-sm">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>

          {/* Mobile Logo */}
          <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
          </Link>

          <div className="flex flex-1 items-center gap-2 sm:gap-4">
            {/* Search - hidden on small mobile */}
            <div className="relative hidden sm:block sm:w-64 lg:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-gray-50/50 border-gray-200"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            {/* Mobile search button */}
            <Button variant="ghost" size="icon" className="sm:hidden text-gray-600">
              <Search className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setAiPanelOpen(true)}
            >
              <Sparkles className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-medium">
                3
              </span>
            </Button>

            {/* Desktop user info */}
            <div className="hidden sm:flex items-center gap-3 border-l border-gray-200 pl-3 sm:pl-4">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6">
          {children}
        </main>
      </div>

      {/* AI Assistant Panel */}
      {aiPanelOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setAiPanelOpen(false)}
          />
          
          {/* Panel - Full height on mobile, centered on desktop */}
          <div className="relative w-full h-[90vh] sm:h-auto sm:max-h-[80vh] sm:max-w-2xl sm:mx-4 bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom sm:fade-in sm:zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b bg-gradient-to-r from-violet-600 to-purple-600 text-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-semibold">Kyte AI Assistant</h2>
                  <p className="text-sm text-white/70 hidden sm:block">Ask anything about your business</p>
                </div>
              </div>
              <button 
                onClick={() => setAiPanelOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Area */}
            <div className="h-[calc(100%-8rem)] sm:h-96 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gray-50">
              {/* AI Welcome Message */}
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border max-w-[85%] sm:max-w-md">
                  <p className="text-sm text-gray-700">
                    Hello! I&apos;m Kyte AI, your intelligent business assistant. I can help you with:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      Analyzing sales and inventory data
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      Creating reports and summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      Answering questions about your business
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                      Automating routine tasks
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-700">
                    What would you like to know?
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 pl-11">
                <button className="px-3 py-1.5 text-xs sm:text-sm bg-white border rounded-full hover:bg-gray-50 hover:border-violet-300 transition-colors">
                  📊 Today&apos;s sales
                </button>
                <button className="px-3 py-1.5 text-xs sm:text-sm bg-white border rounded-full hover:bg-gray-50 hover:border-violet-300 transition-colors">
                  📦 Low stock
                </button>
                <button className="px-3 py-1.5 text-xs sm:text-sm bg-white border rounded-full hover:bg-gray-50 hover:border-violet-300 transition-colors">
                  👥 HR approvals
                </button>
              </div>
            </div>
            
            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="Ask Kyte anything..."
                    className="pr-10 bg-gray-50 border-gray-200"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-500/25 px-4 sm:px-6">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
