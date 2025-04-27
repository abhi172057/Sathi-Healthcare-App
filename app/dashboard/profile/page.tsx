"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, Mail, Phone, Download } from "lucide-react"

const userProfile = {
  name: "Abhishek Arya",
  email: "abhishek@gmail.com",
  phone: "+91 8756356241",
  gender: "Male",
  age: 20,
  address: "Greater noida Gautam Buddh Nagar",
  bio: "A passionate patient advocate and tech enthusiast. Loves collaborating with healthcare professionals.",
  profilePicture: "/images/profile.jpg", // Optional if you're handling images
}

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>
        <Button>
          <Pencil className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contact">Contact Info</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>{userProfile.name}</CardTitle>
              <CardDescription>{userProfile.bio}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Age:</strong> {userProfile.age}</p>
              <p><strong>Gender:</strong> {userProfile.gender}</p>
              <p><strong>Address:</strong> {userProfile.address}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Stay connected with us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {userProfile.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {userProfile.phone}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage preferences or download data</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Profile Data
              </Button>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
