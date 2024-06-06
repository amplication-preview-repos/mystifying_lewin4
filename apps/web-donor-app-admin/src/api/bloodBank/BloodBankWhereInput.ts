import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BloodGroupWhereUniqueInput } from "../bloodGroup/BloodGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BloodBankWhereInput = {
  availability?: IntNullableFilter;
  bloodGroup?: BloodGroupWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  name?: StringNullableFilter;
};
