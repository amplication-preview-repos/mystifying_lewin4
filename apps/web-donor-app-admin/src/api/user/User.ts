import { Donor } from "../donor/Donor";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  donors?: Array<Donor>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
