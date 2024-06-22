import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SpotsController } from './spots.controller';
import { SpotsService } from './spots.service';

describe('SpotsController', () => {
  let controller: SpotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotsController],
      providers: [SpotsService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<SpotsController>(SpotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
