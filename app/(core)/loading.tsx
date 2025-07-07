import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <div className="hidden md:flex space-x-8">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-6 w-16" />
              ))}
            </div>
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Hero section skeleton */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Skeleton className="h-12 w-3/4 mx-auto mb-6 bg-white/20" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-white/20" />
          <div className="flex justify-center space-x-4">
            <Skeleton className="h-12 w-32 bg-white/20" />
            <Skeleton className="h-12 w-32 bg-white/20" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
