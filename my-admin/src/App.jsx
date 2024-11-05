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

import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import LiquorIcon from '@mui/icons-material/Liquor';
import ApplicationIcon from '@mui/icons-material/Assignment';

const pbProvider = PocketBaseProvider("https://organic-rotary-phone-4j9pjg4vpw4cjqv6-8090.app.github.dev/");

const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}
  title='Suip Committee'
  loginPage={CustomLoginPage}
    customRoutes={
      <CustomRoutes>
        <Route path="/create-profile" element={<ProfileCreate />} />
        <Route path="/users" element={<usersList />} />
      </CustomRoutes>
    }
  >
       <Resource name="users" list={usersList} show={usersShow} edit={usersEdit} icon={PersonIcon}/>
       <Resource name="Stores" list={StoresList} show={StoresShow} edit={StoresEdit} icon={StoreIcon}/>
       <Resource name="Categories" list={CategoriesList} icon={CategoryIcon}/>
       <Resource name="beer" list={BeerList} show={BeerShow} create={BeerCreate} icon={LocalDrinkIcon}/>
       <Resource name="Brandy" list={BrandyList} show={BrandyShow} icon={LiquorIcon}/>
       <Resource name="application" create={ApplicationCreate} list={ApplicationList} show={ApplicantsShow} icon={ApplicationIcon} />
       <Resource name="ProfileCreate" create={ProfileCreate} />


  </Admin>
);

export default App;