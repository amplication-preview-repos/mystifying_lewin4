import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DonorList } from "./donor/DonorList";
import { DonorCreate } from "./donor/DonorCreate";
import { DonorEdit } from "./donor/DonorEdit";
import { DonorShow } from "./donor/DonorShow";
import { BloodGroupList } from "./bloodGroup/BloodGroupList";
import { BloodGroupCreate } from "./bloodGroup/BloodGroupCreate";
import { BloodGroupEdit } from "./bloodGroup/BloodGroupEdit";
import { BloodGroupShow } from "./bloodGroup/BloodGroupShow";
import { BloodBankList } from "./bloodBank/BloodBankList";
import { BloodBankCreate } from "./bloodBank/BloodBankCreate";
import { BloodBankEdit } from "./bloodBank/BloodBankEdit";
import { BloodBankShow } from "./bloodBank/BloodBankShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WebDonorApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Donor"
          list={DonorList}
          edit={DonorEdit}
          create={DonorCreate}
          show={DonorShow}
        />
        <Resource
          name="BloodGroup"
          list={BloodGroupList}
          edit={BloodGroupEdit}
          create={BloodGroupCreate}
          show={BloodGroupShow}
        />
        <Resource
          name="BloodBank"
          list={BloodBankList}
          edit={BloodBankEdit}
          create={BloodBankCreate}
          show={BloodBankShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
