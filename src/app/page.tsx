import { MarketOverview } from '@/features/home/components/market-overview'
import { MarketSummary } from '@/features/home/components/market-summary'
import { TopByVolume } from '@/features/home/components/top-by-volume'
import { TopMovers } from '@/features/home/components/top-movers'

export default function Home() {
  return (
    <section className="p-6">
      <div className="grid grid-cols-5 gap-6">
        <MarketOverview />
        <MarketSummary />
      </div>
      <div className="mt-6 grid grid-cols-5 gap-6">
        <TopMovers />
        <TopByVolume />
      </div>
    </section>
  )
}
