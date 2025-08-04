import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { colorOptions, priceOptions } from "@/data/hairDyeData"
import { formatPrice, saveFormToLocalStorage } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  phone: z.string().min(8, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().min(10, {
    message: "Please enter your full delivery address.",
  }),
  colorChoice: z.string({
    required_error: "Please select a color.",
  }),
  packageOption: z.string({
    required_error: "Please select a package option.",
  }),
})

interface OrderFormProps {
  selectedColor: string
  selectedPackage: string
  onSelectColor: (colorName: string) => void
  onSelectPackage: (packageId: string) => void
}

export function OrderForm({ 
  selectedColor, 
  selectedPackage,
  onSelectColor,
  onSelectPackage
}: OrderFormProps) {
  const navigate = useNavigate()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "07030151874",
      address: "",
      colorChoice: selectedColor,
      packageOption: selectedPackage,
    },
  })

  React.useEffect(() => {
    form.setValue("colorChoice", selectedColor)
  }, [selectedColor, form])

  React.useEffect(() => {
    form.setValue("packageOption", selectedPackage)
  }, [selectedPackage, form])

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Save to localStorage
    const orderData = {
      ...values,
      orderDate: new Date().toISOString(),
    };
    saveFormToLocalStorage(orderData);
    
    // Find the selected package
    const selectedPackageDetails = priceOptions.find(p => p.id === values.packageOption)
    const price = selectedPackageDetails?.isDiscounted && selectedPackageDetails?.discountedPrice
      ? selectedPackageDetails.discountedPrice
      : selectedPackageDetails?.price || 0
    
    // Track purchase event for Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: price,
        currency: 'NGN',
        content_name: 'Hair Dye Treatment',
        content_type: 'product',
        content_ids: [values.packageOption],
        content_category: 'Hair Products',
      });
    }
    
    // Track purchase event for Google Analytics
    if (window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: new Date().getTime().toString(),
        value: price,
        currency: 'NGN',
        items: [{
          item_id: values.packageOption,
          item_name: selectedPackageDetails?.name || 'Hair Dye Package',
          item_variant: values.colorChoice,
          price: price
        }]
      });
    }

    // The form will submit to formsubmit.co and redirect to the thank you page
    // due to the form action and _next hidden field
    
    // If formsubmit.co is not working in preview or development,
    // we still want the thank you page navigation to work
    setTimeout(() => {
      navigate("/thank-you");
    }, 1000);
  }

  // Find the selected package
  const selectedPackageDetails = priceOptions.find(p => p.id === selectedPackage)
  const selectedColorDetails = colorOptions.find(c => c.name === selectedColor)

  return (
    <section className="py-12 lg:py-20 bg-white" id="order-form">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Complete Your Order
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Fill in your details below to receive your premium hair dye treatment
        </p>
        
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
                action="https://formsubmit.co/your-email@example.com" 
                method="POST"
              >
                {/* Hidden fields for formsubmit.co configuration */}
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                <input type="hidden" name="_subject" value="New Hair Dye Order!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} name="name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} name="phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your complete delivery address" 
                          {...field} 
                          rows={3}
                          name="address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="colorChoice"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Color Choice</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value)
                            onSelectColor(value)
                          }}
                          defaultValue={field.value}
                          className="grid grid-cols-2 md:grid-cols-3 gap-4"
                          name="colorChoice"
                        >
                          {colorOptions.map((color) => (
                            <FormItem key={color.name} className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={color.name} id={color.name} />
                              </FormControl>
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-5 h-5 rounded-full" 
                                  style={{ backgroundColor: color.hexCode }}
                                />
                                <FormLabel htmlFor={color.name} className="font-normal cursor-pointer">
                                  {color.displayName}
                                </FormLabel>
                              </div>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="packageOption"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Package Option</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value) => {
                            field.onChange(value)
                            onSelectPackage(value)
                          }}
                          defaultValue={field.value}
                          className="flex flex-col space-y-3"
                          name="packageOption"
                        >
                          {priceOptions.map((option) => {
                            const price = option.isDiscounted && option.discountedPrice
                              ? option.discountedPrice
                              : option.price
                            
                            return (
                              <FormItem key={option.id} className="flex items-center space-x-3 space-y-0 border rounded-md p-4">
                                <FormControl>
                                  <RadioGroupItem value={option.id} id={option.id} />
                                </FormControl>
                                <div className="flex-1">
                                  <FormLabel htmlFor={option.id} className="font-medium text-base cursor-pointer">
                                    {option.name} - {option.tubeCount} Tubes - {formatPrice(price)}
                                  </FormLabel>
                                  <p className="text-sm text-muted-foreground">{option.description}</p>
                                  {option.isDiscounted && option.discountNote && (
                                    <p className="text-sm font-medium text-primary mt-1">{option.discountNote}</p>
                                  )}
                                </div>
                              </FormItem>
                            )
                          })}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full py-6 text-lg font-semibold">
                  Complete Your Order
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:sticky lg:top-4 self-start">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-4">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Selected Color:</span>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: selectedColorDetails?.hexCode || '#000' }}
                    />
                    <span className="font-medium">{selectedColorDetails?.displayName || 'None selected'}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Package:</span>
                  <span className="font-medium">{selectedPackageDetails?.name || 'None selected'}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tubes:</span>
                  <span className="font-medium">{selectedPackageDetails?.tubeCount || 0} Tubes</span>
                </div>
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold">
                      {selectedPackageDetails ? 
                        formatPrice(
                          selectedPackageDetails.isDiscounted && selectedPackageDetails.discountedPrice
                            ? selectedPackageDetails.discountedPrice
                            : selectedPackageDetails.price
                        ) : 
                        formatPrice(0)
                      }
                    </span>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-md mt-6">
                  <h4 className="font-medium mb-2">Delivery Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery: 1-3 days within Nigeria. 
                    You will receive a confirmation call or WhatsApp shortly after ordering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}