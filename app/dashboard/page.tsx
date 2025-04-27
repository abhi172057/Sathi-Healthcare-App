import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Calendar, Clock, FileText, HeartPulse, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data for upcoming appointments
const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    date: "May 15, 2023",
    time: "10:00 AM",
    location: "Medical Center Hospital",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurologist",
    date: "May 22, 2023",
    time: "2:30 PM",
    location: "City General Hospital",
  },
]

// Mock data for health metrics
const healthMetrics = {
  bloodPressure: {
    systolic: 120,
    diastolic: 80,
    date: "May 10, 2023",
  },
  heartRate: {
    value: 72,
    date: "May 10, 2023",
  },
  bloodSugar: {
    value: 95,
    date: "May 9, 2023",
  },
  weight: {
    value: 165,
    unit: "lbs",
    date: "May 8, 2023",
  },
}

// Mock data for recent prescriptions
const recentPrescriptions = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    prescribedBy: "Dr. Sarah Johnson",
    date: "May 1, 2023",
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    prescribedBy: "Dr. James Wilson",
    date: "April 15, 2023",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Abhishek Arya!</h2>
          <p className="text-muted-foreground">Here's an overview of your health and upcoming appointments.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/doctors">
              <Plus className="mr-2 h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/assistance">Request Assistance</Link>
          </Button>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
            <p className="text-xs text-muted-foreground">Next: {upcomingAppointments[0]?.date}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blood Pressure</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {healthMetrics.bloodPressure.systolic}/{healthMetrics.bloodPressure.diastolic}
            </div>
            <p className="text-xs text-muted-foreground">Last updated: {healthMetrics.bloodPressure.date}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.heartRate.value} BPM</div>
            <p className="text-xs text-muted-foreground">Last updated: {healthMetrics.heartRate.date}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Prescriptions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentPrescriptions.length}</div>
            <p className="text-xs text-muted-foreground">Last updated: {recentPrescriptions[0]?.date}</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming appointments */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled appointments for the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">{appointment.doctor}</p>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {appointment.date}
                        <Clock className="ml-3 mr-1 h-4 w-4" />
                        {appointment.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/appointments/${appointment.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-[200px] flex-col items-center justify-center rounded-lg border border-dashed">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm font-medium">No upcoming appointments</p>
                <p className="text-sm text-muted-foreground">Book an appointment to get started</p>
                <Button className="mt-4" size="sm" asChild>
                  <Link href="/doctors">Book Appointment</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Prescriptions</CardTitle>
            <CardDescription>Your current medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPrescriptions.map((prescription) => (
                <div key={prescription.id} className="flex flex-col space-y-1 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{prescription.name}</p>
                    <p className="text-xs text-muted-foreground">{prescription.date}</p>
                  </div>
                  <p className="text-sm">
                    {prescription.dosage}, {prescription.frequency}
                  </p>
                  <p className="text-xs text-muted-foreground">Prescribed by: {prescription.prescribedBy}</p>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/prescriptions">View All Prescriptions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health metrics chart */}
      <Card>
        <CardHeader>
          <CardTitle>Health Metrics</CardTitle>
          <CardDescription>Track your health metrics over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full rounded-lg border border-dashed flex items-center justify-center">
            <div className="text-center">
              <Activity className="mx-auto h-10 w-10 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium">Health metrics visualization</p>
              <p className="text-sm text-muted-foreground">Charts and graphs would be displayed here</p>
              <Button className="mt-4" size="sm" asChild>
                <Link href="/dashboard/metrics">View Detailed Metrics</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency SOS Card */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <HeartPulse className="h-8 w-8 text-primary" />
          <div>
            <CardTitle>SOS</CardTitle>
            <CardDescription>Get the emergency service you need</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Automatically send the user's live location to the nearest available medical team or ambulance service.
          </p>
          <Button variant="link" asChild className="mt-4 p-0">
            <Link href="/emergency">
              Click here <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
