export const SKILL_LEVEL = (level) => {
    switch (level) {
        default:
        case 0:
            return 'Iniciante';
        case 1:
            return 'Intermediario';
        case 2:
            return 'Avançado'
    }
}