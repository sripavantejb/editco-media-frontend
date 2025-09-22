import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        // Store admin session in localStorage
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminSession', JSON.stringify({ 
          loggedIn: true, 
          timestamp: Date.now() 
        }));
        
        // Redirect to admin panel
        navigate('/admin');
      } else {
        // Invalid credentials - redirect to home
        alert('Invalid credentials. Redirecting to home page.');
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const createInputField = (fieldName, label, type, placeholder) => {
    const hasError = errors[fieldName];
    
    return (
      <div>
        <label htmlFor={fieldName} className="block text-[14px] md:text-[16px] font-medium text-white/90 mb-2">
          {label}
        </label>
        <input
          type={type}
          id={fieldName}
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-black/20 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200 text-[14px] md:text-[16px] ${
            hasError ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder={placeholder}
        />
        {hasError && (
          <p className="mt-1 text-[12px] md:text-[14px] text-red-400">{hasError}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium text-white mb-2">
              <span className="text-[#AAA80F]">Admin</span> <span className="text-[#63676A]">Login</span>
            </h1>
            <p className="text-white/70 text-[16px] md:text-[18px]">
              Access the admin panel
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-[#1d1d1f] border border-white/10 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {createInputField('username', 'Username', 'text', 'Enter your username')}
              {createInputField('password', 'Password', 'password', 'Enter your password')}

              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full px-6 py-3 text-[14px] md:text-[16px] text-white border border-white/30 rounded-xl overflow-hidden group hover:text-black transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full disabled:group-hover:h-0"></span>
                <span className="relative z-10">
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Logging in...
                    </div>
                  ) : (
                    'Login'
                  )}
                </span>
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-[#ffd600]/10 border border-[#ffd600]/20 rounded-xl">
              <p className="text-[#ffd600] text-[12px] md:text-[14px] text-center">
                <strong>Security Notice:</strong> This is a restricted admin area. 
                Unauthorized access is prohibited.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate('/')}
              className="text-white/70 hover:text-white transition-colors duration-200 text-[14px] md:text-[16px]"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
