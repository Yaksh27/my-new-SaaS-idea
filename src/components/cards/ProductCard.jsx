import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ 
  title = "iPhone 13 Pro", 
  price = "₹45,000", 
  category = "Electronics", 
  distance = "2km away",
  image = null,
  onClick
}) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square bg-muted relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            📱 Image
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium text-sm truncate">{title}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Badge variant="secondary" className="text-xs">{category}</Badge>
          <span className="text-xs text-muted-foreground">• {distance}</span>
        </div>
        <p className="font-semibold text-green-600 mt-2">{price}</p>
      </CardContent>
    </Card>
  )
}
