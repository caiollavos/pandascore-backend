import { ApiProperty } from "@nestjs/swagger";

export class IResultDTO {
  @ApiProperty()
  score: number;

  @ApiProperty()
  team_id: number;
}
