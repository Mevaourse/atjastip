import Navbar from '../components/Navbar'
import Logo from '../assets/img/at-jastip-logo.png'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="container flex justify-center items-center w-[100vw] h-[88vh]">
                <div className='text-center px-5 pb-2 border-2 my-5 w-[80%] border-black h-fit rounded-lg'>
                    <div className='flex justify-center'>
                        <img 
                        alt='logo'
                        src={ Logo }
                        className='w-[12%] h-[20%] object-cover rounded-lg'
                        />
                    </div>
                    <div className="flex justify-center mb-6 h-fit">
                        <h1 className='text-2xl font-bold px-5 py-2 w-fit border-2 mb-5 border-black rounded-lg'>About ATJastip</h1>
                    </div>   
                    <div className='flex justify-center'>
                        <p className='fw-thin text-md w-[80%] pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sapien non nisl faucibus finibus. Donec libero lorem, consectetur eget eleifend vitae, sollicitudin a turpis. Pellentesque malesuada, purus eu molestie tempor, tellus neque sodales nulla, at vulputate neque neque tristique ligula. Donec at convallis est. Morbi sed eleifend lorem, id elementum quam. Aenean ornare, mi in porta condimentum, risus orci porta metus, aliquam pellentesque augue nisi ac ex. Praesent sit amet dui malesuada, maximus urna vitae, interdum lectus. Nulla facilisi. Nullam sit amet eros consectetur purus tincidunt sodales varius sed nibh. In urna tortor, sodales a consectetur vel, cursus ac sapien. Aliquam erat volutpat. Pellentesque ipsum leo, vulputate et finibus eget, pulvinar vel odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sit amet diam arcu. Sed facilisis massa at enim tempor, ac maximus urna placerat.</p>
                    </div>
                </div>
            </div>
        </>
    );
}