import { Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();

  return (
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
  );
}
