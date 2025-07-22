import { Home, Plus, MessageCircle, Handshake, User } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'sell', icon: Plus, label: 'Sell', path: '/sell' },
    { id: 'chat', icon: MessageCircle, label: 'Chat', path: '/chat' },
    { id: 'rent', icon: Handshake, label: 'Rent', path: '/rent' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-background border-t border-border">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive 
                  ? 'text-primary bg-accent/50' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/30'
              }`}
            >
              <Icon size={18} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
