'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Không tìm thấy trang
          </h2>
          <p className="text-gray-600">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Về trang chủ
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/solutions">
              <Search className="w-4 h-4 mr-2" />
              Xem giải pháp
            </Link>
          </Button>

          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Cần hỗ trợ? </p>
          <Link 
            href="/contact" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Liên hệ với chúng tôi
          </Link>
        </div>
      </div>
    </div>
  );
}
