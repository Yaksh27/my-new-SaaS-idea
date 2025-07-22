import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

export function FilterModal({ 
  isOpen, 
  onClose, 
  selectedCategories = [], 
  onCategoryToggle,
  onApplyFilters,
  onClearFilters 
}) {
  const categories = [
    "Electronics", "Books", "Clothing", "Furniture", 
    "Sports", "Music Instruments", "Lab Equipment", 
    "Stationery", "Bikes", "Kitchen Items"
  ]

  const priceRanges = [
    "Under ₹1,000", "₹1,000 - ₹5,000", "₹5,000 - ₹10,000", 
    "₹10,000 - ₹25,000", "₹25,000 - ₹50,000", "Above ₹50,000"
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Filters
           
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-3">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => onCategoryToggle(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <Badge
                  key={range}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent"
                >
                  {range}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Distance */}
          <div>
            <h4 className="font-medium mb-3">Distance</h4>
            <div className="flex flex-wrap gap-2">
              {["Within 1km", "Within 5km", "Within 10km", "Any distance"].map((distance) => (
                <Badge
                  key={distance}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent"
                >
                  {distance}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button variant="outline" onClick={onClearFilters} className="flex-1">
            Clear All
          </Button>
          <Button onClick={onApplyFilters} className="flex-1">
            Apply Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
