import { BloodBank } from "../bloodBank/BloodBank";
import { Donor } from "../donor/Donor";

export type Location = {
  bloodBanks?: Array<BloodBank>;
  city: string | null;
  country: string | null;
  createdAt: Date;
  donors?: Array<Donor>;
  id: string;
  state: string | null;
  updatedAt: Date;
};
