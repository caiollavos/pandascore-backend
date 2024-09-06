import { Controller, Get } from '@nestjs/common';
import { PandaScoreService } from '@services/panda-score/pandascore.service';
import { ApiTags, ApiResponse, ApiOperation, ApiHeader, refs } from '@nestjs/swagger';
import { IPlayerDTO } from 'src/dto/player.dto';
@ApiTags('Players')
@ApiHeader({
  name: 'Content-Type',
  description: 'application/json',
})
@Controller('players')
export class PlayersController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}
  
  @ApiOperation({description: "Get Players"})
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Success',
    schema: { anyOf: refs(IPlayerDTO) },
  })
  async getPlayers(): Promise<Array<IPlayerDTO>> {
    return await this.pandaScoreService.getPlayers();
  }
}