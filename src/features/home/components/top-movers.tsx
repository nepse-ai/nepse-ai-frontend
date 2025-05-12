import { Card, CardContent } from '@/shared/components/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/components/tooltip'
import { ArrowUp, ArrowDown } from 'lucide-react'

export const TopMovers = () => {
  return (
    <Card className="col-span-2">
      <CardContent>
        <Tabs defaultValue="gainers">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="gainers" className="w-1/2">
              Top Gainers
            </TabsTrigger>
            <TabsTrigger value="losers" className="w-1/2">
              Top Losers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gainers">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground border-b border-b-neutral-200 text-left text-xs font-medium">
                    <th className="pb-2">Symbol</th>
                    <th className="pb-2">LTP</th>
                    <th className="pb-2">Pt. Change</th>
                    <th className="pb-2">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>NMIC</TooltipTrigger>
                          <TooltipContent>
                            <p>NMIC</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>2,457.60</td>
                    <td className="text-green-600 dark:text-green-400">223.40</td>
                    <td className="text-green-600 dark:text-green-400">
                      <div className="flex items-center">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      {' '}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>CREST</TooltipTrigger>
                          <TooltipContent>
                            <p>CREST</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>2,031.70</td>
                    <td className="text-green-600 dark:text-green-400">184.70</td>
                    <td className="text-green-600 dark:text-green-400">
                      <div className="flex items-center">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      {' '}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>HHL</TooltipTrigger>
                          <TooltipContent>
                            <p>HHL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>470.50</td>
                    <td className="text-green-600 dark:text-green-400">42.72</td>
                    <td className="text-green-600 dark:text-green-400">
                      <div className="flex items-center">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        9.99
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      {' '}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>JOSHI</TooltipTrigger>
                          <TooltipContent>
                            <p>JOSHI</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>418.80</td>
                    <td className="text-green-600 dark:text-green-400">38.04</td>
                    <td className="text-green-600 dark:text-green-400">
                      <div className="flex items-center">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        9.99
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      {' '}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>OMPL</TooltipTrigger>
                          <TooltipContent>
                            <p>OMPL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>478.10</td>
                    <td className="text-green-600 dark:text-green-400">43.40</td>
                    <td className="text-green-600 dark:text-green-400">
                      <div className="flex items-center">
                        <ArrowUp className="mr-1 h-3 w-3" />
                        9.98
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="losers">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-muted-foreground border-b border-b-neutral-200 text-left text-xs font-medium">
                    <th className="pb-2">Symbol</th>
                    <th className="pb-2">LTP</th>
                    <th className="pb-2">Pt. Change</th>
                    <th className="pb-2">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">
                      {' '}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>SLBBL</TooltipTrigger>
                          <TooltipContent>
                            <p>SLBBL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td>1,089.00</td>
                    <td className="text-red-600 dark:text-red-400">-121.00</td>
                    <td className="text-red-600 dark:text-red-400">
                      <div className="flex items-center">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">MLBBL</td>
                    <td>1,620.00</td>
                    <td className="text-red-600 dark:text-red-400">-180.00</td>
                    <td className="text-red-600 dark:text-red-400">
                      <div className="flex items-center">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">SAEF</td>
                    <td>13.50</td>
                    <td className="text-red-600 dark:text-red-400">-1.50</td>
                    <td className="text-red-600 dark:text-red-400">
                      <div className="flex items-center">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">VLBS</td>
                    <td>1,350.00</td>
                    <td className="text-red-600 dark:text-red-400">-150.00</td>
                    <td className="text-red-600 dark:text-red-400">
                      <div className="flex items-center">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
                  </tr>
                  <tr className="font-roboto-mono tracking-tighter">
                    <td className="font-inter py-2 font-medium">NIBLPF</td>
                    <td>10.80</td>
                    <td className="text-red-600 dark:text-red-400">-1.20</td>
                    <td className="text-red-600 dark:text-red-400">
                      <div className="flex items-center">
                        <ArrowDown className="mr-1 h-3 w-3" />
                        10.00
                      </div>
                    </td>
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
