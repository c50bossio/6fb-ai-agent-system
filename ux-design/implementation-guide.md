# 6FB AI Agent System - Implementation Guide

## Overview
This guide provides practical implementation examples for integrating the professional dashboard components into the 6FB AI Agent System, inspired by Quicken's clean design principles.

## Quick Start Implementation

### 1. Setting Up the Dashboard Layout

```tsx
// app/dashboard/page.tsx
'use client'

import { useState, useEffect } from 'react'
import {
  TopNavigation,
  DashboardContainer,
  MetricsDashboard,
  AgentNavigationGrid,
  InsightFeed,
  BIWidget,
  ResponsiveGrid,
  sampleAgents,
  sampleMetrics,
  sampleInsights
} from '@/ux-design/component-library'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [selectedAgent, setSelectedAgent] = useState(null)

  // Mock user data
  const currentUser = {
    name: 'John Smith',
    role: 'Shop Owner',
    avatar: '/avatars/john.jpg'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation
        currentUser={currentUser}
        activeSection={activeSection}
        notifications={3}
        onSectionChange={setActiveSection}
        onNotificationClick={() => console.log('Notifications clicked')}
      />
      
      <DashboardContainer maxWidth="xl">
        {/* Key Metrics Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Business Overview
          </h2>
          <MetricsDashboard metrics={sampleMetrics} />
        </section>

        {/* AI Agents Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            AI Agent Team
          </h2>
          <AgentNavigationGrid
            agents={sampleAgents}
            onAgentSelect={(agent) => setSelectedAgent(agent)}
          />
        </section>

        {/* Business Intelligence Widgets */}
        <ResponsiveGrid 
          columns={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap="lg"
          className="mb-8"
        >
          <BIWidget
            title="Revenue Trends"
            subtitle="Last 30 days"
            actions={[
              <button key="export" className="text-sm text-primary-600 hover:text-primary-800">
                Export
              </button>
            ]}
          >
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Component Here</p>
            </div>
          </BIWidget>

          <BIWidget
            title="Client Metrics"
            subtitle="Active clients overview"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">New Clients</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Returning Clients</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">VIP Clients</span>
                <span className="font-semibold">8</span>
              </div>
            </div>
          </BIWidget>

          <BIWidget
            title="Operations Efficiency"
            subtitle="Current performance"
          >
            <div className="text-center py-8">
              <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
              <p className="text-gray-600">Booking Efficiency</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </BIWidget>
        </ResponsiveGrid>

        {/* AI Insights Feed */}
        <section>
          <InsightFeed
            insights={sampleInsights}
            title="Recent AI Insights"
            limit={3}
            onInsightAction={(action, insight) => {
              console.log(`${action} action on insight:`, insight.title)
            }}
          />
        </section>
      </DashboardContainer>
    </div>
  )
}
```

### 2. Individual Agent Page Implementation

```tsx
// app/agents/[agentId]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import {
  TopNavigation,
  DashboardContainer,
  AgentCard,
  InsightFeed,
  MetricCard,
  BIWidget,
  ResponsiveGrid,
  sampleAgents,
  sampleInsights
} from '@/ux-design/component-library'
import { ArrowLeft, MessageSquare, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function AgentDetailPage() {
  const params = useParams()
  const [agent, setAgent] = useState(null)
  const [chatHistory, setChatHistory] = useState([])
  const [newQuestion, setNewQuestion] = useState('')

  useEffect(() => {
    // Find agent by ID
    const foundAgent = sampleAgents.find(a => a.id === params.agentId)
    setAgent(foundAgent)
    
    // Mock chat history
    setChatHistory([
      {
        id: 1,
        type: 'question',
        content: 'How can I increase my weekend revenue?',
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        id: 2,
        type: 'answer',
        content: 'Based on your booking patterns, I recommend adding Saturday evening slots (6-8 PM) and Sunday afternoon appointments. This could generate an additional $800-1200 weekly.',
        timestamp: new Date(Date.now() - 3580000)
      }
    ])
  }, [params.agentId])

  if (!agent) return <div>Loading...</div>

  const agentMetrics = [
    {
      id: '1',
      title: 'Revenue Impact',
      value: `$${agent.metrics.revenueImpact}`,
      trend: 'up',
      trendValue: '+15%',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'success'
    },
    {
      id: '2', 
      title: 'Success Rate',
      value: `${agent.metrics.successRate}%`,
      trend: 'up',
      trendValue: '+5%',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'primary'
    },
    {
      id: '3',
      title: 'Total Queries',
      value: agent.metrics.totalQueries,
      trend: 'neutral',
      trendValue: '±0%',
      icon: <Users className="w-5 h-5" />,
      color: 'primary'
    }
  ]

  const agentInsights = sampleInsights.filter(insight => insight.agentId === agent.id)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation
        currentUser={{ name: 'John Smith', role: 'Shop Owner' }}
        activeSection="agents"
        notifications={3}
        onSectionChange={() => {}}
        onNotificationClick={() => {}}
      />
      
      <DashboardContainer maxWidth="xl">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-primary-600 hover:text-primary-800"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{agent.name}</span>
        </div>

        {/* Agent Overview */}
        <section className="mb-8">
          <AgentCard agent={agent} variant="detailed" />
        </section>

        {/* Agent Performance Metrics */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Performance Metrics
          </h2>
          <ResponsiveGrid columns={{ mobile: 1, tablet: 3, desktop: 3 }}>
            {agentMetrics.map(metric => (
              <MetricCard key={metric.id} metric={metric} size="md" />
            ))}
          </ResponsiveGrid>
        </section>

        {/* Two Column Layout for Chat and Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Interface */}
          <BIWidget
            title="Agent Conversation"
            subtitle="Ask questions and get recommendations"
            className="h-fit"
          >
            <div className="space-y-4">
              {/* Chat History */}
              <div className="max-h-96 overflow-y-auto space-y-4 mb-4">
                {chatHistory.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.type === 'question' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'question'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'question' 
                          ? 'text-primary-100' 
                          : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* New Question Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder={`Ask ${agent.name} a question...`}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && newQuestion.trim()) {
                      // Handle sending question
                      console.log('Sending question:', newQuestion)
                      setNewQuestion('')
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (newQuestion.trim()) {
                      console.log('Sending question:', newQuestion)
                      setNewQuestion('')
                    }
                  }}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 flex items-center"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>
            </div>
          </BIWidget>

          {/* Agent-Specific Insights */}
          <div>
            <InsightFeed
              insights={agentInsights}
              title={`${agent.name} Insights`}
              onInsightAction={(action, insight) => {
                console.log(`${action} action on insight:`, insight.title)
              }}
            />
          </div>
        </div>
      </DashboardContainer>
    </div>
  )
}
```

