import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { PandaScoreService } from '@services/panda-score/pandascore.service';

describe('TeamsController', () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [
        { 
          provide: PandaScoreService,
          useValue: { getTeams: jest.fn() }
        }
      ]
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
