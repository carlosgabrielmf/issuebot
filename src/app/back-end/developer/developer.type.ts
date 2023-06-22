import { DeveloperLevelEnum } from './enum/developer-level.enum';
import { DeveloperRolEnum } from './enum/developer-rol.enum';

export type Developer = {
    name: string;
    level: DeveloperLevelEnum;
    rol : DeveloperRolEnum;
    skills: string[];
}
