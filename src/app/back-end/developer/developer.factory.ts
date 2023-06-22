import { Developer } from './developer.type';
import { DeveloperLevelEnum } from '../developer/enum/developer-level.enum';
import { DeveloperRolEnum } from '..//developer/enum/developer-rol.enum';

export class DeveloperFactory {
    static medusaTeam(): Developer[] {
        return [
            {
                name: 'Carlos',
                level: DeveloperLevelEnum.JUNIOR,
                rol: DeveloperRolEnum.FRONTEND,
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
                rol: DeveloperRolEnum.FRONTEND,
                skills: [
                    'javascript',
                    'angular',
                    'react',
                ]
            },
            {
                name: 'Sandra',
                level: DeveloperLevelEnum.JUNIOR,
                rol: DeveloperRolEnum.BACKEND,
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
                rol: DeveloperRolEnum.BACKEND,
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