### 3. Mobile-Optimized Layout

```tsx
// components/MobileDashboard.tsx
'use client'

import { useState } from 'react'
import {
  MetricCard,
  AgentCard,
  InsightCard,
  sampleAgents,
  sampleMetrics,
  sampleInsights
} from '@/ux-design/component-library'
import { Menu, X, Bell } from 'lucide-react'

export function MobileDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 md:hidden">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-lg font-bold text-gray-900">6FB-AI</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold">
              J
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white">
            <nav className="px-4 py-3 space-y-2">
              {['Dashboard', 'AI Agents', 'Analytics', 'Settings'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Content */}
      <main className="px-4 py-6 space-y-6">
        {/* Today's Summary */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Summary</h2>
          <div className="space-y-4">
            {sampleMetrics.slice(0, 3).map(metric => (
              <MetricCard key={metric.id} metric={metric} size="sm" />
            ))}
          </div>
        </section>

        {/* AI Agents Quick Access */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">AI Agents</h2>
            <button className="text-sm text-primary-600 hover:text-primary-800">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {sampleAgents.slice(0, 3).map(agent => (
              <AgentCard
                key={agent.id}
                agent={agent}
                variant="compact"
                onClick={() => console.log('Navigate to agent', agent.id)}
              />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'View Reports', icon: '📊' },
              { label: 'Schedule', icon: '📅' },
              { label: 'Settings', icon: '⚙️' },
              { label: 'Support', icon: '💬' }
            ].map((action) => (
              <button
                key={action.label}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <p className="text-sm font-medium text-gray-900">{action.label}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Insights */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Insights</h2>
            <button className="text-sm text-primary-600 hover:text-primary-800">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {sampleInsights.slice(0, 2).map(insight => (
              <InsightCard
                key={insight.id}
                insight={insight}
                onImplement={(insight) => console.log('Implement:', insight.title)}
                onLearnMore={(insight) => console.log('Learn more:', insight.title)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
```

## Advanced Implementation Examples

### 4. Real-Time Data Integration

```tsx
// hooks/useRealTimeData.ts
import { useState, useEffect } from 'react'

export function useRealTimeMetrics() {
  const [metrics, setMetrics] = useState(sampleMetrics)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prevMetrics => 
        prevMetrics.map(metric => ({
          ...metric,
          value: metric.id === '1' 
            ? `$${Math.floor(Math.random() * 2000 + 1000)}`
            : metric.value
        }))
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return { metrics, loading }
}

export function useAgentInsights(agentId?: string) {
  const [insights, setInsights] = useState(sampleInsights)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const filteredInsights = agentId 
        ? sampleInsights.filter(insight => insight.agentId === agentId)
        : sampleInsights
      setInsights(filteredInsights)
      setLoading(false)
    }, 1000)
  }, [agentId])

  return { insights, loading }
}
```

### 5. Advanced Chart Integration

```tsx
// components/charts/RevenueChart.tsx
import { BIWidget } from '@/ux-design/component-library'

export function RevenueChart() {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Daily Revenue',
      data: [1200, 1350, 1100, 1400, 1600, 2100, 1800],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      tension: 0.4
    }]
  }

  return (
    <BIWidget
      title="Revenue Trends"
      subtitle="Last 7 days"
      actions={[
        <select key="timeframe" className="text-sm border border-gray-300 rounded px-2 py-1">
          <option>7 days</option>
          <option>30 days</option>
          <option>90 days</option>
        </select>
      ]}
    >
      <div className="h-64">
        {/* Replace with your preferred chart library (Chart.js, Recharts, etc.) */}
        <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization here</p>
        </div>
      </div>
    </BIWidget>
  )
}
```

