import { Header } from './Header'
import { BottomNav } from './BottomNav'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full max-w-6xl mx-auto pt-16 md:pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
