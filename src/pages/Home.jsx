import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function Home() {
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Browse Items</h2>
        <Button size="sm" variant="outline">Filter</Button>
      </div>
      
      {/* Filter chips */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full whitespace-nowrap">
          My College
        </Badge>
        <Badge variant="outline" className="px-3 py-1 rounded-full whitespace-nowrap">
          Mumbai
        </Badge>
        <Badge variant="outline" className="px-3 py-1 rounded-full whitespace-nowrap">
          Electronics
        </Badge>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map(i => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                📱 Image
              </div>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-sm truncate">iPhone 13 Pro</h3>
              <div className="flex items-center gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">Electronics</Badge>
                <span className="text-xs text-gray-500">• 2km away</span>
              </div>
              <p className="font-semibold tex text-green-600 mt-2">₹45,000</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
