// app/page.tsx or pages/index.tsx

export const metadata = {
  title: "Sathi - Healthcare App",
  description: "Book appointments and get medical assistance",
};

import { MainLayout } from "@/components/main-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  Clock,
  HeartPulse,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-muted-foreground">
              Book appointments with top doctors and get medical assistance when you need it.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row flex-wrap">
              <Button size="lg" asChild>
                <Link href="/doctors">
                  Find Doctors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/assistance">
                  Book Assistance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/WhatsApp Image 2025-04-10 at 22.23.57_4cd1284c.jpg"
              alt="Healthcare professionals"
              className="rounded-lg shadow-lg"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Comprehensive healthcare solutions for all your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Stethoscope className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Doctor Appointments</CardTitle>
                  <CardDescription>
                    Book appointments with specialists
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from our network of qualified doctors across various specialties and book appointments at your convenience.
                </p>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link href="/doctors">
                    Find Doctors <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Medical Assistance</CardTitle>
                  <CardDescription>Get help when you need it</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Request medical assistance for home care, elderly care, or any other healthcare needs you might have.
                </p>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link href="/assistance">
                    Book Assistance <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <HeartPulse className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Health Dashboard</CardTitle>
                  <CardDescription>Track your health metrics</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor your health metrics, view appointment history, and manage your medical records all in one place.
                </p>
                <Button variant="link" asChild className="mt-4 p-0">
                  <Link href="/dashboard">
                    View Dashboard <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Simple steps to get the care you need
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Find a Doctor</h3>
              <p className="mt-2 text-muted-foreground">
                Browse through our network of specialists and find the right doctor for your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Book an Appointment</h3>
              <p className="mt-2 text-muted-foreground">
                Select a convenient time slot and book your appointment online in seconds.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Get Care</h3>
              <p className="mt-2 text-muted-foreground">
                Visit the doctor at the scheduled time or receive medical assistance at your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Hear from people who have used our services
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <p className="font-medium">Sara Khan</p>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The appointment booking process was so easy! I found a great specialist and got an appointment the same week."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <p className="font-medium">Deepak</p>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The medical assistance service was a lifesaver for my elderly mother. Professional and caring staff."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <p className="font-medium">Ayush</p>
                    <p className="text-sm text-muted-foreground">Patient</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I love being able to track all my appointments and medical records in one place. The dashboard is so intuitive!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to take control of your health?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-xl text-primary-foreground/80">
            Join thousands of patients who have simplified their healthcare journey with MediCare.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/doctors">Find Doctors</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/assistance">Book Assistance</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
