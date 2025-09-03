import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Filter, ShoppingCart, Eye, Plus, Package, TrendingUp, Users, Calendar } from 'lucide-react';
import { mockCrops, mockDemands, mockLocationData } from './Mock.jsx';

export const WholesalerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [crops, setCrops] = useState(mockCrops);
  const [demands, setDemands] = useState(mockDemands);
  const [showDemandForm, setShowDemandForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [demandForm, setDemandForm] = useState({
    cropName: '',
    quantityNeeded: '',
    maxPrice: '',
    urgency: 'medium',
    state: '',
    district: '',
    tehsil: '',
    city: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('agrisetu_user');
    if (!userData) {
      navigate('/wholesaler/login');
      return;
    }
    
    const parsedUser = JSON.parse(userData);
    if (parsedUser.type !== 'wholesaler') {
      navigate('/wholesaler/login');
      return;
    }
    
    setUser(parsedUser.data);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('agrisetu_user');
    navigate('/');
  };

  const handleDemandInputChange = (e) => {
    const { name, value } = e.target;
    setDemandForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDemandSubmit = (e) => {
    e.preventDefault();
    
    const newDemand = {
      id: `demand_${Date.now()}`,
      wholesalerId: 'current_wholesaler',
      ...demandForm,
      quantityNeeded: parseFloat(demandForm.quantityNeeded),
      maxPrice: parseFloat(demandForm.maxPrice),
      deliveryLocation: {
        state: demandForm.state,
        district: demandForm.district,
        tehsil: demandForm.tehsil,
        city: demandForm.city
      },
      status: 'active',
      createdAt: new Date().toISOString()
    };
    
    setDemands(prev => [newDemand, ...prev]);
    setShowDemandForm(false);
    setDemandForm({
      cropName: '',
      quantityNeeded: '',
      maxPrice: '',
      urgency: 'medium',
      state: '',
      district: '',
      tehsil: '',
      city: ''
    });
  };

  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.cropName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !filterLocation || 
      crop.location.state.includes(filterLocation) || 
      crop.location.district.includes(filterLocation);
    return matchesSearch && matchesLocation;
  });

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
              <h1 className="heading-2">Welcome, {user.businessName || user.contactPerson || 'Wholesaler'}</h1>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="inline w-4 h-4 mr-1" />
                {user.city}, {user.district}, {user.state}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowDemandForm(true)}
                className="btn-orange"
              >
                <Plus className="w-4 h-4 mr-2" />
                Post Demand
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
            <Package className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="heading-3">{filteredCrops.length}</h3>
            <p className="body-small">Available Crops</p>
          </div>
          <div className="dashboard-card text-center">
            <ShoppingCart className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="heading-3">{demands.length}</h3>
            <p className="body-small">Your Demands</p>
          </div>
          <div className="dashboard-card text-center">
            <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="heading-3">0</h3>
            <p className="body-small">Active Orders</p>
          </div>
          <div className="dashboard-card text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="heading-3">{new Set(crops.map(c => c.farmerId)).size}</h3>
            <p className="body-small">Connected Farmers</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="dashboard-card mb-8">
          <h3 className="heading-3 mb-4">Search Available Crops</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="   Search crops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="   Filter by location..."
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="form-input pl-10"
              />
            </div>
            <div>
              <select className="form-select">
                <option value="">All Crops</option>
                <option value="Orange">Orange</option>
                <option value="Mango">Mango</option>
                <option value="Grapes">Grapes</option>
                <option value="Apple">Apple</option>
              </select>
            </div>
          </div>
        </div>

        {/* Available Crops */}
        <div className="dashboard-card mb-8">
          <h3 className="heading-3 mb-6">Available Crops ({filteredCrops.length})</h3>
          {filteredCrops.length === 0 ? (
            <div className="text-center py-8">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                No crops match your search criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCrops.map((crop) => (
                <div key={crop.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg">{crop.cropName}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      crop.qualityGrade === 'A+' ? 'bg-green-100 text-green-800' : 
                      crop.qualityGrade === 'A' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      Grade {crop.qualityGrade}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="body-small">
                      <Package className="inline w-3 h-3 mr-1" />
                      <strong>{crop.quantity} tons</strong> available
                    </p>
                    <p className="body-small">
                      <MapPin className="inline w-3 h-3 mr-1" />
                      {crop.location.village}, {crop.location.district}, {crop.location.state}
                    </p>
                    <p className="body-small">
                      <Calendar className="inline w-3 h-3 mr-1" />
                      Harvested: {new Date(crop.harvestDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="body-small text-gray-600">Expected Price</p>
                    <p className="font-semibold text-green-600 text-lg">₹{crop.pricePerTon.toLocaleString()}/ton</p>
                    <p className="body-small text-gray-500">Total: ₹{crop.priceExpected.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="btn-secondary flex-1 text-sm py-2">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                    <button className="btn-orange flex-1 text-sm py-2">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Your Demands */}
        <div className="dashboard-card">
          <h3 className="heading-3 mb-6">Your Posted Demands ({demands.length})</h3>
          {demands.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                No demands posted yet. Post your first demand!
              </p>
              <button
                onClick={() => setShowDemandForm(true)}
                className="btn-orange mt-4"
              >
                Post First Demand
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {demands.map((demand) => (
                <div key={demand.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{demand.cropName}</h4>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        demand.urgency === 'high' ? 'bg-red-100 text-red-800' : 
                        demand.urgency === 'medium' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {demand.urgency} priority
                      </span>
                    </div>
                    <div>
                      <p className="body-small text-gray-600">Quantity Needed</p>
                      <p className="font-semibold">{demand.quantityNeeded} tons</p>
                    </div>
                    <div>
                      <p className="body-small text-gray-600">Max Price</p>
                      <p className="font-semibold text-orange-600">₹{demand.maxPrice}/ton</p>
                    </div>
                    <div>
                      <p className="body-small text-gray-600">Delivery Location</p>
                      <p className="body-small">{demand.deliveryLocation.city}, {demand.deliveryLocation.state}</p>
                      <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Demand Form Modal */}
      {showDemandForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <h3 className="heading-3 mb-6">Post New Demand</h3>
              <form onSubmit={handleDemandSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Crop Name</label>
                    <input
                      name="cropName"
                      type="text"
                      value={demandForm.cropName}
                      onChange={handleDemandInputChange}
                      className="form-input"
                      placeholder="e.g., Orange, Mango, Grapes"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity Needed (tons)</label>
                    <input
                      name="quantityNeeded"
                      type="text"
                      step="1"
                      min="1"
                      value={demandForm.quantityNeeded}
                      onChange={handleDemandInputChange}
                      className="form-input"
                      placeholder="Minimum 1 ton"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Maximum Price (₹/ton)</label>
                    <input
                      name="maxPrice"
                      type="text"
                      value={demandForm.maxPrice}
                      onChange={handleDemandInputChange}
                      className="form-input"
                      placeholder="Price per ton"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Urgency</label>
                    <select
                      name="urgency"
                      value={demandForm.urgency}
                      onChange={handleDemandInputChange}
                      className="form-select"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Delivery Location</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      name="state"
                      value={demandForm.state}
                      onChange={handleDemandInputChange}
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
                      value={demandForm.district}
                      onChange={handleDemandInputChange}
                      className="form-select"
                      disabled={!demandForm.state}
                      required
                    >
                      <option value="">Select District</option>
                      {demandForm.state && mockLocationData.districts[demandForm.state]?.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                    <input
                      name="tehsil"
                      type="text"
                      value={demandForm.tehsil}
                      onChange={handleDemandInputChange}
                      className="form-input"
                      placeholder="Tehsil"
                      required
                    />
                    <input
                      name="city"
                      type="text"
                      value={demandForm.city}
                      onChange={handleDemandInputChange}
                      className="form-input"
                      placeholder="City"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowDemandForm(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-orange"
                  >
                    Post Demand
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