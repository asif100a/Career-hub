import bannerImg from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className='flex gap-5 mt-10'>
            <div className='p-12 max-w-[580px]'>
                <h1 className='text-7xl font-bold text-[#181818]'>One Step Closer To Your Dream Job</h1>
                <p className='text-lg mt-6 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn w-fit p-3 text-base font-bold tracking-wide rounded-md bg-gradient-to-r from-[#7E90FE] to-[#9197c8] dark:text-gray-50">Get Started</button>
            </div>
            <div>
                <img src={bannerImg} alt="banner img" />
            </div>
        </div>
    );
};

export default Banner;