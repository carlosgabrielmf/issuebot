import { Developer } from '../developer/developer';
import { DeveloperLevelEnum } from '../developer/enum/developer-level.enum';
import { DeveloperRolEnum } from '..//developer/enum/developer-rol.enum';

export class DeveloperFactory {
    static medusaTeam(): Developer[] {
        return [
            new Developer(
                'Carlos',
                DeveloperLevelEnum.JUNIOR,
                DeveloperRolEnum.FRONTEND,
                [
                    'javascript',
                    'react',
                    'node',
                    'angular',
                    'express'
                ]
            ),
            new Developer(
                'Ana',
                DeveloperLevelEnum.JUNIOR,
                DeveloperRolEnum.FRONTEND,
                [
                    'javascript',
                    'angular',
                    'react',
                ]
            ),
            new Developer(
                'Sandra',
                DeveloperLevelEnum.JUNIOR,
                DeveloperRolEnum.BACKEND,
                [
                    'javascript',
                    'java',
                    'spring',
                    'selenium',
                    'webdriver',
                    'sql',
                    'maven'
                ]
            ),
            new Developer(
                'Salva',
                DeveloperLevelEnum.MIDDLE,
                DeveloperRolEnum.BACKEND,
                [
                    'javascript',
                    'typescript',
                    'nestjs',
                    'vue',
                ]
            )
        ];
    }
}
