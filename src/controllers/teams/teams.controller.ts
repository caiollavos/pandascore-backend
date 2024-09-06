import { Controller, Get } from "@nestjs/common";
import { PandaScoreService } from "@services/panda-score/pandascore.service";
import { ITeam } from "src/models/teams/teams.model";
import {
  ApiTags,
  ApiHeader,
  ApiOperation,
  ApiOkResponse,
  ApiResponse,
} from "@nestjs/swagger";

@ApiTags("Teams")
@ApiHeader({
  name: "Content-Type",
  description: "application/json",
})
@Controller("teams")
export class TeamsController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @ApiOperation({ description: "Get Matches" })
  @Get()
  @ApiOkResponse({
    status: 200,
    description: "Success",
  })
  @ApiResponse({
    status: 400,
    description: "Bad Request",
  })
  @ApiResponse({
    status: 404,
    description: "Not Found",
  })
  @ApiResponse({
    status: 500,
    description: "Internal Server Error",
  })
  async getTeams(): Promise<Array<ITeam>> {
    return await this.pandaScoreService.getTeams();
  }
}
