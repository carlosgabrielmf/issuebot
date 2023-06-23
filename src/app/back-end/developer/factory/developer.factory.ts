import { Developer } from '../type/developer.type';
import { DeveloperLevelEnum } from '../enum/developer-level.enum';
import { DeveloperRoleEnum } from '../enum/developer-role.enum';

export class DeveloperFactory {
    static medusaTeam(): Developer[] {
        return [
            {
                name: 'Carlos',
                level: DeveloperLevelEnum.JUNIOR,
                role: DeveloperRoleEnum.FRONTEND,
                skills: [
                    'javascript',
                    'react',
                    'node',
                    'angular',
                    'express'
                ]
            },
            {
                name: 'Ana',
                level: DeveloperLevelEnum.JUNIOR,
                role: DeveloperRoleEnum.FRONTEND,
                skills: [
                    'javascript',
                    'angular',
                    'react',
                ]
            },
            {
                name: 'Sandra',
                level: DeveloperLevelEnum.JUNIOR,
                role: DeveloperRoleEnum.BACKEND,
                skills: [
                    'javascript',
                    'java',
                    'spring',
                    'selenium',
                    'webdriver',
                    'sql',
                    'maven'
                ]
            },
            {
                name: 'Salva',
                level: DeveloperLevelEnum.MIDDLE,
                role: DeveloperRoleEnum.BACKEND,
                skills: [
                    'javascript',
                    'typescript',
                    'nestjs',
                    'vue',
                ]
            }
        ];
    }
}
