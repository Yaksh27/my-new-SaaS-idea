import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"

export function EmptyState({ 
  type = "products",
  title,
  description,
  actionLabel,
  onAction 
}) {
  const configs = {
    products: {
      icon: <Search className="w-12 h-12 text-muted-foreground" />,
      title: "No items found",
      description: "Try adjusting your filters or be the first to sell in your area!",
      actionLabel: "Post First Item",
      actionIcon: <Plus className="w-4 h-4" />
    }
  }

  const config = configs[type] || configs.products

  return (
    <Card className="p-8 text-center">
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          {config.icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{title || config.title}</h3>
          <p className="text-muted-foreground text-sm">
            {description || config.description}
          </p>
        </div>
        {onAction && (
          <Button onClick={onAction} className="mt-4">
            {config.actionIcon}
            {actionLabel || config.actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
