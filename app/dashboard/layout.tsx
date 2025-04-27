"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  Activity,
  Calendar,
  ChevronRight,
  ClipboardList,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
      current: pathname === "/dashboard",
    },
    {
      name: "Appointments",
      href: "/dashboard/appointments",
      icon: Calendar,
      current: pathname === "/dashboard/appointments",
    },
    {
      name: "Medical Records",
      href: "/dashboard/records",
      icon: FileText,
      current: pathname === "/dashboard/records",
    },
    {
      name: "Prescriptions",
      href: "/dashboard/prescriptions",
      icon: ClipboardList,
      current: pathname === "/dashboard/prescriptions",
    },
    {
      name: "Health Metrics",
      href: "/dashboard/metrics",
      icon: Activity,
      current: pathname === "/dashboard/metrics",
    },
    {
      name: "Messages",
      href: "/dashboard/messages",
      icon: MessageSquare,
      current: pathname === "/dashboard/messages",
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
      current: pathname === "/dashboard/profile",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      current: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for desktop */}
      <div
        className={`fixed inset-y-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Sathi</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileSidebarOpen(false)} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                  item.current ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    item.current ? "text-primary-foreground" : "text-muted-foreground"
                  }`}
                />
                <span>{item.name}</span>
                {item.current && <ChevronRight className="ml-auto h-4 w-4 text-primary-foreground" />}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Link>
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navigation */}
        <div className="flex h-16 items-center justify-between border-b bg-card px-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileSidebarOpen(true)} className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hidden md:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">{navigation.find((item) => item.current)?.name || "Dashboard"}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/profile">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

