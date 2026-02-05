import React from 'react'
import MSImage from '../../assets/ms-hero-img.png'
import { CircleCheck, Target, TrendingUp, Zap } from 'lucide-react'

function MessageSequence() {
  const benefits = [
    {
      icon: <Zap />,
      title: 'Set It and Forget It',
      description: 'Create your sequence once, and let it run automatically. New leads enter and nurture on autopilot.'
    },
    {
      icon: <Target />,
      title: 'Perfect Timing',
      description: 'Send messages at the right moment based on user actions, time delays, or specific conditions.'
    },
    {
      icon: <TrendingUp />,
      title: 'Higher Conversions',
      description: 'Consistent follow-ups convert more leads. Our customers see up to 3x improvement in conversion rates.'
    },
  ]

  const features = [
    {
      description: 'Time-based message scheduling'
    },
    {
      description: 'Behavior-triggered sequences'
    },
    {
      description: 'Conditional logic and branching'
    },
    {
      description: 'A/B testing for optimization'
    },
    {
      description: 'Dynamic personalization'
    },
    {
      description: 'Pause/resume based on responses'
    },
    {
      description: 'Exit conditions and goals'
    },
    {
      description: 'Detailed performance analytics'
    },
  ]

  const useCases = [
    {
      title: 'Lead Nurturing',
      description: 'Guide new leads through your sales funnel with educational content and offers.'
    },
    {
      title: 'Onboarding Sequences',
      description: 'Welcome new customers and help them get the most out of your product or service.'
    },
    {
      title: 'Re-engagement Campaigns',
      description: 'Win back inactive customers with targeted messages and special offers.'
    },
    {
      title: 'Post-Purchase Follow-ups',
      description: 'Request reviews, offer related products, and build long-term relationships.'
    },
  ]

  return (
    <div>
      <section className='w-full py-10'>
        {/* Hero Section */}
        <div>
          <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-2 justify-center items-center gap-12'>
            <div className='w-full h-full flex flex-col justify-center'>
              <h1 className='text-4xl mb-3'>Message Sequences</h1>
              <p className='text-justify text-lg text-gray-500 mb-3'>Nurture leads and customers with automated follow-up sequences. Send the right message at the right time, every time—without lifting a finger.</p>
              <div className='flex gap-4 mb-3'>
                <button className='py-4 px-8 border cursor-pointer'>Start Free Trial</button>
                <button className='py-4 px-8 border cursor-pointer'>Book Demo</button>
              </div>
            </div>
            <div className='rounded-lg w-full h-full flex justify-center items-center'>
              <img src={MSImage} alt='broadcast-messaging-image' />
            </div>
          </div>
        </div>

        {/* Benefit Section */}
        <div className='bg-[#f9f9f9]'>
          <div className='w-[90%] mx-auto py-20 flex flex-col gap-12'>
            <div className='text-center h-fit'>
              <h2 className='text-3xl mb-3'>Automation That Converts</h2>
              <p className='text-lg text-gray-500 mb-3'>Stop manually following up. Let sequences do the heavy lifting while you focus on closing deals.</p>
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
              <h2 className='text-3xl mb-3'>Sophisticated Yet Simple</h2>
              <p className='text-justify text-lg text-gray-500 mb-3'>Build complex automation with our intuitive sequence builder. No technical skills required.</p>
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
              <div className="space-y-3">
                {["Day 1: Welcome message", "Day 3: Value proposition", "Day 5: Case study", "Day 7: Special offer"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-sky-400">{i + 1}</span>
                    </div>
                    <div className="flex-1 rounded-lg bg-gray-100 p-3">
                      <span className="text-foreground">{step}</span>
                    </div>
                    {i < 3 && (
                      <div className="absolute left-5 h-3 border-l-2 border-dashed border-sky-300" style={{ top: `calc(${(i + 1) * 52}px + 44px)` }} />
                    )}
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
              <h2 className='text-3xl mb-3'>Sequences for Every Goal</h2>
              <p className='text-lg text-gray-500 mb-3'>From lead nurturing to customer retention, sequences handle it all.</p>
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

export default MessageSequence