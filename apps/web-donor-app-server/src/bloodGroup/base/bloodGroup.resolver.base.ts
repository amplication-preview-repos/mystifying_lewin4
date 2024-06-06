/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { BloodGroup } from "./BloodGroup";
import { BloodGroupCountArgs } from "./BloodGroupCountArgs";
import { BloodGroupFindManyArgs } from "./BloodGroupFindManyArgs";
import { BloodGroupFindUniqueArgs } from "./BloodGroupFindUniqueArgs";
import { CreateBloodGroupArgs } from "./CreateBloodGroupArgs";
import { UpdateBloodGroupArgs } from "./UpdateBloodGroupArgs";
import { DeleteBloodGroupArgs } from "./DeleteBloodGroupArgs";
import { BloodBankFindManyArgs } from "../../bloodBank/base/BloodBankFindManyArgs";
import { BloodBank } from "../../bloodBank/base/BloodBank";
import { DonorFindManyArgs } from "../../donor/base/DonorFindManyArgs";
import { Donor } from "../../donor/base/Donor";
import { BloodGroupService } from "../bloodGroup.service";
@graphql.Resolver(() => BloodGroup)
export class BloodGroupResolverBase {
  constructor(protected readonly service: BloodGroupService) {}

  async _bloodGroupsMeta(
    @graphql.Args() args: BloodGroupCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BloodGroup])
  async bloodGroups(
    @graphql.Args() args: BloodGroupFindManyArgs
  ): Promise<BloodGroup[]> {
    return this.service.bloodGroups(args);
  }

  @graphql.Query(() => BloodGroup, { nullable: true })
  async bloodGroup(
    @graphql.Args() args: BloodGroupFindUniqueArgs
  ): Promise<BloodGroup | null> {
    const result = await this.service.bloodGroup(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BloodGroup)
  async createBloodGroup(
    @graphql.Args() args: CreateBloodGroupArgs
  ): Promise<BloodGroup> {
    return await this.service.createBloodGroup({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => BloodGroup)
  async updateBloodGroup(
    @graphql.Args() args: UpdateBloodGroupArgs
  ): Promise<BloodGroup | null> {
    try {
      return await this.service.updateBloodGroup({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => BloodGroup)
  async deleteBloodGroup(
    @graphql.Args() args: DeleteBloodGroupArgs
  ): Promise<BloodGroup | null> {
    try {
      return await this.service.deleteBloodGroup(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [BloodBank], { name: "bloodBanks" })
  async findBloodBanks(
    @graphql.Parent() parent: BloodGroup,
    @graphql.Args() args: BloodBankFindManyArgs
  ): Promise<BloodBank[]> {
    const results = await this.service.findBloodBanks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Donor], { name: "donors" })
  async findDonors(
    @graphql.Parent() parent: BloodGroup,
    @graphql.Args() args: DonorFindManyArgs
  ): Promise<Donor[]> {
    const results = await this.service.findDonors(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}