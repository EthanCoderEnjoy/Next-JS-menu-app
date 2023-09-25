"use client"
import { useEffect } from 'react';
import "bootstrap/dist/js/bootstrap"
export default function Home() {
	// useEffect(() => {
	// 	import("bootstrap")
	// }, []);   //此方法也可以import BS.js

	return (
		<main>
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
				Launch demo modal
			</button>


			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							...
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary">Save changes</button>
						</div>
					</div>
				</div>
			</div>
			<h2>It's a beautiful day.</h2>
			<p className="d-inline-flex gap-1">
				<a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
					Link with href
				</a>
				<button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
					Button with data-bs-target
				</button>
			</p>
			<div className="collapse" id="collapseExample">
				<div className="card card-body">
					Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
				</div>
			</div>
			<h2>It's a beautiful day.</h2>
			<a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
				Link with href
			</a>
			<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
				Button with data-bs-target
			</button>

			<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<div>
						Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
					</div>
					<div className="dropdown mt-3">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Dropdown button
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</main>

	)
}
