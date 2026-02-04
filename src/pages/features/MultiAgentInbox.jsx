import React from 'react'
import MAIImage from '../../assets/mai-hero-img.png'
import { CircleCheck, MessageSquare, Tag, Users, Zap } from 'lucide-react'

function MultiAgentInbox() {
  const benefits = [
    {
      icon: <Users />,
      title: 'Team Collaboration',
      description: 'Multiple agents can work together, assign conversations, and leave internal notes for seamless handoffs.'
    },
    {
      icon: <Tag />,
      title: 'Smart Organization',
      description: 'Tag, filter, and prioritize conversations to ensure no customer inquiry falls through the cracks.'
    },
    {
      icon: <Zap />,
      title: 'Faster Response Times',
      description: 'Quick replies, templates, and keyboard shortcuts help your team respond in seconds, not minutes.'
    },
  ]

  const features = [
    {
      description: 'Unlimited team members on shared inbox'
    },
    {
      description: 'Assign conversations to specific agents'
    },
    {
      description: 'Private internal notes and mentions'
    },
    {
      description: 'Canned responses and quick replies'
    },
    {
      description: 'Conversation tags and filters'
    },
    {
      description: 'Agent performance analytics'
    },
    {
      description: "Collision detection (see who's typing)"
    },
    {
      description: 'Mobile app for on-the-go support'
    },
  ]

  const useCases = [
    {
      title: 'Customer Support Teams',
      description: 'Handle high volumes of support requests efficiently with your entire team working in sync.'
    },
    {
      title: 'Sales Teams',
      description: 'Collaborate on leads and deals, hand off conversations, and track every customer interaction.'
    },
    {
      title: 'Account Management',
      description: 'Keep detailed records of client communications accessible to everyone on the team.'
    },
    {
      title: 'Remote Teams',
      description: 'Work together seamlessly regardless of location or time zone with asynchronous collaboration.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1>Multi-Agent Inbox</h1>
              <p className='text-justify text-gray-600 mb-4'>One inbox for your entire team. Collaborate seamlessly, assign conversations, and deliver exceptional customer experiences together.</p>
              <div className='flex gap-4'>
                <button className='bg-[#333333] text-[#f2f2f2] py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='bg-[#f2f2f2] text-[#333333] py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={MAIImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2>Work Together, Serve Better</h2>
              <p className='text-gray-600'>Stop manually following up. Let sequences do the heavy lifting while you focus on closing deals.</p>
              <p className='text-gray-600'></p>
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
              <h2>Built for Team Productivity</h2>
              <p className='text-justify text-gray-600 mb-4'>Every feature designed to help your team work faster and smarter together.</p>
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
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-xl bg-gray-100 p-4">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-24 rounded bg-gray-200 mb-2" />
                      <div className="h-2 w-32 rounded bg-gray-200" />
                    </div>
                    <div className="h-6 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-400 font-medium">New</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2>Perfect for Any Team</h2>
              <p className='text-gray-600'>Whether you're a support team or sales team, multi-agent inbox adapts to your workflow.</p>
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

export default MultiAgentInbox