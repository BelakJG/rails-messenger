import MainLayout from "../layouts/main_layout";

export default function DMs({ messages, other_user }) {
    return(<div id="user-messages">
        <h1>DMS</h1>
        <h1>{other_user.email}</h1>
    </div>);
}

DMs.layout = (page) => <MainLayout children={page} />