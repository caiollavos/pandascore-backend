import { IVideoGame } from "../shared/video-game.model";

export interface ITeam {
    acronym: string;
    current_videogame: IVideoGame,
    id: number,
    image_url: string;
    location: string;
    modified_at: string;
    name: string;
    players: Array<ITeamPlayer>;
    slug: string;
}

export interface ITeamPlayer {
    active: boolean;
    age: number;
    birthday: string;
    first_name: string;
    id: 27612,
    image_url: string;
    last_name: string;
    modified_at: string;
    name: string;
    nationality: string;
    role: string;
    slug: string;
}