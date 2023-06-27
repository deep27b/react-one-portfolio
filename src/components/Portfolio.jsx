import React from 'react';

import reactWeather from '../assets/portfolio/reactWeather.jpg';
import portfolio from '../assets/portfolio/portfolio.jpg';
import dental from '../assets/portfolio/dental.jpg';
import data from '../assets/portfolio/data.jpg';





function Portfolio() {

        const portfolios = [
            {
                id:1,
                src: reactWeather,
                title: "React",
                project:"Weather",
            },
            {
                id:2,
                src: portfolio ,
                title: "React",
                project:"Porfolio",
            },
            {
                id:3,
                src: dental ,
                title: "Angular",
                project:"Dental",
            },
            {
                id:4,
                src: data ,
                title: "R studio",
                project:"Analytics",
            },
        ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">
                    Check out some of my work right here
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0" >

            {
                portfolios.map(({id, src, title, project})=>(
                <div  key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> {title}</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{project}</button>
                </div>
            </div>
                ))
            }
            </div>

        </div>
    </div>
  );
};

export default Portfolio

