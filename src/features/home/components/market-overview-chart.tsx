'use client'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { format, parseISO } from 'date-fns'

// Types
type DataPoint = {
  datetime: string
  points: number
}

// Constants
const TRADING_START_HOUR = 11
const TRADING_END_HOUR = 15
const TICK_INTERVAL_MINUTES = 30
const Y_AXIS_TICK_INTERVAL = 20
const DATA_INTERVAL_MINUTES = 5

// Generate mock market data directly within trading hours
function generateMarketData(
  baseDate: Date = new Date('2025-05-01'),
  startHour: number = TRADING_START_HOUR,
  endHour: number = TRADING_END_HOUR
): DataPoint[] {
  const points: DataPoint[] = []
  let value = 2300 + Math.random() * 100 // start in the middle of the range

  // Set the start date to the specified trading start hour
  const startDate = new Date(baseDate)
  startDate.setHours(startHour, 0, 0, 0)

  // Set the end date to the specified trading end hour
  const endDate = new Date(baseDate)
  endDate.setHours(endHour, 0, 0, 0)

  // Calculate number of points based on the time range and interval
  const minutesDiff = (endDate.getTime() - startDate.getTime()) / (60 * 1000)
  const numPoints = Math.floor(minutesDiff / DATA_INTERVAL_MINUTES) + 1

  let date = new Date(startDate)

  for (let i = 0; i < numPoints; i++) {
    // Simulate random walk
    const change = (Math.random() - 0.5) * 30 // up to ±15 per step
    value = Math.max(2000, Math.min(2650, value + change))
    points.push({
      datetime: date.toISOString(),
      points: Math.round(value),
    })
    date = new Date(date.getTime() + DATA_INTERVAL_MINUTES * 60 * 1000)

    // Stop if we've reached or exceeded the end time
    if (date > endDate) break
  }

  return points
}

// Generate X-axis ticks at 30-minute intervals between trading hours, excluding the last tick
function generateXAxisTicks(dateString: string): string[] {
  const baseDate = new Date(dateString)
  const year = baseDate.getFullYear()
  const month = baseDate.getMonth()
  const day = baseDate.getDate()
  const ticks: string[] = []

  let date = new Date(year, month, day, TRADING_START_HOUR, 0, 0)
  const end = new Date(year, month, day, TRADING_END_HOUR, 0, 0)

  // Generate ticks until but not including the last tick (15:00)
  while (date < end) {
    ticks.push(date.toISOString())
    date = new Date(date.getTime() + TICK_INTERVAL_MINUTES * 60 * 1000) // add interval
  }

  return ticks
}

// Generate Y-axis ticks with specified interval
function generateYAxisTicks(min: number, max: number, interval: number): number[] {
  const ticks: number[] = []
  let value = Math.floor(min / interval) * interval

  while (value <= max) {
    ticks.push(value)
    value += interval
  }

  return ticks
}

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md bg-neutral-900 p-2 text-sm text-white">
        <span className="block">{format(parseISO(label), 'LLL dd HH:mm')}</span>
        <span className="font-bold">{payload[0].value}</span>
      </div>
    )
  }
  return null
}

export const MarketOverviewChart = () => {
  // Generate data directly within trading hours
  const marketData = generateMarketData()

  // Calculate chart boundaries
  const yMin = Math.min(...marketData.map((d) => d.points))
  const yMax = Math.max(...marketData.map((d) => d.points))
  const yAxisTicks = generateYAxisTicks(yMin, yMax, Y_AXIS_TICK_INTERVAL)

  // Generate x-axis ticks based on the date from the first data point
  const xAxisTicks = generateXAxisTicks(marketData[0]?.datetime || new Date().toISOString())

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={marketData} margin={{ top: 24 }}>
        <defs>
          <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFA500" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="datetime"
          axisLine={false}
          ticks={xAxisTicks}
          tickFormatter={(iso) => format(parseISO(iso), 'HH:mm')}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickFormatter={(v) => (v === 0 ? '' : v)}
          domain={[yMin, yMax]}
          ticks={yAxisTicks}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Area
          type="monotone"
          dataKey="points"
          stroke="#FF8C00"
          strokeWidth={2}
          fill="url(#colorPoints)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
