import { BloodBankUpdateManyWithoutLocationsInput } from "./BloodBankUpdateManyWithoutLocationsInput";
import { DonorUpdateManyWithoutLocationsInput } from "./DonorUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  bloodBanks?: BloodBankUpdateManyWithoutLocationsInput;
  city?: string | null;
  country?: string | null;
  donors?: DonorUpdateManyWithoutLocationsInput;
  state?: string | null;
};
