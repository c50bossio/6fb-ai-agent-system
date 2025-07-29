# 6FB AI Agent System - Dashboard Wireframes & UX Design

## Overview
Modern, professional dashboard design inspired by Quicken's clean data presentation, optimized for barbershop business intelligence and AI agent insights.

## Design Principles
- **Card-based Modular Design**: Inspired by Quicken's flexible component system
- **Data-First Approach**: Clear hierarchy with business metrics prominently displayed
- **Professional Aesthetic**: Clean, minimalist design that builds trust and credibility
- **Mobile-First Responsive**: Barbershop owners need on-the-go access
- **Accessibility-First**: WCAG 2.1 AA compliance built-in

## Page Structure & Information Architecture

### 1. Main Dashboard Layout

```
┌─────────────────────────────────────────────────────────────┐
│ [🏠 6FB-AI] [Agent Hub] [Analytics] [Settings] [👤 Profile] │ ← Sticky Top Nav
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌─ Dashboard Overview ────────────────────────────────────┐ │
│ │ Today's Revenue: $1,247  |  Capacity: 87%  |  NPS: 9.2  │ │ ← Key Metrics Bar
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ AI Agent Status Grid ─────────────────────────────────┐ │
│ │ [🎯 Master Coach]    [💰 Financial]    [📈 Growth]       │ │
│ │ [⚙️ Operations]      [🎨 Brand]       [🏃 Client Acq]    │ │ ← Agent Quick Access
│ │ [🧠 Strategic Mind]                                      │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Business Intelligence Grid ───────────────────────────┐ │
│ │ ┌─Revenue Trends──┐ ┌─Client Metrics─┐ ┌─Operations─┐   │ │
│ │ │ [Chart/Graph]   │ │ New: 12        │ │ Efficiency │   │ │ ← Responsive Grid
│ │ │                 │ │ Returning: 45  │ │ 94%        │   │ │
│ │ └─────────────────┘ └────────────────┘ └───────────┘   │ │
│ │                                                         │ │
│ │ ┌─Recent Insights─────────────────────────────────────┐ │ │
│ │ │ • Financial Agent: "Increase haircut price by $5"   │ │ │ ← AI Insights Feed
│ │ │ • Growth Agent: "Schedule more weekend appointments" │ │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Action Center ────────────────────────────────────────┐ │
│ │ [Schedule Meeting] [View Reports] [Update Goals]        │ │ ← Quick Actions
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2. Agent Detail View Layout

```
┌─────────────────────────────────────────────────────────────┐
│ ← Back to Dashboard    💰 Financial Agent                   │ ← Breadcrumb Nav
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ┌─ Agent Status & Performance ───────────────────────────┐ │
│ │ Status: Active 🟢 | Confidence: 94% | Last Update: 2m   │ │ ← Agent Health
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Key Insights & Recommendations ───────────────────────┐ │
│ │ 💡 "Increase haircut prices by $5-8 based on demand"    │ │
│ │ 📊 "Weekend slots booking 23% above average"            │ │ ← Priority Insights
│ │ 🎯 "Target 15% revenue increase this month achievable"  │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Performance Metrics ───────────────────────────────────┐ │
│ │ ┌─Revenue Impact─┐ ┌─Accuracy Score─┐ ┌─Usage Stats──┐   │ │
│ │ │ +$1,247/month  │ │ 94% success    │ │ 156 queries  │   │ │ ← Agent KPIs
│ │ └────────────────┘ └────────────────┘ └──────────────┘   │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Conversation History ──────────────────────────────────┐ │
│ │ [Today] [This Week] [This Month] [All Time]             │ │
│ │                                                         │ │ ← Chat Interface
│ │ Q: "How can I increase my weekend revenue?"             │ │
│ │ A: Based on your booking patterns, I recommend...       │ │
│ │                                                         │ │
│ │ [Ask Financial Agent a Question] ────────────────────── │ │
│ └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 3. Mobile Dashboard Layout

```
┌───────────────────────────┐
│ [☰] 6FB-AI        [👤]   │ ← Hamburger Menu
├───────────────────────────┤
│                           │
│ ┌─ Today's Summary ─────┐ │
│ │ Revenue: $1,247       │ │
│ │ Bookings: 23          │ │ ← Stacked Cards
│ │ Capacity: 87%         │ │
│ └───────────────────────┘ │
│                           │
│ ┌─ AI Agents ───────────┐ │
│ │ 🎯 Master Coach   [>] │ │
│ │ 💰 Financial      [>] │ │ ← Compact List
│ │ 📈 Growth         [>] │ │
│ │ View All Agents...    │ │
│ └───────────────────────┘ │
│                           │
│ ┌─ Quick Actions ───────┐ │
│ │ [📊 View Reports]     │ │
│ │ [📅 Schedule]         │ │ ← Action Buttons
│ │ [⚙️ Settings]         │ │
│ └───────────────────────┘ │
│                           │
│ ┌─ Recent Insights ─────┐ │
│ │ • Price increase rec. │ │
│ │ • Weekend optimization│ │ ← Scrollable Feed
│ │ • New client strategy │ │
│ │ View All...           │ │
│ └───────────────────────┘ │
└───────────────────────────┘
```

