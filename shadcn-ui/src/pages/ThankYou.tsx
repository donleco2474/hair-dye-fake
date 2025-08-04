import * as React from "react"
import { Button } from "@/components/ui/button"
import { getCurrentOrder } from "@/lib/utils"
import { Order } from "@/types/order"
import { Link } from "react-router-dom"
import { CheckCircle, Share2 } from "lucide-react"

export default function ThankYou() {
  const order = React.useMemo(() => getCurrentOrder(), [])
  const [copied, setCopied] = React.useState(false)
  
  // Get query parameters from URL if present
  const location = window.location;
  const searchParams = new URLSearchParams(location.search);
  const nameFromQuery = searchParams.get('name');
  
  const shareOrder = () => {
    const text = `I just ordered the amazing Shipping Color Hair Dye! Check it out at: ${window.location.origin}`
    
    if (navigator.share) {
      navigator.share({
        title: 'Shipping Color Hair Dye',
        text: text,
        url: window.location.origin,
      })
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }
  
  // Handle WhatsApp support
  const openWhatsApp = () => {
    const phone = '07030151874'; // Default support number
    const message = encodeURIComponent(`Hello, I just placed an order for Hair Dye and have a question. My order confirmation is: ${order?.id || 'Not available'}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };
  
  if (!order && !nameFromQuery) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">No order found</h1>
          <p className="mb-6 text-muted-foreground">Please return to the homepage to place an order.</p>
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    )
  }
  
  // Use order data from localStorage if available, otherwise use query parameters
  const data = order?.data || {
    name: nameFromQuery || 'Valued Customer',
    phone: searchParams.get('phone') || '07030151874',
    address: searchParams.get('address') || 'Not provided',
    colorChoice: searchParams.get('colorChoice') || 'natural-black',
    packageOption: searchParams.get('packageOption') || 'complete-treatment',
    orderDate: new Date().toISOString(),
  };
  
  // Generate order ID if not available
  const orderId = order?.id || `order-${Date.now()}`;
  
  // Calculate estimated delivery date (1-3 business days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3); // Maximum 3 days
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-primary/5 py-8 md:py-16">
      <div className="container max-w-3xl">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          {/* Header with success icon */}
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="rounded-full bg-green-100 p-4 mb-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Thank You For Your Order!</h1>
            <p className="text-muted-foreground mt-2 max-w-lg">
              Your order #{orderId.substring(6)} has been received and is being processed.
              You'll receive a confirmation soon.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Order confirmation card */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary/10 p-4 border-b">
                <h2 className="font-semibold text-xl">Order Confirmation</h2>
              </div>
              <div className="p-6">
                <dl className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Name:</dt>
                    <dd className="font-medium">{data.name}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Phone:</dt>
                    <dd className="font-medium">{data.phone}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Address:</dt>
                    <dd className="font-medium">{data.address}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Selected Color:</dt>
                    <dd className="font-medium capitalize">{data.colorChoice.replace(/-/g, ' ')}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Package Option:</dt>
                    <dd className="font-medium capitalize">{data.packageOption.replace(/-/g, ' ')}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <dt className="text-muted-foreground">Order Date:</dt>
                    <dd className="font-medium">
                      {new Date(data.orderDate).toLocaleString()}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            
            {/* Delivery information */}
            <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
              <h2 className="font-semibold text-xl mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Delivery Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 012 2v3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0017 6h-2.05A2.5 2.5 0 0011 4H3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Estimated Delivery Time</h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">1–3 business days</span> (location-dependent)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Next Steps</h3>
                    <p className="text-muted-foreground">
                      You will receive a confirmation call or WhatsApp message shortly to confirm your order details.
                      Our delivery team will contact you before arrival.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Customer support section */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-primary/10 p-4 border-b">
                <h2 className="font-semibold text-xl">Need Help?</h2>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Have questions about your order? Our customer service team is ready to assist you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={openWhatsApp} className="flex-1 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Contact on WhatsApp
                  </Button>
                  <Button asChild variant="outline" className="flex-1 gap-2">
                    <a href={`tel:07030151874`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                      Call Customer Service
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Share section */}
            <div className="border rounded-md p-6">
              <h2 className="font-semibold text-xl mb-3">Share With Friends</h2>
              <p className="text-muted-foreground mb-4">
                Share this order with friends for a group discount or free gift on your next order!
              </p>
              <Button onClick={shareOrder} className="w-full flex items-center justify-center gap-2">
                <Share2 className="h-4 w-4" />
                {copied ? 'Link Copied!' : 'Share With Friends'}
              </Button>
            </div>
            
            {/* Return to home */}
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link to="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}