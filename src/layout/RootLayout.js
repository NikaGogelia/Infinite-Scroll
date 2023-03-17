import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default RootLayout;
