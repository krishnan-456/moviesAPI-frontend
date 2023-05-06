import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'



const WriteReview = () => {
    const { imdbId } = useParams();
    console.log(imdbId);
    const navigate = useNavigate();
    const [singleMovies, setSingleMovies] = useState([]);
    const [review, setReview] = useState([]);
    // const [displayReview, setDisplayReview] = useState([]);
    const fetchSingleMovies = async () => {
        try {
            const response = await axios.get(`https://movies-apis.onrender.com/api/movies/${imdbId}`)
            setSingleMovies(response.data)
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        fetchSingleMovies();
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://movies-apis.onrender.com/api/reviews", { reviewBody: review, imdbId: imdbId });
            // setDisplayReview(response.data);
            alert("Review added sucessfully");
            e.target.reset();
        } catch (err) {
            console.log(err)
        }
    }
    console.log(singleMovies);
    // console.log(displayReview);
    return (
        <div className='w-full'>
            <div className=''>
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

                    {singleMovies?.backdrops?.slice(4, 5).map((backdrop, l) => (
                        <div key={l} className='w-full h-screen'>
                            <SwiperSlide>
                                <div className='w-full h-screen object-cover relative'>
                                    <div className='absolute top-5 left-5 z-50 cursor-pointer' onClick={() => navigate("/")}>
                                        <div className='text-white'>
                                            <MdOutlineArrowBackIosNew size={20} />
                                        </div>
                                    </div>
                                    <img src={backdrop} alt={singleMovies.title} className=' w-full h-screen object-cover' />
                                    <div className='bg-black opacity-50 absolute top-0 right-0 w-full h-screen'></div>
                                    <div className='w-full h-scree flex item-center justify-between absolute top-0'>
                                        <div className='xl:mt-[18%] xl:pl-[5%] md:mt-[24%] mt-20 px-4'>
                                            <p className='text-white lg:text-6xl text-5xl font-extrabold'>{singleMovies.title}</p>
                                            <p className='flex items-center gap-2 sm:text-base mt-5'>
                                                {
                                                    singleMovies.genres?.slice(0, 3)?.map((genre, i) => (
                                                        <div key={i} className='text-white border-2 border-white rounded-full sm:px-4 px-2 py-2 text-center'>
                                                            {genre}
                                                        </div>
                                                    ))
                                                }
                                            </p>
                                            <p className='text-white sm:text-base font-medium sm:w-[520px]  mt-5'>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                            <p className='text-white sm:text-base font-medium sm:w-[520px] mt-5'>
                                                Release Date  <span className='font-bold'>{singleMovies.releaseDate}</span>
                                            </p>
                                            <div className='flex items-center gap-2 mt-5 xl:hidden'>
                                                <div className='flex items-center justify-center gap-2 border-2 border-white bg-white rounded-full sm:px-4 px-2 py-2 hover:scale-110 transition-all duration-150 ease-linear sm:w-[170px]'>
                                                    <div className=''>
                                                        <AiFillPlayCircle size={24} />
                                                    </div>
                                                    <button type='submit' className='text-black font-semibold sm:block hidden'>Watch Trailer</button>
                                                </div>
                                                <div className='flex items-center justify-center gap-2 border-2 border-white bg-white rounded-full sm:px-4 px-2 py-2 hover:scale-110 transition-all duration-150 ease-linear sm:w-[170px]'>
                                                    <div className=''>
                                                        <IoIosAddCircle size={24} />
                                                    </div>
                                                    <button className='text-black font-semibold sm:block hidden'>Add Review</button>
                                                </div>
                                            </div>
                                            {/* <SwiperSlide>
                                                <img src={backdrop} alt={singleMovies.title}  className='w-[480px]'/>
                                            </SwiperSlide> */}
                                        </div>
                                        <div className='glassmorphism w-[40%] h-screen relative xl:flex flex-col items-center overflow-y-scroll hidden'>
                                            <div className='absolute top-[4%] z-50' id='video'>
                                                <ReactPlayer url={singleMovies.trailerLink} width={540} height={300} />
                                            </div>
                                            <div className='mt-[64%] z-50'>
                                                <form onSubmit={handleSubmit}>
                                                    <div className='flex items-center justify-center gap-2'>
                                                        <div>
                                                            <input type="text" placeholder='Enter reviews' className='px-4 py-2 border-white border-2 bg-transparent placeholder-white rounded-full w-[320px] outline-none text-white' onChange={(e) => (setReview(e.target.value))} required />
                                                        </div>
                                                        <button className='border-2 border-white bg-white rounded-full px-4 py-2 hover:scale-110 transition-all duration-150 ease-linear' type='submit'>
                                                            {/* <div><IoAddCircle size={24} /></div> */}
                                                            <div><p className='font-bold'>Add Review</p></div>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div>
                                                <div className="border-b-2 w-[460px] border-white mt-10"></div>
                                                <div className="mt-5 text-white text-2xl font-semibold text-center">Movie reviews</div>
                                                <p>{singleMovies.reviewIds?.map((review, s) => (
                                                    <p key={s} className='text-white font-semibold text-base mt-5 z-50 text-center w-[460px]'>{review.body}</p>
                                                ))}</p>
                                                <div className='mb-5'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
                <div className='mt-10 sm:px-10 px-5 mb-5 xl:hidden'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <ReactPlayer url={singleMovies.trailerLink} width={620} height={300} />
                        </div>
                        <div>
                            <div className="text-white text-3xl font-semibold mt-10">
                                <p>Add a review</p>
                            </div>
                            <form onSubmit={handleSubmit} className='mt-5'>
                                <div className='flex sm:flex-row flex-col items-center gap-2'>
                                    <div>
                                        <input type="text" placeholder='Enter reviews' className='px-4 py-2 border-white border-2 bg-transparent placeholder-white rounded-full sm:w-[320px] w-[280px] outline-none text-white' onChange={(e) => (setReview(e.target.value))} required />
                                    </div>
                                    <button className='border-2 border-white bg-white rounded-full sm:px-4 px-2 py-2 hover:scale-110 transition-all duration-150 ease-linear sm:w-[150px] w-[280px]' type='submit'>
                                        <div><p className='font-bold'>Add Review</p></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div>
                            <div className="text-white text-3xl font-semibold">Movie reviews</div>
                            <p>{singleMovies.reviewIds?.map((review, s) => (
                                <p key={s} className='text-white font-semibold text-base mt-5 z-50 sm:w-[560px]'>{review.body}</p>
                            ))}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteReview