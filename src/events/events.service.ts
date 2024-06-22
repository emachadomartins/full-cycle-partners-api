import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateEventDto) {
    return this.prismaService.event.create({ data });
  }

  async findAll() {
    return this.prismaService.event.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.event.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateEventDto) {
    return this.prismaService.event.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaService.event.delete({ where: { id } });
  }
}
