import React from 'react'
import MoviesDetails from './MoviesDetails';

const MoviesCards = (props) => {
    const movies = props.movies;
    return (
        <div className='w-[100%] h-[100%] mt-10'>
            <div>
                <p className='text-white font-semibold text-3xl mb-10 pl-10'>Top Movies Collections</p>
            </div>
            <div className='flex items-center justify-center'>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                    {movies.map((data, k) => (
                        <div key={k}>
                            {/* {console.log(data)} */}
                            <MoviesDetails data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesCards