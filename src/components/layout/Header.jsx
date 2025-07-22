import { Button } from "../ui/button"
import { Menu, X, Sun, Moon, User } from "lucide-react"
import { useState, useEffect } from "react"

import { Link, useLocation, useNavigate } from "react-router-dom"

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
          {/* Logo with orange accent and hover effect */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold tracking-tight cursor-pointer transform transition-all duration-300 hover:scale-105">
              <span className="text-primary transition-colors duration-300 hover:brightness-110">Campus</span>
              <span className="text-foreground transition-colors duration-300 hover:text-primary/80">Cart</span>
            </h1>
          </div>

         {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden md:flex items-center ml-32 space-x-8">
            <Link 
              to="/" 
              className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 ${
                isActiveLink('/') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              } before:absolute before:inset-0 before:-m-2 before:rounded-lg before:bg-primary/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative z-10">Browse</span>
            </Link>
            <Link 
              to="/sell" 
              className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 ${
                isActiveLink('/sell') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              } before:absolute before:inset-0 before:-m-2 before:rounded-lg before:bg-primary/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative z-10">Sell</span>
            </Link>
            <Link 
              to="/about" 
              className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 ${
                isActiveLink('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              } before:absolute before:inset-0 before:-m-2 before:rounded-lg before:bg-primary/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative z-10">Rent</span>
            </Link>
            <Link 
              to="/how-it-works" 
              className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 ${
                isActiveLink('/how-it-works') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              } before:absolute before:inset-0 before:-m-2 before:rounded-lg before:bg-primary/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative z-10">How it Works</span>
            </Link>
            <Link 
              to="/about" 
              className={`relative text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 ${
                isActiveLink('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-muted-foreground hover:text-primary'
              } before:absolute before:inset-0 before:-m-2 before:rounded-lg before:bg-primary/5 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100`}
            >
              <span className="relative z-10">About</span>
            </Link>
          </nav>

          {/* Desktop Actions with enhanced bubble effects */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              <div className="transition-transform duration-300 hover:rotate-12">
                {isDarkMode ? (
                  <Sun size={18} className="text-primary" />
                ) : (
                  <Moon size={18} className="text-muted-foreground hover:text-primary" />
                )}
              </div>
            </Button>
            <Button 
              variant="default"
              size="sm"
              className="relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full"
            >
              <span className="relative z-10">Login</span>
            </Button>
            <Button 
               onClick={()=>navigate('/profile')}
              variant="default"
              size="sm"
              className="relative overflow-hidden bg-secondary text-secondary-foreground transition-all duration-300 transform hover:scale-105 hover:bg-gray-200 hover:text-foreground hover:shadow-lg hover:shadow-secondary/30 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full"
            >
              <span className="relative z-10 mr-2">My Profile</span>
              <User size={20} className="relative z-10 transition-transform duration-300 hover:rotate-12"/>
            </Button>
          </div>

          {/* Mobile Menu Button with bubble effect */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <div className="transition-transform duration-300 hover:rotate-12">
                {isDarkMode ? (
                  <Sun size={18} className="text-primary" />
                ) : (
                  <Moon size={18} />
                )}
              </div>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X size={20} className="rotate-90" /> : <Menu size={20} className="hover:rotate-12" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu with enhanced animations */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 transform hover:scale-105 hover:text-primary hover:bg-accent hover:shadow-md active:scale-95">
                Browse
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 transform hover:scale-105 hover:text-primary hover:bg-accent hover:shadow-md active:scale-95">
                Sell
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 transform hover:scale-105 hover:text-primary hover:bg-accent hover:shadow-md active:scale-95">
                How it Works
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 transform hover:scale-105 hover:text-primary hover:bg-accent hover:shadow-md active:scale-95">
                About
              </a>
              <div className="pt-2">
                <Button 
                  variant="default"
                  size="sm" 
                  className="w-full relative overflow-hidden bg-primary text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:transition-transform before:duration-500 hover:before:translate-x-full"
                >
                  <span className="relative z-10">Login</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}