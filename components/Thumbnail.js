import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ res }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${res.backdrop_path || res.poster_path}` || `${BASE_URL}${res.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{res.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {res.original_title || res.title || res.name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {res.media_type && `${res.media_type}`} {res.release_date || res.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {res.vote_count}
        </p>
      </div>

      {/* {res.original_title} */}
    </div>
  );
});

export default Thumbnail;
