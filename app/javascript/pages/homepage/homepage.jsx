import { Head } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./homepage.css";

export default function Home({auth}) {
    return(<div id="homepage">
        <Head title="Rails Messenger" />
        <h1>Welcome, {auth.user.email}!</h1>
        <h3>Head over to the Users tab to add others and start a conversation with them!</h3>
    </div>);
}

Home.layout = (page) => <MainLayout children={page} />