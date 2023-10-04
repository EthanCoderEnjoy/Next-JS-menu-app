import React from 'react'

import Link from 'next/link'
import FoodSelect from './FoodSelect'

export default function Catalog() {
    return (
        <>
            <div className="d-flex  vh-100">
                <div className=" bg-primary-subtle">
                    <ul>
                        <Link href="#section1" className='active'><li>Food 1</li></Link>
                        <Link href="#section2"><li>Food 2</li></Link>
                        <Link href="#section3"><li>Food 3</li></Link>
                    </ul>
                </div>
                <div className='w-50 h-100'>
                    <div id="section1" className="section">Section 1 Content...
                    <FoodSelect/>
                    </div>
                    <div id="section2" className="section">Section 2 Content...
                    <FoodSelect/>
                    </div>
                    <div id="section3" className="section">Section 3 Content...
                    <FoodSelect/>
                    </div>
                </div>

            </div>
           
        </>
    )
}
