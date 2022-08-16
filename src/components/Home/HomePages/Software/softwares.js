import { SKILL_LEVEL } from "../../../../Services/skillsLeves";

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
            <table>
                {softwareKnow.map((sk) => {
                    return (
                        <tr id={`software${sk.name}`}>
                            <td>{sk.name}</td>
                            <td>{SKILL_LEVEL(sk.level)}</td>
                        </tr>
                )})}
            </table>
        </div>
    )
}

export default Softwares;