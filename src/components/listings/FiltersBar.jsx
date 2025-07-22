import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export function FiltersBar({ 
  selectedCollege = "My College",
  selectedCity = "My City", 
  onCollegeChange,
  onCityChange,
  onFilterClick 
}) {
  return (
    <div className="space-y-3">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Browse Items</h2>
        <Button 
          size="sm" 
          variant="outline"
          onClick={onFilterClick}
          className="gap-2"
        >
          <Filter size={16} />
          Filter
        </Button>
      </div>
      
      {/* Location Filter Chips - Only College and City */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Badge 
          variant="outline"
          className="px-3 py-1 rounded-full whitespace-nowrap cursor-pointer hover:bg-accent hover:text-accent-foreground"
          onClick={onCityChange}
        >
          {selectedCity}
        </Badge>
        <Badge 
          variant="default"
          className="px-3 py-1 rounded-full whitespace-nowrap cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={onCollegeChange}
        >
          {selectedCollege}
        </Badge>
        
         <Badge 
          variant="outline"
          className="px-3 py-1 rounded-full whitespace-nowrap cursor-pointer hover:bg-accent hover:text-accent-foreground"
          onClick={onCityChange}
        >
            All
        </Badge>


      </div>
    </div>
  )
}
