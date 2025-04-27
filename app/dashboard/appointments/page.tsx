"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, MoreHorizontal, Plus, Search, User } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Abhinav Raghav",
    specialty: "Cardiologist",
    date: "May 15, 2023",
    time: "10:00 AM",
    location: "Medical Center Hospital",
    status: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Avnish Shakya",
    specialty: "Neurologist",
    date: "May 22, 2023",
    time: "2:30 PM",
    location: "City General Hospital",
    status: "upcoming",
  },
  {
    id: 3,
    doctor: "Dr. Abhishek Kannaujiya",
    specialty: "Pediatrician",
    date: "April 30, 2023",
    time: "9:15 AM",
    location: "Children's Medical Center",
    status: "completed",
  },
  {
    id: 4,
    doctor: "Dr. Ravi Sharma",
    specialty: "Dermatologist",
    date: "April 15, 2023",
    time: "11:30 AM",
    location: "Skin Care Clinic",
    status: "completed",
  },
  {
    id: 5,
    doctor: "Dr. Arun Kumar",
    specialty: "Orthopedic Surgeon",
    date: "March 28, 2023",
    time: "3:00 PM",
    location: "Orthopedic Institute",
    status: "completed",
  },
  {
    id: 6,
    doctor: "Dr. Poonam Shrivastav",
    specialty: "Ophthalmologist",
    date: "May 20, 2023",
    time: "3:00 PM",
    location: "Vision Care Center",
    status: "completed",
  },
]

export default function AppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showQR, setShowQR] = useState(true) // 👈 You can make it conditional when real booking is done

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || appointment.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const upcomingAppointments = filteredAppointments.filter((a) => a.status === "upcoming")
  const completedAppointments = filteredAppointments.filter((a) => a.status === "completed")

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">Manage your upcoming and past appointments</p>
        </div>
        <Button asChild>
          <Link href="/doctors">
            <Plus className="mr-2 h-4 w-4" />
            Book New Appointment
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search appointments..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Appointments</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingAppointments.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedAppointments.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((a) => <AppointmentCard key={a.id} appointment={a} />)
          ) : (
            <EmptyState
              title="No upcoming appointments"
              description="Book an appointment to get started"
              buttonText="Book Appointment"
              buttonHref="/doctors"
            />
          )}

          {/* ✅ Show UPI QR for payment */}
          {showQR && (
            <div className="mt-6 text-center">
              <p className="mb-2 font-semibold text-lg">Scan to Pay for Appointment</p>
              <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay?pa=8750216564@ptsbi&pn=YourName&am=100&cu=INR&size=200x200"
              alt="UPI QR"
              className="mx-auto w-44 h-44 rounded-lg shadow-md border"
/>
  
              <p className="text-sm mt-2 text-muted-foreground">Pay ₹100 to confirm your slot</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedAppointments.length > 0 ? (
            completedAppointments.map((a) => <AppointmentCard key={a.id} appointment={a} />)
          ) : (
            <EmptyState
              title="No completed appointments"
              description="Your completed appointments will appear here"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function AppointmentCard({ appointment }: { appointment: any }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <h3 className="font-medium">{appointment.doctor}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {appointment.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {appointment.time}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {appointment.location}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {appointment.status === "upcoming" ? (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/appointments/${appointment.id}`}>View Details</Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Reschedule</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Cancel Appointment</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/appointments/${appointment.id}`}>View Summary</Link>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
}: {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Calendar className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        {buttonText && buttonHref && (
          <Button className="mt-4" asChild>
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}