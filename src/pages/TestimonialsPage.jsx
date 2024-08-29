/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const testimonialsData = [
    { id: 1, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 2, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 3, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 4, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 5, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 6, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 7, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 8, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 9, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 10, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
    { id: 11, name: '#', content: 'Lorem Ipsum dolor sit amet.', image: '../assets/img/cardImg.jpg' },
]

const TestimonialCards = () => {
    return (
        testimonialsData.map( data => (
            <div key={ testimonialsData.id } className="min-w-[20%] mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="/">
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </Link>
                <div className="p-5">
                    <Link to="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        ))
    )
}

export default function TestimonialsPage() {
    return (
        <>
            <Navbar />
            <div className='mt-20 w-[100%] h-[200%] overflow-x-hidden'>
                <div className='flex justify-center mt-4 mb-8'>
                    <h1 className='p-2 text-2xl font-extrabold '>TESTIMONIALS</h1>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <div className='w-[96%] bg-slate-800 flex justify-center'>
                        <div className='w-[92%] justify-evenly p-6 md: flex overflow-x-scroll rounded-md'>
                            <TestimonialCards />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}