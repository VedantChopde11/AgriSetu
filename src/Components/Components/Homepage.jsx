import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Shield, Truck, CheckCircle, BarChart3, MapPin, Clock } from 'lucide-react';
import { mockStats } from './Mock';

export const HomePage = () => {
  const howItWorksSteps = [
    {
      step: 1,
      title: "Farmer Upload",
      description: "Farmers upload crop details, quantity, location, and real-time photos of their produce",
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      step: 2,
      title: "Wholesaler Demand",
      description: "Wholesalers browse available crops, check quality, and place minimum 1-ton orders",
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />
    },
    {
      step: 3,
      title: "Delivery & Payment",
      description: "Verified logistics partners deliver crops with secure escrow payment system",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />
    }
  ];

  const verificationSteps = [
    {
      title: "Quality Verification",
      description: "Our field agents verify crop quality and authenticity at farm locations",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Logistics Partnership",
      description: "Tie-ups with trusted logistics companies like Rivigo for reliable delivery",
      icon: <Truck className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Secure Delivery",
      description: "Real-time tracking and quality assurance until delivery completion",
      icon: <MapPin className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Connecting Farmers To  
            <br/>
             <br/>
            Markets Nationwide
          </h1>
          <p className="hero-subtitle">
            Fair Prices. Trusted Delivery. Direct Trade.
          </p>
          <p className="body-large" style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
            Eliminate middlemen and get the best prices for your crops. 
            Join thousands of farmers and wholesalers trading directly across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/farmer/login" className="btn-primary" color='black'>
              Start as Farmer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/wholesaler/login" className="btn-orange">
              Join as Wholesaler
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="heading-2 text-green-600 mb-2">{mockStats.totalFarmers.toLocaleString()}</h3>
              <p className="body-medium">Active Farmers</p>
            </div>
            <div>
              <h3 className="heading-2 text-orange-500 mb-2">{mockStats.totalWholesalers.toLocaleString()}</h3>
              <p className="body-medium">Trusted Wholesalers</p>
            </div>
            <div>
              <h3 className="heading-2 text-green-600 mb-2">{mockStats.transactionsCompleted.toLocaleString()}</h3>
              <p className="body-medium">Successful Trades</p>
            </div>
            <div>
              <h3 className="heading-2 text-orange-500 mb-2">₹{(mockStats.totalValueTraded / 10000000).toFixed(1)}Cr</h3>
              <p className="body-medium">Total Value Traded</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">How AgriSetu Works</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Simple, transparent, and efficient - connecting farmers directly with wholesalers
            </p>
          </div>
          <div className="ai-grid max-w-4xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="product-card text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="heading-3 mb-3">{step.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Logistics Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Verification & Logistics</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Quality assurance and reliable delivery across India
            </p>
          </div>
          <div className="ai-grid max-w-4xl mx-auto">
            {verificationSteps.map((step, index) => (
              <div key={index} className="product-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">{step.title}</h3>
                    <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Win-Win Revenue Model</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Everyone benefits: farmers get better prices, wholesalers save costs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="product-card">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="heading-3 mb-2 text-green-600">Farmer Price ↑</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    {mockStats.averagePriceBenefit}% higher prices by eliminating middlemen
                  </p>
                </div>
                <div>
                  <BarChart3 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="heading-3 mb-2 text-orange-500">Wholesaler Cost ↓</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    Lower procurement costs with direct sourcing
                  </p>
                </div>
                <div>
                  <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="heading-3 mb-2 text-green-600">AgriSetu Margin</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    We earn from price gap optimization + small commission
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 rounded-lg bg-green-50 border border-green-200">
                <p className="body-medium text-center" style={{ color: 'var(--text-primary)' }}>
                  <strong>Logistics Cost:</strong> Borne by AgriSetu through partnerships with logistics companies. 
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Transform Agricultural Trade?</h2>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            Join thousands of farmers and wholesalers already benefiting from direct trade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/farmer/signup" className="btn-primary">
              Register as Farmer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/wholesaler/signup" className="btn-orange">
              Register as Wholesaler
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};