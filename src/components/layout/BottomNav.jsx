import { Home, Plus, MessageCircle, User } from 'lucide-react'

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-around">
        <button className="flex flex-col items-center gap-1 text-blue-600">
          <Home size={20} />
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <Plus size={20} />
          <span className="text-xs">Sell</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <MessageCircle size={20} />
          <span className="text-xs">Chat</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500">
          <User size={20} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </nav>
  )
}
