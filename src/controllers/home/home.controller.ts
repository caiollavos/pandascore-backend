import { Controller, Get } from "@nestjs/common";
import { PandaScoreService } from "@services/panda-score/pandascore.service";
import { IMatchDTO } from "src/dto/match.dto";

@Controller("home")
export class HomeController {
  constructor(private readonly pandaScoreService: PandaScoreService) {}

  @Get()
  async getMatches(): Promise<Array<IMatchDTO>> {
    return await this.pandaScoreService.getMatches();
  }
}
