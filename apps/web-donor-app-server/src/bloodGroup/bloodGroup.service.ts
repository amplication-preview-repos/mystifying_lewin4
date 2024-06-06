import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodGroupServiceBase } from "./base/bloodGroup.service.base";

@Injectable()
export class BloodGroupService extends BloodGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