## Accessibility Implementation

### 6. Keyboard Navigation Support

```tsx
// utils/accessibility.ts
export const keyboardHelpers = {
  onEnterOrSpace: (callback: () => void) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      callback()
    }
  },

  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    container.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    })
  }
}
```

### 7. Screen Reader Optimization

```tsx
// components/AccessibleMetricCard.tsx
import { MetricCard } from '@/ux-design/component-library'

export function AccessibleMetricCard({ metric }) {
  return (
    <MetricCard
      metric={metric}
      onClick={() => console.log('Metric clicked')}
      className="focus:ring-2 focus:ring-primary-500 focus:outline-none"
      role="button"
      tabIndex={0}
      aria-label={`${metric.title}: ${metric.value}, trending ${metric.trend} by ${metric.trendValue}`}
    />
  )
}
```

## Testing & Quality Assurance

### 8. Component Testing Examples

```tsx
// __tests__/MetricCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { MetricCard } from '@/ux-design/component-library'
import { sampleMetrics } from '@/ux-design/component-library'

describe('MetricCard', () => {
  const mockMetric = sampleMetrics[0]

  test('renders metric data correctly', () => {
    render(<MetricCard metric={mockMetric} />)
    
    expect(screen.getByText(mockMetric.title)).toBeInTheDocument()
    expect(screen.getByText(mockMetric.value)).toBeInTheDocument()
    expect(screen.getByText(mockMetric.trendValue)).toBeInTheDocument()
  })

  test('handles click events', () => {
    const mockClick = jest.fn()
    render(<MetricCard metric={mockMetric} onClick={mockClick} />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(mockClick).toHaveBeenCalled()
  })

  test('displays correct trend colors', () => {
    const { rerender } = render(<MetricCard metric={mockMetric} />)
    
    // Test up trend
    expect(screen.getByText(mockMetric.trendValue)).toHaveClass('text-green-600')
    
    // Test down trend
    const downMetric = { ...mockMetric, trend: 'down' }
    rerender(<MetricCard metric={downMetric} />)
    expect(screen.getByText(downMetric.trendValue)).toHaveClass('text-red-600')
  })
})
```

## Performance Optimization

### 9. Lazy Loading & Code Splitting

```tsx
// components/LazyDashboard.tsx
import { lazy, Suspense } from 'react'
import { BIWidget } from '@/ux-design/component-library'

// Lazy load heavy components
const RevenueChart = lazy(() => import('./charts/RevenueChart'))
const ClientAnalytics = lazy(() => import('./analytics/ClientAnalytics'))

export function LazyDashboard() {
  return (
    <div className="space-y-6">
      <Suspense fallback={
        <BIWidget title="Revenue Trends" loading={true} />
      }>
        <RevenueChart />
      </Suspense>

      <Suspense fallback={
        <BIWidget title="Client Analytics" loading={true} />
      }>
        <ClientAnalytics />
      </Suspense>
    </div>
  )
}
```

### 10. Responsive Image Handling

```tsx
// components/ResponsiveImage.tsx
import Image from 'next/image'

export function ResponsiveAgentAvatar({ agent, size = 'md' }) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 }
  }

  return (
    <div className={`relative rounded-lg overflow-hidden bg-${agent.color}-500`}>
      <Image
        src={agent.avatar || `/avatars/agent-${agent.type}.png`}
        alt={`${agent.name} avatar`}
        width={sizeMap[size].width}
        height={sizeMap[size].height}
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  )
}
```

## Deployment Checklist

### Pre-Launch Quality Assurance

1. **Accessibility Compliance**
   - [ ] WCAG 2.1 AA color contrast ratios verified
   - [ ] Keyboard navigation tested on all components
   - [ ] Screen reader compatibility confirmed
   - [ ] Focus indicators visible and consistent

2. **Responsive Design Testing**
   - [ ] Mobile devices (320px - 767px) tested
   - [ ] Tablet devices (768px - 1023px) tested  
   - [ ] Desktop screens (1024px+) tested
   - [ ] Touch targets meet 44x44px minimum

3. **Performance Benchmarks**
   - [ ] Core Web Vitals scores meet targets
   - [ ] Bundle size optimized with code splitting
   - [ ] Images optimized with proper formats
   - [ ] Lazy loading implemented for heavy components

4. **Cross-Browser Compatibility**
   - [ ] Chrome/Chromium tested
   - [ ] Safari tested
   - [ ] Firefox tested
   - [ ] Edge tested

5. **Component Library Validation**
   - [ ] All components render without errors
   - [ ] TypeScript compilation successful
   - [ ] Unit tests pass with >90% coverage
   - [ ] Integration tests confirm user flows

This implementation guide provides everything needed to build a professional, accessible, and high-performance barbershop AI agent dashboard that rivals the quality and usability of established financial software like Quicken.