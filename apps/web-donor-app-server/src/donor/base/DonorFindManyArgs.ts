/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DonorWhereInput } from "./DonorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DonorOrderByInput } from "./DonorOrderByInput";

@ArgsType()
class DonorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DonorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DonorWhereInput, { nullable: true })
  @Type(() => DonorWhereInput)
  where?: DonorWhereInput;

  @ApiProperty({
    required: false,
    type: [DonorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DonorOrderByInput], { nullable: true })
  @Type(() => DonorOrderByInput)
  orderBy?: Array<DonorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DonorFindManyArgs as DonorFindManyArgs };