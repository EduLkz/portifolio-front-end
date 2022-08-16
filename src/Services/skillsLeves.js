export const SKILL_LEVEL = (level) => {
    switch (level) {
        default:
        case 0:
            return 'Iniciante';
        case 1:
            return 'Iniciante/Intermediario';
        case 2:
            return 'Intermediario'
        case 3:
            return 'Intermediario/Intermediario';
        case 4:
            return 'Avançado'
    }
}