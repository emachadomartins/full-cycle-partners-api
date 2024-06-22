import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { SpotStatus } from '@prisma/client';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  async create(eventId: string, data: CreateSpotDto) {
    const event = await this.prismaService.event.findUnique({
      where: { id: eventId },
    });

    if (!event) throw new Error('Invalid event!');

    return this.prismaService.spot.create({
      data: {
        name: data.name,
        eventId: event.id,
        status: SpotStatus.available,
      },
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
