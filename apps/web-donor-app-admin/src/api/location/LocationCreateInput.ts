import { BloodBankCreateNestedManyWithoutLocationsInput } from "./BloodBankCreateNestedManyWithoutLocationsInput";
import { DonorCreateNestedManyWithoutLocationsInput } from "./DonorCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  bloodBanks?: BloodBankCreateNestedManyWithoutLocationsInput;
  city?: string | null;
  country?: string | null;
  donors?: DonorCreateNestedManyWithoutLocationsInput;
  state?: string | null;
};
