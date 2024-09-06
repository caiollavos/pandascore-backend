import { IMatchDTO } from "src/dto/match.dto";
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { IPlayerDTO } from "src/dto/player.dto";
import { ITeam } from "src/models/teams/teams.model";
import { IUpcomingMatchDTO } from "src/dto/upcoming-match.dto";
@Injectable()
export class PandaScoreService {
  constructor(private readonly httpService: HttpService) {}

  async getMatches(): Promise<Array<IMatchDTO>> {
    const response = await firstValueFrom(
      this.httpService.get("https://api.pandascore.co/matches", {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }

  async getPlayers(): Promise<Array<IPlayerDTO>> {
    const response = await firstValueFrom(
      this.httpService.get("https://api.pandascore.co/players", {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }

  async getUpcomingMatches(): Promise<Array<IUpcomingMatchDTO>> {
    const response = await firstValueFrom(
      this.httpService.get("https://api.pandascore.co/matches/upcoming", {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }

  async getTeams(): Promise<Array<ITeam>> {
    const response = await firstValueFrom(
      this.httpService.get("https://api.pandascore.co/csgo/teams", {
        headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
      }),
    );
    return response.data;
  }
}
