import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BloodGroupTitle } from "../bloodGroup/BloodGroupTitle";
import { LocationTitle } from "../location/LocationTitle";
import { UserTitle } from "../user/UserTitle";

export const DonorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <BooleanInput label="available" source="available" />
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
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="weight" source="weight" />
      </SimpleForm>
    </Create>
  );
};
