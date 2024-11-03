import { Admin, Resource, ListGuesser, PrevNextButtonClasses } from "react-admin";
import {PocketBaseProvider} from './ra-pocketbase';

const pbProvider = PocketBaseProvider("https://organic-rotary-phone-4j9pjg4vpw4cjqv6-8090.app.github.dev/");

const App = () => (
  <Admin 
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;