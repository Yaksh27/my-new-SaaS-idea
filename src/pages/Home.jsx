import { useState } from "react"
import { FiltersBar } from "@/components/listings/FiltersBar"
import { FilterModal } from "@/components/listings/FilterModal"
import { ProductGrid } from "@/components/listings/ProductGrid"
import { EmptyState } from "@/components/common/EmptyState"

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  // Location filters
  const [selectedCollege, setSelectedCollege] = useState("My College")
  const [selectedCity, setSelectedCity] = useState("My City")
  
  // Category filters
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)

  const handleCollegeChange = () => {
    // Open college selection modal or dropdown
    console.log('Change college')
  }

  const handleCityChange = () => {
    // Open city selection modal or dropdown
    console.log('Change city')
  }

  const handleFilterClick = () => {
    setIsFilterModalOpen(true)
  }

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleApplyFilters = () => {
    console.log('Applied filters:', selectedCategories)
    setIsFilterModalOpen(false)
    // Apply filters to products
  }

  const handleClearFilters = () => {
    setSelectedCategories([])
    console.log('Cleared all filters')
  }

  const handleProductClick = (product) => {
    console.log('Product clicked:', product)
    // Navigate to product details
  }

  const handlePostItem = () => {
    console.log('Navigate to sell page')
    // Navigate to listing form
  }

  return (
  <div className="space-y-6 py-4">
    <FiltersBar 
      selectedCollege={selectedCollege}
      selectedCity={selectedCity}
      onCollegeChange={handleCollegeChange}
      onCityChange={handleCityChange}
      onFilterClick={handleFilterClick}
    />
    
    {/* Show active category filters */}
    {selectedCategories.length > 0 && (
      <div className="flex gap-2 flex-wrap">
        <span className="text-sm text-muted-foreground">Filtering by:</span>
        {selectedCategories.map((category) => (
          <Badge key={category} variant="secondary" className="text-xs">
            {category}
            <button 
              onClick={() => handleCategoryToggle(category)}
              className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full p-0.5"
            >
              ×
            </button>
          </Badge>
        ))}
      </div>
    )}
    
    {/* Always show ProductGrid - it will use mock data when products is empty */}
    <ProductGrid 
      products={products}
      onProductClick={handleProductClick}
    />

    <FilterModal
      isOpen={isFilterModalOpen}
      onClose={() => setIsFilterModalOpen(false)}
      selectedCategories={selectedCategories}
      onCategoryToggle={handleCategoryToggle}
      onApplyFilters={handleApplyFilters}
      onClearFilters={handleClearFilters}
    />
  </div>
)

}

export default Home
