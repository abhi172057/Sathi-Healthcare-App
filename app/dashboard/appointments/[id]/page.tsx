"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, MapPin, User } from "lucide-react"
import Link from "next/link"

// Mock data for a single appointment
const appointmentData = {
  id: 1,
  doctor: "Dr. Sarah Johnson",
  specialty: "Cardiologist",
  date: "May 15, 2023",
  time: "10:00 AM",
  duration: "30 minutes",
  location: "Medical Center Hospital",
  address: "123 Medical Center Dr, Healthcare City",
  reason: "Annual heart checkup and blood pressure monitoring",
  notes: "Please bring your medication list and previous test results.",
  status: "upcoming",
}

export default function AppointmentDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the appointment data based on the ID
  const appointment = appointmentData

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Appointment Details</h2>
          <p className="text-muted-foreground">View and manage your appointment information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Reschedule</Button>
          <Button variant="destructive">Cancel Appointment</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Appointment Information</CardTitle>
            <CardDescription>Details about your upcoming appointment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{appointment.doctor}</p>
                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Date & Time</p>
                <p className="text-sm text-muted-foreground">
                  {appointment.date} at {appointment.time} ({appointment.duration})
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{appointment.location}</p>
                <p className="text-sm text-muted-foreground">{appointment.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Reason for Visit</p>
                <p className="text-sm text-muted-foreground">{appointment.reason}</p>
              </div>
            </div>
            {appointment.notes && (
              <div className="rounded-md bg-muted p-4">
                <p className="font-medium">Notes</p>
                <p className="text-sm text-muted-foreground">{appointment.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prepare for Your Visit</CardTitle>
            <CardDescription>Things to know before your appointment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">What to Bring</h3>
              <ul className="list-inside list-disc text-sm text-muted-foreground">
                <li>Photo ID and insurance card</li>
                <li>List of current medications</li>
                <li>Previous medical records (if applicable)</li>
                <li>Any recent test results</li>
                <li>Payment method for copay</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Arrival Time</h3>
              <p className="text-sm text-muted-foreground">
                Please arrive 15 minutes before your scheduled appointment time to complete any necessary paperwork.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Cancellation Policy</h3>
              <p className="text-sm text-muted-foreground">
                If you need to cancel or reschedule, please do so at least 24 hours in advance to avoid any cancellation
                fees.
              </p>
            </div>
            <div className="mt-6">
              <Button className="w-full" asChild>
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

