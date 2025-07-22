import { ProductCard } from "@/components/cards/ProductCard"

export function ProductGrid({ products = [], onProductClick }) {
  // Mock data for now
  const mockProducts = [
    {
      id: 1,
      title: "iPhone 13 Pro",
      price: "₹45,000",
      category: "Electronics",
      distance: "2km away",
      image: null
    },
    {
      id: 2,
      title: "MacBook Air M2",
      price: "₹85,000",
      category: "Electronics",
      distance: "1.5km away",
      image: null
    },
    {
      id: 3,
      title: "Study Table",
      price: "₹3,500",
      category: "Furniture",
      distance: "500m away",
      image: null
    },
    {
      id: 4,
      title: "Engineering Books",
      price: "₹2,000",
      category: "Books",
      distance: "1km away",
      image: null
    },
  ]

  const displayProducts = products.length > 0 ? products : mockProducts

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          distance={product.distance}
          image={product.image}
          onClick={() => onProductClick?.(product)}
        />
      ))}
    </div>
  )
}
