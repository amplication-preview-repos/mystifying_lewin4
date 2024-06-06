import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { BLOODGROUP_TITLE_FIELD } from "../bloodGroup/BloodGroupTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Donor" target="userId" label="Donors">
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <BooleanField label="available" source="available" />
            <ReferenceField
              label="BloodGroup"
              source="bloodgroup.id"
              reference="BloodGroup"
            >
              <TextField source={BLOODGROUP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Location"
              source="location.id"
              reference="Location"
            >
              <TextField source={LOCATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="weight" source="weight" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
