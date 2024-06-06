import { Donor as TDonor } from "../api/donor/Donor";

export const DONOR_TITLE_FIELD = "id";

export const DonorTitle = (record: TDonor): string => {
  return record.id?.toString() || String(record.id);
};