## Component Specifications

### Navigation Components

#### Top Navigation Bar
```tsx
interface TopNavProps {
  currentUser: User
  activeSection: 'dashboard' | 'agents' | 'analytics' | 'settings'
  notifications: Notification[]
}

// Features:
// - Sticky positioning (sticky top-0)
// - Dark/light mode toggle
// - Notification center with badge
// - Quick agent access dropdown
// - User profile menu
// - Mobile-responsive hamburger menu
```

#### Agent Navigation Grid
```tsx
interface AgentNavGridProps {
  agents: AIAgent[]
  layout: 'grid' | 'list' | 'compact'
  showStatus: boolean
  onAgentSelect: (agent: AIAgent) => void
}

// Features:
// - 7 specialized agent cards
// - Real-time status indicators
// - Quick action shortcuts
// - Responsive grid (3x3 → 2x4 → 1x7)
// - Agent performance badges
```

### Data Visualization Components

#### Metrics Dashboard Card
```tsx
interface MetricCardProps {
  title: string
  value: string | number
  trend: 'up' | 'down' | 'neutral'
  trendValue: string
  icon: ReactNode
  color: 'primary' | 'success' | 'warning' | 'danger'
  size: 'sm' | 'md' | 'lg'
}

// Inspired by Quicken's clean metric presentation
// Features:
// - Large, prominent value display
// - Trend indicators with arrows
// - Color-coded status system
// - Responsive typography scaling
// - Accessibility-compliant contrast
```

#### Business Intelligence Widget
```tsx
interface BIWidgetProps {
  type: 'chart' | 'table' | 'metric' | 'insight'
  data: any[]
  title: string
  timeframe: 'today' | 'week' | 'month' | 'quarter'
  agentSource?: AIAgent
  actionable: boolean
}

// Features:
// - Multiple visualization types
// - Real-time data updates
// - Agent attribution
// - Export functionality
// - Drill-down capabilities
```

### AI Agent Interface Components

#### Agent Status Indicator
```tsx
interface AgentStatusProps {
  agent: AIAgent
  showDetails: boolean
  size: 'sm' | 'md' | 'lg'
}

// Features:
// - Real-time status (Active, Processing, Idle, Error)
// - Confidence level indicator
// - Last update timestamp
// - Performance metrics badge
// - Click to expand details
```

#### Insight Feed
```tsx
interface InsightFeedProps {
  insights: AIInsight[]
  groupBy: 'agent' | 'time' | 'priority'
  showActions: boolean
  limit?: number
}

// Features:
// - Real-time insight streaming
// - Priority-based sorting
// - Action buttons (Implement, Dismiss, Learn More)
// - Agent attribution
// - Success tracking
```

### Layout Components

#### Responsive Grid System
```tsx
interface ResponsiveGridProps {
  columns: {
    mobile: number
    tablet: number
    desktop: number
  }
  gap: 'sm' | 'md' | 'lg'
  children: ReactNode
}

// Breakpoints:
// - Mobile: 320-768px (1 column focus)
// - Tablet: 768-1024px (2 column layout)
// - Desktop: 1024px+ (3-4 column grid)
```

## Color System & Typography

### Color Palette (Professional & Accessible)

#### Primary Colors
- **Primary Blue**: #2563eb (Trustworthy, professional)
- **Primary Dark**: #1e40af (Focus states, headers)
- **Primary Light**: #dbeafe (Backgrounds, subtle accents)

#### Semantic Colors
- **Success Green**: #059669 (Positive metrics, growth)
- **Warning Orange**: #d97706 (Attention needed, moderate alerts)
- **Danger Red**: #dc2626 (Critical issues, declining metrics)
- **Info Purple**: #7c3aed (Insights, AI recommendations)

#### Neutral Colors (High Contrast)
- **Gray 900**: #111827 (Primary text)
- **Gray 700**: #374151 (Secondary text)
- **Gray 500**: #6b7280 (Tertiary text, placeholders)
- **Gray 200**: #e5e7eb (Borders, dividers)
- **Gray 100**: #f3f4f6 (Card backgrounds)
- **Gray 50**: #f9fafb (Page background)

### Typography Scale

#### Font System
- **Primary**: Inter (Clean, highly readable)
- **Monospace**: SF Mono, Monaco (Code, data values)

#### Type Scale
```css
/* Headers */
.text-4xl: 2.25rem (36px) - Page titles
.text-3xl: 1.875rem (30px) - Section headers  
.text-2xl: 1.5rem (24px) - Card titles
.text-xl: 1.25rem (20px) - Subsection headers

/* Body Text */
.text-base: 1rem (16px) - Primary body text
.text-sm: 0.875rem (14px) - Secondary text
.text-xs: 0.75rem (12px) - Captions, labels

/* Metrics/Data */
.text-6xl: 3.75rem (60px) - Primary KPI values
.text-5xl: 3rem (48px) - Secondary metrics
```

