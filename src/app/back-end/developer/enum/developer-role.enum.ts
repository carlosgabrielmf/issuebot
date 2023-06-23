export enum DeveloperRoleEnum {
    BACKEND = 'back-end',
    FRONTEND = 'front-end',
    FULLSTACK = 'full-stack'
}

export const getDeveloperRoleEnumFromString = (value: string): DeveloperRoleEnum => {
    switch (value) {
        case DeveloperRoleEnum.BACKEND:
            return DeveloperRoleEnum.BACKEND
        case DeveloperRoleEnum.FRONTEND:
            return DeveloperRoleEnum.FRONTEND
        case DeveloperRoleEnum.FULLSTACK:
            return DeveloperRoleEnum.FULLSTACK
        default:
            throw new Error(`Developer role not found: ${value}`)
    }
}