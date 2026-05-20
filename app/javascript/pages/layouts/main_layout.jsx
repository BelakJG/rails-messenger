import { Link } from "@inertiajs/react";

export default function MainLayout({children}) {
    return(<>
        <header style={{backgroundColor: "rebeccapurple"}}>
            <nav style={{display: "flex", alignItems: "center", justifyContent: "space-around", color: "white", fontSize: "1.5rem", fontWeight: "bolder"}}>
                <Link href="/">Home</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>);
}