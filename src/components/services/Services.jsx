import React from 'react'
// import './skills.css'
import './services.css'
import { SiWeightsandbiases } from 'react-icons/si'
import { FiLayout } from 'react-icons/fi'
import { IoCodeSlash } from 'react-icons/io5'
import { MdDesignServices } from 'react-icons/md'


const Services = () => {

    const servicesData = [
        {
            icon: <FiLayout />,
            title: "Web Designer",
            shortTitle: "View More"
        },
        {
            icon: <IoCodeSlash  />,
            title: "UI/UX Designer",
            shortTitle: "View More"
        },
        {
            icon: <MdDesignServices  />,
            title: "Branding Designer",
            shortTitle: "View More"
        },
    ]


    return (
        <div className='about-section' id='services'>


            <div className='about-section-top'>
                <h1>Services</h1>
                <span>What I Offer</span>
            </div>



            <div className='services-section-bottom'>

                {servicesData.map((items, index) => {
                    return (
                        <div className='services-section-bottom-individual'>
                            <h3>{items.icon}</h3>
                            <h1>{items.title}</h1>
                            <span>{items.shortTitle}</span>
                        </div>
                    )
                })}



            </div>


        </div>
    )
}

export default Services
