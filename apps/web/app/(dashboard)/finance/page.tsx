'use client'

import { 
  BarChart3,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Receipt,
  CreditCard,
  Wallet,
  PieChart
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const financialStats = [
  { label: 'Total Revenue', value: '$1,245,890', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'bg-green-500' },
  { label: 'Total Expenses', value: '$456,230', change: '+3.2%', trend: 'up', icon: CreditCard, color: 'bg-red-500' },
  { label: 'Net Profit', value: '$789,660', change: '+18.3%', trend: 'up', icon: TrendingUp, color: 'bg-blue-500' },
  { label: 'Cash Flow', value: '$234,500', change: '-5.1%', trend: 'down', icon: Wallet, color: 'bg-purple-500' },
]

const recentTransactions = [
  { id: 'TXN-001', description: 'Invoice Payment - Acme Corp', type: 'income', amount: 5430.00, date: '2024-01-15', status: 'completed' },
  { id: 'TXN-002', description: 'Supplier Payment - Parts Inc', type: 'expense', amount: -2340.00, date: '2024-01-14', status: 'completed' },
  { id: 'TXN-003', description: 'Invoice Payment - Tech Solutions', type: 'income', amount: 8900.00, date: '2024-01-13', status: 'pending' },
  { id: 'TXN-004', description: 'Utility Bill - Electric', type: 'expense', amount: -450.00, date: '2024-01-12', status: 'completed' },
  { id: 'TXN-005', description: 'Employee Payroll', type: 'expense', amount: -45000.00, date: '2024-01-10', status: 'completed' },
]

const pendingInvoices = [
  { id: 'INV-001', customer: 'Global Traders', amount: 12500.00, dueDate: '2024-01-20', status: 'overdue' },
  { id: 'INV-002', customer: 'Enterprise Co', amount: 7650.00, dueDate: '2024-01-25', status: 'pending' },
  { id: 'INV-003', customer: 'Startup Hub', amount: 890.00, dueDate: '2024-01-30', status: 'pending' },
]

const budgetCategories = [
  { category: 'Operations', budget: 150000, spent: 125000, percentage: 83 },
  { category: 'Marketing', budget: 50000, spent: 42000, percentage: 84 },
  { category: 'Payroll', budget: 200000, spent: 195000, percentage: 97 },
  { category: 'IT & Software', budget: 30000, spent: 18000, percentage: 60 },
]

export default function FinancePage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Management</h1>
          <p className="text-gray-500">Track revenue, expenses, and financial health</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Reports
          </Button>
          <Button>
            <Receipt className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {financialStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      txn.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {txn.type === 'income' ? (
                        <ArrowUpRight className={`h-5 w-5 text-green-600`} />
                      ) : (
                        <ArrowDownRight className={`h-5 w-5 text-red-600`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{txn.description}</p>
                      <p className="text-sm text-gray-500">{txn.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      txn.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {txn.amount > 0 ? '+' : ''}${Math.abs(txn.amount).toLocaleString()}
                    </p>
                    <Badge variant={txn.status === 'completed' ? 'success' : 'warning'} className="text-xs">
                      {txn.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Invoices */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Invoices</CardTitle>
            <CardDescription>Invoices awaiting payment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="p-4 rounded-lg border"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm">{invoice.id}</span>
                    <Badge variant={invoice.status === 'overdue' ? 'destructive' : 'warning'}>
                      {invoice.status}
                    </Badge>
                  </div>
                  <p className="font-medium">{invoice.customer}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-gray-500">Due: {invoice.dueDate}</span>
                    <span className="font-bold">${invoice.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline" size="sm">
              View all invoices
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Budget Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
          <CardDescription>Monthly budget utilization by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgetCategories.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-sm text-gray-500">
                    ${item.spent.toLocaleString()} / ${item.budget.toLocaleString()}
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      item.percentage > 90 ? 'bg-red-500' :
                      item.percentage > 75 ? 'bg-amber-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.percentage}% utilized</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
