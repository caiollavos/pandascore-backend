import { IVideoGame } from "../shared/video-game.model";

export interface IPlayer {
  active: boolean;
  current_team: {
    acronym: string;
    id: number;
    image_url: string;
    location: string;
    modified_at: string;
    name: string;
    slug: string;
  },
  current_videogame: IVideoGame,
  first_name: string;
  id: number,
  image_url: string;
  last_name: string;
  modified_at: string;
  name: string;
  nationality: string;
  role: string;
  slug: string;
}