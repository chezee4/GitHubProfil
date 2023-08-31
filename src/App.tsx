import { Container } from "./UI/layout";
import Header from "./components/Header";
import Search from "./components/Search";
import  UserCard  from "./components/UserCard";
import UserProvider from "./utils/context/UserContext";

function App() {
  return (
    <div className=" bg-custom-gray-50 dark:bg-custom-gray-500 h-screen font-custom-Merienda">
      <Container>
        <Header />
        <UserProvider>
          <Search />
          <UserCard />
        </UserProvider>
      </Container>
    </div>
  );
}

export default App;
