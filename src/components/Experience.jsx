import React from 'react';
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactImage from "../assets/tech/reactImage.jpg";
import angular from "../assets/tech/angular.png";


export const Experience = () => {

    const tech = [
        {
            id:1,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title:'CSS',
            style: 'shadow-orange-500'
        },
        {
            id:3,
            src: javascript,
            title:'JavaScript',
            style: 'shadow-orange-500'
        },
        {
            id:4,
            src: reactImage,
            title:'React',
            style: 'shadow-orange-500'
        },
        {
            id:5,
            src: angular,
            title:'Angular',
            style: 'shadow-orange-500'
        }
    ]
  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div >
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-6">
                    These are the Techniologies I worked with
                </p>
            </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        tech.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt=""   className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                        ))
                    }
                   
                </div>
        </div>
    </div>
  )
}