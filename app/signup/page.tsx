"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

// 🔥 Firebase config (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyBEAWvS2G0xfbB8EevXEMF3Q_Tf_mkDbsU",
  authDomain: "healthcare-f9269.firebaseapp.com",
  projectId: "healthcare-f9269",
  storageBucket: "healthcare-f9269.firebasestorage.app",
  messagingSenderId: "747694115882",
  appId: "1:747694115882:web:9a4fe68956d96c330e4753",
  measurementId: "G-B39QQLSH56"
};

// 🔧 Initialize Firebase app (safely for client side)
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password)
      console.log("✅ Created:", userCred.user)
      toast.success("Account created successfully!")
      router.push("/login")
    } catch (error: any) {
      toast.error(error.message || "Signup failed.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
