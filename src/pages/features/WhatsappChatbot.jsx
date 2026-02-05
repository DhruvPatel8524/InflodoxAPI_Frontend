import React from 'react'
import WCImage from '../../assets/wc-hero-img.png'
import { Bot, Brain, CircleCheck, Clock, Globe } from 'lucide-react'

function WhatsappChatbot() {
  const benefits = [
    {
      icon: <Clock />,
      title: '24/7 Availability',
      description: "Never miss a customer inquiry. Your chatbot handles conversations around the clock, even when you're asleep."
    },
    {
      icon: <Brain />,
      title: 'AI-Powered Intelligence',
      description: 'Our chatbot understands context, handles complex queries, and gets smarter with every conversation.'
    },
    {
      icon: <Globe />,
      title: 'Multi-Language Support',
      description: 'Serve customers in their preferred language with automatic translation and localized responses.'
    },
  ]

  const features = [
    {
      description: 'Natural language understanding'
    },
    {
      description: 'Custom conversation flows'
    },
    {
      description: 'Seamless human handoff'
    },
    {
      description: 'Rich media support (images, videos, files)'
    },
    {
      description: 'Intent detection and routing'
    },
    {
      description: 'Context-aware responses'
    },
    {
      description: 'Integration with your systems'
    },
    {
      description: 'Detailed conversation analytics'
    },
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Answer FAQs, handle returns, and resolve common issues without human intervention.'
    },
    {
      title: 'Lead Qualification',
      description: 'Ask qualifying questions and route hot leads to your sales team automatically.'
    },
    {
      title: 'Appointment Booking',
      description: 'Let customers schedule appointments directly through WhatsApp conversations.'
    },
    {
      title: 'Order Status',
      description: 'Provide instant updates on order tracking, shipping, and delivery information.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1 className='text-4xl mb-3'>WhatsApp Chatbot</h1>
              <p className='text-justify text-lg text-gray-500 mb-3'>Automate conversations with AI-powered chatbots that understand your customers and provide instant, helpful responses—24 hours a day, 7 days a week.</p>
              <div className='flex gap-4 mb-3'>
                <button className='py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={WCImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2 className='text-3xl mb-3'>Smart Automation That Feels Human</h2>
              <p className='text-lg text-gray-500 mb-3'>Our AI chatbots don't just respond—they understand, learn, and adapt to provide personalized experiences.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
              {benefits.map((benefit, index) => (
                <div key={index} className='bg-white py-4 px-6 flex flex-col justify-center items-center rounded-lg shadow-sm transition-shadow duration-300'>
                  <span className='mb-3'>{benefit.icon}</span>
                  <h4 className='text-lg mb-3'>{benefit.title}</h4>
                  <span className='text-center text-[16px] text-gray-500 mb-3'>{benefit.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h2 className='text-3xl mb-3'>Powerful Chatbot Capabilities</h2>
              <p className='text-justify text-lg text-gray-500 mb-3'>Build sophisticated conversation flows without coding. Our visual builder makes it easy.</p>
              <div className='grid grid-cols-2 gap-2'>
                {features.map((feature, index) => (
                  <div key={index} className='flex gap-2 items-center mb-3'>
                    <span><CircleCheck size={20} className='text-green-600' /></span>
                    <span className='text-[16px] text-gray-500'>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center h-fit rounded-2xl bg-white shadow-sm p-8">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-gray-400">C</span>
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
                    <span className="text-sm">Hi! What are your business hours?</span>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-sky-500 px-4 py-3 max-w-70">
                    <span className="text-sm text-white">
                      We're open Monday-Friday, 9AM-6PM EST. How can I help you today? 😊
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-sky-400" />
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
              <h2 className='text-3xl mb-3'>Automate Any Conversation</h2>
              <p className='text-lg text-gray-500 mb-3'>From support to sales, our chatbots handle it all.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
              {useCases.map((useCase, index) => (
                <div key={index} className='bg-white py-4 px-6 rounded-lg shadow-sm'>
                  <h4 className='text-lg mb-3'>{useCase.title}</h4>
                  <span className='text-[16px] text-gray-500 mb-3'>{useCase.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatsappChatbot