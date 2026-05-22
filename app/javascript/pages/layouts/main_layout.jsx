import { Link, router, usePage } from "@inertiajs/react";
import default_profile from "/assets/default_profile.svg";
import "./layout.main.css"

export default function MainLayout({ children }) {
  function logout() {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/users/sign_out";

    const method = document.createElement("input");
    method.type = "hidden";
    method.name = "_method";
    method.value = "delete";

    const token = document.createElement("input");
    token.type = "hidden";
    token.name = "authenticity_token";
    token.value = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    form.appendChild(method);
    form.appendChild(token);

    document.body.appendChild(form);
    form.submit();
  }

  const {auth} = usePage().props
  const user_friends = auth.user.friends.map((friend) => <img src={default_profile} key={friend.id}></img>)

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
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>
        <div id="sidebar">
          {user_friends}
        </div>  
        {children}
      </main>
    </>
  );
}
