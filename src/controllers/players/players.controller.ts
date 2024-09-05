import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';
import { IPlayer } from 'src/models/players/player.model';

@Controller('players')
export class PlayersController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get()
  async getPlayers(): Promise<Array<IPlayer>> {
    return await this.pandaScoreService.getPlayers();
  }
}