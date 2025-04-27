import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Star, ThumbsUp, User } from "lucide-react"
import Link from "next/link"

// Multiple Mock Doctors
const doctors = [
  {
    id: 1,
    name: "Dr.Abhinav Raghav",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 124,
    location: "Medical Center Hospital",
    address: "123 Medical Center Dr, Healthcare City",
    experience: "15+ years",
    education: [
      "MD, Harvard Medical School",
      "Residency, Johns Hopkins Hospital",
      "Fellowship, Mayo Clinic",
    ],
    about:
      "Dr. Abhinav Raghav is a board-certified cardiologist with over 15 years of experience in treating various heart conditions.",
    services: [
      "Cardiac Consultation",
      "ECG/EKG",
      "Echocardiogram",
      "Stress Testing",
      "Holter Monitoring",
    ],
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    availableTimeSlots: ["9:00 AM", "10:00 AM", "11:00 AM"],
    image: "/images/WhatsApp Image 2025-04-11 at 20.23.39_793d62fc.jpg",
  },

  {
    id: 2,
    name: "Dr. Avnish Shakya",
    specialty: "Orthopedic Surgeon",
    rating: 4.7,
    reviews: 89,
    location: "City Orthopedic Clinic",
    address: "45 Ortho Lane, Mumbai",
    experience: "12 years",
    education: [
      "MS Orthopedics, AIIMS",
      "Fellowship in Joint Replacement, Germany",
    ],
    about:
      "Dr. Avnish Shakya is a renowned orthopedic surgeon with a specialization in joint replacement and sports injury treatment.",
    services: [
      "Knee Replacement",
      "Hip Replacement",
      "Arthroscopy",
      "Sports Injury Treatment",
    ],
    availableDays: ["Wednesday", "Friday", "Saturday"],
    availableTimeSlots: ["10:00 AM", "1:00 PM", "3:00 PM"],
    image: "/images/WhatsApp Image 2025-04-11 at 20.23.39_5385c93d.jpg",
  },

  {
    id: 3,
    name: "Dr. Abhishek Kannaujiya",
    specialty: "Pediatrician",
    rating: 4.8,
    reviews: 101,
    location: "Sunshine Children's Hospital",
    address: "88 Childcare Blvd, Bangalore",
    experience: "10 years",
    education: [
      "MBBS, Grant Medical College",
      "MD Pediatrics, Nair Hospital",
    ],
    about:
      "Dr. Abhishek Kannaujiya is known for her gentle approach and expertise in treating children from infancy to adolescence.",
    services: [
      "Child Vaccination",
      "Growth Monitoring",
      "Nutritional Guidance",
      "Newborn Care",
    ],
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    availableTimeSlots: ["9:30 AM", "12:00 PM", "4:00 PM"],
    image: "/images/WhatsApp Image 2025-04-11 at 20.23.40_1a9a9c08.jpg",
  },

  {
    id: 4,
    name: "Dr. Ravi Sharma",
    specialty: "Dermatologist",
    rating: 4.6,
    reviews: 76,
    location: "Skin & Aesthetic Clinic",
    address: "55 Skincare Road, Hyderabad",
    experience: "8 years",
    education: [
      "MBBS, Osmania Medical College",
      "MD Dermatology, JIPMER",
    ],
    about:
      "Dr. Ravi Sharma is a highly skilled dermatologist focusing on skin disorders and cosmetic dermatology.",
    services: [
      "Acne Treatment",
      "Laser Hair Removal",
      "Skin Rejuvenation",
      "Eczema/Psoriasis Care",
    ],
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    availableTimeSlots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    image: "/images/doctor1.jpeg",
  },
  {
    id: 5,
    name: "Dr. Arun Kumar",
    specialty: "Orthopedic Surgeon",
    rating: 4.8,
    reviews: 92,
    location: "OrthoCare Hospital",
    address: "102 Bone & Joint Street, Pune",
    experience: "12 years",
    education: [
      "MBBS, B.J. Medical College, Pune",
      "MS Orthopedics, AIIMS New Delhi",
    ],
    about:
      "Dr. Arun Kumar is a renowned orthopedic surgeon specializing in joint replacement, sports injuries, and spinal disorders. Known for his patient-first approach and precision surgery.",
    services: [
      "Knee Replacement Surgery",
      "Fracture & Trauma Care",
      "Spine Surgery",
      "Arthroscopy",
    ],
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableTimeSlots: ["10:00 AM", "1:00 PM", "4:00 PM"],
    image:  "/images/download.jpeg",
  },
  {
    id: 6,
    name: "Dr.Poonam Shrivastav",
    specialty: "Ophthalmologist",
    rating: 4.7,
    reviews: 81,
    location: "Vision Plus Eye Hospital",
    address: "88 ClearView Lane, Bengaluru",
    experience: "10 years",
    education: [
      "MBBS, Kempegowda Institute of Medical Sciences",
      "MS Ophthalmology, Sankara Nethralaya",
    ],
    about:
      "Dr. Poonam Shrivastav is a dedicated ophthalmologist specializing in cataract surgery, LASIK, and comprehensive eye care. She is known for her precise diagnostics and compassionate care.",
    services: [
      "Cataract Surgery",
      "LASIK & Refractive Surgery",
      "Glaucoma Treatment",
      "Diabetic Retinopathy Care",
    ],
    availableDays: ["Monday", "Thursday", "Saturday"],
    availableTimeSlots: ["9:30 AM", "12:30 PM", "3:00 PM"],
    image: "/images/240_F_647162966_SFu8GP6awkeW0OnFnAxPjiGXSoeme4ht.jpg",
  }
  
  
]

