import { BloodGroupWhereUniqueInput } from "../bloodGroup/BloodGroupWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BloodBankUpdateInput = {
  availability?: number | null;
  bloodGroup?: BloodGroupWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
};
