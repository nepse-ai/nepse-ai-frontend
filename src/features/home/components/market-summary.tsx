import { Card, CardContent } from '@/shared/components/card'
import { formatCurrency } from '@/shared/utils/formatCurrency'

export const MarketSummary = () => {
  return (
    <Card className="col-span-2">
      <CardContent>
        <p className="mb-3 text-2xl font-bold">Market Summary</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Turnover</p>
            <p className="text-lg font-semibold">Rs. {formatCurrency('10202701344.00')}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Traded Shares</p>
            <p className="text-lg font-semibold">24,011,014</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Transactions</p>
            <p className="text-lg font-semibold">88,955</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Scrips Traded</p>
            <p className="text-lg font-semibold">300</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Market Capitalization</p>
            <p className="text-lg font-semibold">Rs. 4,406,681,592,266.41</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Total Float Market Capitalization</p>
            <p className="text-lg font-semibold">Rs. 1,471,754,896,309.6</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center rounded-md bg-green-600/10 p-2 text-green-600">
            <span className="font-roboto-mono mb-1.5 text-3xl font-bold">82</span>
            <span className="text-sm uppercase">Advanced</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-red-600/10 p-2 text-red-600">
            <span className="font-roboto-mono mb-1.5 text-3xl font-bold">164</span>
            <span className="text-sm uppercase">Declined</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-neutral-200 p-2 text-neutral-500">
            <span className="font-roboto-mono mb-1.5 text-3xl font-bold">0</span>
            <span className="text-sm uppercase">Unchanged</span>
          </div>
        </div>
        <span className="mt-5 block text-sm text-neutral-500">
          *Count is based on the stocks mapped under the selected index.
        </span>
      </CardContent>
    </Card>
  )
}
