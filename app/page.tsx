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
			<div className='d-flex'>
				<nav>
					<div className="nav nav-tabs d-flex flex-column justify-content-center" id="nav-tab" role="tablist">
						{/* <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button> */}
						{
							fakeData.map(
								(data) => (
									<button key={data.id} className="nav-link" id={`nav-${data.id}-tab`} data-bs-toggle="tab" data-bs-target={`#nav-${data.id}`} type="button" role="tab" aria-controls="nav-profile" aria-selected="false">{data.name}</button>
								)
							)
						}
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					{/* <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">...</div> */}
					{
						fakeData.map(
							(data) => (
								<div key={data.id} className="tab-pane fade" id={`nav-${data.id}`} role="tabpanel" aria-labelledby={`nav-${data.id}-tab`} tabIndex="0">
									{data.description}
								</div>
							)
						)
					}
				</div>
			</div>
			<Catalog />
		</>
	)
}
