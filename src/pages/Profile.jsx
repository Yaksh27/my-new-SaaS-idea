import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MapPin, GraduationCap, Edit, Check, X, Star } from "lucide-react"

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Rahul Kumar",
    email: "rahul.kumar@iitb.ac.in",
    college: "IIT Bombay",
    city: "Mumbai",
    year: "3rd Year",
    department: "Computer Science"
  })

  const [editForm, setEditForm] = useState(profile)

  const handleSave = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditForm(profile)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6 py-4">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit size={16} className="mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Location & College Info - Most Important */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap size={20} />
            College & Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="college">College/University</Label>
                  <Input
                    id="college"
                    value={editForm.college}
                    onChange={(e) => setEditForm({...editForm, college: e.target.value})}
                    placeholder="e.g., IIT Bombay"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={editForm.city}
                    onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                    placeholder="e.g., Mumbai"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    value={editForm.year}
                    onChange={(e) => setEditForm({...editForm, year: e.target.value})}
                    placeholder="e.g., 3rd Year"
                  />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={editForm.department}
                    onChange={(e) => setEditForm({...editForm, department: e.target.value})}
                    placeholder="e.g., Computer Science"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button onClick={handleSave} size="sm">
                  <Check size={16} className="mr-2" />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline" size="sm">
                  <X size={16} className="mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-primary" />
                <span className="font-medium">{profile.college}</span>
                <Badge variant="secondary">{profile.year}</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="font-medium">{profile.city}</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {profile.department}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Card className="text-center">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Items Sold</div>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary">3</div>
            <div className="text-sm text-muted-foreground">Active Listings</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-primary flex items-center  justify-center gap-2 ">4.8  <Star size={20}/></div>
           
            <div className="text-sm text-muted-foreground">Rating</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              My Active Listings
            </Button>
            <Button variant="outline" className="justify-start">
              Purchase History
            </Button>
            <Button variant="outline" className="justify-start">
              Saved Items
            </Button>
            <Button variant="outline" className="justify-start">
              Account Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
