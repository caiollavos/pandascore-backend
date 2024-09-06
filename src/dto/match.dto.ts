
import { ApiProperty } from "@nestjs/swagger";
import { IGameDTO, IGameWinnerDTO } from "./games.dto";
import { ILeagueDTO } from "./league.dto";
import { ILiveDTO } from "./live.dto";
import { IOpponentDTO } from "./opponent.dto";
import { IResultDTO } from "./results.dto";
import { ISerieDTO } from "./serie.dto";
import { IStreamDTO } from "./stream.dto";
import { ITournamentDTO } from "./tournament.dto";
import { IVideoGameDTO, IVideoGameTitleDTO, IVideoGameVersionDTO } from "./videogame.dto";

export class IMatchDTO {
	@ApiProperty()
	match_type: string;

	@ApiProperty()
	serie_id: number;
	
	@ApiProperty()
	winner_id: number;
	
	@ApiProperty()
	status: string;
	
	@ApiProperty()
	begin_at: string;
	
	@ApiProperty()
	rescheduled: boolean;

	@ApiProperty()
	videogame_title: IVideoGameTitleDTO;

	@ApiProperty()
	slug: string;

	@ApiProperty({ isArray: true, type: ILeagueDTO})
	league: ILeagueDTO;
	
	@ApiProperty()
	videogame_version: IVideoGameVersionDTO;
	
	@ApiProperty()
	id: number;
	
	@ApiProperty()
	serie: ISerieDTO;
	
	@ApiProperty()
	name: string;
	
	@ApiProperty()
	videogame: IVideoGameDTO;
	
	@ApiProperty()
	detailed_stats: boolean;

	@ApiProperty()
	modified_at: string;

	@ApiProperty()
	game_advantage: string;

	@ApiProperty()
	number_of_games: number;

	@ApiProperty()
	tournament: ITournamentDTO;
	
	@ApiProperty()
	forfeit: boolean;
	
	@ApiProperty()
	end_at: string;
	
	@ApiProperty()
	draw: boolean;

	@ApiProperty({isArray: true, type: IResultDTO })
	results: IResultDTO[];
	
	@ApiProperty({isArray: true, type: IGameDTO })
	games: IGameDTO[];

	@ApiProperty()
	live: ILiveDTO;

	@ApiProperty({isArray: true, type: IOpponentDTO })
	opponents: IOpponentDTO[];

	@ApiProperty()
	scheduled_at: string;

	@ApiProperty()
	league_id: number;

	@ApiProperty({ isArray: false, type: IGameWinnerDTO })
	winner: IGameWinnerDTO

	@ApiProperty()
	original_scheduled_at: string;

	@ApiProperty()
	winner_type: string;

	@ApiProperty({ isArray: true, type: IStreamDTO })
	streams_list: IStreamDTO[];

	@ApiProperty()
	tournament_id: number;
}
