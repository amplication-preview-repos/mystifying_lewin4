import { BloodBank } from "../bloodBank/BloodBank";
import { Donor } from "../donor/Donor";

export type BloodGroup = {
  bloodBanks?: Array<BloodBank>;
  createdAt: Date;
  donors?: Array<Donor>;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
