"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import FoodSelect from './FoodSelect';
import './Catalog.css';

type SectionRefs = {
	[key: string]: React.RefObject<HTMLDivElement>;
};

export default function Catalog() {
	const [currentSection, setCurrentSection] = useState<string | null>('section1');

	const sectionRefs: SectionRefs = {
		section1: useRef<HTMLDivElement>(null),
		section2: useRef<HTMLDivElement>(null),
		section3: useRef<HTMLDivElement>(null),
	};

	const handleScroll = () => {
		let current = '';

		for (const sectionName in sectionRefs) {
			sectionRefs[sectionName].current
			if (sectionRefs[sectionName].current) {
				const section = sectionRefs[sectionName].current!;
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
					current = sectionName;
					break;
				}
			}
		}

		setCurrentSection(current);
	};

	useEffect(() => {
		// 添加被動事件監聽器
		window.addEventListener('scroll', handleScroll, { passive: true });

		// 清除時移除事件監聽器
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className="sidebar-container h-75" style={{marginTop:"65px"}}>
				<div className="sidebar bg-primary-subtle">
					<ul>
						<li>
							<Link href="#section1" className={currentSection === 'section1' ? 'active' : ''}>
								Food 1
							</Link>
						</li>
						<li>
							<Link href="#section2" passHref className={currentSection === 'section2' ? 'active' : ''}>
								Food 2
							</Link>
						</li>
						<li>
							<Link href="#section3" passHref className={currentSection === 'section3' ? 'active' : ''}>
								Food 3
							</Link>
						</li>
					</ul>
				</div>
				<div className="content w-75 ">
					<div ref={sectionRefs.section1} id="section1" className="section h-100">
						Section 1 Content...
						<FoodSelect />
					</div>
					<div ref={sectionRefs.section2} id="section2" className="section h-100 mt-1">
						Section 2 Content...
						<FoodSelect />
					</div>
					<div ref={sectionRefs.section3} id="section3" className="section h-100 mt-1">
						Section 3 Content...
						<FoodSelect />
					</div>
				</div>
			</div>
		</>
	);
}

