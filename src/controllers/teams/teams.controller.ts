import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';
import { ITeam } from 'src/models/teams/teams.model';

@Controller('teams')
export class TeamsController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get()
  async getTeams(): Promise<Array<ITeam>> {
    return await this.pandaScoreService.getTeams();
  }
}