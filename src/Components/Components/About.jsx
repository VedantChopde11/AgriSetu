import React from 'react';
import { Target, Users, TrendingUp, Shield, Heart, Award, Globe, Lightbulb } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Farmer First",
      description: "We prioritize farmer welfare and ensure they get fair prices for their hard work"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Trust & Transparency",
      description: "Complete transparency in pricing, quality, and transactions for all stakeholders"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Innovation",
      description: "Leveraging technology to solve traditional agricultural supply chain problems"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description: "Building a sustainable ecosystem that benefits farmers, wholesalers, and consumers"
    }
  ];

  const team = [
    {
      name: "Rahul Sharma",
      role: "Co-Founder & CEO",
      background: "Former McKinsey consultant with 8+ years in agricultural supply chain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Co-Founder & CTO",
      background: "Ex-Google engineer specializing in marketplace platforms and logistics",
      image: "https://images.unsplash.com/photo-1494790108755-2616b80c1734?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Arjun Singh",
      role: "Head of Operations",
      background: "15+ years in agricultural trading and farmer community relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Farmers Connected" },
    { number: "3,000+", label: "Wholesalers Active" },
    { number: "₹45+ Cr", label: "Total Value Traded" },
    { number: "95%", label: "Farmer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container text-center">
          <h1 className="heading-1 mb-6">About AgriSetu</h1>
          <p className="body-large mb-8 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We're on a mission to revolutionize agricultural trade in India by connecting farmers 
            directly with wholesalers, eliminating middlemen, and ensuring fair prices for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <Target className="w-12 h-12 text-green-600 mb-4" />
                <h2 className="heading-2 mb-4">Our Mission</h2>
                <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                  To create a transparent, efficient, and fair agricultural marketplace that empowers 
                  farmers with better prices and provides wholesalers with direct access to quality produce.
                </p>
              </div>
              
              <div>
                <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
                <h2 className="heading-2 mb-4">Our Vision</h2>
                <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
                  To become India's largest and most trusted digital agriculture marketplace, 
                  transforming the lives of millions of farmers and revolutionizing food supply chains.
                </p>
              </div>
            </div>
            
            <div className="product-card">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-green-600 mx-auto mb-4" />
                  <h3 className="heading-3">Connecting Communities</h3>
                  <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    Bridging farmers and wholesalers across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="ai-grid">
            {values.map((value, index) => (
              <div key={index} className="product-card text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="heading-3 mb-3">{value.title}</h3>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Impact</h2>
            <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
              Numbers that reflect our commitment to transforming agricultural trade
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="heading-2 text-green-600 mb-2">{stat.number}</h3>
                <p className="body-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};