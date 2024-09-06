import { ApiProperty } from "@nestjs/swagger";

export class IGameWinnerDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  type: string;
}
export class IGameDTO {
  @ApiProperty()
  begin_at: string;

  @ApiProperty()
  complete: boolean;

  @ApiProperty()
  detailed_stats: boolean;

  @ApiProperty()
  end_at: string;

  @ApiProperty()
  finished: boolean;

  @ApiProperty()
  forfeit: boolean;

  @ApiProperty()
  id: number;

  @ApiProperty()
  length: number;

  @ApiProperty()
  match_id: number;

  @ApiProperty()
  position: number;

  @ApiProperty()
  status: string;

  @ApiProperty({ isArray: false, type: IGameWinnerDTO })
  winner: IGameWinnerDTO;

  @ApiProperty()
  winner_type: string;
}
