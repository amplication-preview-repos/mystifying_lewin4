import { BloodBankListRelationFilter } from "../bloodBank/BloodBankListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DonorListRelationFilter } from "../donor/DonorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  bloodBanks?: BloodBankListRelationFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  donors?: DonorListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
};
