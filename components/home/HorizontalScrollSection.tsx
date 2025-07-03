'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Zap, Banknote, TrendingUp, ShieldCheck, GitBranch, Sparkles } from 'lucide-react';

const contentItems = [
	{
		icon: <Zap className="w-8 h-8 text-blue-400" />,
		title: 'Chuyển Đổi Số Nhanh Chóng',
		description:
			'Triển khai nền tảng dễ dàng mà không cần đầu tư đội ngũ kỹ thuật. TripC giúp doanh nghiệp bắt đầu ngay với hạ tầng sẵn có và hỗ trợ vận hành trọn gói.',
		image:
			'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		icon: <Banknote className="w-8 h-8 text-green-400" />,
		title: 'Tiết Kiệm Chi Phí Vượt Trội',
		description:
			'Tối ưu hóa chi phí vận hành và quản lý với các giải pháp tự động hóa thông minh. Nền tảng của chúng tôi giúp giảm thiểu các công việc thủ công, tiết kiệm thời gian và nguồn lực.',
		image:
			'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
		title: 'Tăng Trưởng Doanh Thu Bền Vững',
		description:
			'Cải thiện đáng kể hiệu quả bán hàng bằng cách cá nhân hóa trải nghiệm khách hàng. Thu thập và phân tích dữ liệu để đưa ra các chiến lược kinh doanh hiệu quả, tăng tỷ lệ chuyển đổi.',
		image:
			'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
		title: 'Minh Bạch & Chuyên Nghiệp',
		description:
			'Xây dựng hình ảnh thương hiệu chuyên nghiệp và đáng tin cậy. Hệ thống báo cáo và quản lý minh bạch giúp theo dõi hiệu suất và đưa ra quyết định dựa trên dữ liệu thực tế.',
		image:
			'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
	{
		icon: <GitBranch className="w-8 h-8 text-purple-400" />,
		title: 'Dễ Dàng Mở Rộng Quy Mô',
		description:
			'Nền tảng linh hoạt cho phép dễ dàng mở rộng quy mô kinh doanh, tích hợp với các đối tác và dịch vụ mới một cách liền mạch, không làm gián đoạn hoạt động hiện tại.',
		image:
			'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
	},
];

export default function HorizontalScrollSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		const elements = sectionRef.current?.querySelectorAll('.feature-card');
		elements?.forEach((el) => observer.observe(el));

		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section ref={sectionRef} className="bg-slate-900 py-20 sm:py-28">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center px-5 sm:px-5 mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
						Tại Sao Chọn{' '}
						<span className="text-blue-400">TripC Solutions?</span>
					</h2>
					<p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
						Chúng tôi không chỉ cung cấp công nghệ, chúng tôi mang đến giải pháp
						toàn diện giúp doanh nghiệp của bạn cất cánh.
					</p>
				</div>

				<div className="grid gap-12 p-6 sm:p-0 md:gap-16">
					{contentItems.map((item, index) => (
						<div
							key={index}
							className={`feature-card flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
								index % 2 !== 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							{/* Content */}
							<div className="md:w-1/2 text-center md:text-left text-xs">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/70 rounded-2xl mb-6 border border-slate-700">
									{item.icon}
								</div>
								<h3 className="text-3xl font-bold text-white mb-4">
									{item.title}
								</h3>
								<p className="text-slate-300 text-lg leading-relaxed">
									{item.description}
								</p>
							</div>

							{/* Image */}
							<div className="md:w-1/2 w-full">
								<div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border-2 border-slate-800 hover:border-blue-500/50 transition-all duration-300">
									<Image
										src={item.image}
										alt={item.title}
										layout="fill"
										objectFit="cover"
										className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<style jsx>{`
				.feature-card {
					opacity: 0;
					transform: translateY(50px);
					transition: opacity 0.6s ease-out, transform 0.6s ease-out;
				}
				.feature-card.is-visible {
					opacity: 1;
					transform: translateY(0);
				}
				.feature-card .relative:hover img {
					transform: scale(1.05);
				}
			`}</style>
		</section>
	);
}