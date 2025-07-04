'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Zap, Banknote, TrendingUp, ShieldCheck, GitBranch, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
  Zap: <Zap className="w-8 h-8 text-blue-400" />,
  Banknote: <Banknote className="w-8 h-8 text-green-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-teal-400" />,
  GitBranch: <GitBranch className="w-8 h-8 text-purple-400" />,
  Sparkles: <Sparkles className="w-8 h-8 text-pink-400" />,
};

export default function HorizontalScrollSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { t } = useLanguage();

	// Get content from translations
	const whyChooseData = (t('whyChoose') as unknown as any) || {};
	const contentItems = whyChooseData.items || [];

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
						{whyChooseData.title}
					</h2>
					<p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
						{whyChooseData.subtitle}
					</p>
				</div>

				<div className="grid gap-12 p-6 sm:p-0 md:gap-16">
					{contentItems.map((item: any, index: number) => (
						<div
							key={index}
							className={`feature-card flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
								index % 2 !== 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							{/* Content */}
							<div className="md:w-1/2 text-center md:text-left text-xs">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/70 rounded-2xl mb-6 border border-slate-700">
									{iconMap[item.icon as keyof typeof iconMap] || iconMap.Zap}
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