### Spacing System

#### Consistent Spacing Scale
```css
/* Component Spacing */
.space-1: 0.25rem (4px) - Tight elements
.space-2: 0.5rem (8px) - Related elements
.space-3: 0.75rem (12px) - Component padding
.space-4: 1rem (16px) - Card padding
.space-6: 1.5rem (24px) - Section spacing
.space-8: 2rem (32px) - Large component spacing
.space-12: 3rem (48px) - Section dividers
```

## Responsive Design Strategy

### Breakpoint System
```css
/* Mobile First Approach */
/* Base: 320-767px (Mobile) */
.container { max-width: 100%; padding: 1rem; }
.grid { grid-template-columns: 1fr; }

/* sm: 768-1023px (Tablet) */
@media (min-width: 768px) {
  .container { max-width: 768px; padding: 1.5rem; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* lg: 1024-1279px (Desktop) */
@media (min-width: 1024px) {
  .container { max-width: 1024px; padding: 2rem; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* xl: 1280px+ (Large Desktop) */
@media (min-width: 1280px) {
  .container { max-width: 1280px; }
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

### Mobile Optimization Features
- **Touch-friendly targets**: Minimum 44x44px tap areas
- **Thumb navigation**: Important actions within thumb reach
- **Swipe gestures**: Agent card navigation, insight dismissal
- **Progressive disclosure**: Show essential info, expand on tap
- **Offline capability**: Cached insights and basic functionality

## Accessibility Guidelines (WCAG 2.1 AA)

### Color Contrast Requirements
- **Text on background**: 4.5:1 minimum ratio
- **Large text (18pt+)**: 3:1 minimum ratio
- **Interactive elements**: 3:1 for focus indicators
- **Avoid color-only information**: Use icons + text

### Keyboard Navigation
- **Tab order**: Logical, predictable flow
- **Focus indicators**: Visible 2px outline
- **Skip links**: "Skip to main content"
- **Keyboard shortcuts**: Common actions accessible

### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Descriptive labels for complex widgets
- **Live regions**: Dynamic content announcements
- **Alt text**: Meaningful descriptions for charts/images

### Motor Accessibility
- **Large click targets**: 44x44px minimum
- **Reduced motion**: Respect prefers-reduced-motion
- **Timeout warnings**: Allow time extensions
- **Multiple interaction methods**: Mouse, keyboard, touch

## User Flow Diagrams

### Primary User Journey: Daily Business Check
```
1. Login → 2. Dashboard Overview → 3. Review Key Metrics
           ↓
4. Check AI Insights → 5. Select Priority Agent → 6. Review Recommendations
           ↓
7. Take Action → 8. Track Results → 9. Return to Dashboard
```

### Agent Interaction Flow
```
1. Agent Selection → 2. View Status & Health → 3. Review Recent Insights
           ↓
4. Ask New Question → 5. Receive Recommendation → 6. Mark as Implemented
           ↓
7. Track Success → 8. Share Feedback → 9. Improve Agent Performance
```

### Mobile Quick Actions Flow
```
1. Open App → 2. Quick Metrics Glance → 3. Priority Notifications
           ↓
4. One-Tap Actions → 5. Voice Commands → 6. Swipe Navigation
```

## Implementation Roadmap

### Phase 1: Core Dashboard (Week 1-2)
- [ ] Responsive grid system implementation
- [ ] Basic card components with Quicken-inspired styling
- [ ] Navigation structure with 7 agent access
- [ ] Key metrics display with real-time updates

### Phase 2: Agent Integration (Week 3-4)  
- [ ] Agent status indicators and health monitoring
- [ ] Insight feed with prioritization
- [ ] Individual agent detail views
- [ ] Chat interface for agent interaction

### Phase 3: Advanced Features (Week 5-6)
- [ ] Data visualization components
- [ ] Advanced filtering and search
- [ ] Export and reporting functionality
- [ ] Mobile app optimization

### Phase 4: Polish & Accessibility (Week 7-8)
- [ ] Comprehensive accessibility audit
- [ ] Performance optimization
- [ ] User testing and feedback integration
- [ ] Documentation and training materials

## Success Metrics

### User Experience KPIs
- **Time to key information**: < 3 seconds to critical metrics
- **Agent interaction success**: 90%+ successful query resolution
- **Mobile usage**: 60%+ of daily check-ins on mobile
- **Accessibility compliance**: 100% WCAG 2.1 AA compliance

### Business Impact Metrics
- **Dashboard engagement**: Daily active usage by 85%+ of users
- **Agent adoption**: 7+ agent interactions per user per week
- **Action implementation**: 70%+ of AI recommendations acted upon
- **Revenue correlation**: Trackable business improvement metrics

---

This comprehensive UX design framework transforms the 6FB AI Agent System into a professional, accessible, and highly functional business intelligence platform that barbershop owners will love to use daily.