import React from 'react'
import WFImage from '../../assets/wf-hero-img.png'
import { CircleCheck, Database, Layers, Zap } from 'lucide-react'

function whatsappFlow() {
  const benefits = [
    {
      icon: <Layers />,
      title: 'Form-Like Experience',
      description: 'Collect structured data through natural conversations. Feels like chatting, works like a form.'
    },
    {
      icon: <Database />,
      title: 'Smart Organization',
      description: 'Automatically sync collected information with your favorite tools and databases.'
    },
    {
      icon: <Zap />,
      title: 'Faster Response Times',
      description: 'WhatsApp flows see 70% higher completion rates compared to traditional web forms.'
    },
  ]

  const features = [
    {
      description: 'Drag-and-drop flow builder'
    },
    {
      description: 'Conditional logic and branching'
    },
    {
      description: 'Input validation (email, phone, etc.)'
    },
    {
      description: 'File and image uploads'
    },
    {
      description: 'Date and time pickers'
    },
    {
      description: 'Multi-choice and dropdown menus'
    },
    {
      description: 'Skip logic for personalized paths'
    },
    {
      description: 'Real-time data sync'
    },
  ]

  const useCases = [
    {
      title: 'Lead Capture Forms',
      description: 'Collect contact information and qualify leads through engaging WhatsApp conversations.'
    },
    {
      title: 'Customer Surveys',
      description: 'Gather feedback and insights with conversational surveys that feel natural.'
    },
    {
      title: 'Application Forms',
      description: 'Process job applications, loan requests, or service applications through guided flows.'
    },
    {
      title: 'Event Registration',
      description: 'Handle event sign-ups and collect attendee information seamlessly.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1 className='text-4xl mb-3'>WhatsApp Flow</h1>
              <p className='text-justify text-lg text-gray-500 mb-3'>Transform boring forms into engaging conversations. Collect customer information through guided, chat-based flows that feel natural and convert better.</p>
              <div className='flex gap-4 mb-3'>
                <button className='py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={WFImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2 className='text-3xl mb-3'>Forms That People Actually Complete</h2>
              <p className='text-lg text-gray-500 mb-3'>WhatsApp flows turn data collection into conversations—and conversations convert.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-4'>
              {benefits.map((benefit, index) => (
                <div className='bg-white py-4 px-6 flex flex-col justify-center items-center rounded-lg shadow-sm transition-shadow duration-300'>
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
              <h2 className='text-3xl mb-3'>Build Flows in Minutes</h2>
              <p className='text-justify text-lg text-gray-500 mb-3'>Our visual builder makes creating complex flows simple. No coding required.</p>
              <div className='grid grid-cols-2 gap-2'>
                {features.map((feature, index) => (
                  <div className='flex gap-2 items-center mb-3'>
                    <span><CircleCheck size={20} className='text-green-600' /></span>
                    <span className='text-[16px] text-gray-500'>{feature.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center h-fit rounded-2xl bg-white shadow-sm p-8">
              <div className="space-y-4">
                <div className="flex gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-sky-500 px-4 py-3">
                    <p className="text-sm text-white">What's your name?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
                    <p className="text-sm">John Smith</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-sky-500 px-4 py-3">
                    <p className="text-sm text-white">Great! What's your email, John?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3">
                    <p className="text-sm">john@example.com</p>
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
              <h2 className='text-3xl mb-3'>Endless Possibilities</h2>
              <p className='text-lg text-gray-500 mb-3'>From lead generation to customer feedback, flows adapt to your needs.</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
              {useCases.map((useCase, index) => (
                <div className='bg-white py-4 px-6 rounded-lg shadow-sm'>
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

export default whatsappFlow