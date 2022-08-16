import React from 'react';
import './studyList.css'
import Study from './study'

const StudyList = ( {studies} ) => {
    const studyList = studies;

    const RenderStudys = (study) =>{
        return <Study {...study} key={study.title}/>
    }

    return (
        <div className="studies">
            <div className='study-list'>
                {
                    studyList &&
                    (studyList.map((study) => {
                        return RenderStudys(study);
                    }))
                    
                }
            </div>
        </div>
    );
}


export default StudyList;