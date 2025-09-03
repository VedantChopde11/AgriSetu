import {React, useState , useEffect, } from "react"

import { useNavigate  } from 'react-router-dom';
import { Upload, Plus, Eye, Edit, Trash2, MapPin, Camera, DollarSign, Calendar, Package } from 'lucide-react';
import { mockCrops, mockLocationData } from './Mock.jsx';

export const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [crops, setCrops] = useState(mockCrops);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    priceExpected: '',
    state: '',
    district: '',
    tehsil: '',
    village: '',
    harvestDate: '',
    qualityGrade: 'A',
    photos: []
  });

  useEffect(() => {
    const userData = localStorage.getItem('agrisetu_user');
    if (!userData) {
      navigate('/farmer/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    if (parsedUser.type !== 'farmer') {
      navigate('/farmer/login');
      return;
    }
    
    setUser(parsedUser.data);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    // Mock file upload - in real app, would upload to server
    const mockUrls = files.map((file, index) => 
      `https://images.unsplash.com/photo-${1600000000000 + index}?w=400`
    );
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...mockUrls]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newCrop = {
      id: `crop_${Date.now()}`,
      farmerId: 'current_farmer',
      ...formData,
      quantity: parseFloat(formData.quantity),
      priceExpected: parseFloat(formData.priceExpected),
      pricePerTon: Math.round(parseFloat(formData.priceExpected) / parseFloat(formData.quantity)),
      location: {
        state: formData.state,
        district: formData.district,
        tehsil: formData.tehsil,
        village: formData.village
      },
      status: 'available',
      createdAt: new Date().toISOString()
    };
    
    setCrops(prev => [newCrop, ...prev]);
    setShowUploadForm(false);
    setFormData({
      cropName: '',
      quantity: '',
      priceExpected: '',
      state: '',
      district: '',
      tehsil: '',
      village: '',
      harvestDate: '',
      qualityGrade: 'A',
      photos: []
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('agrisetu_user');
    navigate('/');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: '6rem' }}>
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="heading-2">Welcome, {user.name || 'Farmer'}</h1>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="inline w-4 h-4 mr-1" />
                {user.village}, {user.tehsil}, {user.district}, {user.state}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowUploadForm(true)}
                className="btn-primary"
              >
                <Plus className="w-4 h-4 mr-2" />
                Upload Crop
              </button>
              <button
                onClick={handleLogout}
                className="btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="dashboard-card text-center">
            <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="heading-3">{crops.length}</h3>
            <p className="body-small">Total Crops</p>
          </div>
          <div className="dashboard-card text-center">
            <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="heading-3">₹{crops.reduce((sum, crop) => sum + crop.priceExpected, 0).toLocaleString()}</h3>
            <p className="body-small">Expected Earnings</p>
          </div>
          <div className="dashboard-card text-center">
            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="heading-3">{crops.filter(c => c.status === 'available').length}</h3>
            <p className="body-small">Available</p>
          </div>
          <div className="dashboard-card text-center">
            <Eye className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="heading-3">0</h3>
            <p className="body-small">Pending Orders</p>
          </div>
        </div>

        {/* Payment Security Info */}
        <div className="dashboard-card mb-8 bg-green-50 border-green-200">
          <h3 className="heading-3 mb-4 text-green-800">Payment Security - Escrow System</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
              <p className="body-small">Order Confirmed</p>
              <p className="caption">Payment held in escrow</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
              <p className="body-small">Quality Verified</p>
              <p className="caption">Crops inspected & approved</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
              <p className="body-small">Payment Released</p>
              <p className="caption">Money transferred to your account</p>
            </div>
          </div>
        </div>

        {/* Crops List */}
        <div className="dashboard-card">
          <h3 className="heading-3 mb-6">Your Crops</h3>
          {crops.length === 0 ? (
            <div className="text-center py-8">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                No crops uploaded yet. Start by uploading your first crop!
              </p>
              <button
                onClick={() => setShowUploadForm(true)}
                className="btn-primary mt-4"
              >
                Upload First Crop
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {crops.map((crop) => (
                <div key={crop.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{crop.cropName}</h4>
                      <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                        <MapPin className="inline w-3 h-3 mr-1" />
                        {crop.location.village}, {crop.location.district}
                      </p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        crop.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {crop.status}
                      </span>
                    </div>
                    <div>
                      <p className="body-small text-gray-600">Quantity</p>
                      <p className="font-semibold">{crop.quantity} tons</p>
                      <p className="body-small text-gray-600">Harvest Date: {crop.harvestDate}</p>
                    </div>
                    <div>
                      <p className="body-small text-gray-600">Expected Price</p>
                      <p className="font-semibold text-green-600">₹{crop.priceExpected.toLocaleString()}</p>
                      <p className="body-small text-gray-600">₹{crop.pricePerTon}/ton</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Form Model */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <h3 className="heading-3 mb-6">Upload New Crop</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Crop Name</label>
                    <input
                      name="cropName"
                      type="text"
                      value={formData.cropName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g., Oranges, Mango, Grapes"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity (Quintal)</label>
                    <input
                      name="quantity"
                      type="Text"
                      step="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Expected Price (₹)</label>
                    <input
                      name="priceExpected"
                      type="text"
                      value={formData.priceExpected}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Total expected amount"
                      required
                    />
                  </div>
                 
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select State</option>
                      {mockLocationData.states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="form-select"
                      disabled={!formData.state}
                      required
                    >
                      <option value="">Select District</option>
                      {formData.state && mockLocationData.districts[formData.state]?.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    <input
                      name="tehsil"
                      type="text"
                      value={formData.tehsil}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tehsil"
                      required
                    />
                    <input
                      name="village"
                      type="text"
                      value={formData.village}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Village"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Harvest Date</label>
                  <input
                    name="harvestDate"
                    type="date"
                    value={formData.harvestDate}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Camera className="inline w-4 h-4 mr-1" />
                    Upload Photos
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="form-input"
                  />
                  <p className="body-small mt-1" style={{ color: 'var(--text-secondary)' }}>
                    Upload photos of your crop and farm (max 5 images)
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowUploadForm(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Upload Crop
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};