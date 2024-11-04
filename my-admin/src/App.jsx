import { Admin, Resource, ListGuesser, PrevNextButtonClasses } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';
import { usersList,usersShow } from "./users";
import { StoresList,StoresShow } from "./Stores";
import { CategoriesList } from "./Categories";
import { BeerList, BeerShow, BeerCreate } from "./Beer";
import { BrandyList, BrandyShow } from "./Brandy";


const pbProvider = PocketBaseProvider("https://organic-rotary-phone-4j9pjg4vpw4cjqv6-8090.app.github.dev/");

const App = () => (
  <Admin 
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}
  >
       <Resource name="users" list={usersList} show={usersShow} />
       <Resource name="Stores" list={StoresList} show={StoresShow} />
       <Resource name="Categories" list={CategoriesList} />
       <Resource name="beer" list={BeerList} show={BeerShow} create={BeerCreate} />
       <Resource name="Brandy" list={BrandyList} show={BrandyShow} />

  </Admin>
);

export default App;