import { ApiProperty } from "@nestjs/swagger";

export class ILiveDTO {
  @ApiProperty()
  opens_at: string;

  @ApiProperty()
  supported: string;

  @ApiProperty()
  url: string;
}
