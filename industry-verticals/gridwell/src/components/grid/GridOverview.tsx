import React, { JSX } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Thermometer, Activity, TrendingUp, TrendingDown } from "lucide-react"
import { ComponentProps } from 'lib/component-props';

export type GridProps = ComponentProps & {
}

interface GridMetric {
  label: string
  value: string
  unit: string
  status: "normal" | "warning" | "critical"
  trend?: "up" | "down" | "stable"
}

const gridMetrics: GridMetric[] = [
  { label: "Current Load", value: "68,245", unit: "MW", status: "warning", trend: "up" },
  { label: "Available Capacity", value: "82,150", unit: "MW", status: "normal", trend: "stable" },
  { label: "Reserve Margin", value: "16.9", unit: "%", status: "normal", trend: "down" },
  { label: "Frequency", value: "60.02", unit: "Hz", status: "normal", trend: "stable" },
]

const outageData = [
  { region: "Houston Metro", affected: 12500, status: "active" },
  { region: "Dallas-Fort Worth", affected: 8200, status: "active" },
  { region: "Austin Area", affected: 3400, status: "restored" },
  { region: "San Antonio", affected: 1800, status: "active" },
]

const GridOverview = (props: GridProps): JSX.Element => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-green-600 bg-green-50 border-green-200"
      case "warning":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "critical":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-red-500" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-green-500" />
      default:
        return <Activity className="h-4 w-4 text-blue-500" />
    }
  }

  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`mx-auto p-6 w-full ${sxaStyles}`}>
      <h2 className="text-3xl font-bold text-foreground mb-6">Live Grid Conditions</h2>
      <div className="space-y-6">
        {/* Grid Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gridMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                {getTrendIcon(metric.trend)}
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm">{metric.unit}</div>
                </div>
                <Badge variant="outline" className={`mt-2 ${getStatusColor(metric.status)}`}>
                  {metric.status.toUpperCase()}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load vs Capacity Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Current Grid Load</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Load: 68,245 MW</span>
                <span>Capacity: 82,150 MW</span>
              </div>
              <Progress value={83} className="h-3" />
              <p className="text-sm">Operating at 83% capacity. Reserve margin: 16.9%</p>
            </div>
          </CardContent>
        </Card>

        {/* Temperature Impact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Thermometer className="h-5 w-5" />
              <span>Temperature Impact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">108°F</div>
                <div className="text-sm">Current Temp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">112°F</div>
                <div className="text-sm">Forecast High</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">+15%</div>
                <div className="text-sm">Load Increase</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outage Information */}
        <Card>
          <CardHeader>
            <CardTitle>Current Outages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {outageData.map((outage, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{outage.region}</div>
                    <div className="text-sm text-muted-foreground">
                      {outage.affected.toLocaleString()} customers affected
                    </div>
                  </div>
                  <Badge variant={outage.status === "active" ? "destructive" : "secondary"}>{outage.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export const Default = GridOverview;
