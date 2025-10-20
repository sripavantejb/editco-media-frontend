// Import React and useState hook
import React, { useState } from 'react'
// Import Navbar component
import Navbar from './Navbar'
import BlurText from './BlurText'
import { apiFetch } from '../config/api'
import { toast } from 'react-toastify'

// Main Connect component
function Connect() {
  // State to store all form data - this holds all the information the user enters


  const [formData, setFormData] = useState({
    firstName: '',        // Use as single "Name" field for the new layout
    lastName: '',         // Optional in the new layout
    email: '',
    phone: '',
    company: '',
    projectType: '',      // Kept for compatibility (not shown in UI)
    budget: '60000',      // Slider stores numeric string; displayed formatted
    timeline: '',         // Kept for compatibility (not shown in UI)
    services: [],
    message: '',
    agreeToTerms: false,
    referral: ''          // New optional field in the new layout
  })

  // State to store validation errors - shows error messages to user
  const [errors, setErrors] = useState({})

  // State to show loading spinner - shows when form is being submitted
  const [isLoading, setIsLoading] = useState(false)

  // List of all services we offer - this comes from your Cards component
  const availableServices = [
    'Real Editing',              // Real photo/video editing
    'Shirt Editing',             // Clothing product editing
    'Thumbnail Editing',         // YouTube/Instagram thumbnails
    'T-Shirt Mockups',          // Product mockups
    'AI Chatbots',              // Custom AI chatbots
    'AI Websites',              // Websites built with AI
    'Social Media Management',  // Managing social media accounts
    'Digital Marketing',         // Online marketing campaigns
    'Logo Design & Branding',   // Creating logos and brand identity
    'Web Development'            // Building websites and web apps
  ]

  // Function to handle input changes - called when user types in any input field
  const handleChange = (e) => {
    // Get information from the input field that was changed
    const name = e.target.name        // Which field was changed (e.g., 'firstName')
    const value = e.target.value      // What the user typed
    const type = e.target.type        // What type of input it is (text, email, checkbox, etc.)
    const checked = e.target.checked  // For checkboxes, whether it's checked or not

    // Update the form data with the new value
    setFormData(prevData => {
      // If it's a checkbox, use the checked value, otherwise use the typed value
      const newValue = type === 'checkbox' ? checked : value
      
      return {
        ...prevData,        // Keep all existing data
        [name]: newValue    // Update only the field that changed
      }
    })

    // Clear any error message for this field when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,      // Keep all other errors
        [name]: ''          // Clear the error for this field
      }))
    }
  }

  // Function to handle service selection - called when user clicks a service checkbox
  const handleServiceChange = (serviceName) => {
    setFormData(prevData => {
      const currentServices = prevData.services  // Get current list of selected services
      const isSelected = currentServices.includes(serviceName)  // Check if this service is already selected
      
      return {
        ...prevData,  // Keep all other form data
        services: isSelected 
          ? currentServices.filter(service => service !== serviceName)  // Remove if already selected
          : [...currentServices, serviceName]  // Add if not selected
      }
    })
  }

  // Function to validate the form - checks if all required fields are filled correctly
  const validateForm = () => {
    const newErrors = {}  // Object to store any validation errors
    
    // Name required
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Name is required'
    }
    
    // Check if email is empty
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } 
    // Check if email format is valid (has @ and .)
    else {
      const emailPattern = /\S+@\S+\.\S+/  // Regular expression to check email format
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
    }
    
    // Check if phone number is empty
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    // Budget slider must have a value
    if (!formData.budget) {
      newErrors.budget = 'Please choose an estimated budget'
    }
    
    // Check if at least one service is selected
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service'
    }
    
    // Check if user agreed to terms and conditions
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }
    
    // Set the errors in state so they show on screen
    setErrors(newErrors)
    
    // Return true if no errors (form is valid), false if there are errors
    const hasErrors = Object.keys(newErrors).length > 0
    return !hasErrors
  }


  // Function to send form data to backend API
  const postDetails = async (formData) => {
    // Map frontend field names to backend field names
    const mappedData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.email,  // Frontend uses 'email', backend expects 'emailAddress'
      phoneNumber: formData.phone,    // Frontend uses 'phone', backend expects 'phoneNumber'
      companyName: formData.company,   // Frontend uses 'company', backend expects 'companyName'
      projectType: formData.projectType,
      budgetRange: formData.budget,   // Frontend uses 'budget', backend expects 'budgetRange'
      timeline: formData.timeline,
      servicesNeeded: formData.services, // Frontend uses 'services', backend expects 'servicesNeeded'
      projectDescription: formData.message, // Frontend uses 'message', backend expects 'projectDescription'
      agreedToTerms: formData.agreeToTerms
    }

    const response = await apiFetch('/api/connect/post', {
      method: 'POST',
      body: JSON.stringify(mappedData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to submit form')
    }

    return await response.json()
  }

  // Function to handle form submission - called when user clicks "Send Message"
  const handleSubmit = async (e) => {
    // Prevent the page from refreshing when form is submitted
    e.preventDefault()
    
    // Validate the form first - check if all required fields are filled
    const isFormValid = validateForm()
    if (!isFormValid) {
      return // Stop here if form has errors
    }
    
    // Show loading spinner to let user know something is happening
    setIsLoading(true)
    
    try {
      // Send data to backend API
      const result = await postDetails(formData)
      
      // Log the successful submission
      console.log('Form submitted successfully:', result)
      
      // Show success message to user
      toast.success('Thank you! We\'ll get back to you within 24 hours.')
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        services: [],
        message: '',
        agreeToTerms: false
      })
      setErrors({})
      
    } catch (error) {
      // Handle any errors that might occur
      console.error('Connect form error:', error)
      toast.error(`Something went wrong: ${error.message}`)
    } finally {
      // Hide loading spinner whether success or error
      setIsLoading(false)
    }
  }

  // Helper function to create input fields - reduces code repetition
  const createInputField = (fieldName, label, type, placeholder, required = true) => {
    const hasError = errors[fieldName]  // Check if this field has a validation error
    
    return (
      <div>
        {/* Label for the input field */}
        <label htmlFor={fieldName} className="block text-sm font-medium text-white/90 mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        
        {/* The actual input field */}
        <input
          type={type}                    // Type of input (text, email, tel, etc.)
          id={fieldName}                 // ID for the label to connect to
          name={fieldName}               // Name to identify this field in form data
          value={formData[fieldName]}    // Current value from state
          onChange={handleChange}         // Function to call when user types
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200 ${
            hasError ? 'border-red-500' : 'border-white/20'  // Red border if error, normal border if not
          }`}
          placeholder={placeholder}       // Text shown when field is empty
        />
        
        {/* Show error message if there's an error */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Helper function to create dropdown select fields
  const createSelectField = (fieldName, label, options, required = true) => {
    const hasError = errors[fieldName]  // Check if this field has a validation error
    
    return (
      <div>
        {/* Label for the select dropdown */}
        <label htmlFor={fieldName} className="block text-sm font-medium text-white/90 mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        
        {/* The dropdown select field */}
        <select
          id={fieldName}                 // ID for the label to connect to
          name={fieldName}               // Name to identify this field in form data
          value={formData[fieldName]}    // Current selected value from state
          onChange={handleChange}         // Function to call when user selects an option
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200 ${
            hasError ? 'border-red-500' : 'border-white/20'  // Red border if error, normal border if not
          }`}
        >
          {/* Default option when nothing is selected */}
          <option value="" className="bg-[#1d1d1f] text-white">Select {label.toLowerCase()}</option>
          {/* Create an option for each item in the options array */}
          {options.map((option, index) => (
            <option key={index} value={option} className="bg-[#1d1d1f] text-white">
              {option}
            </option>
          ))}
        </select>
        
        {/* Show error message if there's an error */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Helper function to create textarea fields (for longer text input)
  const createTextareaField = (fieldName, label, placeholder, required = false) => {
    const hasError = errors[fieldName]  // Check if this field has a validation error
    
    return (
      <div>
        {/* Label for the textarea */}
        <label htmlFor={fieldName} className="block text-sm font-medium text-white/90 mb-2">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
        
        {/* The textarea field for longer text input */}
        <textarea
          id={fieldName}                 // ID for the label to connect to
          name={fieldName}               // Name to identify this field in form data
          value={formData[fieldName]}    // Current value from state
          onChange={handleChange}         // Function to call when user types
          rows={4}                       // Number of visible rows
          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200 resize-none ${
            hasError ? 'border-red-500' : 'border-white/20'  // Red border if error, normal border if not
          }`}
          placeholder={placeholder}       // Text shown when field is empty
        />
        
        {/* Show error message if there's an error */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Helper function to create checkbox fields
  const createCheckboxField = (fieldName, label, links) => {
    const hasError = errors[fieldName]  // Check if this field has a validation error
    
    return (
      <div>
        <label className="flex items-start">
          {/* The checkbox input */}
          <input
            type="checkbox"              // Type of input
            name={fieldName}             // Name to identify this field in form data
            checked={formData[fieldName]} // Whether checkbox is checked (from state)
            onChange={handleChange}        // Function to call when user clicks checkbox
            className="w-4 h-4 text-[#ffd600] bg-white/5 border-white/20 rounded focus:ring-[#ffd600]/50 focus:ring-2 mt-1"
          />
          {/* Text next to the checkbox */}
          <span className="ml-3 text-sm text-white/80">
            {label}
            {/* Add links if provided (for terms and privacy policy) */}
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
        
        {/* Show error message if there's an error */}
        {hasError && (
          <p className="mt-1 text-sm text-red-400">{hasError}</p>
        )}
      </div>
    )
  }

  // Main component return (what gets displayed on screen)
  return (
    <div className="min-h-screen bg-[#0b0b0c]">
      <Navbar />
      <div className="pt-28 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Two-column layout with fixed left and scrollable right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 min-h-screen">
          {/* Left side: fixed heading + contact details */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
            <BlurText
              text="GET IN TOUCH"
              className="text-[56px] md:text-[96px] leading-[0.9] tracking-tight font-extrabold text-[#d5d20d] mb-8"
              animateBy="words"
              direction="top"
              delay={150}
              stepDuration={0.4}
            />
            <div className="space-y-8">
              <div>
                <p className="text-white/60 text-sm mb-1">Have a question?</p>
                <a href="mailto:hello@editcomedia.com" className="text-white hover:text-[#ffd600] transition-colors text-base">hello@editcomedia.com</a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Speak to someone?</p>
                <a href="tel:+918919926373" className="text-white hover:text-[#ffd600] transition-colors text-base">+91 8919926373</a>
              </div>
            </div>
          </div>

          {/* Right side: scrollable form card */}
          <div className="lg:col-span-7 space-y-6 pb-16">
            {/* Main form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
                
                {/* Personal Information Section */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
                  {/* Grid layout - 1 column on mobile, 2 columns on medium screens and up */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Using helper functions to create input fields */}
                    {createInputField('firstName', 'First Name', 'text', 'enter your first name')}
                    {createInputField('lastName', 'Last Name', 'text', 'enter your last name')}
                    {createInputField('email', 'Email Address', 'email', 'example@example.com')}
                    {createInputField('phone', 'Phone Number', 'tel', '+1 (555) 123-4567')}
                    {createInputField('company', 'Company Name', 'text', 'Your Company', false)}
                  </div>
                </div>

                {/* Project Details Section */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Project Details</h2>
                  {/* Grid layout - 1 column on mobile, 3 columns on medium screens and up */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Using helper functions to create dropdown select fields */}
                    {createSelectField('projectType', 'Project Type', [
                      'Brand Identity',        // Logo and branding work
                      'Website Development',   // Building websites
                      'Social Media Content',  // Creating social media posts
                      'Digital Marketing',     // Online marketing campaigns
                      'AI Solutions',          // AI chatbots and websites
                      'Other'                 // Something else
                    ])}
                    
                    {createSelectField('budget', 'Budget Range', [
                      '$1k-$5k',              // Small budget
                      '$5k-$10k',             // Medium budget
                      '$10k-$25k',            // Large budget
                      '$25k-$50k',            // Very large budget
                      '$50k+'                 // Enterprise budget
                    ])}
                    
                    {createSelectField('timeline', 'Timeline', [
                      '1-2 weeks',            // Quick turnaround
                      '1 month',               // Standard timeline
                      '2-3 months',           // Medium project
                      '3-6 months',           // Longer project
                      '6+ months'             // Very long project
                    ])}
                  </div>
                </div>

                {/* Services Section - Multi-select checkboxes */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Services Needed</h2>
                  <p className="text-white/70 mb-4">Select all services that apply to your project:</p>
                  
                  {/* Grid layout for service checkboxes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Loop through each service and create a checkbox */}
                    {availableServices.map((service, index) => (
                      <label key={index} className="flex items-center p-4 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                        {/* Checkbox for this service */}
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}  // Check if this service is selected
                          onChange={() => handleServiceChange(service)}   // Call function when clicked
                          className="w-4 h-4 text-[#d5d20d] bg-white/5 border-white/20 rounded focus:ring-[#d5d20d]/50 focus:ring-2 mr-3"
                        />
                        {/* Service name */}
                        <span className="text-white/90 text-sm font-medium">{service}</span>
                      </label>
                    ))}
                  </div>
                  
                  {/* Show error message if no services are selected */}
                  {errors.services && (
                    <p className="mt-2 text-sm text-red-400">{errors.services}</p>
                  )}
                </div>

                {/* Message Section - Optional textarea for additional details */}
                <div>
                  <h2 className="text-2xl font-semibold text-white mb-6">Tell Us More</h2>
                  {/* Using helper function to create textarea field */}
                  {createTextareaField('message', 'Project Description', 'Describe your project goals, requirements, and any specific details you\'d like us to know...', false)}
                </div>

                {/* Terms and Conditions - Required checkbox */}
                <div>
                  {/* Using helper function to create checkbox with links */}
                  {createCheckboxField('agreeToTerms', 'I agree to the', {
                    terms: 'Terms of Service',    // Link to terms
                    privacy: 'Privacy Policy'    // Link to privacy policy
                  })}
                </div>

                {/* Submit button with loading state */}
                <button
                  type="submit"                    // Submit the form when clicked
                  disabled={isLoading}              // Disable button while loading
                  className="w-full relative flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                >
                  {/* Button background gradient that appears on hover */}
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full group-disabled:h-0"></span>
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        {/* Loading spinner animation */}
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
