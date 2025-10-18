"use client"

import { useState } from "react"
import { Upload, TrendingUp, Zap, BarChart3, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnergyChart from "./energy-chart"
import MetricsGrid from "./metrics-grid"
import FileUploadZone from "./file-upload-zone"

export default function AdvancedDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">TwinEnergy</h1>
                <p className="text-xs text-slate-500">Advanced Analytics Dashboard</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-900">Advanced Dashboard</h2>
          <p className="mt-2 text-slate-600">Monitor your energy consumption and upload data for detailed analysis</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="upload">Upload Data</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <MetricsGrid />
            <EnergyChart />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-emerald-600" />
                    Peak Hours Analysis
                  </CardTitle>
                  <CardDescription>Energy usage patterns throughout the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">Morning (6AM-12PM)</span>
                      <span className="text-lg font-bold text-slate-900">2,450 kWh</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">Afternoon (12PM-6PM)</span>
                      <span className="text-lg font-bold text-slate-900">3,890 kWh</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">Evening (6PM-12AM)</span>
                      <span className="text-lg font-bold text-slate-900">1,920 kWh</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100">
                      <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                    Efficiency Metrics
                  </CardTitle>
                  <CardDescription>Performance indicators and improvements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3">
                      <span className="text-sm font-medium text-slate-700">Efficiency Score</span>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-emerald-600">87%</span>
                        <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                      <span className="text-sm font-medium text-slate-700">Cost Savings</span>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-slate-900">$2,340</span>
                        <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                      <span className="text-sm font-medium text-slate-700">Carbon Reduction</span>
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-bold text-slate-900">12.5%</span>
                        <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="animate-fade-in">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-emerald-600" />
                  Upload Energy Data
                </CardTitle>
                <CardDescription>Import CSV files for detailed analysis and reporting</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploadZone onFileUpload={setUploadedFile} />
                {uploadedFile && (
                  <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 animate-fade-in">
                    <p className="text-sm font-medium text-emerald-900">✓ File uploaded successfully</p>
                    <p className="mt-1 text-sm text-emerald-700">{uploadedFile}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 mt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© 2025 TwinEnergy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                Documentation
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                Support
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