// Mock Reviews (same as your original code)
const reviews: any[] = [
  {
    id: 1,
    name: "Alice Thompson",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Dr. Johnson was incredibly thorough and kind. She helped me understand everything in detail.",
  },
  {
    id: 2,
    name: "Robert Chen",
    rating: 4,
    date: "1 month ago",
    comment:
      "Very professional and made me feel at ease. A bit of a wait but worth it.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 5,
    date: "3 weeks ago",
    comment: "Helped my father walk again. Forever grateful!",
  },
  {
    id: 4,
    name: "Ankit Mehra",
    rating: 4,
    date: "2 months ago",
    comment: "Knowledgeable and practical. Good experience overall.",
  },
]


export default function DoctorDetailPage({ params }: { params: { id: string } }) {
  const doctorId = parseInt(params.id)
  const doctor = doctors.find((d) => d.id === doctorId)

  if (!doctor) {
    return (
      <MainLayout>
        <div className="container py-8">
          <p className="text-center text-xl text-muted-foreground">Doctor not found.</p>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Doctor Info */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6 ">
                <div className="flex flex-col items-center">
                  <div className="mb-4 rounded-full overflow-hidden w-48 h-48">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mb-1">{doctor.name}</h1>
                  <p className="text-muted-foreground mb-4">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{doctor.experience} experience</span>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/doctors/${params.id}/book`}>Book Appointment</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs and Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-4 ">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* About Tab */}
              <TabsContent value="about" className="mt-6">
                <Card >
                  <CardContent className="p-6 ">
                    <h2 className="text-xl font-bold mb-4">About</h2>
                    <p className="text-muted-foreground mb-6">{doctor.about}</p>
                    <h3 className="text-lg font-bold mb-2">Education</h3>
                    <ul className="list-disc pl-5 mb-6">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-muted-foreground mb-1">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services" className="mt-6">
                <Card>
                  <CardContent className="p-6 ">
                    <h2 className="text-xl font-bold mb-4">Services</h2>
                    <ul className="grid gap-2">
                      {doctor.services.map((service, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-md bg-muted"
                        >
                          <ThumbsUp className="h-4 w-4 text-primary" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Availability Tab */}
              <TabsContent value="availability" className="mt-6">
                <Card>
                  <CardContent className="p-6 ">
                    <h2 className="text-xl font-bold mb-4">Availability</h2>
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-2">Available Days</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableDays.map((day, index) => (
                          <div
                            key={index}
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Time Slots</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableTimeSlots.map((time, index) => (
                          <div
                            key={index}
                            className="px-3 py-1 rounded-full bg-muted text-sm flex items-center gap-1"
                          >
                            <Clock className="h-3 w-3" />
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6  ">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Patient Reviews</h2>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-lg">{doctor.rating}</span>
                        <span className="text-muted-foreground">
                          ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                          </div>
                          <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
