import React from 'react'
import './qualification.css'
import { FaHatCowboy } from 'react-icons/fa6'
import { BsBag } from 'react-icons/bs'

const Qualification = () => {

    const qualificationData = [
        //EDUCATION
        {
            mainTitle: [{
                titleIcon: <BsBag />,
                title: "Education"
            }],
            educationDetail: [
                {
                    educationName: "THE MONTESOORI SCHOOL",
                    educationLocation: "Karachi - School",
                    educationDuration: "2004 - 2017",
                    leftSide: true
                },
                {
                    educationName: "GOV DEGREE COLLEGE, MAJEED SRE",
                    educationLocation: "Karachi - Collge",
                    educationDuration: "2017 - 2019",
                    leftSide: false
                },
                {
                    educationName: "SMIU",
                    educationLocation: "Karachi - School",
                    educationDuration: "2020 - 2024",
                    leftSide: true
                },
            ]
        },

        //EXPERIENCE
        {
            mainTitle: [
                {
                    titleIcon: <FaHatCowboy />,
                    title: "Experience"
                }
            ],
            experienceDetail: [
                {
                    experienceTitle: "Web Designer",
                    experienceCompany: "Freelancer",
                    experienceDuration: "2019 - 2020",
                    leftSide: true
                },
                {
                    experienceTitle: "Front-End Developer",
                    experienceCompany: "Freelancer",
                    experienceDuration: "2020 - 2021",
                    leftSide: false
                },
                {
                    experienceTitle: "UI/UX Designer",
                    experienceCompany: "Freelancer",
                    experienceDuration: "2021 - 2022",
                    leftSide: true
                },
            ]
        }
    ]






    return (
        <div className='about-section'>

            <div className='about-section-top'>
                <h1>Qualification</h1>
                <span>My personal journey</span>
            </div>

            <div className='qualification-section-bottom'>

                {qualificationData.map((items, index) => {
                    return (
                        <div className='qualification-section-bottomm  '>

                            {items.mainTitle.map((titles, index) => {
                                return (
                                    <div className='qualification-section-bottom-buttons'>
                                        <div className='qualification-section-bottom-top-individual'>
                                            <h3>{titles.titleIcon}</h3>
                                            <h1>{titles.title}</h1>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Qualification
