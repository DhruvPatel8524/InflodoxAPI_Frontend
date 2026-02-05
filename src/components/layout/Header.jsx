import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 bg-white z-50 shadow-sm transition-all duration-300 ease-in-out ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="w-[90%] h-full mx-auto grid grid-cols-3 items-center">
        <div>
          <Link to="/" className="text-2xl font-bold font-mono">InflodoxAPI</Link>
        </div>
        <nav className="flex justify-center gap-12">
          <div className="relative group">
            <li className="cursor-default text-[16px] font-semibold text-gray-600 list-none">
              Features
            </li>
            <div className="absolute top-full left-0 mt-4
                              w-56 bg-white border-t-2 shadow-lg rounded-lg
                              opacity-0 invisible
                              group-hover:opacity-100 group-hover:visible
                              transition-all duration-200">
              <ul className="py-2">
                <li>
                  <Link to='broadcast-messaging' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    Broadcast Messaging
                  </Link>
                </li>
                <li>
                  <Link to='/message-sequence' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    Message Sequence
                  </Link>
                </li>
                <li>
                  <Link to='/multi-agent-inbox' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    Multi Agent Inbox
                  </Link>
                </li>
                <li>
                  <Link to='/whatsapp-chatbot' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    WhatsApp Chatbot
                  </Link>
                </li>
                <li>
                  <Link to='/whatsapp-flow' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    WhatsApp Flow
                  </Link>
                </li>
                <li>
                  <Link to='/whatsapp-payment' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    WhatsApp Payment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <li to='/' className="cursor-default text-[16px] font-semibold text-gray-600 list-none">
              Industry
            </li>
            <div className="absolute top-full left-0 mt-4
                              w-56 bg-white border-t-2 shadow-lg rounded-lg
                              opacity-0 invisible
                              group-hover:opacity-100 group-hover:visible
                              transition-all duration-200">
              <ul className="py-2">
                <li>
                  <Link to='/' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    Travel & Tourism
                  </Link>
                </li>
                <li>
                  <Link to='/' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link to='/' className="block px-4 py-2 text-[16px] font-semibold text-gray-600 hover:bg-gray-100">
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to='/' className="text-[16px] font-semibold text-gray-600">Pricing</Link>
          <Link to='/' className="text-[16px] font-semibold text-gray-600">Contact</Link>
        </nav>
        <div className="flex justify-end gap-2">
          <button className="cursor-pointer">Login</button>
          <button className="cursor-pointer">Register</button>
        </div>
      </div>
    </header>
  )
}

export default Header