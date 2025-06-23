import React from 'react';

export interface Template {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  downloads: number;
  price: string;
  tags: string[];
  description: string;
  features: string[];
  color: string;
  preview: string;
}

export interface Category {
  name: string;
  icon: React.ReactNode;
  count: number;
}
