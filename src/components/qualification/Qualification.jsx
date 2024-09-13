import React, { useState } from 'react';
import './qualification.css';
import { FaHatCowboy } from 'react-icons/fa6';
import { BsBag } from 'react-icons/bs';

const Qualification = () => {
    const [activeTab, setActiveTab] = useState('education');

    const qualificationData = [
        {
            mainTitle: [
                {
                    titleIcon: <BsBag />,
                    title: 'Education',
                },
            ],
            educationDetail: [
                {
                    educationName: 'THE CITIZENS FOUNDATION SCHOOL',
                    educationLocation: 'Karachi - School',
                    educationDuration: '2011 - 2021',
                    leftSide: true,
                },
                {
                    educationName: 'GOVT DEGREE COLLEGE, MALIR CANTT',
                    educationLocation: 'Karachi - College',
                    educationDuration: '2021 - 2023',
                    leftSide: false,
                },
                {
                    educationName: 'DHA Suffa University',
                    educationLocation: 'Karachi - University',
                    educationDuration: '2023 - Present',
                    leftSide: true,
                },
            ],
        },
        {
            mainTitle: [
                {
                    titleIcon: <FaHatCowboy />,
                    title: 'Experience',
                },
            ],
            experienceDetail: [
                {
                    experienceTitle: 'Web Designer',
                    experienceCompany: 'Freelancer',
                    experienceDuration: '2019 - 2020',
                    leftSide: true,
                },
                {
                    experienceTitle: 'Front-End Developer',
                    experienceCompany: 'Freelancer',
                    experienceDuration: '2020 - 2021',
                    leftSide: false,
                },
                {
                    experienceTitle: 'UI/UX Designer',
                    experienceCompany: 'Freelancer',
                    experienceDuration: '2021 - 2022',
                    leftSide: true,
                },
            ],
        },
    ];

    return (
        <div className='qualification-container'>
            <div className='qualification-header'>
                <h1>Qualification</h1>
                <span>My personal journey</span>
            </div>

            <div className='qualification-tabs'>
                <button
                    className={activeTab === 'education' ? 'active' : ''}
                    onClick={() => setActiveTab('education')}
                >
                    <BsBag /> Education
                </button>
                <button
                    className={activeTab === 'experience' ? 'active' : ''}
                    onClick={() => setActiveTab('experience')}
                >
                    <FaHatCowboy /> Experience
                </button>
            </div>

            <div className='qualification-content'>
                {activeTab === 'education' && (
                    <div className='education-section'>
                        {qualificationData[0].educationDetail.map((edu, index) => (
                            <div
                                key={index}
                                className={edu.leftSide ? 'left-aligned' : 'right-aligned'}
                            >
                                <h3>{edu.educationName}</h3>
                                <p>{edu.educationLocation}</p>
                                <span>{edu.educationDuration}</span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div className='experience-section'>
                        {qualificationData[1].experienceDetail.map((exp, index) => (
                            <div
                                key={index}
                                className={exp.leftSide ? 'left-aligned' : 'right-aligned'}
                            >
                                <h3>{exp.experienceTitle}</h3>
                                <p>{exp.experienceCompany}</p>
                                <span>{exp.experienceDuration}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Qualification;
