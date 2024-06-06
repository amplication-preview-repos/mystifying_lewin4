/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BloodBankService } from "../bloodBank.service";
import { BloodBankCreateInput } from "./BloodBankCreateInput";
import { BloodBank } from "./BloodBank";
import { BloodBankFindManyArgs } from "./BloodBankFindManyArgs";
import { BloodBankWhereUniqueInput } from "./BloodBankWhereUniqueInput";
import { BloodBankUpdateInput } from "./BloodBankUpdateInput";

export class BloodBankControllerBase {
  constructor(protected readonly service: BloodBankService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BloodBank })
  async createBloodBank(
    @common.Body() data: BloodBankCreateInput
  ): Promise<BloodBank> {
    return await this.service.createBloodBank({
      data: {
        ...data,

        bloodGroup: data.bloodGroup
          ? {
              connect: data.bloodGroup,
            }
          : undefined,

        location: data.location
          ? {
              connect: data.location,
            }
          : undefined,
      },
      select: {
        availability: true,

        bloodGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BloodBank] })
  @ApiNestedQuery(BloodBankFindManyArgs)
  async bloodBanks(@common.Req() request: Request): Promise<BloodBank[]> {
    const args = plainToClass(BloodBankFindManyArgs, request.query);
    return this.service.bloodBanks({
      ...args,
      select: {
        availability: true,

        bloodGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BloodBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bloodBank(
    @common.Param() params: BloodBankWhereUniqueInput
  ): Promise<BloodBank | null> {
    const result = await this.service.bloodBank({
      where: params,
      select: {
        availability: true,

        bloodGroup: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BloodBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBloodBank(
    @common.Param() params: BloodBankWhereUniqueInput,
    @common.Body() data: BloodBankUpdateInput
  ): Promise<BloodBank | null> {
    try {
      return await this.service.updateBloodBank({
        where: params,
        data: {
          ...data,

          bloodGroup: data.bloodGroup
            ? {
                connect: data.bloodGroup,
              }
            : undefined,

          location: data.location
            ? {
                connect: data.location,
              }
            : undefined,
        },
        select: {
          availability: true,

          bloodGroup: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          location: {
            select: {
              id: true,
            },
          },

          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BloodBank })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBloodBank(
    @common.Param() params: BloodBankWhereUniqueInput
  ): Promise<BloodBank | null> {
    try {
      return await this.service.deleteBloodBank({
        where: params,
        select: {
          availability: true,

          bloodGroup: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          location: {
            select: {
              id: true,
            },
          },

          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}