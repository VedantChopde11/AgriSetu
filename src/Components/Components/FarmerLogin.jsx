import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Sprout, User, Phone, MapPin, Eye, EyeOff } from 'lucide-react';
import { mockUsers, mockLocationData } from './Mock';
import AgriSetuLogo from './AgriSetuLogo.png'

export const FarmerLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname.includes('signup');
  
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    name: '',
    state: '',
    district: '',
    tehsil: '',
    village: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+91-\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter valid phone number (+91-XXXXXXXXXX)';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (isSignup) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.district) newErrors.district = 'District is required';
      if (!formData.tehsil) newErrors.tehsil = 'Tehsil is required';
      if (!formData.village) newErrors.village = 'Village is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Mock authentication
    console.log('Farmer login/signup:', formData);
    
    // Simulate successful login
    localStorage.setItem('agrisetu_user', JSON.stringify({
      type: 'farmer',
      data: formData,
      authenticated: true
    }));
    
    navigate('/farmer/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{ paddingTop: '6rem' }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
           <img src={AgriSetuLogo} alt="AgriSetu Logo" className="h-10 w-auto" />
        </div>
        <h2 className="mt-6 text-center heading-2">
          {isSignup ? 'Join as Farmer' : 'Farmer Login'}
        </h2>
        <p className="mt-2 text-center body-medium" style={{ color: 'var(--text-secondary)' }}>
          {isSignup ? 'Start selling your crops directly to wholesalers' : 'Welcome back! Sign in to your account'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <Phone className="inline w-4 h-4 mr-1" />
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="+91-9876543210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {isSignup && (
              <div className="form-group">
                <label className="form-label">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Farm Location
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select State</option>
                      {mockLocationData.states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={!formData.state}
                    >
                      <option value="">Select District</option>
                      {formData.state && mockLocationData.districts[formData.state]?.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                  </div>
                  <div>
                    <select
                      name="tehsil"
                      value={formData.tehsil}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={!formData.district}
                    >
                      <option value="">Select Tehsil</option>
                      {formData.district && mockLocationData.tehsils[formData.district]?.map(tehsil => (
                        <option key={tehsil} value={tehsil}>{tehsil}</option>
                      ))}
                    </select>
                    {errors.tehsil && <p className="text-red-500 text-sm mt-1">{errors.tehsil}</p>}
                  </div>
                  <div>
                    <input
                      name="village"
                      type="text"
                      value={formData.village}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Village name"
                    />
                    {errors.village && <p className="text-red-500 text-sm mt-1">{errors.village}</p>}
                  </div>
                </div>
              </div>
            )}

            <div>
              <button type="submit" className="btn-primary w-full">
                {isSignup ? 'Create Account' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to={isSignup ? '/farmer/login' : '/farmer/signup'}
                className="font-medium text-green-600 hover:text-green-500"
              >
                {isSignup ? 'Sign in here' : 'Sign up here'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
