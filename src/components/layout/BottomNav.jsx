import { Home, Plus, MessageCircle, Handshake, User } from 'lucide-react'
import { useState } from 'react'

export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'sell', icon: Plus, label: 'Sell', href: '/sell' },
    { id: 'chat', icon: MessageCircle, label: 'Chat', href: '/chat' },
    { id: 'rent', icon: Handshake, label: 'Rent', href: '/rent' },
    { id: 'profile', icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    // Only show on mobile/tablet, hidden on desktop since header has navigation
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-t border-border z-40">
      <div className="w-full max-w-md mx-auto px-2 h-16 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-md transition-colors min-w-0 flex-1 ${
                isActive 
                  ? 'text-primary bg-accent' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
