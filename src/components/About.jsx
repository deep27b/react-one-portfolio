import React from 'react'

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p>
            </div>
            <p className="text-xl mt-20">
            I have successfully completed a two-year Master's program in Information Technology specialising in data analysis and enterprise resource planning systems. Additionally, I have also obtained a three-year Master's degree in Software Development, which encompassed various technical programming skills and computer architecture such as SQL, HTML, PHP, JavaScript, Angular, React, CSS and more other technical skills. 
            </p>
            <br />
            
            <p className="text-xl">
In order to gain practical experience, I have previously pursued internship opportunities and volunteered in various roles within the industry. These experiences have provided me with valuable insights and exposure to real-world software development scenarios and business decisions related to Information Systems. In my free time, I actively upskill my knowledge of Industry Trends, Technology changes and Business impacts of these developments.

            </p>
        </div>

    </div>
  )
};

export default About