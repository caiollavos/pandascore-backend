import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { IVideoGameDTO } from "src/dto/videogame.dto";
import { ILeagueDTO } from "./dto/league.dto";
import { IPlayerDTO } from "./dto/player.dto";
import { IMatchDTO } from "./dto/match.dto";
import { IResultDTO } from "./dto/results.dto";
import { ITournamentDTO } from "./dto/tournament.dto";
import { IStreamDTO } from "./dto/stream.dto";
import { IGameDTO } from "./dto/games.dto";
import { IOpponentDTO } from "./dto/opponent.dto";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("PS - Counter-strike API Documentation")
    .setDescription("Counter Strike API using pandascore")
    .setVersion("0.0")
    .addTag("csgo")
    .addServer("http://localhost:3000/", "Local environment")
    .addServer("https://api.pandascore.co/", "Pandascore environment")
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [
      IVideoGameDTO,
      ILeagueDTO,
      IPlayerDTO,
      IMatchDTO,
      IResultDTO,
      ITournamentDTO,
      IGameDTO,
      IOpponentDTO,
      IStreamDTO,
    ],
  });
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
