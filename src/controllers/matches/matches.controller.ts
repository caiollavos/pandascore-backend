import { Controller, Get } from "@nestjs/common";
import { PandaScoreService } from "@services/panda-score/pandascore.service";
import {
  ApiTags,
  ApiHeader,
  ApiOperation,
  ApiResponse,
  refs,
} from "@nestjs/swagger";
import { IMatchDTO } from "src/dto/match.dto";
import { IUpcomingMatchDTO } from "src/dto/upcoming-match.dto";
@ApiTags("Matches")
@ApiHeader({
  name: "Content-Type",
  description: "application/json",
})
@Controller("matches")
export class MatchesController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @ApiOperation({ description: "Get Matches" })
  @ApiResponse({
    schema: { anyOf: refs(IMatchDTO) },
  })
  @Get()
  async getMatches(): Promise<Array<IMatchDTO>> {
    return await this.pandaScoreService.getMatches();
  }

  @Get("upcoming")
  async getUpcomingMatches(): Promise<Array<IUpcomingMatchDTO>> {
    return await this.pandaScoreService.getUpcomingMatches();
  }
}
