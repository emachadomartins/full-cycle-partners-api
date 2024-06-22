import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  async create(eventId: string, data: CreateSpotDto) {
    return this.prismaService.spot.create({
      data: { ...data, eventId },
    });
  }

  async findAll(eventId: string) {
    return this.prismaService.spot.findMany({ where: { eventId } });
  }

  async findOne(eventId: string, id: string) {
    return this.prismaService.spot.findFirst({
      where: { id, eventId },
    });
  }

  async update(eventId: string, id: string, data: UpdateSpotDto) {
    return this.prismaService.spot.update({
      where: { id, eventId },
      data,
    });
  }

  async remove(eventId: string, id: string) {
    return this.prismaService.spot.delete({ where: { id, eventId } });
  }
}
