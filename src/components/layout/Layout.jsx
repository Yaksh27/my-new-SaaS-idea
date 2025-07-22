import { Header } from './Header'
import { BottomNav } from './BottomNav'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-md mx-auto pt-16 pb-20 px-4">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
