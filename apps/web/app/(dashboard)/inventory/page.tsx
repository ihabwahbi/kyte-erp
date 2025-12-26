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
  { label: 'Total Products', value: '856', icon: Package, color: 'text-blue-600' },
  { label: 'In Stock', value: '789', icon: CheckCircle, color: 'text-green-600' },
  { label: 'Low Stock', value: '45', icon: AlertTriangle, color: 'text-amber-600' },
  { label: 'Out of Stock', value: '22', icon: XCircle, color: 'text-red-600' },
]

const statusConfig = {
  ok: { label: 'In Stock', variant: 'success' as const, icon: CheckCircle },
  low: { label: 'Low Stock', variant: 'warning' as const, icon: AlertTriangle },
  out: { label: 'Out of Stock', variant: 'destructive' as const, icon: XCircle },
}

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-500">Track and manage your product stock levels</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>View and manage all products in stock</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Quantity</TableHead>
                <TableHead className="text-right">Reserved</TableHead>
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
                    <TableCell className="text-right text-gray-500">{item.reserved}</TableCell>
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
        </CardContent>
      </Card>
    </div>
  )
}
