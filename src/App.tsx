import { Container } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import BillingCreate from "./pages/billing-create.tsx";
import Home from "./pages/home.tsx";

function App() {
  return (
    <Container maxW="container.xl" p="0">
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/billing/create" Component={BillingCreate} />
          </Routes>
        </>
      </Router>
    </Container>
  );
}

export default App;
