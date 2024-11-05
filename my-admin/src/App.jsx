import { Admin, Resource, ListGuesser, PrevNextButtonClasses, Empty, CustomRoutes  } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';
import { usersEdit, usersList,usersShow} from "./users";
import { StoresList, StoresShow, StoresEdit } from "./Stores";
import { CategoriesList } from "./Categories";
import { BeerList, BeerShow, BeerCreate } from "./Beer";
import { BrandyList, BrandyShow } from "./Brandy";
import { ApplicationCreate, ApplicationList, ApplicantsShow } from "./application" ;
import CustomLoginPage from "./CustomLoginPage";
import  ProfileCreate from "./ProfileCreate";
import {Route, Routes} from 'react-router-dom' ;
import { Dashboard } from "./dashboard";






const pbProvider = PocketBaseProvider("https://organic-rotary-phone-4j9pjg4vpw4cjqv6-8090.app.github.dev/");


const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}
  loginPage={CustomLoginPage}
    customRoutes={
      <CustomRoutes>
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/users" element={<usersList />} />
      </CustomRoutes>
    }
  >
       <Resource name="users" list={usersList} show={usersShow} edit={usersEdit}/>
       <Resource name="Stores" list={StoresList} show={StoresShow} edit={StoresEdit}/>
       <Resource name="Categories" list={CategoriesList} />
       <Resource name="beer" list={BeerList} show={BeerShow} create={BeerCreate} />
       <Resource name="Brandy" list={BrandyList} show={BrandyShow} />
       <Resource name="application" create={ApplicationCreate} list={ApplicationList} show={ApplicantsShow} />
       <Resource name="ProfileCreate" create={ProfileCreate} />


  </Admin>
);

export default App;