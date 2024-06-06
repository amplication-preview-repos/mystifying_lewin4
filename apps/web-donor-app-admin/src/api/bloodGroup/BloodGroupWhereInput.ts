import { BloodBankListRelationFilter } from "../bloodBank/BloodBankListRelationFilter";
import { DonorListRelationFilter } from "../donor/DonorListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BloodGroupWhereInput = {
  bloodBanks?: BloodBankListRelationFilter;
  donors?: DonorListRelationFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
