import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { BLOODGROUP_TITLE_FIELD } from "../bloodGroup/BloodGroupTitle";
import { LOCATION_TITLE_FIELD } from "./LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BloodBank"
          target="locationId"
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
          target="locationId"
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
