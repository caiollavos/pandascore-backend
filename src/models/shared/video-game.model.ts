export class IVideoGame {
  id: number;
  name: string;
  slug: string;
}

export class IVideoGameTitle {
  id: number;
  name: string;
  slug: string;
  videogame_id: number;
}

export class IVideoGameVersion {
  current: boolean;
  name: string;
}
