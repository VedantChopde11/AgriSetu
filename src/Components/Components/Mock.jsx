import React from "react"


export const mockUsers = {
  farmers: [
    {
      id: 'farmer_001',
      name: 'Vedant Chopde',
      phone: '+91-9876543210',
      location: {
        state: 'Maharashtra',
        district: 'Nagpur',
        tehsil: 'Katol',
        village: 'Paradsinga'
      },
      verified: true
    },
    {
      id: 'farmer_002',
      name: 'Bhavesh Dhakate',
      phone: '+91-8765432109',
      location: {
        state: 'Maharashtra',
        district: 'Ratnagiri',
        tehsil: 'Dapoli',
        village: 'Dapoli'
      },
      verified: true
    }
  ],
  wholesalers: [
    {
      id: 'wholesaler_001',
      name: 'Pune Fruit Market',
      phone: '+91-9123456789',
      location: {
        state: 'Maharashtra',
        district: 'Pune',
        tehsil: 'Pune',
        city: 'Pune'
      },
      verified: true
    }
  ]
};

export const mockCrops = [
  {
    id: 'crop_001',
    farmerId: 'farmer_001',
    cropName: 'Oranges',
    quantity: 25.0,
    unit: 'tons',
    priceExpected: 650000,
    pricePerTon: 26000,
    location: {
      state: 'Maharshtra',
      district: 'Nagpur',
      tehsil: 'Katol',
      village: 'Paradsinga'
    },
    photos: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400'
    ],
    status: 'available',
    harvestDate: '2025-09-10',
    qualityGrade: 'A',
    createdAt: '2024-01-20T10:30:00Z'
  },
  {
    id: 'crop_002',
    farmerId: 'farmer_002',
    cropName: 'Orange',
    quantity: 12.0,
    unit: 'tons',
    priceExpected: 480000,
    pricePerTon: 40000,
    location: {
      state: 'Maharshtra',
      district: 'Nagpur',
      tehsil: 'Katol',
      village: 'Paradsinga'
    },
    photos: [
      'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400'
    ],
    status: 'available',
    harvestDate: '2025-08-08',
    qualityGrade: 'A+',
    createdAt: '2024-01-22T14:20:00Z'
  },
  {
    id: 'crop_003',
    farmerId: 'farmer_001',
    cropName: 'Sweet Lemon',
    quantity: 3.2,
    unit: 'tons',
    priceExpected: 96000,
    pricePerTon: 30000,
    location: {
      state: 'Maharashtra',
      district: 'Nagpur',
      tehsil: 'Katol',
      village: 'Paradsinga'
    },
    photos: [
      'https://images.unsplash.com/photo-1546470427-e2b52c7b51d8?w=400'
    ],
    status: 'available',
    harvestDate: '2025-09-30',
    qualityGrade: 'A',
    createdAt: '2024-01-25T09:15:00Z'
  }
];

export const mockDemands = [
  {
    id: 'demand_001',
    wholesalerId: 'wholesaler_001',
    cropName: 'Orange',
    quantityNeeded: 10.0,
    unit: 'tons',
    maxPrice: 58000,
    deliveryLocation: {
      state: 'Maharashtra',
      district: 'Pune',
      tehsil: 'Pune',
      city: 'Pune'
    },
    urgency: 'medium',
    status: 'active',
    createdAt: '2025-09-10T12:00:00Z'
  },
  {
    id: 'demand_002',
    wholesalerId: 'wholesaler_001',
    cropName: 'Mango',
    quantityNeeded: 15.0,
    unit: 'tons',
    maxPrice: 10200,
    deliveryLocation: {
      state: 'Maharashtra',
      district: 'Pune',
      tehsil: 'Pune',
      city: 'Pune'
    },
    urgency: 'high',
    status: 'active',
    createdAt: '2025-09-10T16:45:00Z'
  }
];

export const mockLocationData = {
  states: [
    'Andhra Pradesh', 'Bihar', 'Chhattisgarh', 'Delhi', 'Gujarat', 
    'Haryana', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'
  ],
  districts: {
    'Punjab': ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Anand'],
    'Delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur','Ratnagiri' , 'Nashik', 'Aurangabad']
  },
  tehsils: {
    'New Delhi': ['Connaught Place', 'Karol Bagh', 'Paharganj', 'Civil Lines'],
    'Nagpur': ['Katol' , 'Kalmeshwar' , 'Narkhed'],
    'Ratnagiri' : ['Dapoli' , 'Chiplun' , 'Sawantwadi'],
    'Pune' : ['Baramati', 'Pune' , 'Khed'],
    'Nashik' : ['Igatpuri' , 'Malegaon' , 'Yeola']
  }
};

export const mockAuthContext = {
  isAuthenticated: false,
  user: null,
  userType: null, // 'farmer' or 'wholesaler'
  login: (userData, type) => {
    // Mock login function
    console.log('Mock login:', userData, type);
  },
  logout: () => {
    // Mock logout function
    console.log('Mock logout');
  }
};

export const mockStats = {
  totalFarmers: 15847,
  totalWholesalers: 3254,
  transactionsCompleted: 8956,
  totalValueTraded: 45672000, // in rupees
  averagePriceBenefit: 15, // percentage increase for farmers
  topCrops: ['Orange', 'Mango', 'Grapes', 'Apple', 'Sweet Lemon']
};