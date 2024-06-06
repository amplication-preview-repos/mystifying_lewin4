import { BloodBankUpdateManyWithoutBloodGroupsInput } from "./BloodBankUpdateManyWithoutBloodGroupsInput";
import { DonorUpdateManyWithoutBloodGroupsInput } from "./DonorUpdateManyWithoutBloodGroupsInput";

export type BloodGroupUpdateInput = {
  bloodBanks?: BloodBankUpdateManyWithoutBloodGroupsInput;
  donors?: DonorUpdateManyWithoutBloodGroupsInput;
  typeField?: string | null;
};
