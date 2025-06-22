'use client';

import { useState } from 'react';
import { Bot, MessageCircle, X, Send } from 'lucide-react';

export default function ChatBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isChatOpen && (
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-80 mb-4 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <span className="font-medium">AI Assistant</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">Hi! I'm your AI assistant. How can I help you explore our industrial AI solutions today?</p>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-gray-700">
                How do industrial AI solutions work?
              </button>
              <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-gray-700">
                What's included in the free trial?
              </button>
              <button className="w-full text-left px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-gray-700">
                Can you integrate with existing systems?
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200 p-3">
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about AI solutions..." 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700 placeholder-gray-500"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all shadow-md text-white"
      >
        {isChatOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}