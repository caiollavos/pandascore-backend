import { ApiProperty } from "@nestjs/swagger";
import { IVideoGameDTO } from "./videogame.dto";

export class ICurrentTeamDTO {
  @ApiProperty()
  acronym: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  image_url: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  modified_at: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;
}

export class IPlayerDTO {
  @ApiProperty()
  active: boolean;

  @ApiProperty({ isArray: false, type: ICurrentTeamDTO })
  current_team: ICurrentTeamDTO;

  @ApiProperty({ isArray: false, type: IVideoGameDTO })
  current_videogame: IVideoGameDTO;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  image_url: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  modified_at: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nationality: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  slug: string;
}
