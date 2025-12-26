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
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Human Resources</h1>
          <p className="text-gray-500">Manage employees, departments, and HR operations</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Departments Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Departments</CardTitle>
          <CardDescription>Employee distribution by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {departments.map((dept) => (
              <div key={dept.name} className="flex items-center gap-3 p-4 rounded-lg border">
                <div className={`w-10 h-10 rounded-lg ${dept.color} flex items-center justify-center`}>
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{dept.name}</p>
                  <p className="text-sm text-gray-500">{dept.count} employees</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employees Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Employees Directory</CardTitle>
              <CardDescription>View and manage all employees</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search employees..." className="pl-10" />
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
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
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
        </CardContent>
      </Card>
    </div>
  )
}
