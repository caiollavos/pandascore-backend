import { ApiProperty } from "@nestjs/swagger";
export class IOpponentItemDTO {
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

export class IOpponentDTO {
  @ApiProperty()
  opponent: IOpponentItemDTO;

  @ApiProperty()
  type: string;
}
