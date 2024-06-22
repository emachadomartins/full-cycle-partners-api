import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SpotsService } from './spots.service';

describe('SpotsService', () => {
  let service: SpotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotsService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<SpotsService>(SpotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
