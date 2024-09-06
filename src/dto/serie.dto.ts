import { ApiProperty } from "@nestjs/swagger";

export class ISerieDTO {
    @ApiProperty()
    begin_at: string;
    
    @ApiProperty()
    end_at: string;
    
    @ApiProperty()
    full_name: string;
    
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    league_id: number;
   
    @ApiProperty()
    modified_at: string;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    season: string;
    
    @ApiProperty()
    slug: string;
    
    @ApiProperty()
    winner_id: string;
    
    @ApiProperty()
    winner_type: string;
    
    @ApiProperty()
    year: number;
}