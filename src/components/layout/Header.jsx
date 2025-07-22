import { Button } from "../ui/button"
import { Menu, X, Sun, Moon, User } from "lucide-react"
import { useState, useEffect } from "react"

import { Link, useLocation, useNavigate } from "react-router-dom" // Add these imports

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  // Check for saved dark mode preference or system preference
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (saved !== null) {
      setIsDarkMode(saved === 'true')
    } else {
      setIsDarkMode(systemPrefersDark)
    }
  }, [])

  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
    // Helper function to check if link is active
  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with orange accent */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold tracking-tight">
              <span className="text-primary">Campus</span>
              <span className="text-foreground">Cart</span>
            </h1>
          </div>

         {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-32 space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActiveLink('/') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Browse
            </Link>
            <Link 
              to="/sell" 
              className={`text-sm font-medium transition-colors ${
                isActiveLink('/sell') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Sell
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActiveLink('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Rent
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm font-medium transition-colors ${
                isActiveLink('/how-it-works') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              How it Works
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActiveLink('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 hover:bg-accent hover:text-accent-foreground"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-primary" />
              ) : (
                <Moon size={18} className="text-muted-foreground hover:text-primary" />
              )}
            </Button>
            <Button 
              variant="default"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Login
            </Button>
               <Button 
               onClick={()=>navigate('/profile')}
              variant="default"
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-gray-200 hover:text-foreground"
          
            >
              My Profile
              <User size= {20}/>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="p-2"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-primary" />
              ) : (
                <Moon size={18} />
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                Browse
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                Sell
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                How it Works
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                About
              </a>
              <div className="pt-2">
                <Button 
                  variant="default"
                  size="sm" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
