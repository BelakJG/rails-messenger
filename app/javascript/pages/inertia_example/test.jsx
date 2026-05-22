import { usePage, router } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./test.css";

export default function Test() {
    const {auth, users} = usePage().props;

    const add_friend = (friend_id) => {
        router.post("/friendships", {
            friend_id: friend_id
        });
    }
    function is_friend(friend_id) {
        return auth.user.friends.some(user => user.id === friend_id);
    }
    const other_users = users.map(user => <div className="user" key={user.id}>
        <p>{user.email}</p>
        {is_friend(user.id) ? <button onClick={() => add_friend(user.id)}>Add Friend</button> : <button>Remove Friend</button>}
    </div>);
    return(<div id="test-content">{other_users}</div>);
}

Test.layout = (page) => <MainLayout children={page} />