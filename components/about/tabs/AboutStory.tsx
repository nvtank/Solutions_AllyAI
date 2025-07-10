import Image from 'next/image';

export default function AboutStory() {
  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Co-Founder",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former VP of Engineering at TechCorp with 15+ years in industrial AI"
    },
    {
      name: "Michael Chen",
      position: "CTO & Co-Founder",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "AI researcher and former Google engineer specializing in machine learning"
    },
    {
      name: "Elena Rodriguez",
      position: "Head of Product",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Product strategist with deep expertise in industrial automation"
    },
    {
      name: "David Kim",
      position: "Head of Engineering",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack engineer passionate about scalable AI infrastructure"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          TripC Solution <span className="text-blue-600">Chuyển Đổi Số Cho Doanh Nghiệp Du Lịch – Dịch Vụ</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          TripC Solution là đối tác đáng tin cậy cho chuyển đổi số. Giúp doanh nghiệp du lịch – dịch vụ tăng trưởng. Đồng thời tuân thủ quy định Nhà nước.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Chúng tôi cung cấp một nền tảng công nghệ toàn diện, giúp các doanh nghiệp nhanh chóng số hóa hoạt động kinh doanh, từ quản lý, vận hành đến tương tác khách hàng, mà không cần đầu tư lớn vào đội ngũ kỹ thuật riêng.
        </p>

      </div>
      <div className="relative">
        <Image
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Our Story"
          width={800}
          height={600}
          className="rounded-2xl shadow-lg"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">500+</div>
          <div className="text-sm text-gray-600">Projects Delivered</div>
        </div>
      </div>
    </div>
  );
}
