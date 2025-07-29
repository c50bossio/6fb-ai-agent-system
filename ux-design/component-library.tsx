/**
 * 6FB AI Agent System - Professional Component Library
 * Inspired by Quicken's clean design with barbershop business intelligence focus
 * Built for accessibility, responsiveness, and professional aesthetics
 */

import React, { ReactNode, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Target, 
  DollarSign, 
  Users, 
  BarChart3, 
  Settings, 
  Zap,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  Brain,
  Palette,
  UserPlus,
  LineChart,
  Cog,
  ChevronRight,
  Bell,
  Menu,
  Search,
  Filter,
  Download,
  Eye,
  MessageSquare,
  MoreHorizontal
} from 'lucide-react'

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface AIAgent {
  id: string
  name: string
  type: 'master_coach' | 'financial' | 'growth' | 'operations' | 'brand' | 'client_acquisition' | 'strategic_mindset'
  status: 'active' | 'processing' | 'idle' | 'error'
  confidence: number
  lastUpdate: Date
  icon: ReactNode
  color: string
  description: string
  metrics: {
    successRate: number
    totalQueries: number
    revenueImpact: number
  }
}

export interface BusinessMetric {
  id: string
  title: string
  value: string | number
  trend: 'up' | 'down' | 'neutral'
  trendValue: string
  icon: ReactNode
  color: 'primary' | 'success' | 'warning' | 'danger'
  description?: string
}

export interface AIInsight {
  id: string
  agentId: string
  agentName: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  confidence: number
  timestamp: Date
  category: 'revenue' | 'operations' | 'client' | 'marketing' | 'strategy'
  actionable: boolean
  implemented?: boolean
}

// =============================================================================
// LAYOUT COMPONENTS
// =============================================================================

interface ResponsiveGridProps {
  children: ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'md',
  className
}) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  }

  return (
    <div
      className={cn(
        'grid',
        gapClasses[gap],
        // Mobile columns
        `grid-cols-${columns.mobile || 1}`,
        // Tablet columns  
        `md:grid-cols-${columns.tablet || 2}`,
        // Desktop columns
        `lg:grid-cols-${columns.desktop || 3}`,
        className
      )}
    >
      {children}
    </div>
  )
}

interface DashboardContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  children,
  className,
  maxWidth = 'xl'
}) => {
  const widthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-2xl', 
    lg: 'max-w-4xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-8xl',
    full: 'max-w-full'
  }

  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8 py-6',
      widthClasses[maxWidth],
      className
    )}>
      {children}
    </div>
  )
}

// =============================================================================
// NAVIGATION COMPONENTS
// =============================================================================

