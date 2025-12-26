'use client'

import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  ArrowRight,
  Clock,
  Sparkles,
  AlertTriangle,
  Zap,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  RefreshCw
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

const stats = [
  {
    name: 'Total Revenue',
    value: '$125,430.50',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    gradient: 'from-emerald-500 to-teal-500',
    shadowColor: 'shadow-emerald-500/25',
  },
  {
    name: 'Total Orders',
    value: '342',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    gradient: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/25',
  },
  {
    name: 'Active Customers',
    value: '1,250',
    change: '+5.1%',
    trend: 'up',
    icon: Users,
    gradient: 'from-violet-500 to-purple-500',
    shadowColor: 'shadow-violet-500/25',
  },
  {
    name: 'Products',
    value: '856',
    change: '-2.3%',
    trend: 'down',
    icon: Package,
    gradient: 'from-amber-500 to-orange-500',
    shadowColor: 'shadow-amber-500/25',
  },
]

const recentOrders = [
  { id: 'ORD-001', customer: 'Acme Corp', total: '$5,430.00', status: 'delivered', date: '2 hours ago', avatar: 'A' },
  { id: 'ORD-002', customer: 'Tech Solutions', total: '$2,890.50', status: 'shipped', date: '4 hours ago', avatar: 'T' },
  { id: 'ORD-003', customer: 'Local Shop', total: '$450.00', status: 'processing', date: '6 hours ago', avatar: 'L' },
  { id: 'ORD-004', customer: 'Global Traders', total: '$12,500.00', status: 'confirmed', date: '8 hours ago', avatar: 'G' },
  { id: 'ORD-005', customer: 'Startup Hub', total: '$890.00', status: 'pending', date: '12 hours ago', avatar: 'S' },
]

const lowStockProducts = [
  { name: 'Premium Widget', sku: 'SKU-001', stock: 15, minStock: 100, urgency: 'medium' },
  { name: 'Pro Tool Set', sku: 'SKU-004', stock: 0, minStock: 10, urgency: 'critical' },
  { name: 'Basic Component', sku: 'SKU-003', stock: 8, minStock: 50, urgency: 'high' },
]

const aiInsights = [
  {
    type: 'prediction',
    icon: TrendingUp,
    title: 'Revenue Forecast',
    message: 'Based on current trends, revenue is projected to increase by 18% next month.',
    action: 'View Forecast',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    type: 'alert',
    icon: AlertTriangle,
    title: 'Stock Alert',
    message: '3 products need restocking within 5 days to avoid stockouts.',
    action: 'Create PO',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    type: 'opportunity',
    icon: Zap,
    title: 'Sales Opportunity',
    message: 'Tech Solutions hasn\'t ordered in 30 days. Consider a follow-up.',
    action: 'Send Email',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
]

const activityFeed = [
  { type: 'order', message: 'New order #ORD-342 from Acme Corp', time: '2 min ago', icon: ShoppingCart },
  { type: 'payment', message: 'Payment received for INV-2024-089', time: '15 min ago', icon: DollarSign },
  { type: 'stock', message: 'Premium Widget stock updated (+50 units)', time: '1 hour ago', icon: Package },
  { type: 'customer', message: 'New customer registered: CloudTech Inc', time: '2 hours ago', icon: Users },
]

const statusColors: Record<string, { bg: string; text: string }> = {
  delivered: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  shipped: { bg: 'bg-blue-100', text: 'text-blue-700' },
  processing: { bg: 'bg-amber-100', text: 'text-amber-700' },
  confirmed: { bg: 'bg-violet-100', text: 'text-violet-700' },
  pending: { bg: 'bg-gray-100', text: 'text-gray-700' },
}

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1000)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-500">Welcome back! Here&apos;s what&apos;s happening with your business.</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="outline" size="sm" onClick={handleRefresh} className="flex-1 sm:flex-none">
            <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-white px-2 sm:px-3 py-1.5 rounded-lg border">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{currentTime.toLocaleTimeString()}</span>
            <span className="sm:hidden">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>

      {/* AI Insights Banner */}
      <Card className="bg-gradient-to-r from-violet-600 to-purple-600 border-0 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwSDBoNnYzMGgtNlYzMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
        <CardContent className="p-4 sm:p-6 relative">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-base sm:text-lg mb-1">Kyte AI Insights</h3>
              <p className="text-white/80 text-sm sm:text-base mb-3 sm:mb-4">
                Your business is performing 15% better than last week. Here are 3 actionable insights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-3 hover:bg-white/20 transition-colors cursor-pointer">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <insight.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{insight.title}</span>
                    </div>
                    <p className="text-xs text-white/70 line-clamp-2">{insight.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.shadowColor}`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className={`flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Recent Orders */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-3 sm:pb-4">
            <div>
              <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Latest customer orders</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm px-2 sm:px-3">
              View all <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="space-y-2 sm:space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm sm:text-base flex-shrink-0">
                      {order.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{order.customer}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{order.id} · {order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <span className={`hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[order.status].bg} ${statusColors[order.status].text}`}>
                      {order.status}
                    </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{order.total}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hidden sm:flex">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Low Stock Alert */}
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Low Stock Alerts
              </CardTitle>
              <CardDescription>Products that need restocking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockProducts.map((product) => (
                  <div
                    key={product.sku}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border"
                  >
                    <div>
                      <p className="font-medium text-sm text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${
                        product.stock === 0 ? 'text-red-600' : 
                        product.urgency === 'high' ? 'text-amber-600' : 'text-amber-500'
                      }`}>
                        {product.stock}
                      </p>
                      <p className="text-xs text-gray-500">min: {product.minStock}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" size="sm">
                <Package className="h-4 w-4 mr-2" />
                Create Purchase Order
              </Button>
            </CardContent>
          </Card>

          {/* Activity Feed */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Live Activity
              </CardTitle>
              <CardDescription>Real-time updates from your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityFeed.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700">{activity.message}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Common tasks you perform frequently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <Button variant="outline" className="h-auto py-4 sm:py-6 flex-col gap-2 sm:gap-3 hover:border-blue-300 hover:bg-blue-50/50">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <span className="font-medium text-xs sm:text-sm">New Order</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 sm:py-6 flex-col gap-2 sm:gap-3 hover:border-emerald-300 hover:bg-emerald-50/50">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
              </div>
              <span className="font-medium text-xs sm:text-sm">Add Product</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 sm:py-6 flex-col gap-2 sm:gap-3 hover:border-violet-300 hover:bg-violet-50/50">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600" />
              </div>
              <span className="font-medium text-xs sm:text-sm">New Customer</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 sm:py-6 flex-col gap-2 sm:gap-3 hover:border-amber-300 hover:bg-amber-50/50">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
              </div>
              <span className="font-medium text-xs sm:text-sm">Create Invoice</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
