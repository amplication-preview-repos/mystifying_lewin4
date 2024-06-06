import { BloodGroupWhereUniqueInput } from "../bloodGroup/BloodGroupWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DonorUpdateInput = {
  age?: number | null;
  available?: boolean | null;
  bloodGroup?: BloodGroupWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  weight?: number | null;
};
