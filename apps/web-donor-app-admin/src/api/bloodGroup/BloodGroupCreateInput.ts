import { BloodBankCreateNestedManyWithoutBloodGroupsInput } from "./BloodBankCreateNestedManyWithoutBloodGroupsInput";
import { DonorCreateNestedManyWithoutBloodGroupsInput } from "./DonorCreateNestedManyWithoutBloodGroupsInput";

export type BloodGroupCreateInput = {
  bloodBanks?: BloodBankCreateNestedManyWithoutBloodGroupsInput;
  donors?: DonorCreateNestedManyWithoutBloodGroupsInput;
  typeField?: string | null;
};
