import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)

    setIsSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className='py-20 px-6 md:px-12 lg:px-20 bg-black'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='font-[font2] text-4xl md:text-5xl uppercase mb-12'>Get in touch</h2>

        {isSubmitted ? (
          <div className='bg-[#D3FD50] text-black p-8 rounded-lg text-center'>
            <h3 className='font-[font2] text-2xl mb-4'>Thank you!</h3>
            <p className='font-[font1]'>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block font-[font1] text-sm mb-2'>
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${
                    errors.name ? 'border-red-500' : 'border-white/30'
                  } focus:border-[#D3FD50] outline-none py-3 font-[font1] transition-colors`}
                  placeholder='Your name'
                />
                {errors.name && (
                  <p className='text-red-500 text-sm mt-1 font-[font1]'>{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor='email' className='block font-[font1] text-sm mb-2'>
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b ${
                    errors.email ? 'border-red-500' : 'border-white/30'
                  } focus:border-[#D3FD50] outline-none py-3 font-[font1] transition-colors`}
                  placeholder='your@email.com'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1 font-[font1]'>{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor='phone' className='block font-[font1] text-sm mb-2'>
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full bg-transparent border-b border-white/30 focus:border-[#D3FD50] outline-none py-3 font-[font1] transition-colors'
                  placeholder='+1 (555) 000-0000'
                />
              </div>

              <div>
                <label htmlFor='company' className='block font-[font1] text-sm mb-2'>
                  Company
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className='w-full bg-transparent border-b border-white/30 focus:border-[#D3FD50] outline-none py-3 font-[font1] transition-colors'
                  placeholder='Your company'
                />
              </div>
            </div>

            <div>
              <label htmlFor='message' className='block font-[font1] text-sm mb-2'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='6'
                className={`w-full bg-transparent border-b ${
                  errors.message ? 'border-red-500' : 'border-white/30'
                } focus:border-[#D3FD50] outline-none py-3 font-[font1] transition-colors resize-none`}
                placeholder='Tell us about your project...'
              />
              {errors.message && (
                <p className='text-red-500 text-sm mt-1 font-[font1]'>{errors.message}</p>
              )}
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='group relative bg-[#D3FD50] text-black px-12 py-4 font-[font2] text-lg uppercase overflow-hidden transition-all hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed'
            >
              <span className='relative z-10'>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className='absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300' />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm
