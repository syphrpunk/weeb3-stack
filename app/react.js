/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mjcqMDXOor1
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="flex flex-col items-center justify-center w-full py-6 space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Web3 Wallet</h1>
        <p className="text-gray-600 dark:text-gray-400">Connect your wallet to view your balance and transactions</p>
      </header>
      <main className="flex flex-col items-center justify-center w-full space-y-4">
        <Button className="w-full max-w-xs">Connect Wallet</Button>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Ethereum Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-gray-900 dark:text-gray-100">0 ETH</CardContent>
        </Card>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Last Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Hash
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Sender</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Receiver</th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Hash #1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Sender #1</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      Receiver #1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0 ETH</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Hash #2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Sender #2</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      Receiver #2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0 ETH</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Hash #3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Sender #3</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      Receiver #3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">0 ETH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

