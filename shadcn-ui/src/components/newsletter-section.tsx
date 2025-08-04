import * as React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive marketing emails",
  }),
})

export function NewsletterSection() {
  const [submitted, setSubmitted] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      consent: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Track newsletter signup event for analytics
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Newsletter Signup',
      });
    }
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'newsletter_signup'
      });
    }
    
    // Show success message
    setSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      form.reset()
    }, 5000)
  }

  return (
    <section className="bg-primary/5 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get 10% off your first order, plus early access to new colors and exclusive offers.
            </p>
            <div className="flex flex-col gap-2 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Special discounts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>New product launches</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Hair care tips & tutorials</span>
              </div>
            </div>
          </div>
          
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium text-green-800 mb-2">Thank you for subscribing!</h3>
                <p className="text-green-600">Your 10% discount code will be sent to your email.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email address</FormLabel>
                        <FormControl>
                          <Input placeholder="youremail@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to receive marketing emails and understand I can unsubscribe anytime
                          </FormLabel>
                          <FormDescription>
                            We respect your privacy and will never share your data.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Get 10% Off</Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}