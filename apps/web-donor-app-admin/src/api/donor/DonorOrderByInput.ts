import { SortOrder } from "../../util/SortOrder";

export type DonorOrderByInput = {
  age?: SortOrder;
  available?: SortOrder;
  bloodGroupId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  weight?: SortOrder;
};
