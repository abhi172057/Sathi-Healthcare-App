import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Abhinav Raghav",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 124,
    location: "Medical Center Hospital",
    availableToday: true,
    image: "/images/cardiologist.png",
  },
  {
    id: 2,
    name: "Dr. Avnish Shakya",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 98,
    location: "City General Hospital",
    availableToday: false,
    image: "/images/neurologist.jpg",
  },
  {
    id: 3,
    name: "Dr. Abhishek kannaujiya",
    specialty: "Pediatrician",
    rating: 4.9,
    reviews: 156,
    location: "Children's Medical Center",
    availableToday: true,
    image: "/images/Pediatrician.jpg",
  },
  {
    id: 4,
    name: "Dr. Ravi Sharma",
    specialty: "Dermatologist",
    rating: 4.7,
    reviews: 87,
    location: "Skin Care Clinic",
    availableToday: true,
    image: "/images/Dermatologist.png",
  },
  {
    id: 5,
    name: "Dr. Arun Kumar",
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    reviews: 112,
    location: "Orthopedic Institute",
    availableToday: false,
    image: "/images/Orthopedic_Surgeon.jpg",
  },
  {
    id: 6,
    name: "Dr. Poonam Shrivastav",
    specialty: "Ophthalmologist",
    rating: 4.9,
    reviews: 103,
    location: "Vision Care Center",
    availableToday: true,
    image: "/images/240_F_647162966_SFu8GP6awkeW0OnFnAxPjiGXSoeme4ht.jpg",
  },
  
]

export default function DoctorsPage() {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Find Doctors</h1>

        {/* Search and Filter Section */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="md:col-span-2">
            <Input placeholder="Search by name, specialty, or location" />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Time</SelectItem>
                <SelectItem value="today">Available Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="weekend">Weekend</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Doctors Listing */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="object-cover w-full h-full"
                  />
                  {doctor.availableToday && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Available Today
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{doctor.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{doctor.specialty}</p>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{doctor.rating}</span>
                  <span className="text-muted-foreground text-sm">({doctor.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{doctor.location}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button variant="outline" asChild>
                  <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                </Button>
                <Button asChild>
                  <Link href={`/doctors/${doctor.id}/book`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          <script src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"></script>
          <script src="https://files.bpcontent.cloud/2025/04/11/15/20250411155350-99X4YT6X.js"></script>
        </div>
        
      </div>
    </MainLayout>
  )
}

