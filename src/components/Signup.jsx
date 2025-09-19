// Import React and useState hook
import React, { useState } from 'react'
// Import Navbar component
import Navbar from './Navbar'

// Main Signup component
function Signup() {
  // State to store all form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  // State to store validation errors
  const [errors, setErrors] = useState({})

  // State to show loading spinner
  const [isLoading, setIsLoading] = useState(false)

  // Function to handle input changes
  const handleChange = (e) => {
    // Get the input name, value, and type
    const name = e.target.name
    const value = e.target.value
    const type = e.target.type
    const checked = e.target.checked

    // Update form data
    setFormData(prevData => {
      // If it's a checkbox, use checked value, otherwise use input value
      const newValue = type === 'checkbox' ? checked : value
      
      return {
        ...prevData,
        [name]: newValue
      }
    })

    // Clear error message when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }))
    }
  }

  // Function to validate the form
  const validateForm = () => {
    const newErrors = {}
    
    // Check if first name is empty
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    // Check if last name is empty
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    // Check if email is empty
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } 
    // Check if email format is valid
    else {
      const emailPattern = /\S+@\S+\.\S+/
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
    }
    
    // Check if password is empty
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } 
    // Check password length
    else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } 
    // Check password strength (uppercase, lowercase, number)
    else {
      const hasUppercase = /[A-Z]/.test(formData.password)
      const hasLowercase = /[a-z]/.test(formData.password)
      const hasNumber = /\d/.test(formData.password)
      
      if (!hasUppercase || !hasLowercase || !hasNumber) {
        newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      }
    }
    
    // Check if confirm password is empty
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } 
    // Check if passwords match
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    // Check if user agreed to terms
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }
    
    // Set the errors
    setErrors(newErrors)
    
    // Return true if no errors (form is valid)
    const hasErrors = Object.keys(newErrors).length > 0
    return !hasErrors
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    // Prevent page refresh
    e.preventDefault()
    
    // Validate form first
    const isFormValid = validateForm()
    if (!isFormValid) {
      return // Stop if form is invalid
    }
    
    // Show loading spinner
    setIsLoading(true)
    
    try {
      // Simulate API call (replace with real API call later)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Log the form data (replace with actual signup logic)
      console.log('Sign up data:', formData)
      
      // Here you would typically send data to your backend
      // Example: await signupAPI(formData)
      
    } catch (error) {
      // Handle any errors
      console.error('Sign up error:', error)
    } finally {
      // Hide loading spinner
      setIsLoading(false)
    }
  }

  // Function to create input field with error handling
  const createInputField = (fieldName, label, type, placeholder) => {
    const hasError = errors[fieldName]
    
    return (
      <div>
        {/* Label for the input */}
        <label htmlFor={fieldName} className="block text-sm font-medium text-white/90 mb-2">
          {label}
        </label>
        
        {/* Input field */}
        <input
          type={type}
          id={fieldName}
          name={fieldName}
          value={formData[fieldName]}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200 ${
            hasError ? 'border-red-500' : 'border-white/20'
          }`}
          placeholder={placeholder}
        />
        
        {/* Error message */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Function to create checkbox field
  const createCheckboxField = (fieldName, label, links) => {
    const hasError = errors[fieldName]
    
    return (
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            name={fieldName}
            checked={formData[fieldName]}
            onChange={handleChange}
            className="w-4 h-4 text-[#ffd600] bg-white/5 border-white/20 rounded focus:ring-[#ffd600]/50 focus:ring-2 mt-1"
          />
          <span className="ml-3 text-sm text-white/80">
            {label}
            {links && (
              <>
                {' '}
                <a href="#" className="text-[#ffd600] hover:text-[#fff9be] transition-colors duration-200">
                  {links.terms}
                </a>
                {' '}and{' '}
                <a href="#" className="text-[#ffd600] hover:text-[#fff9be] transition-colors duration-200">
                  {links.privacy}
                </a>
              </>
            )}
          </span>
        </label>
        
        {/* Error message */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Main component return (what gets displayed on screen)
  return (
    <div className="min-h-screen bg-[#1d1d1f]">
      {/* Navigation bar */}
      <Navbar />
      
      {/* Main content area */}
      <div className="flex items-center justify-center px-4 py-12 pt-24">
      <div className="w-full max-w-md">
        
        {/* Header section with logo and title */}
        <div className="text-center mb-8">
          <img
            src="https://res.cloudinary.com/dqataciy5/image/upload/v1758274781/Gemini_Generated_Image_87j6z987j6z987j6_kuuycd.jpg"
            alt="editco.media logo"
            className="h-16 w-auto object-contain rounded mx-auto mb-4"
          />
          <h1 className="text-2xl font-medium text-white mb-2">Create Account</h1>
          <p className="text-white/70">Join Editco.Media today</p>
        </div>

        {/* Main form container */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          
          {/* Form element */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name fields section - side by side */}
            <div className="grid grid-cols-2 gap-4">
              {createInputField('firstName', 'First Name', 'text', 'John')}
              {createInputField('lastName', 'Last Name', 'text', 'Doe')}
            </div>

            {/* Email field */}
            {createInputField('email', 'Email Address', 'email', 'john.doe@example.com')}

            {/* Password field */}
            {createInputField('password', 'Password', 'password', 'Create a strong password')}

            {/* Confirm password field */}
            {createInputField('confirmPassword', 'Confirm Password', 'password', 'Confirm your password')}

            {/* Terms and conditions checkbox */}
            {createCheckboxField('agreeToTerms', 'I agree to the', {
              terms: 'Terms of Service',
              privacy: 'Privacy Policy'
            })}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Button background gradient */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full group-disabled:h-0"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                {isLoading ? (
                  <>
                    {/* Loading spinner */}
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </span>
            </button>
          </form>

          {/* Link to sign in page */}
          <div className="mt-8 text-center">
            <p className="text-white/70">
              Already have an account?{' '}
              <a href="/signin" className="text-[#ffd600] hover:text-[#fff9be] transition-colors duration-200 font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Signup
