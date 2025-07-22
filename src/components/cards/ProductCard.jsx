import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Clock } from "lucide-react"
import { memo, useState, useCallback, useMemo } from "react"
import { cn } from "@/lib/utils"

const ProductCard = memo(({ 
  title = "iPhone 13 Pro", 
  price = "₹45,000", 
  category = "Electronics", 
  distance = "2km away",
  image = null,
  condition = "Like New",
  timePosted = "2h ago",
  isFavorited = false,
  isUrgent = false,
  seller = "John D.",
  onClick,
  onFavorite,
  className,
  ...props
}) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Memoized handlers to prevent unnecessary re-renders
  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  const handleFavoriteClick = useCallback((e) => {
    e.stopPropagation()
    onFavorite?.(e)
  }, [onFavorite])

  const handleCardClick = useCallback((e) => {
    onClick?.(e)
  }, [onClick])

  // Memoized class names for better performance
  const cardClasses = useMemo(() => cn(
    "group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20 bg-card",
    className
  ), [className])

  const heartClasses = useMemo(() => cn(
    "transition-colors",
    isFavorited 
      ? 'fill-red-500 text-red-500' 
      : 'text-muted-foreground hover:text-red-500'
  ), [isFavorited])

  // Optimized image component
  const ImageComponent = useMemo(() => {
    if (image && !imageError) {
      return (
        <div className="relative w-full h-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img 
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-300 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    }
    
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-muted">
        <div className="text-3xl mb-1">📷</div>
        <span className="text-xs">No Image</span>
      </div>
    )
  }, [image, imageError, imageLoaded, title, handleImageError, handleImageLoad])

  return (
    <Card 
      className={cardClasses}
      onClick={handleCardClick}
      {...props}
    >
      {/* Image Container */}
      <div className="aspect-square bg-muted relative overflow-hidden">
        {/* Urgent Badge - Only render if needed */}
        {isUrgent && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="destructive" className="text-xs font-medium">
              Urgent
            </Badge>
          </div>
        )}
        
        {/* Favorite Button - Lazy render */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          type="button"
        >
          <Heart size={16} className={heartClasses} />
        </button>

        {ImageComponent}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs px-2 py-1">
            {category}
          </Badge>
          {condition && (
            <Badge variant="outline" className="text-xs px-2 py-1 border-green-200 text-green-700">
              {condition}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-primary">
            {price}
          </p>
          <div className="text-xs text-muted-foreground">
            by {seller}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 border-t border-border/50">
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{timePosted}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})

ProductCard.displayName = "ProductCard"

export { ProductCard }
