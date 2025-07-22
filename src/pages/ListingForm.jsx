import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function ListingForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">Sell an Item</h1>
        <p className="text-muted-foreground">Create your listing in 3 easy steps</p>
      </div>

      {/* Progress indicator */}
      <div className="flex space-x-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full ${
              i <= step ? 'bg-primary' : 'bg-muted'
            }`}
          />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step}: {step === 1 ? 'Photos' : step === 2 ? 'Details' : 'Review'}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Add up to 5 photos of your item</p>
              {/* Photo upload component will go here */}
              <Button onClick={() => setStep(2)} className="w-full">
                Continue
              </Button>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., iPhone 13 Pro Max 256GB" />
              </div>
              <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input id="price" type="number" placeholder="45000" />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your item..." />
              </div>
              <Button onClick={() => setStep(3)} className="w-full">
                Continue
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p>Preview your listing here</p>
              <Button className="w-full">
                Publish Listing
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ListingForm
