'use client'

import { 
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Building2
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

const employees = [
  { id: '1', empNo: 'EMP-001', name: 'John Smith', email: 'john.smith@company.com', department: 'Sales', position: 'Sales Manager', status: 'active', hireDate: '2022-03-15' },
  { id: '2', empNo: 'EMP-002', name: 'Sarah Johnson', email: 'sarah.j@company.com', department: 'Engineering', position: 'Software Engineer', status: 'active', hireDate: '2021-06-01' },
  { id: '3', empNo: 'EMP-003', name: 'Michael Brown', email: 'm.brown@company.com', department: 'Operations', position: 'Warehouse Supervisor', status: 'active', hireDate: '2020-11-20' },
  { id: '4', empNo: 'EMP-004', name: 'Emily Davis', email: 'emily.d@company.com', department: 'HR', position: 'HR Specialist', status: 'active', hireDate: '2023-01-10' },
  { id: '5', empNo: 'EMP-005', name: 'David Wilson', email: 'd.wilson@company.com', department: 'Finance', position: 'Accountant', status: 'active', hireDate: '2022-08-15' },
  { id: '6', empNo: 'EMP-006', name: 'Lisa Anderson', email: 'l.anderson@company.com', department: 'Marketing', position: 'Marketing Lead', status: 'on-leave', hireDate: '2021-04-01' },
  { id: '7', empNo: 'EMP-007', name: 'Robert Taylor', email: 'r.taylor@company.com', department: 'Engineering', position: 'Senior Developer', status: 'active', hireDate: '2019-09-01' },
]

const departments = [
  { name: 'Sales', count: 12, color: 'bg-blue-500' },
  { name: 'Engineering', count: 25, color: 'bg-purple-500' },
  { name: 'Operations', count: 18, color: 'bg-amber-500' },
  { name: 'HR', count: 5, color: 'bg-green-500' },
  { name: 'Finance', count: 8, color: 'bg-cyan-500' },
  { name: 'Marketing', count: 7, color: 'bg-pink-500' },
]

const stats = [
  { label: 'Total Employees', value: '75' },
  { label: 'Departments', value: '6' },
  { label: 'On Leave', value: '3' },
  { label: 'New This Month', value: '4' },
]

export default function HRPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Human Resources</h1>
          <p className="text-sm sm:text-base text-gray-500">Manage employees and departments</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none">
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 sm:p-6">
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl sm:text-2xl font-bold mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Departments Overview */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">Departments</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Employee distribution by department</CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {departments.map((dept) => (
              <div key={dept.name} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${dept.color} flex items-center justify-center flex-shrink-0`}>
                  <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">{dept.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{dept.count}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employees Table/List */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base sm:text-lg">Employees Directory</CardTitle>
              <CardDescription className="text-xs sm:text-sm">View and manage all employees</CardDescription>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search employees..." className="pl-10" />
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
                  <TableHead>Employee</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Hire Date</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-sm text-gray-500">{employee.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>
                      <Badge variant={employee.status === 'active' ? 'success' : 'warning'}>
                        {employee.status === 'active' ? 'Active' : 'On Leave'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-500">{employee.hireDate}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card List */}
          <div className="md:hidden space-y-3">
            {employees.map((employee) => (
              <div key={employee.id} className="p-4 rounded-xl border bg-gray-50/50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-white">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900 truncate">{employee.name}</p>
                        <p className="text-xs text-gray-500">{employee.position}</p>
                      </div>
                      <Badge variant={employee.status === 'active' ? 'success' : 'warning'} className="text-xs flex-shrink-0">
                        {employee.status === 'active' ? 'Active' : 'Leave'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200">
                      <span className="text-xs text-gray-500">{employee.department}</span>
                      <span className="text-xs text-gray-400">Since {employee.hireDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
