import { BloodGroup as TBloodGroup } from "../api/bloodGroup/BloodGroup";

export const BLOODGROUP_TITLE_FIELD = "typeField";

export const BloodGroupTitle = (record: TBloodGroup): string => {
  return record.typeField?.toString() || String(record.id);
};
