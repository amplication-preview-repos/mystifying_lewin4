import { SortOrder } from "../../util/SortOrder";

export type BloodBankOrderByInput = {
  availability?: SortOrder;
  bloodGroupId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
