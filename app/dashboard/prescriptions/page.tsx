"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Download, QrCode } from "lucide-react"
import QRCode from "react-qr-code"

const recentPrescriptions = [
  {
    id: 1,
    patientName: "John Doe",
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "3 times a day",
    duration: "7 days",
    purpose: "Bacterial infection treatment",
    instructions: "Take after meals. Do not skip doses.",
    refill: "No refill needed",
    date: "March 25, 2025",
    prescribedBy: "Dr. Emily Carter",
    doctorProfile: "/doctors/emily-carter",
    downloadLink: "/pdfs/prescription-1.pdf",
  },
  {
    id: 2,
    patientName: "John Doe",
    name: "Ibuprofen",
    dosage: "200mg",
    frequency: "Twice a day",
    duration: "5 days",
    purpose: "Pain and inflammation relief",
    instructions: "Take with food to avoid stomach upset.",
    refill: "1 refill allowed",
    date: "April 3, 2025",
    prescribedBy: "Dr. James Lee",
    doctorProfile: "/doctors/james-lee",
    downloadLink: "/pdfs/prescription-2.pdf",
  },
  {
    id: 3,
    patientName: "John Doe",
    name: "Metformin",
    dosage: "850mg",
    frequency: "Once daily",
    duration: "Ongoing",
    purpose: "Type 2 diabetes control",
    instructions: "Take at the same time daily.",
    refill: "Monthly refill",
    date: "April 9, 2025",
    prescribedBy: "Dr. Anita Patel",
    doctorProfile: "/doctors/anita-patel",
    downloadLink: "/pdfs/prescription-3.pdf",
  },
]

export default function PrescriptionsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prescriptions</CardTitle>
        <CardDescription>Details of your prescribed medications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPrescriptions.map((prescription) => (
            <div
              key={prescription.id}
              className="flex flex-col space-y-3 rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-lg">{prescription.name}</p>
                <p className="text-xs text-muted-foreground">{prescription.date}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Patient: {prescription.patientName}
              </p>
              <p className="text-sm">
                <span className="font-medium">Dosage:</span> {prescription.dosage} |{" "}
                <span className="font-medium">Frequency:</span> {prescription.frequency}
              </p>
              <p className="text-sm">
                <span className="font-medium">Duration:</span> {prescription.duration}
              </p>
              <p className="text-sm">
                <span className="font-medium">Purpose:</span> {prescription.purpose}
              </p>
              <p className="text-sm">
                <span className="font-medium">Instructions:</span> {prescription.instructions}
              </p>
              <p className="text-sm">
                <span className="font-medium">Refill:</span> {prescription.refill}
              </p>
              <p className="text-xs text-muted-foreground">
                Prescribed by:{" "}
                <Link href={prescription.doctorProfile} className="underline text-blue-500">
                  {prescription.prescribedBy}
                </Link>
              </p>

              <div className="flex items-center justify-between pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={prescription.downloadLink} download>
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </a>
                </Button>
                <div className="w-16 h-16">
                  <QRCode value={prescription.downloadLink} size={64} />
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/dashboard/prescriptions">View All Prescriptions</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
