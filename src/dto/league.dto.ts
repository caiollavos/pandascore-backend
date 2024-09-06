import { ApiProperty } from "@nestjs/swagger";

export class ILeagueDTO {
    @ApiProperty()
    id: number;

    @ApiProperty()
    image_url: string;
    
    @ApiProperty()
    modified_at: string;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    slug: string;
    
    @ApiProperty()
    url: string;
}