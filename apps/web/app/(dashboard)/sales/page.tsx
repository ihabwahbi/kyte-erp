'use client'

import { 
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  TrendingUp,
  TrendingDown
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const orders = [
  { id: 'ORD-2024-001', customer: 'Acme Corporation', email: 'contact@acme.com', items: 5, total: 5430.00, status: 'delivered', date: '2024-01-15' },
  { id: 'ORD-2024-002', customer: 'Tech Solutions Inc', email: 'sales@techsol.com', items: 3, total: 2890.50, status: 'shipped', date: '2024-01-14' },
  { id: 'ORD-2024-003', customer: 'Local Shop', email: 'info@localshop.com', items: 2, total: 450.00, status: 'processing', date: '2024-01-13' },
  { id: 'ORD-2024-004', customer: 'Global Traders', email: 'buy@globaltraders.com', items: 12, total: 12500.00, status: 'confirmed', date: '2024-01-12' },
  { id: 'ORD-2024-005', customer: 'Startup Hub', email: 'hello@startuphub.io', items: 1, total: 890.00, status: 'pending', date: '2024-01-11' },
  { id: 'ORD-2024-006', customer: 'Enterprise Co', email: 'orders@enterprise.co', items: 8, total: 7650.00, status: 'shipped', date: '2024-01-10' },
  { id: 'ORD-2024-007', customer: 'Small Biz LLC', email: 'admin@smallbiz.com', items: 4, total: 1200.00, status: 'cancelled', date: '2024-01-09' },
]

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline' }> = {
  pending: { label: 'Pending', variant: 'outline' },
  confirmed: { label: 'Confirmed', variant: 'secondary' },
  processing: { label: 'Processing', variant: 'warning' },
  shipped: { label: 'Shipped', variant: 'default' },
  delivered: { label: 'Delivered', variant: 'success' },
  cancelled: { label: 'Cancelled', variant: 'destructive' },
}

const stats = [
  { label: 'Total Orders', value: '342', change: '+8.2%', up: true },
  { label: 'Revenue', value: '$125,430', change: '+12.5%', up: true },
  { label: 'Avg Order Value', value: '$367', change: '+4.1%', up: true },
  { label: 'Pending Orders', value: '28', change: '-3.2%', up: false },
]

export default function SalesPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Sales & Orders</h1>
          <p className="text-sm sm:text-base text-gray-500">Manage customer orders and track sales</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none">
            <Plus className="mr-2 h-4 w-4" />
            New Order
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                <span className={`flex items-center text-xs sm:text-sm font-medium ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.up ? <TrendingUp className="h-3 w-3 mr-0.5" /> : <TrendingDown className="h-3 w-3 mr-0.5" />}
                  {stat.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Orders Table/List */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
              <CardDescription className="text-xs sm:text-sm">View and manage customer orders</CardDescription>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search orders..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-center">Items</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-20">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => {
                  const config = statusConfig[order.status]
                  return (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{order.items}</TableCell>
                      <TableCell className="text-right font-medium">${order.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={config.variant}>{config.label}</Badge>
                      </TableCell>
                      <TableCell className="text-gray-500">{order.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card List */}
          <div className="md:hidden space-y-3">
            {orders.map((order) => {
              const config = statusConfig[order.status]
              return (
                <div key={order.id} className="p-4 rounded-xl border bg-gray-50/50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.id}</p>
                    </div>
                    <Badge variant={config.variant} className="text-xs">
                      {config.label}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <div>
                      <p className="text-lg font-bold text-gray-900">${order.total.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{order.items} items · {order.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
