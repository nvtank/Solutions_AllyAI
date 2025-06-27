// data/content/contact.ts
export const contactContent = {
  hero: {
    title: "Liên hệ với chúng tôi",
    subtitle: "Sẵn sàng hỗ trợ bạn 24/7",
    description: "Đội ngũ chuyên gia của TripC Solutions luôn sẵn sàng tư vấn và hỗ trợ bạn tìm ra giải pháp tối ưu nhất."
  },

  contactInfo: {
    office: {
      title: "Văn phòng chính",
      address: "123 Innovation Drive, Quận 1, TP.HCM",
      phone: "+84 28 1234 5678",
      email: "info@tripc.ai",
      hours: "Thứ 2 - Thứ 6: 9:00 - 18:00"
    },
    support: {
      title: "Hỗ trợ kỹ thuật",
      phone: "+84 28 1234 5679",
      email: "support@tripc.ai",
      hours: "24/7 - Luôn sẵn sàng hỗ trợ"
    },
    sales: {
      title: "Tư vấn kinh doanh",
      phone: "+84 28 1234 5680",
      email: "sales@tripc.ai",
      hours: "Thứ 2 - Thứ 6: 8:00 - 20:00"
    }
  },

  formConfig: {
    title: "Gửi tin nhắn cho chúng tôi",
    subtitle: "Điền thông tin dưới đây và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ.",
    
    inquiryTypes: [
      {
        value: "general",
        label: "Tư vấn chung",
        description: "Câu hỏi chung về sản phẩm và dịch vụ"
      },
      {
        value: "sales", 
        label: "Bán hàng & Báo giá",
        description: "Yêu cầu báo giá và tư vấn giải pháp"
      },
      {
        value: "support",
        label: "Hỗ trợ kỹ thuật", 
        description: "Hỗ trợ kỹ thuật và khắc phục sự cố"
      },
      {
        value: "partnership",
        label: "Hợp tác đối tác",
        description: "Cơ hội hợp tác và đại lý"
      },
      {
        value: "demo",
        label: "Yêu cầu Demo",
        description: "Đặt lịch demo sản phẩm"
      }
    ],

    fields: {
      name: {
        label: "Họ tên",
        placeholder: "Nhập họ tên của bạn",
        required: true,
        validation: {
          required: "Họ tên là bắt buộc",
          minLength: { value: 2, message: "Họ tên phải có ít nhất 2 ký tự" }
        }
      },
      email: {
        label: "Email",
        placeholder: "email@example.com", 
        required: true,
        validation: {
          required: "Email là bắt buộc",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Email không hợp lệ"
          }
        }
      },
      company: {
        label: "Công ty",
        placeholder: "Tên công ty của bạn",
        required: false
      },
      phone: {
        label: "Số điện thoại",
        placeholder: "+84 xxx xxx xxx",
        required: false,
        validation: {
          pattern: {
            value: /^[\+]?[0-9\s\-\(\)]+$/,
            message: "Số điện thoại không hợp lệ"
          }
        }
      },
      subject: {
        label: "Chủ đề",
        placeholder: "Tiêu đề tin nhắn",
        required: true,
        validation: {
          required: "Chủ đề là bắt buộc",
          minLength: { value: 5, message: "Chủ đề phải có ít nhất 5 ký tự" }
        }
      },
      message: {
        label: "Tin nhắn",
        placeholder: "Mô tả chi tiết yêu cầu của bạn...",
        required: true,
        validation: {
          required: "Tin nhắn là bắt buộc",
          minLength: { value: 10, message: "Tin nhắn phải có ít nhất 10 ký tự" }
        }
      }
    },

    buttons: {
      submit: "Gửi tin nhắn",
      submitting: "Đang gửi...",
      success: "Tin nhắn đã được gửi thành công!"
    },

    messages: {
      success: "Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.",
      error: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.",
      privacy: "Bằng cách gửi form này, bạn đồng ý với chính sách bảo mật của chúng tôi."
    }
  },

  faq: {
    title: "Câu hỏi thường gặp",
    items: [
      {
        question: "Thời gian triển khai dự án là bao lâu?",
        answer: "Thời gian triển khai phụ thuộc vào quy mô dự án, thường từ 2-12 tuần. Chúng tôi sẽ đưa ra timeline chi tiết sau khi phân tích yêu cầu."
      },
      {
        question: "TripC Solutions có hỗ trợ sau triển khai không?",
        answer: "Có, chúng tôi cung cấp hỗ trợ kỹ thuật 24/7, bảo trì hệ thống và cập nhật tính năng mới thường xuyên."
      },
      {
        question: "Chi phí sử dụng dịch vụ như thế nào?",
        answer: "Chúng tôi có nhiều gói dịch vụ phù hợp với mọi quy mô doanh nghiệp. Liên hệ để được tư vấn báo giá chi tiết."
      },
      {
        question: "Có thể tích hợp với hệ thống hiện tại không?",
        answer: "Có, nền tảng của chúng tôi được thiết kế để tích hợp dễ dàng với các hệ thống CRM, ERP, PMS hiện có của bạn."
      }
    ]
  },

  cta: {
    title: "Bắt đầu ngay hôm nay",
    description: "Đừng để cơ hội trôi qua. Liên hệ ngay để được tư vấn miễn phí!",
    buttons: {
      primary: "Đặt lịch tư vấn",
      secondary: "Gọi ngay: +84 28 1234 5678"
    }
  }
};

export default contactContent;
