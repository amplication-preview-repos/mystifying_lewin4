import { DonorUpdateManyWithoutUsersInput } from "./DonorUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  donors?: DonorUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
