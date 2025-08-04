export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  colorChoice: string;
  packageOption: string;
  orderDate?: string;
}

export interface Order {
  id: string;
  data: OrderFormData;
  timestamp: string;
}