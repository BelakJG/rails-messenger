import { usePage } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./test.css";

export default function Test() {
    const {auth, users} = usePage().props;
    const other_users = users.map(user => <p key={user.id}>{user.email}</p>);
    return(<div id="test-content">{other_users}</div>);
}

Test.layout = (page) => <MainLayout children={page} />