import * as React from "react"
import { Phone, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-xl mb-4">LincoDye</h3>
            <p className="text-slate-300 mb-4">
              Premium hair dye treatment with deep nourishment and vibrant finish.
              No ammonia, no itch, no damage.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#order-form" className="hover:text-primary transition-colors">Order Now</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:07030151874" className="hover:text-white">07030151874</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:lincomarket@gmail.com" className="hover:text-white">lincomarket@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} LincoDye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}