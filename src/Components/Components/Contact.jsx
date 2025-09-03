import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, User, Building } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        userType: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone Support",
      details: ["+91-9876543210", "+91-8765432109"],
      availability: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email Support",
      details: ["support@agrisetu.com", "farmers@agrisetu.com"],
      availability: "24/7 Response within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Head Office",
      details: ["Cyber City, Gurugram", "Haryana, India - 122002"],
      availability: "Mon-Fri, 10 AM - 7 PM"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp Support",
      details: ["+91-9876543210"],
      availability: "Quick responses for urgent queries"
    }
  ];

  const faqCategories = [
    {
      title: "For Farmers",
      questions: [
        "How do I register on AgriSetu?",
        "What documents do I need to upload crops?",
        "How is my payment secured?",
        "What happens if my crop quality is disputed?"
      ]
    },
    {
      title: "For Wholesalers",
      questions: [
        "How can I find quality crops on the platform?",
        "What is the minimum order quantity?",
        "How do I track my orders?",
        "What are the payment terms?"
      ]
    },
    {
      title: "General",
      questions: [
        "How does AgriSetu verify crop quality?",
        "What are your logistics partnerships?",
        "How do you handle disputes?",
        "What are your commission charges?"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container text-center">
          <h1 className="heading-1 mb-6">Contact Us</h1>
          <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
            Get in touch with our team. We're here to help farmers and wholesalers succeed.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="ai-grid mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="product-card text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="heading-3 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="body-medium font-semibold">{detail}</p>
                  ))}
                </div>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {info.availability}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-2 mb-6">Send us a Message</h2>
                <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Have a question or need support? Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                {isSubmitted ? (
                  <div className="product-card bg-green-50 border-green-200 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="heading-3 mb-2 text-green-800">Message Sent!</h3>
                    <p className="body-medium text-green-700">
                      Thank you for contacting us. We'll respond within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">
                          <User className="inline w-4 h-4 mr-1" />
                          Full Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          <Mail className="inline w-4 h-4 mr-1" />
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label className="form-label">
                          <Phone className="inline w-4 h-4 mr-1" />
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="+91-9876543210"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          <Building className="inline w-4 h-4 mr-1" />
                          I am a
                        </label>
                        <select
                          name="userType"
                          value={formData.userType}
                          onChange={handleInputChange}
                          className="form-select"
                          required
                        >
                          <option value="">Select user type</option>
                          <option value="farmer">Farmer</option>
                          <option value="wholesaler">Wholesaler</option>
                          <option value="logistics">Logistics Partner</option>
                          <option value="investor">Investor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Brief subject of your inquiry"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="form-input resize-none"
                        placeholder="Please describe your inquiry in detail..."
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="heading-2 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqCategories.map((category, index) => (
                    <div key={index} className="product-card">
                      <h3 className="heading-3 mb-4 text-green-600">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.questions.map((question, idx) => (
                          <li key={idx} className="body-medium hover:text-green-600 cursor-pointer transition-colors">
                            • {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="product-card mt-6 bg-green-50 border-green-200">
                  <h3 className="heading-3 mb-3 text-green-800">Need Immediate Help?</h3>
                  <p className="body-medium text-green-700 mb-4">
                    For urgent queries, call us directly or send a WhatsApp message.
                  </p>
                  <div className="flex space-x-4">
                    <a href="tel:+919876543210" className="btn-primary text-sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                    <a href="https://wa.me/919876543210" className="btn-secondary text-sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-section)' }}>
        <div className="container text-center">
          <h2 className="heading-2 mb-8">Office Hours & Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="product-card">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Phone Support</h3>
              <p className="body-medium">Monday - Saturday</p>
              <p className="body-large font-semibold">9:00 AM - 6:00 PM</p>
            </div>
            <div className="product-card">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Email Support</h3>
              <p className="body-medium">24/7 Available</p>
              <p className="body-large font-semibold">Response within 2 hours</p>
            </div>
            <div className="product-card">
              <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">WhatsApp Support</h3>
              <p className="body-medium">Monday - Sunday</p>
              <p className="body-large font-semibold">8:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};