import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-600">CampusCart</h1>
          <Badge variant="outline" className="text-xs">
            IIT Mumbai
          </Badge>
        </div>
        <Button size="sm">Login</Button>
      </div>
    </header>
  )
}
