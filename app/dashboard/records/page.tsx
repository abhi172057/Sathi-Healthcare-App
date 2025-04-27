import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for medical records
const medicalRecords = [
  {
    id: 1,
    title: "Annual Physical Examination",
    doctor: "Dr. Sarah Johnson",
    date: "January 15, 2023",
    category: "examination",
    fileSize: "2.4 MB",
  },
  {
    id: 2,
    title: "Blood Test Results",
    doctor: "Dr. Michael Chen",
    date: "February 22, 2023",
    category: "lab",
    fileSize: "1.8 MB",
  },
  {
    id: 3,
    title: "Chest X-Ray",
    doctor: "Dr. James Wilson",
    date: "March 10, 2023",
    category: "imaging",
    fileSize: "5.2 MB",
  },
  {
    id: 4,
    title: "Cardiology Consultation",
    doctor: "Dr. Sarah Johnson",
    date: "April 5, 2023",
    category: "consultation",
    fileSize: "1.1 MB",
  },
  {
    id: 5,
    title: "Vaccination Record",
    doctor: "Dr. Emily Rodriguez",
    date: "April 20, 2023",
    category: "vaccination",
    fileSize: "0.8 MB",
  },
]

export default function MedicalRecordsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Medical Records</h2>
          <p className="text-muted-foreground">Access and manage your medical documents</p>
        </div>
        <Button asChild>
  <a
    href="https://f98b156a834706909d.gradio.live"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Plus className="mr-2 h-4 w-4" />
    Analyse Report
  </a>
</Button>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload New Record
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search records..." className="pl-8" />
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Records</SelectItem>
            <SelectItem value="examination">Examinations</SelectItem>
            <SelectItem value="lab">Lab Results</SelectItem>
            <SelectItem value="imaging">Imaging</SelectItem>
            <SelectItem value="consultation">Consultations</SelectItem>
            <SelectItem value="vaccination">Vaccinations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {medicalRecords.map((record) => (
            <Card key={record.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{record.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {record.doctor} • {record.date}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{record.category}</span>
                        <span className="text-xs text-muted-foreground">{record.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          {medicalRecords.slice(0, 3).map((record) => (
            <Card key={record.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{record.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {record.doctor} • {record.date}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{record.category}</span>
                        <span className="text-xs text-muted-foreground">{record.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="shared" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shared Records</CardTitle>
              <CardDescription>Medical records you've shared with healthcare providers</CardDescription>
            </CardHeader>
            <CardContent className="flex h-40 items-center justify-center">
              <p className="text-center text-muted-foreground">You haven't shared any medical records yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

