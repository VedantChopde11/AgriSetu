import React from 'react';
import { ArrowRight, Users, TrendingUp, CheckCircle, Shield, Truck, MapPin, DollarSign, Clock, Star } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Farmer Registration & Upload",
      description: "Farmers sign up with location details and upload crop information including quantity, quality grade, photos, and expected price.",
      icon: <Users className="w-12 h-12 text-green-600" />,
      details: [
        "Simple registration with farm location",
        "Upload crop photos and quality details",
        "Set competitive pricing expectations",
        "Real-time crop availability updates"
      ]
    },
    {
      step: 2,
      title: "Wholesaler Search & Demand",
      description: "Wholesalers browse available crops, filter by location and quality, and place orders with minimum 1-ton requirement.",
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      details: [
        "Advanced search and filter options",
        "View crop quality and farmer ratings",
        "Post demand requirements",
        "Direct communication with farmers"
      ]
    },
    {
      step: 3,
      title: "Verification & Quality Check",
      description: "AgriSetu field agents verify crop quality, quantity, and authenticity at farm locations before confirming orders.",
      icon: <Shield className="w-12 h-12 text-green-600" />,
      details: [
        "On-site quality verification",
        "Quantity and authenticity checks",
        "Photo documentation process",
        "Quality grade confirmation"
      ]
    },
    {
      step: 4,
      title: "Logistics & Delivery",
      description: "Trusted logistics partners handle pickup, transportation, and delivery with real-time tracking and quality assurance.",
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      details: [
        "Partnership with Rivigo and others",
        "Real-time tracking system",
        "Quality preservation during transit",
        "Timely delivery guarantees"
      ]
    },
    {
      step: 5,
      title: "Secure Payment & Settlement",
      description: "Escrow payment system ensures secure transactions. Payment released to farmer after successful delivery and quality confirmation.",
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      details: [
        "Secure escrow payment system",
        "Payment protection for both parties",
        "Instant settlement after delivery",
        "Transparent pricing breakdown"
      ]
    }
  ];

  const benefits = {
    farmers: [
      {
        icon: <DollarSign className="w-8 h-8 text-green-600" />,
        title: "15% Higher Prices",
        description: "Eliminate middlemen and get fair market prices for your crops"
      },
      {
        icon: <Shield className="w-8 h-8 text-green-600" />,
        title: "Payment Security",
        description: "Guaranteed payments through our secure escrow system"
      },
      {
        icon: <Clock className="w-8 h-8 text-green-600" />,
        title: "Quick Transactions",
        description: "Fast order processing and quick payment settlements"
      },
      {
        icon: <Star className="w-8 h-8 text-green-600" />,
        title: "Quality Recognition",
        description: "Get premium prices for high-quality produce"
      }
    ],
    wholesalers: [
      {
        icon: <MapPin className="w-8 h-8 text-orange-500" />,
        title: "Direct Sourcing",
        description: "Source directly from farms and know your supply chain"
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
        title: "Cost Savings",
        description: "Reduce procurement costs by eliminating intermediaries"
      },
      {
        icon: <Shield className="w-8 h-8 text-orange-500" />,
        title: "Quality Assurance",
        description: "Verified quality and authentic produce from trusted farmers"
      },
      {
        icon: <Truck className="w-8 h-8 text-orange-500" />,
        title: "Reliable Delivery",
        description: "Guaranteed delivery through our logistics network"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container text-center">
          <h1 className="heading-1 mb-6">How AgriSetu Works</h1>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            A transparent, efficient, and secure platform connecting farmers directly with wholesalers
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.step} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-orange-500 text-white flex items-center justify-center text-xl font-bold mr-4">
                      {step.step}
                    </div>
                    <div>
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="heading-2 mb-4">{step.title}</h2>
                  <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="body-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="product-card">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-orange-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        {step.icon}
                        <p className="heading-3 mt-4">Step {step.step}</p>
                        <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Benefits for Everyone</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              AgriSetu creates value for farmers, wholesalers, and the entire agricultural ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Farmer Benefits */}
            <div>
              <h3 className="heading-3 mb-8 text-green-600">For Farmers</h3>
              <div className="space-y-6">
                {benefits.farmers.map((benefit, index) => (
                  <div key={index} className="product-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="heading-3 mb-2">{benefit.title}</h4>
                        <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wholesaler Benefits */}
            <div>
              <h3 className="heading-3 mb-8 text-orange-500">For Wholesalers</h3>
              <div className="space-y-6">
                {benefits.wholesalers.map((benefit, index) => (
                  <div key={index} className="product-card">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="heading-3 mb-2">{benefit.title}</h4>
                        <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            Join the agricultural revolution and experience transparent, fair trade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/farmer/signup" className="btn-primary">
              Join as Farmer
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/wholesaler/signup" className="btn-orange">
              Join as Wholesaler
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};