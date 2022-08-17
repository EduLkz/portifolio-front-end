import { SKILL_LEVEL } from "../../../../Services/skillsLeves";
import './softwares.css'

const Softwares = () => {

    const softwareKnow = [
        { name: 'Microsoft Office', level: 2 },
        { name: 'Microsoft Windows', level: 3 },
        { name: 'Unity', level: 4 },
        { name: 'Blender', level: 2 },
        { name: 'Adobe Photoshop', level: 1 },
        { name: 'VS Code', level: 1 },
    ]

    return(
        <div className="softwares">
            <h3>
                Softwares
            </h3>
            <table className='software-table'>
                <tbody>
                    {softwareKnow.map((sk) => {
                        return (
                            <tr key={`software${sk.name}`}>
                                <td className='software-data'>{sk.name}</td>
                                <td className='software-data'>{SKILL_LEVEL(sk.level)}</td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default Softwares;