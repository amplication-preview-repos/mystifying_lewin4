import { Module } from "@nestjs/common";
import { BloodGroupModuleBase } from "./base/bloodGroup.module.base";
import { BloodGroupService } from "./bloodGroup.service";
import { BloodGroupController } from "./bloodGroup.controller";
import { BloodGroupResolver } from "./bloodGroup.resolver";

@Module({
  imports: [BloodGroupModuleBase],
  controllers: [BloodGroupController],
  providers: [BloodGroupService, BloodGroupResolver],
  exports: [BloodGroupService],
})
export class BloodGroupModule {}