interface TopNavigationProps {
  currentUser: {
    name: string
    avatar?: string
    role: string
  }
  activeSection: 'dashboard' | 'agents' | 'analytics' | 'settings'
  notifications: number
  onSectionChange: (section: string) => void
  onNotificationClick: () => void
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  currentUser,
  activeSection,
  notifications,
  onSectionChange,
  onNotificationClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'agents', label: 'AI Agents', icon: Brain },
    { id: 'analytics', label: 'Analytics', icon: LineChart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">6FB-AI</h1>
              <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                Live
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                    activeSection === item.id
                      ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-500'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button
              onClick={onNotificationClick}
              className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications > 9 ? '9+' : notifications}
                </span>
              )}
            </button>

            {/* User profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-sm">
                <p className="font-medium text-gray-900">{currentUser.name}</p>
                <p className="text-gray-500">{currentUser.role}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-sm font-bold">
                {currentUser.name.charAt(0)}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 pt-2 border-t border-gray-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={cn(
                      'w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                      activeSection === item.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

interface AgentNavigationGridProps {
  agents: AIAgent[]
  onAgentSelect: (agent: AIAgent) => void
  className?: string
}

export const AgentNavigationGrid: React.FC<AgentNavigationGridProps> = ({
  agents,
  onAgentSelect,
  className
}) => {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4', className)}>
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onClick={() => onAgentSelect(agent)}
          variant="compact"
        />
      ))}
    </div>
  )
}

// =============================================================================
// BUSINESS METRIC COMPONENTS
// =============================================================================

interface MetricCardProps {
  metric: BusinessMetric
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export const MetricCard: React.FC<MetricCardProps> = ({
  metric,
  size = 'md',
  className,
  onClick
}) => {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8'
  }

  const valueClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    primary: 'text-primary-600 bg-primary-100',
    success: 'text-green-600 bg-green-100',
    warning: 'text-orange-600 bg-orange-100',
    danger: 'text-red-600 bg-red-100'
  }

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-500'
  }

  const TrendIcon = metric.trend === 'up' ? TrendingUp : 
                   metric.trend === 'down' ? TrendingDown : Minus

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200',
        sizeClasses[size],
        onClick && 'cursor-pointer hover:border-primary-300',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className={cn('rounded-lg p-2', colorClasses[metric.color])}>
              {metric.icon}
            </div>
            <h3 className="text-sm font-medium text-gray-900">{metric.title}</h3>
          </div>
          
          <div className="space-y-1">
            <p className={cn('font-bold text-gray-900', valueClasses[size])}>
              {metric.value}
            </p>
            
            <div className="flex items-center space-x-1">
              <TrendIcon className={cn('w-4 h-4', trendColors[metric.trend])} />
              <span className={cn('text-sm font-medium', trendColors[metric.trend])}>
                {metric.trendValue}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {metric.description && (
        <p className="mt-3 text-sm text-gray-600">{metric.description}</p>
      )}
    </div>
  )
}

interface MetricsDashboardProps {
  metrics: BusinessMetric[]
  className?: string
}

export const MetricsDashboard: React.FC<MetricsDashboardProps> = ({
  metrics,
  className
}) => {
  return (
    <ResponsiveGrid
      columns={{ mobile: 1, tablet: 2, desktop: 4 }}
      gap="md"
      className={className}
    >
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </ResponsiveGrid>
  )
}

// =============================================================================
// AI AGENT COMPONENTS
// =============================================================================

interface AgentStatusIndicatorProps {
  status: AIAgent['status']
  confidence?: number
  size?: 'sm' | 'md' | 'lg'
}

export const AgentStatusIndicator: React.FC<AgentStatusIndicatorProps> = ({
  status,
  confidence,
  size = 'md'
}) => {
  const statusConfig = {
    active: { color: 'bg-green-500', icon: CheckCircle, label: 'Active' },
    processing: { color: 'bg-blue-500 animate-pulse', icon: Clock, label: 'Processing' },
    idle: { color: 'bg-gray-400', icon: Minus, label: 'Idle' },
    error: { color: 'bg-red-500', icon: XCircle, label: 'Error' }
  }

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }

  const config = statusConfig[status]
  const StatusIcon = config.icon

  return (
    <div className="flex items-center space-x-2">
      <div className={cn('rounded-full', config.color, sizeClasses[size])} />
      <span className="text-sm font-medium text-gray-700">{config.label}</span>
      {confidence && (
        <span className="text-xs text-gray-500">({confidence}%)</span>
      )}
    </div>
  )
}

interface AgentCardProps {
  agent: AIAgent
  variant?: 'default' | 'compact' | 'detailed'
  onClick?: () => void
  className?: string
}

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  variant = 'default',
  onClick,
  className
}) => {
  const variantClasses = {
    default: 'p-6',
    compact: 'p-4',
    detailed: 'p-8'
  }

  const agentColors = {
    master_coach: 'bg-blue-500',
    financial: 'bg-green-500',
    growth: 'bg-purple-500',
    operations: 'bg-orange-500',
    brand: 'bg-pink-500',
    client_acquisition: 'bg-indigo-500',
    strategic_mindset: 'bg-gray-700'
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200',
        variantClasses[variant],
        onClick && 'cursor-pointer hover:border-primary-300',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          'w-12 h-12 rounded-lg flex items-center justify-center text-white',
          agentColors[agent.type]
        )}>
          {agent.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {agent.name}
            </h3>
            {onClick && <ChevronRight className="w-5 h-5 text-gray-400" />}
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{agent.description}</p>
          
          <div className="space-y-2">
            <AgentStatusIndicator 
              status={agent.status} 
              confidence={agent.confidence}
              size="sm"
            />
            
            {variant === 'detailed' && (
              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    {agent.metrics.successRate}%
                  </p>
                  <p className="text-xs text-gray-500">Success Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    {agent.metrics.totalQueries}
                  </p>
                  <p className="text-xs text-gray-500">Queries</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">
                    ${agent.metrics.revenueImpact}
                  </p>
                  <p className="text-xs text-gray-500">Impact</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// =============================================================================
// AI INSIGHTS COMPONENTS
// =============================================================================

interface InsightCardProps {
  insight: AIInsight
  onImplement?: (insight: AIInsight) => void
  onDismiss?: (insight: AIInsight) => void
  onLearnMore?: (insight: AIInsight) => void
  className?: string
}

export const InsightCard: React.FC<InsightCardProps> = ({
  insight,
  onImplement,
  onDismiss,
  onLearnMore,
  className
}) => {
  const priorityColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-orange-200 bg-orange-50', 
    low: 'border-blue-200 bg-blue-50'
  }

  const priorityBadges = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-orange-100 text-orange-800',
    low: 'bg-blue-100 text-blue-800'
  }

  const categoryIcons = {
    revenue: DollarSign,
    operations: Cog,
    client: Users,
    marketing: Zap,
    strategy: Target
  }

  const CategoryIcon = categoryIcons[insight.category]

  return (
    <div className={cn(
      'bg-white rounded-lg border p-6 shadow-sm',
      priorityColors[insight.priority],
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <CategoryIcon className="w-4 h-4 text-gray-600" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{insight.title}</h4>
            <p className="text-sm text-gray-600">{insight.agentName}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={cn(
            'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
            priorityBadges[insight.priority]
          )}>
            {insight.priority}
          </span>
          <span className="text-xs text-gray-500">
            {insight.confidence}% confidence
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{insight.description}</p>
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {insight.timestamp.toLocaleDateString()}
        </p>
        
        {insight.actionable && !insight.implemented && (
          <div className="flex items-center space-x-2">
            {onDismiss && (
              <button
                onClick={() => onDismiss(insight)}
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                Dismiss
              </button>
            )}
            {onLearnMore && (
              <button
                onClick={() => onLearnMore(insight)}
                className="px-3 py-1 text-sm text-primary-600 hover:text-primary-800 transition-colors"
              >
                Learn More
              </button>
            )}
            {onImplement && (
              <button
                onClick={() => onImplement(insight)}
                className="px-4 py-2 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors"
              >
                Implement
              </button>
            )}
          </div>
        )}
        
        {insight.implemented && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            <CheckCircle className="w-4 h-4 mr-1" />
            Implemented
          </span>
        )}
      </div>
    </div>
  )
}

interface InsightFeedProps {
  insights: AIInsight[]
  title?: string
  showAgent?: boolean
  limit?: number
  onInsightAction?: (action: 'implement' | 'dismiss' | 'learn', insight: AIInsight) => void
  className?: string
}

export const InsightFeed: React.FC<InsightFeedProps> = ({
  insights,
  title = "AI Insights",
  showAgent = true,
  limit,
  onInsightAction,
  className
}) => {
  const displayInsights = limit ? insights.slice(0, limit) : insights

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-500">
          {insights.length} insight{insights.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      <div className="space-y-4">
        {displayInsights.map((insight) => (
          <InsightCard
            key={insight.id}
            insight={insight}
            onImplement={onInsightAction ? (insight) => onInsightAction('implement', insight) : undefined}
            onDismiss={onInsightAction ? (insight) => onInsightAction('dismiss', insight) : undefined}
            onLearnMore={onInsightAction ? (insight) => onInsightAction('learn', insight) : undefined}
          />
        ))}
      </div>
      
      {limit && insights.length > limit && (
        <div className="text-center pt-4">
          <button className="text-primary-600 hover:text-primary-800 font-medium">
            View all {insights.length} insights →
          </button>
        </div>
      )}
    </div>
  )
}

// =============================================================================
// BUSINESS INTELLIGENCE WIDGETS
// =============================================================================

interface BIWidgetProps {
  title: string
  subtitle?: string
  children: ReactNode
  actions?: ReactNode[]
  loading?: boolean
  error?: string
  className?: string
}

export const BIWidget: React.FC<BIWidgetProps> = ({
  title,
  subtitle,
  children,
  actions,
  loading,
  error,
  className
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg border border-gray-200 shadow-sm',
      className
    )}>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
          
          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        )}
        
        {error && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}
        
        {!loading && !error && children}
      </div>
    </div>
  )
}

// =============================================================================
// SAMPLE DATA FOR DEMONSTRATION
// =============================================================================

export const sampleAgents: AIAgent[] = [
  {
    id: '1',
    name: 'Master Coach',
    type: 'master_coach',
    status: 'active',
    confidence: 94,
    lastUpdate: new Date(),
    icon: <Target className="w-6 h-6" />,
    color: 'blue',
    description: 'Strategic business coaching and coordination',
    metrics: {
      successRate: 94,
      totalQueries: 156,
      revenueImpact: 1247
    }
  },
  {
    id: '2', 
    name: 'Financial Agent',
    type: 'financial',
    status: 'active',
    confidence: 89,
    lastUpdate: new Date(),
    icon: <DollarSign className="w-6 h-6" />,
    color: 'green',
    description: 'Revenue optimization and financial analysis',
    metrics: {
      successRate: 89,
      totalQueries: 203,
      revenueImpact: 2156
    }
  },
  {
    id: '3',
    name: 'Growth Agent', 
    type: 'growth',
    status: 'processing',
    confidence: 87,
    lastUpdate: new Date(),
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'purple',
    description: 'Business expansion and scaling strategies',
    metrics: {
      successRate: 87,
      totalQueries: 134,
      revenueImpact: 1879
    }
  }
]

export const sampleMetrics: BusinessMetric[] = [
  {
    id: '1',
    title: "Today's Revenue",
    value: '$1,247',
    trend: 'up',
    trendValue: '+23%',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'success',
    description: 'Compared to yesterday'
  },
  {
    id: '2',
    title: 'Capacity Utilization',
    value: '87%',
    trend: 'up', 
    trendValue: '+5%',
    icon: <Users className="w-6 h-6" />,
    color: 'primary',
    description: 'Current booking efficiency'
  },
  {
    id: '3',
    title: 'Client Satisfaction',
    value: '9.2',
    trend: 'neutral',
    trendValue: '±0%',
    icon: <Target className="w-6 h-6" />,
    color: 'success',
    description: 'Average NPS score'
  },
  {
    id: '4',
    title: 'Monthly Growth',
    value: '+12%',
    trend: 'down',
    trendValue: '-2%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'warning',
    description: 'Revenue vs last month'
  }
]

export const sampleInsights: AIInsight[] = [
  {
    id: '1',
    agentId: '2',
    agentName: 'Financial Agent',
    title: 'Increase haircut pricing by $5-8',
    description: 'Based on demand analysis and competitor pricing, raising prices by $5-8 could increase monthly revenue by $2,400 with minimal client impact.',
    priority: 'high',
    confidence: 94,
    timestamp: new Date(),
    category: 'revenue',
    actionable: true,
    implemented: false
  },
  {
    id: '2',
    agentId: '4',
    agentName: 'Operations Agent', 
    title: 'Optimize weekend scheduling',
    description: 'Weekend bookings are 23% above capacity. Consider adding Saturday evening slots to capture additional $800 weekly revenue.',
    priority: 'medium',
    confidence: 87,
    timestamp: new Date(),
    category: 'operations',
    actionable: true,
    implemented: false
  },
  {
    id: '3',
    agentId: '6',
    agentName: 'Client Acquisition Agent',
    title: 'Instagram promotion strategy',
    description: 'Recent posts show 340% higher engagement on before/after content. Recommend focusing on transformation showcases.',
    priority: 'low',
    confidence: 76,
    timestamp: new Date(),
    category: 'marketing',
    actionable: true,
    implemented: true
  }
]