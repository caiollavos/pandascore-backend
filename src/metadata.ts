/* eslint-disable */
export default async () => {
  const t = {
    ["./dto/games.dto"]: await import("./dto/games.dto"),
    ["./dto/opponent.dto"]: await import("./dto/opponent.dto"),
    ["./dto/videogame.dto"]: await import("./dto/videogame.dto"),
    ["./dto/league.dto"]: await import("./dto/league.dto"),
    ["./dto/serie.dto"]: await import("./dto/serie.dto"),
    ["./dto/tournament.dto"]: await import("./dto/tournament.dto"),
    ["./dto/results.dto"]: await import("./dto/results.dto"),
    ["./dto/live.dto"]: await import("./dto/live.dto"),
    ["./dto/stream.dto"]: await import("./dto/stream.dto"),
    ["./dto/player.dto"]: await import("./dto/player.dto"),
    ["./dto/match.dto"]: await import("./dto/match.dto"),
  };
  return {
    "@nestjs/swagger": {
      models: [
        [
          import("./dto/games.dto"),
          {
            IGameWinnerDTO: {
              id: { required: true, type: () => Number },
              type: { required: true, type: () => String },
            },
            IGameDTO: {
              begin_at: { required: true, type: () => String },
              complete: { required: true, type: () => Boolean },
              detailed_stats: { required: true, type: () => Boolean },
              end_at: { required: true, type: () => String },
              finished: { required: true, type: () => Boolean },
              forfeit: { required: true, type: () => Boolean },
              id: { required: true, type: () => Number },
              length: { required: true, type: () => Object },
              match_id: { required: true, type: () => Number },
              position: { required: true, type: () => Number },
              status: { required: true, type: () => String },
              winner: {
                required: true,
                type: () => t["./dto/games.dto"].IGameWinnerDTO,
              },
              winner_type: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/league.dto"),
          {
            ILeagueDTO: {
              id: { required: true, type: () => Number },
              image_url: { required: true, type: () => String },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              slug: { required: true, type: () => String },
              url: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/live.dto"),
          {
            ILiveDTO: {
              opens_at: { required: true, type: () => Object },
              supported: { required: true, type: () => Boolean },
              url: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/opponent.dto"),
          {
            IOpponentItemDTO: {
              acronym: { required: true, type: () => String },
              id: { required: true, type: () => Number },
              image_url: { required: true, type: () => String },
              location: { required: true, type: () => String },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              slug: { required: true, type: () => String },
            },
            IOpponentDTO: {
              opponent: {
                required: true,
                type: () => t["./dto/opponent.dto"].IOpponentItemDTO,
              },
              type: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/results.dto"),
          {
            IResultDTO: {
              score: { required: true, type: () => Number },
              team_id: { required: true, type: () => Number },
            },
          },
        ],
        [
          import("./dto/serie.dto"),
          {
            ISerieDTO: {
              begin_at: { required: true, type: () => String },
              end_at: { required: true, type: () => String },
              full_name: { required: true, type: () => String },
              id: { required: true, type: () => Number },
              league_id: { required: true, type: () => Number },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              season: { required: true, type: () => String },
              slug: { required: true, type: () => String },
              winner_id: { required: true, type: () => String },
              winner_type: { required: true, type: () => String },
              year: { required: true, type: () => Number },
            },
          },
        ],
        [
          import("./dto/stream.dto"),
          {
            IStreamDTO: {
              embed_url: { required: true, type: () => String },
              language: { required: true, type: () => String },
              main: { required: true, type: () => Boolean },
              official: { required: true, type: () => Boolean },
              raw_url: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/tournament.dto"),
          {
            ITournamentDTO: {
              begin_at: { required: true, type: () => String },
              detailed_stats: { required: true, type: () => Boolean },
              end_at: { required: true, type: () => String },
              has_bracket: { required: true, type: () => Boolean },
              id: { required: true, type: () => Number },
              league_id: { required: true, type: () => Number },
              live_supported: { required: true, type: () => Boolean },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              prizepool: { required: true, type: () => String },
              serie_id: { required: true, type: () => Number },
              slug: { required: true, type: () => String },
              tier: { required: true, type: () => String },
              winner_id: { required: true, type: () => Number },
              winner_type: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/videogame.dto"),
          {
            IVideoGameDTO: {
              id: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              slug: { required: true, type: () => String },
            },
            IVideoGameTitleDTO: {
              id: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              slug: { required: true, type: () => String },
              videogame_id: { required: true, type: () => Number },
            },
            IVideoGameVersionDTO: {
              current: { required: true, type: () => Boolean },
              name: { required: true, type: () => String },
            },
          },
        ],
        [
          import("./dto/match.dto"),
          {
            IMatchDTO: {
              match_type: { required: true, type: () => String },
              serie_id: { required: true, type: () => Number },
              winner_id: { required: true, type: () => Number },
              status: { required: true, type: () => String },
              begin_at: { required: true, type: () => String },
              rescheduled: { required: true, type: () => Boolean },
              videogame_title: {
                required: true,
                type: () => t["./dto/videogame.dto"].IVideoGameTitleDTO,
              },
              slug: { required: true, type: () => String },
              league: {
                required: true,
                type: () => t["./dto/league.dto"].ILeagueDTO,
              },
              videogame_version: {
                required: true,
                type: () => t["./dto/videogame.dto"].IVideoGameVersionDTO,
              },
              id: { required: true, type: () => Number },
              serie: {
                required: true,
                type: () => t["./dto/serie.dto"].ISerieDTO,
              },
              name: { required: true, type: () => String },
              videogame: {
                required: true,
                type: () => t["./dto/videogame.dto"].IVideoGameDTO,
              },
              detailed_stats: { required: true, type: () => Boolean },
              modified_at: { required: true, type: () => String },
              game_advantage: { required: true, type: () => String },
              number_of_games: { required: true, type: () => Number },
              tournament: {
                required: true,
                type: () => t["./dto/tournament.dto"].ITournamentDTO,
              },
              forfeit: { required: true, type: () => Boolean },
              end_at: { required: true, type: () => String },
              draw: { required: true, type: () => Boolean },
              results: {
                required: true,
                type: () => [t["./dto/results.dto"].IResultDTO],
              },
              games: {
                required: true,
                type: () => [t["./dto/games.dto"].IGameDTO],
              },
              live: {
                required: true,
                type: () => t["./dto/live.dto"].ILiveDTO,
              },
              opponents: {
                required: true,
                type: () => [t["./dto/opponent.dto"].IOpponentDTO],
              },
              scheduled_at: { required: true, type: () => String },
              league_id: { required: true, type: () => Number },
              winner: {
                required: true,
                type: () => t["./dto/games.dto"].IGameWinnerDTO,
              },
              original_scheduled_at: { required: true, type: () => String },
              winner_type: { required: true, type: () => String },
              streams_list: {
                required: true,
                type: () => [t["./dto/stream.dto"].IStreamDTO],
              },
              tournament_id: { required: true, type: () => Number },
            },
          },
        ],
        [
          import("./dto/player.dto"),
          {
            ICurrentTeamDTO: {
              acronym: { required: true, type: () => String },
              id: { required: true, type: () => Number },
              image_url: { required: true, type: () => String },
              location: { required: true, type: () => String },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              slug: { required: true, type: () => String },
            },
            IPlayerDTO: {
              active: { required: true, type: () => Boolean },
              current_team: {
                required: true,
                type: () => t["./dto/player.dto"].ICurrentTeamDTO,
              },
              current_videogame: {
                required: true,
                type: () => t["./dto/videogame.dto"].IVideoGameDTO,
              },
              first_name: { required: true, type: () => String },
              id: { required: true, type: () => Number },
              image_url: { required: true, type: () => String },
              last_name: { required: true, type: () => String },
              modified_at: { required: true, type: () => String },
              name: { required: true, type: () => String },
              nationality: { required: true, type: () => String },
              role: { required: true, type: () => String },
              slug: { required: true, type: () => String },
            },
          },
        ],
      ],
      controllers: [
        [
          import("./app.controller"),
          { AppController: { getHello: { type: String } } },
        ],
        [
          import("./controllers/auth/auth.controller"),
          { AuthController: { googleAuth: {}, googleAuthRedirect: {} } },
        ],
        [
          import("./controllers/home/home.controller"),
          {
            HomeController: {
              getMatches: { type: [t["./dto/match.dto"].IMatchDTO] },
            },
          },
        ],
        [
          import("./controllers/players/players.controller"),
          {
            PlayersController: {
              getPlayers: { type: [t["./dto/player.dto"].IPlayerDTO] },
            },
          },
        ],
        [
          import("./controllers/matches/matches.controller"),
          {
            MatchesController: {
              getMatches: { type: [t["./dto/match.dto"].IMatchDTO] },
              getUpcomingMatches: { type: [Object] },
            },
          },
        ],
        [
          import("./controllers/teams/teams.controller"),
          { TeamsController: { getTeams: { type: [Object] } } },
        ],
      ],
    },
  };
};
