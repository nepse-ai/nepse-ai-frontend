import { Card, CardContent } from '@/shared/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/tabs'

export const TopByVolume = () => {
  return (
    <Card className="col-span-3">
      <CardContent>
        <Tabs defaultValue="turnover">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="turnover" className="w-1/2">
              Top Turnover
            </TabsTrigger>
            <TabsTrigger value="volume" className="w-1/2">
              Top Volume
            </TabsTrigger>
            <TabsTrigger value="transactions" className="w-1/2">
              Top Transactions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="turnover">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground border-b border-b-neutral-200 text-left text-xs font-medium">
                    <th className="w-1/3 pb-2">Symbol</th>
                    <th className="w-1/3 pb-2">Turnover</th>
                    <th className="w-1/3 pb-2">LTP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">RADHI</td>
                    <td>661,070,703.00</td>
                    <td className="text-green-600 dark:text-green-400">744.20</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">NGPL</td>
                    <td>606,868,984.90</td>
                    <td className="text-green-600 dark:text-green-400">383.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">UPCL</td>
                    <td>546,795,011.60</td>
                    <td className="text-green-600 dark:text-green-400">426.50</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">SHPC</td>
                    <td>533,368,599.40</td>
                    <td className="text-green-600 dark:text-green-400">617.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">BPCL</td>
                    <td>325,729,197.00</td>
                    <td className="text-green-600 dark:text-green-400">531.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="volume">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground border-b border-b-neutral-200 text-left text-xs font-medium">
                    <th className="w-1/3 pb-2">Symbol</th>
                    <th className="w-1/3 pb-2">Turnover</th>
                    <th className="w-1/3 pb-2">LTP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">RADHI</td>
                    <td>661,070,703.00</td>
                    <td className="text-green-600 dark:text-green-400">744.20</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">NGPL</td>
                    <td>606,868,984.90</td>
                    <td className="text-green-600 dark:text-green-400">383.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">UPCL</td>
                    <td>546,795,011.60</td>
                    <td className="text-green-600 dark:text-green-400">426.50</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">SHPC</td>
                    <td>533,368,599.40</td>
                    <td className="text-green-600 dark:text-green-400">617.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">BPCL</td>
                    <td>325,729,197.00</td>
                    <td className="text-green-600 dark:text-green-400">531.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="transactions">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground border-b border-b-neutral-200 text-left text-xs font-medium">
                    <th className="w-1/3 pb-2">Symbol</th>
                    <th className="w-1/3 pb-2">Turnover</th>
                    <th className="w-1/3 pb-2">LTP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">RADHI</td>
                    <td>661,070,703.00</td>
                    <td className="text-green-600 dark:text-green-400">744.20</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">NGPL</td>
                    <td>606,868,984.90</td>
                    <td className="text-green-600 dark:text-green-400">383.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">UPCL</td>
                    <td>546,795,011.60</td>
                    <td className="text-green-600 dark:text-green-400">426.50</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">SHPC</td>
                    <td>533,368,599.40</td>
                    <td className="text-green-600 dark:text-green-400">617.00</td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">BPCL</td>
                    <td>325,729,197.00</td>
                    <td className="text-green-600 dark:text-green-400">531.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
