import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BloodBankTitle } from "../bloodBank/BloodBankTitle";
import { DonorTitle } from "../donor/DonorTitle";

export const BloodGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bloodBanks"
          reference="BloodBank"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BloodBankTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="donors"
          reference="Donor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DonorTitle} />
        </ReferenceArrayInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
