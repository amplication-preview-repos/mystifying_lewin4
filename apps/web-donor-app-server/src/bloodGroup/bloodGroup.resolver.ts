import * as graphql from "@nestjs/graphql";
import { BloodGroupResolverBase } from "./base/bloodGroup.resolver.base";
import { BloodGroup } from "./base/BloodGroup";
import { BloodGroupService } from "./bloodGroup.service";

@graphql.Resolver(() => BloodGroup)
export class BloodGroupResolver extends BloodGroupResolverBase {
  constructor(protected readonly service: BloodGroupService) {
    super(service);
  }
}
