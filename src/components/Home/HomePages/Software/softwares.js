const Softwares = () => {

    const softwareKnow = [
        'Microsoft Office',
        'Microsoft Windows',
        'Unity',
        'Blender',
        'Adobe Photoshop',
        'VS Code'
    ]

    return(
        <div className="softwares">
            <h3>
                Softwares
            </h3>
            <ul>
                {softwareKnow.map((sk) => {
                    return <li>{sk}</li>
                })}
            </ul>
        </div>
    )
}

export default Softwares;