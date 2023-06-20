import { DeveloperLevelEnum } from '../developer/enum/developer-level.enum';
import { DeveloperRolEnum } from '../developer/enum/developer-rol.enum';

export class Developer {
    constructor(private readonly name: string, private readonly level: DeveloperLevelEnum, private readonly rol : DeveloperRolEnum, private readonly skills: string[]) {}
}
