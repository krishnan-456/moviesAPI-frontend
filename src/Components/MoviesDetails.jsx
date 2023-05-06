import React from 'react'
import { useNavigate } from 'react-router-dom';

const MoviesDetails = (props) => {
    const data = props.data;
    const navigate = useNavigate();
    return (
        <div className='w-[220px]'>
            <div>
                <button onClick={() => navigate(`/api/movies/${data.imdbId}`)}>
                    <img src={data.poster} alt={data.title} className='w-[220px] hover:scale-105 transition-all duration-150 ease-linear' />
                </button>
            </div>
            <div className='pt-2 pb-4'>
                <p className='text-white text-[16px] font-semibold leading-tight'>{data.title}</p>
                <p className='flex items-center gap-2 text-[13px]'>
                    {
                        data.genres.slice(0, 3)?.map((genre, i) => (
                            <div key={i} className='text-white'>
                                {genre}
                            </div>
                        ))
                    }
                </p>
            </div>
        </div>
    )
}

export default MoviesDetails