import { ApiProperty } from "@nestjs/swagger";

export class ILiveDTO {
  @ApiProperty()
  opens_at: number | string;

  @ApiProperty()
  supported: boolean;

  @ApiProperty()
  url: string;
}
