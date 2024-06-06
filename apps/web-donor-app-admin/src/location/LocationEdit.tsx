import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BloodBankTitle } from "../bloodBank/BloodBankTitle";
import { DonorTitle } from "../donor/DonorTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bloodBanks"
          reference="BloodBank"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BloodBankTitle} />
        </ReferenceArrayInput>
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="donors"
          reference="Donor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DonorTitle} />
        </ReferenceArrayInput>
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Edit>
  );
};
