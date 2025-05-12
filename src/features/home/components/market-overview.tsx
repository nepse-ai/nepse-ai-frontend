import { Badge } from '@/shared/components/badge'
import { Card, CardContent } from '@/shared/components/card'
import { cn } from '@/shared/utils/cn'
import { formatCurrency } from '@/shared/utils/formatCurrency'
import { ArrowUp, ArrowDown } from 'lucide-react'
import { format } from 'date-fns'
import { MarketOverviewChart } from './market-overview-chart'

export const MarketOverview = () => {
  const data = {
    name: 'NEPSE Index',
    price: 5321.41,
    change: 27.45,
    changePercent: 0.52,
    volume: '2.1B',
    lastUpdated: '2 minutes ago',
  }
  const isPositive = data.change > 0

  return (
    <Card className="col-span-3">
      <CardContent>
        <div className="flex items-baseline-last justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <Badge variant="destructive" className="h-6">
                Market {isPositive ? 'Closed' : 'Open'}
              </Badge>
            </div>
            <div className="font-roboto-mono mt-1.5 flex items-end gap-2 tracking-tighter">
              <span className="text-2xl font-bold tabular-nums">{formatCurrency(data.price)}</span>
              <div
                className={cn('flex items-center', isPositive ? 'text-green-600' : 'text-red-600')}
              >
                {isPositive ? <ArrowUp className="size-4" /> : <ArrowDown className="size-4" />}
                <span className="ml-1 font-semibold tabular-nums">
                  {isPositive ? '+' : ''}
                  {formatCurrency(data.change)} ({isPositive ? '+' : ''}
                  {data.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            <p className="mt-1">
              <span className="text-neutral-500">Volume: </span>
              <span className="font-roboto-mono font-medium">252K</span>
            </p>
          </div>
          <div className="text-right text-neutral-500">
            <span className="block text-xs">As of</span>
            <span className="text-sm">{format(new Date(), 'LLL LL')} | 3:00PM</span>
          </div>
        </div>
        <MarketOverviewChart />
      </CardContent>
    </Card>
  )
}
