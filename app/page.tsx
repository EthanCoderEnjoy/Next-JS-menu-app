// import "bootstrap/dist/js/bootstrap"
import { useEffect } from 'react';
// components
import Navbar from '@/components/Navbar'
import Catalog from '@/components/Catalog';
export default function Home() {
	// useEffect(() => {
	// 	import("bootstrap/dist/js/bootstrap")
	// }, []);   //此方法也可以import BS.js
	let fakeData = [
		{
			id: 'first',
			name: 'Apple',
			description: 'A round fruit with a smooth skin, often red, yellow, or green, with firm white flesh and pips in the middle.'
		},
		{
			id: 'second',
			name: 'Banana',
			description: 'A long, curved fruit with a yellow skin and soft, sweet, white flesh inside.'
		},
		{
			id: 'third',
			name: 'Cherry',
			description: 'A small, round, soft fruit with a stone in the middle, usually red or black.'
		},
		{
			id: 'fourth',
			name: 'Date',
			description: 'A sweet brownish fruit from an Old World palm.'
		}
	];
	return (
		<>
			<Navbar />
			
			<Catalog />
		</>
	)
}
