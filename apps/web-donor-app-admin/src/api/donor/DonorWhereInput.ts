import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BloodGroupWhereUniqueInput } from "../bloodGroup/BloodGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DonorWhereInput = {
  age?: IntNullableFilter;
  available?: BooleanNullableFilter;
  bloodGroup?: BloodGroupWhereUniqueInput;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  user?: UserWhereUniqueInput;
  weight?: IntNullableFilter;
};
