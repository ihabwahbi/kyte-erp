'use client'

import { 
  Package,
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle,
  XCircle
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

const inventory = [
  { id: '1', sku: 'SKU-001', name: 'Premium Widget', category: 'Electronics', quantity: 150, reserved: 10, minStock: 20, price: 99.99, status: 'ok' },
  { id: '2', sku: 'SKU-002', name: 'Standard Gadget', category: 'Electronics', quantity: 300, reserved: 25, minStock: 50, price: 49.99, status: 'ok' },
  { id: '3', sku: 'SKU-003', name: 'Basic Component', category: 'Parts', quantity: 15, reserved: 0, minStock: 100, price: 19.99, status: 'low' },
  { id: '4', sku: 'SKU-004', name: 'Pro Tool Set', category: 'Tools', quantity: 0, reserved: 0, minStock: 10, price: 199.99, status: 'out' },
  { id: '5', sku: 'SKU-005', name: 'Office Supplies Kit', category: 'Office', quantity: 200, reserved: 15, minStock: 30, price: 29.99, status: 'ok' },
  { id: '6', sku: 'SKU-006', name: 'Industrial Sensor', category: 'Electronics', quantity: 45, reserved: 5, minStock: 25, price: 149.99, status: 'ok' },
  { id: '7', sku: 'SKU-007', name: 'Safety Equipment', category: 'Safety', quantity: 8, reserved: 2, minStock: 20, price: 89.99, status: 'low' },
]

const stats = [
  { label: 'Total Products', value: '856', icon: Package, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'In Stock', value: '789', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  { label: 'Low Stock', value: '45', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-100' },
  { label: 'Out of Stock', value: '22', icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' },
]

const statusConfig = {
  ok: { label: 'In Stock', variant: 'success' as const, icon: CheckCircle },
  low: { label: 'Low Stock', variant: 'warning' as const, icon: AlertTriangle },
  out: { label: 'Out of Stock', variant: 'destructive' as const, icon: XCircle },
}

export default function InventoryPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-sm sm:text-base text-gray-500">Track and manage your product stock levels</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`${stat.bg} ${stat.color} p-2 sm:p-2.5 rounded-lg`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Inventory Table/List */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base sm:text-lg">Product Inventory</CardTitle>
              <CardDescription className="text-xs sm:text-sm">View and manage all products</CardDescription>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search products..." className="pl-10" />
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
                  <TableHead>SKU</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Available</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => {
                  const config = statusConfig[item.status as keyof typeof statusConfig]
                  const available = item.quantity - item.reserved

                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell className="text-right font-medium">{available}</TableCell>
                      <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={config.variant}>
                          <config.icon className="mr-1 h-3 w-3" />
                          {config.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card List */}
          <div className="md:hidden space-y-3">
            {inventory.map((item) => {
              const config = statusConfig[item.status as keyof typeof statusConfig]
              const available = item.quantity - item.reserved

              return (
                <div key={item.id} className="p-4 rounded-xl border bg-gray-50/50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.sku} · {item.category}</p>
                    </div>
                    <Badge variant={config.variant} className="text-xs">
                      {config.label}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-gray-900">{item.quantity}</p>
                      <p className="text-xs text-gray-500">In Stock</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">{available}</p>
                      <p className="text-xs text-gray-500">Available</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">${item.price}</p>
                      <p className="text-xs text-gray-500">Price</p>
                    </div>
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
