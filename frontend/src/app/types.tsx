export interface Maintenance {
  id: string;
  description: string;
  date: string;
  priority: string;
  responsible: string;
  status: string;
  machineId: string; 
}


  export interface Machine {
    id: string;
    name: string;
    type: string; 
    model: string;
    manufactureDate: string;
    serialNumber: string;
    location: string;
    imageUrl?: string; 
    status?: string;
}

export interface Team {
  id: string;
  name: string;
  members: { id: string; name: string; specialty: string }[];
  availability: string;
}

export interface Piece {
  id: string;
  name: string;
  code: string;
  supplier: string;
  stockQuantity: number;
  unitPrice: number;
  description?: string; 
  location: string;
  status?: string; 
  acquisitionDate?: string; 
}


export interface Cost {
  id: string;
  type: 'Piece' | 'Material' | 'Labor' | 'Service';
  description: string;
  amount: number;
}

export interface StockEntry {
  id: string;
  pieceId: string;
  date: string;
  quantity: number;
  type: 'Entry' | 'Exit';
}

export interface Report {
  id: string;
  date: string; 
  description: string;
  totalAmount: number;
}

declare module 'react-tooltip' {
  import * as React from 'react';
  export default class ReactTooltip extends React.Component<any> {}
}