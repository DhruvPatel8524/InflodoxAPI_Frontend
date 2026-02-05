import React from 'react'
import BMImage from '../../assets/bm-hero-img.png'
import { ChartColumn, CircleCheck, Clock, Users } from 'lucide-react'

function BroadcastMessaging() {
  const benefits = [
    {
      icon: <Users />,
      title: 'Reach Everyone at Once',
      description: 'Send messages to thousands of customers with just a few clicks. No more tedious one-by-one messaging.'
    },
    {
      icon: <Clock />,
      title: 'Schedule for Perfect Timing',
      description: 'Plan your campaigns in advance and let them go out when your customers are most likely to engage.'
    },
    {
      icon: <ChartColumn />,
      title: 'Track Every Message',
      description: 'See who opened your messages, who clicked your links, and measure the real impact of your campaigns.'
    },
  ]

  const features = [
    {
      description: 'Send to unlimited contacts at once'
    },
    {
      description: 'Personalize messages with customer names and details'
    },
    {
      description: 'Schedule broadcasts for future delivery'
    },
    {
      description: 'Segment your audience for targeted messaging'
    },
    {
      description: 'Include images, videos, and documents'
    },
    {
      description: 'Track delivery, opens, and clicks in real-time'
    },
    {
      description: 'A/B test different message variations'
    },
    {
      description: 'Automatic retry for failed deliveries'
    },
  ]

  const useCases = [
    {
      title: 'Product Announcements',
      description: 'Launch new products and features to your entire customer base with one click.'
    },
    {
      title: 'Promotional Campaigns',
      description: 'Run flash sales, discount offers, and seasonal promotions that drive immediate action.'
    },
    {
      title: 'Event Invitations',
      description: 'Send invites for webinars, store openings, or special events with RSVP tracking.'
    },
    {
      title: 'Company Updates',
      description: 'Keep customers informed about business hours, policy changes, or important news.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1 className='text-4xl mb-3'>Broadcast Messaging</h1>
              <p className='text-justify text-lg text-gray-500 mb-3'>Reach thousands of customers instantly with personalized announcements, promotions, and updates. Send the right message to the right people at the right time.</p>
              <div className='flex gap-4 mb-3'>
                <button className='py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={BMImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2 className='text-3xl mb-3'>Why Businesses Love Broadcast Messaging</h2>
              <p className='text-lg text-gray-500 mb-3'>Save time, reach more customers, and drive real results with powerful broadcast capabilities.</p>
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
              <h2 className='text-3xl mb-3'>Everything You Need for Effective Broadcasts</h2>
              <p className='text-justify text-lg text-gray-500 mb-3'>From personalization to analytics, our broadcast messaging feature has everything you need to communicate at scale.</p>
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
                <div className="rounded-xl bg-gray-100 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-sky-100" />
                    <div className="h-3 w-24 rounded bg-gray-200" />
                  </div>
                  <div className="ml-11 space-y-2">
                    <div className="h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-3/4 rounded bg-gray-200" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Delivered to 5,432 contacts</span>
                  <span className="text-green-600 font-medium">98.5% success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2 className='text-3xl mb-3'>Use Cases</h2>
              <p className='text-lg text-gray-500 mb-3'>See how businesses are using broadcast messaging to grow.</p>
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

export default BroadcastMessaging