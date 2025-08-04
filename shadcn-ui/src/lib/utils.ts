import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { OrderFormData, Order } from '@/types/order'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return `₦${price.toLocaleString()}`
}

export function getTimeRemaining(endTime: Date): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const total = endTime.getTime() - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);

  return {
    hours,
    minutes,
    seconds
  };
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

import { OrderFormData, Order } from '@/types/order';

export function saveFormToLocalStorage(formData: OrderFormData): void {
  // Generate a unique order ID
  const orderId = `order-${Date.now()}`;
  
  // Save the order with a timestamp
  const order: Order = {
    id: orderId,
    data: formData,
    timestamp: new Date().toISOString(),
  };
  
  // Get existing orders or initialize empty array
  const existingOrders: Order[] = JSON.parse(localStorage.getItem('hairDyeOrders') || '[]');
  
  // Add new order to array
  existingOrders.push(order);
  
  // Save back to localStorage
  localStorage.setItem('hairDyeOrders', JSON.stringify(existingOrders));
  localStorage.setItem('currentOrderId', orderId);
}

export function getCurrentOrder(): Order | null {
  const orderId = localStorage.getItem('currentOrderId');
  if (!orderId) return null;
  
  const orders: Order[] = JSON.parse(localStorage.getItem('hairDyeOrders') || '[]');
  return orders.find((order) => order.id === orderId) || null;
}