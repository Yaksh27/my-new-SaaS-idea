import { ProductCard } from "@/components/cards/ProductCard"
import { memo, useCallback, useMemo } from "react"
import { FixedSizeGrid as Grid } from 'react-window'
import { useWindowSize } from "@/hooks/useWindowSize"

// Virtualized grid item component
const GridItem = memo(({ columnIndex, rowIndex, style, data }) => {
  const { items, onProductClick, onFavorite } = data
  const index = rowIndex * data.columnCount + columnIndex
  const product = items[index]

  if (!product) return <div style={style} />

  return (
    <div style={style} className="p-2">
      <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        distance={product.distance}
        condition={product.condition}
        timePosted={product.timePosted}
        seller={product.seller}
        image={product.image}
        isUrgent={product.isUrgent}
        isFavorited={product.isFavorited}
        onClick={() => onProductClick(product)}
        onFavorite={() => onFavorite(product.id)}
      />
    </div>
  )
})

GridItem.displayName = "GridItem"

export const ProductGrid = memo(({ products = [], onProductClick, onFavorite }) => {
  const { width } = useWindowSize()
  
  // Mock data with better performance structure
  const mockProducts = useMemo(() => [
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: "₹45,000",
      category: "Electronics",
      distance: "2km away",
      condition: "Excellent",
      timePosted: "2h ago",
      seller: "Rahul K.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isUrgent: false,
      isFavorited: false
    },
    {
      id: 2,
      title: "MacBook Air M2",
      price: "₹85,000",
      category: "Electronics",
      distance: "1.5km away",
      condition: "Like New",
      timePosted: "1h ago",
      seller: "Priya S.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isUrgent: true,
      isFavorited: false,
    },
    // ... more items
  ], [])

  const displayProducts = useMemo(() => 
    products.length > 0 ? products : mockProducts
  , [products, mockProducts])

  // Calculate responsive columns
  const columnCount = useMemo(() => {
    if (width >= 1024) return 4 // lg
    if (width >= 768) return 3  // md
    if (width >= 640) return 2  // sm
    return 2 // mobile
  }, [width])

  const rowCount = useMemo(() => 
    Math.ceil(displayProducts.length / columnCount)
  , [displayProducts.length, columnCount])

  // Memoized grid data to prevent unnecessary re-renders
  const gridData = useMemo(() => ({
    items: displayProducts,
    columnCount,
    onProductClick,
    onFavorite
  }), [displayProducts, columnCount, onProductClick, onFavorite])

  // For smaller lists, use regular grid
  if (displayProducts.length <= 20) {
    return (
      <div className={`grid gap-4 ${
        columnCount === 4 ? 'grid-cols-4' :
        columnCount === 3 ? 'grid-cols-3' : 'grid-cols-2'
      }`}>
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            distance={product.distance}
            condition={product.condition}
            timePosted={product.timePosted}
            seller={product.seller}
            image={product.image}
            isUrgent={product.isUrgent}
            isFavorited={product.isFavorited}
            onClick={() => onProductClick?.(product)}
            onFavorite={() => onFavorite?.(product.id)}
          />
        ))}
      </div>
    )
  }

  // For large lists, use virtual scrolling
  const itemWidth = width / columnCount
  const itemHeight = itemWidth + 120 // Card height adjustment

  return (
    <div className="w-full" style={{ height: '600px' }}>
      <Grid
        columnCount={columnCount}
        columnWidth={itemWidth}
        height={600}
        rowCount={rowCount}
        rowHeight={itemHeight}
        width={width}
        itemData={gridData}
      >
        {GridItem}
      </Grid>
    </div>
  )
})

ProductGrid.displayName = "ProductGrid"
