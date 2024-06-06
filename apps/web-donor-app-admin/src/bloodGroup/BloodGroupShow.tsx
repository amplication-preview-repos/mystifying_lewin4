import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { BLOODGROUP_TITLE_FIELD } from "./BloodGroupTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BloodGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BloodBank"
          target="bloodGroupId"
          label="BloodBanks"
        >
          <Datagrid rowClick="show">
            <TextField label="availability" source="availability" />
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
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Donor"
          target="bloodGroupId"
          label="Donors"
        >
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
