import { Link, router } from "@inertiajs/react";

export default function MainLayout({ children }) {
  return (
    <>
      <header style={{ backgroundColor: "rebeccapurple" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bolder",
          }}
        >
          <Link href="test">Test</Link>
          <Link href="/">Home</Link>
          <Link href="users/sign_out" method="delete" as="button">Log out</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
