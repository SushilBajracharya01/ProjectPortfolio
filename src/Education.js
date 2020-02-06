import React from 'react';
import { TitleHead } from './components/macroComponents/TitleHead';
import { EducationCard } from './components/macroComponents/EducationCard';


export const Education = () => (
    <div className="px-3">
        <TitleHead>EDUCATION</TitleHead>
        <div className="container border rounded">

            <div className="row ProjectContainer">
                <EducationCard 
                    href="https://www.mbmc.edu.np/" 
                    InstitutionName="Madan Bhandari Memorial College" 
                    InstitutionLocation="Anamnagar, Baneshwor"
                    courseName="Bachelors of Science in Computer Science and Information Technology (BSc.CSIT)"
                />
                <EducationCard 
                    href="https://seabird.edu.np/" 
                    InstitutionName="Seabird Internation College" 
                    InstitutionLocation="Madhyapur Thimi, Thimi"
                    courseName="Higher Secondary Level"
                />
                <EducationCard 
                    href="https://www.facebook.com/Mount-Sinai-English-Boarding-School-503760783006012/" 
                    InstitutionName="Mount Sinai English Boarding School" 
                    InstitutionLocation="Madhyapur Thimi, Thimi"
                    courseName="Secondary Level"
                />
            </div>

        </div>
    </div>
)