import React from 'react'
import WPImage from '../../assets/wp-hero-img.png'
import { CircleCheck, Repeat, Shield, Zap } from 'lucide-react'

function WhatsappPayment() {
  const benefits = [
    {
      icon: <Zap />,
      title: 'Instant Payments',
      description: 'Customers pay without leaving WhatsApp. No redirects, no friction, no abandoned carts.'
    },
    {
      icon: <Shield />,
      title: 'Secure Transactions',
      description: 'Bank-level security with PCI compliance. Every transaction is encrypted and protected.'
    },
    {
      icon: <Repeat />,
      title: 'Automated Receipts',
      description: 'Instant payment confirmations and receipts sent directly in the conversation.'
    },
  ]

  const features = [
    {
      description: 'One-click payment links'
    },
    {
      description: 'Multiple payment methods'
    },
    {
      description: 'Recurring payment support'
    },
    {
      description: 'Partial payment options'
    },
    {
      description: 'Automatic payment reminders'
    },
    {
      description: 'Real-time transaction tracking'
    },
    {
      description: 'Refund processing'
    },
    {
      description: 'Financial reporting dashboard'
    },
  ]

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Complete purchases directly in chat. Send product links, collect payments, confirm orders.'
    },
    {
      title: 'Service Bookings',
      description: 'Accept payments for appointments, consultations, and service bookings instantly.'
    },
    {
      title: 'Invoicing',
      description: 'Send invoices and collect payments from clients through WhatsApp conversations.'
    },
    {
      title: 'Subscriptions',
      description: 'Manage recurring payments for memberships, subscriptions, and retainers.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1>WhatsApp Payment</h1>
              <p className='text-justify text-gray-600 mb-4'>Accept payments directly in WhatsApp conversations. Send payment links, track transactions, and provide seamless checkout experiences—all without leaving the chat.</p>
              <div className='flex gap-4'>
                <button className='bg-[#333333] text-[#f2f2f2] py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='bg-[#f2f2f2] text-[#333333] py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={WPImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2>Payments Made Effortless</h2>
              <p className='text-gray-600'>Turn conversations into transactions. Accept payments where your customers already are.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
              {benefits.map((benefit, index) => (
                <div className='bg-white py-4 px-6 flex flex-col justify-center items-center rounded-lg shadow-sm transition-shadow duration-300'>
                  <span className='mb-2'>{benefit.icon}</span>
                  <h4>{benefit.title}</h4>
                  <span className='text-center text-gray-600'>{benefit.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h2>Complete Payment Solution</h2>
              <p className='text-justify text-gray-600 mb-4'>Everything you need to accept payments, manage transactions, and grow your revenue.</p>
              <div className='grid grid-cols-2 gap-2'>
                {features.map((feature, index) => (
                  <div className='flex gap-2 items-center mb-2'>
                    <span><CircleCheck size={20} className='text-green-600' /></span>
                    <span className='text-gray-600'>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center h-fit rounded-2xl bg-white shadow-sm p-8">
              <div className="space-y-4">
                <div className="flex gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-sky-500 px-4 py-3">
                    <p className="text-sm text-white mb-2">Your total is $149.99</p>
                    <div className="rounded-lg bg-sky-300 p-3 text-center">
                      <p className="text-xs text-white">💳 Tap to pay securely</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-2xl rounded-tl-none bg-green-100 px-4 py-3">
                    <p className="text-sm text-green-500 font-medium">✓ Payment successful!</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-sky-500 px-4 py-3">
                    <p className="text-sm text-white">Thank you! Your order is confirmed. 🎉</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2>Payments for Every Business</h2>
              <p className='text-gray-600'>From e-commerce to services, WhatsApp payments work for everyone.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
              {useCases.map((useCase, index) => (
                <div className='bg-white py-4 px-6 rounded-lg shadow-sm'>
                  <h4>{useCase.title}</h4>
                  <span className='text-gray-600'>{useCase.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatsappPayment