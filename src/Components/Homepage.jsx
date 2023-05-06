import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
// import { TbPencil } from 'react-icons/tb'
import Navbar from './Navbar';
import MoviesCards from './MoviesCards';
import { useNavigate } from 'react-router-dom';

const Homepage = (props) => {
    const movies = props.movies;
    const navigate = useNavigate();
    return (
        <div className='w-full'>
            <Navbar />
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper"
            >
                {movies.map((data, k) => (
                    <div key={k}>
                        {/* {console.log(data)} */}
                        {
                            data.backdrops.slice(8, 9)?.map((backdrop, i) => (
                                <div key={i} className="w-full h-screen">
                                    <SwiperSlide>
                                        <div className='relative w-full xl:h-[720px] h-screen'>
                                            <img src={backdrop} alt={data.title} className='w-full xl:h-[720px] h-screen object-cover' />
                                            <div className='absolute top-0 left-0 bg-black w-full xl:h-[720px] h-screen opacity-40'></div>
                                            <div className='absolute top-[60%] left-[5%]'>
                                                <p className='xl:text-5xl sm:text-4xl text-3xl text-white font-extrabold'>
                                                    {data.title}
                                                </p>
                                                <div className='flex items-center lg:gap-4 gap-2 mt-5 font-semibold'>
                                                    {
                                                        data.genres.slice(1, 3)?.map((genre, j) => (
                                                            <p key={j} className='text-white border-2 border-white rounded-full sm:px-4 px-2 py-2'>{genre}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className='mt-5 flex lg:gap-4 gap-2 font-semibold'>
                                                    <a href={data.trailerLink} target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 border-2 border-white bg-white rounded-full sm:px-4 px-2 py-2 hover:scale-110 transition-all duration-150 ease-linear sm:w-[170px]'>
                                                        <div className=''>
                                                            <AiFillPlayCircle size={24} />
                                                        </div>
                                                        <button type='submit' className='text-black font-semibold sm:block hidden'>Watch Trailer</button>
                                                    </a>
                                                    <button onClick={() => navigate(`/api/movies/${data.imdbId}`)} className='flex items-center justify-center gap-2 border-2 border-white bg-white rounded-full sm:px-4 px-2 py-2 hover:scale-110 transition-all duration-150 ease-linear sm:w-[170px]'>
                                                        <div className=''>
                                                            <IoIosAddCircle size={24} />
                                                        </div>
                                                        <button className='text-black font-semibold sm:block hidden'>Add Review</button>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </Swiper>
            <MoviesCards movies={movies} />
        </div>
    )
}

export default Homepage