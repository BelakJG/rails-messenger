import { router } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./friends.css";

export default function Friends({auth, users}) {

    const add_friend = (friend_id) => {
        router.post("/friendships", {
            friend_id: friend_id
        });
    }
    const delete_friend = (friend_id) => {
        router.delete(`/friendships/${friend_id}`);
    }

    function is_friend(friend_id) {
        return auth.user.friends.some(user => user.id === friend_id);
    }
    function is_pending(friend_id) {
        return auth.user.pending.some(user => user.id === friend_id);
    }
    const other_users = users.map(user => <div className="user" key={user.id}>
        <p>{user.email}</p>
        {is_pending(user.id) ? <button onClick={() => add_friend(user.id)}>Accept Friend</button>
        : !is_friend(user.id) ? <button onClick={() => add_friend(user.id)}>Add Friend</button>
        : <button onClick={() => delete_friend(user.id)}>Remove Friend</button>}
    </div>);
    return(<div id="test-content">{other_users}</div>);
}

Friends.layout = (page) => <MainLayout children={page} />