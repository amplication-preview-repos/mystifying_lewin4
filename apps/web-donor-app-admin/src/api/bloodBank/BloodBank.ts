import { BloodGroup } from "../bloodGroup/BloodGroup";
import { Location } from "../location/Location";

export type BloodBank = {
  availability: number | null;
  bloodGroup?: BloodGroup | null;
  createdAt: Date;
  id: string;
  location?: Location | null;
  name: string | null;
  updatedAt: Date;
};
