import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Action, Prisma } from '@prisma/client';

@Injectable()
export class ActionsService {
  constructor(private prisma: PrismaService) {}

  async actions(params: {
    where?: Prisma.ActionWhereInput;
  }): Promise<Action[]> {
    const { where } = params;

    return this.prisma.action.findMany({
      where,
      orderBy: { id: 'desc' },
      include: { block: true },
    });
  }

  async create(data: Prisma.ActionUncheckedCreateInput): Promise<Action> {
    return this.prisma.action.create({ data });
  }

  async updateTarget(params: {
    where: Prisma.ActionWhereUniqueInput;
    data: Prisma.ActionUncheckedUpdateInput;
  }): Promise<Action> {
    const { data, where } = params;
    return this.prisma.action.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ActionWhereUniqueInput): Promise<Action> {
    return this.prisma.action.delete({ where });
  }
}
