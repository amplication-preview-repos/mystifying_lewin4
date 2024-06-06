/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BloodBankListRelationFilter } from "../../bloodBank/base/BloodBankListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DonorListRelationFilter } from "../../donor/base/DonorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class BloodGroupWhereInput {
  @ApiProperty({
    required: false,
    type: () => BloodBankListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BloodBankListRelationFilter)
  @IsOptional()
  @Field(() => BloodBankListRelationFilter, {
    nullable: true,
  })
  bloodBanks?: BloodBankListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DonorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DonorListRelationFilter)
  @IsOptional()
  @Field(() => DonorListRelationFilter, {
    nullable: true,
  })
  donors?: DonorListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeField?: StringNullableFilter;
}

export { BloodGroupWhereInput as BloodGroupWhereInput };