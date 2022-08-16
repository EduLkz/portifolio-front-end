import { SKILL_LEVEL } from '../../../../Services/skillsLeves'
import './mainSkills.css'

const MainSkills = () => {

    const skills = [
        { skill: 'Java', level: 2 },
        { skill: 'HTML/CSS', level: 3 },
        { skill: 'Python', level: 0 },
        { skill: 'Typescript', level: 1 },
        { skill: 'ReactJS', level: 2 },
        { skill: 'React Native', level: 2 },
        { skill: 'Unity', level: 4 },
    ]

    return (
        <div className='main-skills'>
            <h3> Habilidades Principais</h3>

            <table className='skills-table'>
                <tr>
                    <th className='skills-header'> Habilidade </th>
                    <th className='skills-header'> Nivel </th>
                </tr>
                {
                    skills.map((s) => {
                        return (
                            <tr key={`skill-${s.skill}`}>
                                <td>{s.skill}</td>
                                <td>{SKILL_LEVEL(s.level)}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default MainSkills;