import React, { useState } from 'react';
import './skills.css'; // Add your custom CSS
import { GoVerified } from 'react-icons/go';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3 } from 'react-icons/fa6';
import { DiJavascript } from 'react-icons/di';

const Skills = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTech, setSelectedTech] = useState(null);

    const skillsData = [
        {
            mainTitle: "Frontend Developer",
            skillSetLeft: [
                { language: "HTML", experience: "Basic", image: <AiFillHtml5 /> },
                { language: "CSS", experience: "Advanced", image: <FaCss3 /> },
                { language: "JavaScript", experience: "Basic", image: <DiJavascript /> },
            ],
            skillSetRight: [
                { language: "Bootstrap", experience: "Basic" },
                { language: "React", experience: "Advanced" },
                { language: "Redux", experience: "Basic" },
            ]
        },
        {
            mainTitle: "Backend Developer",
            skillSetLeft: [
                { language: "Node.js", experience: "Basic" },
                { language: "Express", experience: "Advanced" },
                { language: "MongoDB", experience: "Basic" },
            ],
            skillSetRight: [
                { language: "Firebase", experience: "Basic" },
                { language: "Python", experience: "Advanced" },
                { language: "Django", experience: "Basic" },
            ]
        }
    ];

    const showModal = (tech) => {
        setSelectedTech(tech);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedTech(null);
    };

    return (
        <div className='about-section' id='skills'>
            <div className='about-section-top'>
                <h1>Skills</h1>
                <span>My technical level</span>
            </div>

            <div className='skills-section-bottom'>
                {skillsData.map((data, index) => (
                    <div className='skills-section-bottom-main' key={index}>
                        <h1 className='skills-section-bottom-main-top'>{data.mainTitle}</h1>
                        <div className='skills-section-bottom-main-bottom'>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
                                {data.skillSetLeft.map((leftData, index) => (
                                    <div
                                        key={index}
                                        className='skills-section-bottom-main-bottom-leftColumn'
                                        onClick={() => showModal(leftData)} // Trigger modal on click
                                        style={{ cursor: 'pointer' }} // Add pointer cursor
                                    >
                                        <div className='inner-data'>
                                            <h3><GoVerified /></h3>
                                            <div>
                                                <h2>{leftData.language}</h2>
                                                <span>{leftData.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='skills-section-bottom-main-bottom-rightColumn'>
                                {data.skillSetRight.map((rightData, index) => (
                                    <div
                                        key={index}
                                        className='skills-section-bottom-main-bottom-rightColumn'
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className='inner-data'>
                                            <h3><GoVerified /></h3>
                                            <div>
                                                <h2>{rightData.language}</h2>
                                                <span>{rightData.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Modal */}
            {isModalVisible && (
                <div className='modal-overlay' onClick={closeModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <span className='close-btn' onClick={closeModal}>&times;</span>
                        {selectedTech && (
                            <>
                                <h2>{selectedTech.language}</h2>
                                <h1 alt={selectedTech.language} className="tech-image">{selectedTech.image}  </h1>
                                <p>Experience Level: {selectedTech.experience}</p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
