import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import ListingForm from '../pages/ListingForm'
import Chat from '../pages/Chat'
import Profile from '../pages/Profile'

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sell" element={<ListingForm />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
