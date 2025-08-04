import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { X, Send, MessageSquare } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [chatHistory, setChatHistory] = React.useState([
    {
      id: 1,
      role: "agent",
      content: "👋 Hi there! How can I help you with our hair dye products today?",
      timestamp: new Date()
    }
  ])
  
  const toggleChat = () => {
    setIsOpen(!isOpen)
  }
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) return
    
    // Add user message to chat
    setChatHistory([
      ...chatHistory,
      {
        id: chatHistory.length + 1,
        role: "user",
        content: message,
        timestamp: new Date()
      }
    ])
    
    // Clear input
    setMessage("")
    
    // Simulate agent response after a delay
    setTimeout(() => {
      setChatHistory(current => [
        ...current,
        {
          id: current.length + 1,
          role: "agent",
          content: "Thank you for your message! This is a demo chat widget. In a real implementation, our customer service team would respond promptly. Please call us at 07030151874 for immediate assistance.",
          timestamp: new Date()
        }
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 h-96 flex flex-col shadow-xl border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/images/Support.jpg" alt="Support" />
                <AvatarFallback className="bg-primary-foreground text-primary">HD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Hair Dye Support</h3>
                <p className="text-xs opacity-80">We typically reply within minutes</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-primary/90">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-gray-50">
            {chatHistory.map((msg) => (
              <div 
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <span className="text-xs opacity-70 block mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 bg-white border-t">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      ) : (
        <Button 
          onClick={toggleChat}
          className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}