'use client';

import { useState } from 'react';
import { 
  Send, 
  CheckCircle,
  Building2,
  Users,
  MessageSquare,
  Headphones,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Họ tên là bắt buộc';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Tin nhắn là bắt buộc';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Tin nhắn phải có ít nhất 10 ký tự';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Chủ đề là bắt buộc';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };


  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
      <p className="text-gray-600 mb-8">
        Điền thông tin dưới đây và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.
      </p>

      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-700">Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
    

        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Họ tên *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Nhập họ tên của bạn"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className='col-span-2'>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="+84 xxx xxx xxx"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tin nhắn *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Mô tả chi tiết yêu cầu của bạn..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Gửi tin nhắn</span>
            </>
          )}
        </button>

        <p className="text-sm text-gray-500 text-center">
          Bằng cách gửi form này, bạn đồng ý với{' '}
          <a href="#" className="text-blue-600 hover:underline">
            chính sách bảo mật
          </a>{' '}
          của chúng tôi.
        </p>
      </form>
    </div>
  );
}
