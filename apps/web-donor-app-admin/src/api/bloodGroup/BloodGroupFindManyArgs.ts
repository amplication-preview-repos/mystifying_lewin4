import { BloodGroupWhereInput } from "./BloodGroupWhereInput";
import { BloodGroupOrderByInput } from "./BloodGroupOrderByInput";

export type BloodGroupFindManyArgs = {
  where?: BloodGroupWhereInput;
  orderBy?: Array<BloodGroupOrderByInput>;
  skip?: number;
  take?: number;
};
