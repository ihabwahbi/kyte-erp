'use client'

import { 
  User,
  Building2,
  Bell,
  Shield,
  Database,
  Palette
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const settingsCategories = [
  {
    title: 'Profile Settings',
    description: 'Manage your personal information and preferences',
    icon: User,
    items: ['Personal Information', 'Password & Security', 'Email Preferences']
  },
  {
    title: 'Company Settings',
    description: 'Configure your organization details',
    icon: Building2,
    items: ['Company Profile', 'Business Hours', 'Tax Information']
  },
  {
    title: 'Notifications',
    description: 'Control how you receive notifications',
    icon: Bell,
    items: ['Email Notifications', 'Push Notifications', 'Alert Preferences']
  },
  {
    title: 'Security',
    description: 'Manage access and security settings',
    icon: Shield,
    items: ['Two-Factor Authentication', 'API Keys', 'Session Management']
  },
  {
    title: 'Data Management',
    description: 'Import, export, and backup your data',
    icon: Database,
    items: ['Data Export', 'Backup & Restore', 'Data Retention']
  },
  {
    title: 'Appearance',
    description: 'Customize the look and feel',
    icon: Palette,
    items: ['Theme Settings', 'Dashboard Layout', 'Date & Time Format']
  },
]

export default function SettingsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage your account and application preferences</p>
      </div>

      {/* Quick Settings */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">Quick Settings</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Commonly accessed settings</CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <Input defaultValue="My Company Inc." />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Primary Email
              </label>
              <Input defaultValue="admin@mycompany.com" type="email" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Default Currency
              </label>
              <Input defaultValue="AUD" />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <Input defaultValue="AEST (Australian Eastern)" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {settingsCategories.map((category) => (
          <Card key={category.title} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                  <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{category.description}</p>
                  <ul className="mt-2 sm:mt-3 space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-gray-600 hover:text-blue-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Danger Zone */}
      <Card className="border-red-200">
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-base sm:text-lg text-red-600">Danger Zone</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-red-200 bg-red-50">
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Delete All Data</p>
              <p className="text-xs sm:text-sm text-gray-500">Permanently remove all your data</p>
            </div>
            <Button variant="destructive" size="sm" className="w-full sm:w-auto">Delete All</Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-red-200 bg-red-50">
            <div>
              <p className="font-medium text-gray-900 text-sm sm:text-base">Close Account</p>
              <p className="text-xs sm:text-sm text-gray-500">Permanently close your account</p>
            </div>
            <Button variant="destructive" size="sm" className="w-full sm:w-auto">Close Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
