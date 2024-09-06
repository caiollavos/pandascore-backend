import { ApiProperty } from "@nestjs/swagger";

export class IVideoGameDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;
}

export class IVideoGameTitleDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  videogame_id: number;
}

export class IVideoGameVersionDTO {
  @ApiProperty()
  current: boolean;

  @ApiProperty()
  name: string;
}
