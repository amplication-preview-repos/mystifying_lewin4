import { BloodGroup } from "../bloodGroup/BloodGroup";
import { Location } from "../location/Location";
import { User } from "../user/User";

export type Donor = {
  age: number | null;
  available: boolean | null;
  bloodGroup?: BloodGroup | null;
  createdAt: Date;
  id: string;
  location?: Location | null;
  updatedAt: Date;
  user?: User | null;
  weight: number | null;
};
