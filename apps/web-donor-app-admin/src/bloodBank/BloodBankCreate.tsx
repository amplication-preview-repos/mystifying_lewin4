import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BloodGroupTitle } from "../bloodGroup/BloodGroupTitle";
import { LocationTitle } from "../location/LocationTitle";

export const BloodBankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="availability" source="availability" />
        <ReferenceInput
          source="bloodGroup.id"
          reference="BloodGroup"
          label="BloodGroup"
        >
          <SelectInput optionText={BloodGroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
