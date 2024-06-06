import { BloodGroupWhereUniqueInput } from "../bloodGroup/BloodGroupWhereUniqueInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type BloodBankCreateInput = {
  availability?: number | null;
  bloodGroup?: BloodGroupWhereUniqueInput | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
};
