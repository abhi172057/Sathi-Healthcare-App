"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Download } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

// Initial mock health metrics
const initialMetrics = [
  {
    id: 1,
    name: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    date: "2023-03-20",
  },
  {
    id: 2,
    name: "Heart Rate",
    value: "72",
    unit: "bpm",
    date: "2023-03-21",
  },
  {
    id: 3,
    name: "Blood Sugar",
    value: "95",
    unit: "mg/dL",
    date: "2023-03-22",
  },
]

export default function HealthMetricsPage() {
  const [metrics, setMetrics] = useState(initialMetrics)
  const [newMetric, setNewMetric] = useState({ name: "", value: "", unit: "" })

  const exportMetrics = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(metrics, null, 2))
    const downloadAnchor = document.createElement("a")
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute("download", "health_metrics.json")
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    document.body.removeChild(downloadAnchor)
  }

  const handleAddMetric = () => {
    if (!newMetric.name || !newMetric.value || !newMetric.unit) return

    setMetrics([
      ...metrics,
      {
        id: metrics.length + 1,
        ...newMetric,
        date: new Date().toISOString().slice(0, 10),
      },
    ])
    setNewMetric({ name: "", value: "", unit: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Health Metrics</h2>
          <p className="text-muted-foreground">Track and export your personal health metrics</p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={exportMetrics}>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Metric
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Health Metric</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Metric Name (e.g. Blood Pressure)"
                  value={newMetric.name}
                  onChange={(e) => setNewMetric({ ...newMetric, name: e.target.value })}
                />
                <Input
                  placeholder="Value (e.g. 120/80)"
                  value={newMetric.value}
                  onChange={(e) => setNewMetric({ ...newMetric, value: e.target.value })}
                />
                <Input
                  placeholder="Unit (e.g. mmHg)"
                  value={newMetric.unit}
                  onChange={(e) => setNewMetric({ ...newMetric, unit: e.target.value })}
                />
                <Button onClick={handleAddMetric}>Save</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="metrics">All Metrics</TabsTrigger>
        </TabsList>
        <TabsContent value="metrics" className="space-y-4">
          {metrics.map((metric) => (
            <Card key={metric.id}>
              <CardHeader>
                <CardTitle>{metric.name}</CardTitle>
                <CardDescription>{metric.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {metric.value} <span className="text-muted-foreground text-base">{metric.unit}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
