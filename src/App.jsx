import { UserProvider } from "./Contexts/UserContext/UserContext";
import { UserRoutes } from "./Routes/userRoutes";

function App() {
    return (
        <UserProvider>
            <UserRoutes></UserRoutes>
        </UserProvider>
    );
}

export default App;
