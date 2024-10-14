import { Button, Container, useColorMode } from "@chakra-ui/react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BillingCreate from "./pages/billing-create.tsx";
import Home from "./pages/home.tsx";

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p="0">
      <Router>
        <>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              padding: "1rem 0",
            }}
          >
            <Link to="/">
              <Button variant="link">Home</Button>
            </Link>
            <Link to="/billing/create">
              <Button variant="link">Create Billing</Button>
            </Link>
            <Button onClick={toggleColorMode} variant="link">
              {useColorMode().colorMode === "light" ? "🌗" : "🌞"}
            </Button>
          </nav>
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
