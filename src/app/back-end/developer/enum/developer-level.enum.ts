export enum DeveloperLevelEnum {
    JUNIOR = 'junior',
    MIDDLE = 'middle',
    SENIOR = 'senior'
}

export const getDeveloperLevelEnumFromString = (value: string): DeveloperLevelEnum => {
    switch (value) {
        case DeveloperLevelEnum.JUNIOR:
            return DeveloperLevelEnum.JUNIOR
        case DeveloperLevelEnum.MIDDLE:
            return DeveloperLevelEnum.MIDDLE
        case DeveloperLevelEnum.SENIOR:
            return DeveloperLevelEnum.SENIOR
        default:
            throw new Error(`Developer level not found: ${value}`)
    }
}
