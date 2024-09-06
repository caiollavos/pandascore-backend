import { ApiProperty } from "@nestjs/swagger";

export class IStreamDTO {
    @ApiProperty()
    embed_url: string;
    
    @ApiProperty()
    language: string;
    
    @ApiProperty()
    main: boolean;
    
    @ApiProperty()
    official: boolean;
    
    @ApiProperty()
    raw_url: string;
}