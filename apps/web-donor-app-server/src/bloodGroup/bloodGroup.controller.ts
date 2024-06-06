import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodGroupService } from "./bloodGroup.service";
import { BloodGroupControllerBase } from "./base/bloodGroup.controller.base";

@swagger.ApiTags("bloodGroups")
@common.Controller("bloodGroups")
export class BloodGroupController extends BloodGroupControllerBase {
  constructor(protected readonly service: BloodGroupService) {
    super(service);
  }
}
