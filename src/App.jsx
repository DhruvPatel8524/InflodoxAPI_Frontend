import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BroadcastMessaging from './pages/features/BroadcastMessaging'
import MessageSequence from './pages/features/MessageSequence'
import MultiAgentInbox from './pages/features/MultiAgentInbox'
import WhatsappChatbot from './pages/features/WhatsappChatbot'
import WhatsappFlow from './pages/features/WhatsappFlow'
import WhatsappPayment from './pages/features/WhatsappPayment'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/broadcast-messaging' element={<BroadcastMessaging />} />
          <Route path='/message-sequence' element={<MessageSequence />} />
          <Route path='/multi-agent-inbox' element={<MultiAgentInbox />} />
          <Route path='/whatsapp-chatbot' element={<WhatsappChatbot />} />
          <Route path='/whatsapp-flow' element={<WhatsappFlow />} />
          <Route path='/whatsapp-payment' element={<WhatsappPayment />} />
        </Route>
      </Routes>
    </>
  )
}

export default App