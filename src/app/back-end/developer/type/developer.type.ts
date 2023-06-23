import { DeveloperLevelEnum } from '../enum/developer-level.enum';
import { DeveloperRoleEnum } from '../enum/developer-role.enum';

export type Developer = {
    name: string;
    level: DeveloperLevelEnum;
    role : DeveloperRoleEnum;
    skills: string[];
}
