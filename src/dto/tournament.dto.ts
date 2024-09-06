import { ApiProperty } from "@nestjs/swagger";

export class ITournamentDTO {
    @ApiProperty()
    begin_at: string;
    
    @ApiProperty()
    detailed_stats: boolean;
    
    @ApiProperty()
    end_at: string;
    
    @ApiProperty()
    has_bracket: boolean;
    
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    league_id: number;
    
    @ApiProperty()
    live_supported: boolean;
    
    @ApiProperty()
    modified_at: string;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    prizepool: string;
    
    @ApiProperty()
    serie_id: number;
    
    @ApiProperty()
    slug: string;
    
    @ApiProperty()
    tier: string;
    
    @ApiProperty()
    winner_id: number;
    
    @ApiProperty()
    winner_type: string;
}