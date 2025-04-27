"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { useState } from "react"

const formSchema = z.object({
  emergencyNumber: z.string().min(5, "Emergency number is required"),
  location: z.string().min(5, "Location is required"),
})

type EmergencyFormValues = z.infer<typeof formSchema>

export default function EmergencyForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<EmergencyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emergencyNumber: "",
      location: "",
    },
  })

  const fillLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude
        const mapsLink = `https://www.google.com/maps?q=${lat},${lng}`
        form.setValue("location", mapsLink)
        toast.success("📍 Location link set!")
      },
      () => toast.error("Failed to get location.")
    )
  }

  const viewMap = () => {
    const link = form.getValues("location")
    if (link) {
      window.open(link, "_blank")
    } else {
      toast.warning("No location available.")
    }
  }

  const onSubmit = async (values: EmergencyFormValues) => {
    setLoading(true)
    try {
      const res = await fetch("/api/emergency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        toast.success("🚨 Emergency details sent.")
        form.reset()
      } else {
        toast.error("❌ Failed to send request.")
      }
    } catch (error) {
      toast.error("Something went wrong.")
    }
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-4">Emergency Alert</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={form.control} name="emergencyNumber" render={({ field }) => (
            <FormItem>
              <FormLabel>Emergency Number</FormLabel>
              <FormControl>
                <Input placeholder="+91 1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="location" render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <Input placeholder="Google Maps link" {...field} readOnly />
                  <Button type="button" onClick={fillLocation}>📍</Button>
                  <Button type="button" variant="outline" onClick={viewMap}>Map</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Emergency"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
