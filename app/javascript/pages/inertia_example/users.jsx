import { router, Head } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./users.css";

export default function Friends({auth, friends, incoming_friend_requests, outgoing_friend_requests, users_no_requests}) {

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

    const accepted_friends = friends.map(friend => <div className="user friend" key={friend.id}>
        <p>{friend.email}</p>
        <button onClick={() => delete_friend(friend.id)}>Remove Friend</button>
    </div>)
    const incoming_friends = incoming_friend_requests.map(user => <div className="user pending" key={user.id}>
        <p>{user.email}</p>
        <button onClick={() => add_friend(user.id)}>Accept Friend</button>
    </div>)
    const outgoing_friends = outgoing_friend_requests.map(user => <div className="user pending" key={user.id}>
        <p>{user.email}</p>
        <button onClick={() => delete_friend(user.id)}>Cancel request</button>
    </div>)
    const other_users = users_no_requests.map(user => <div className="user no-request" key={user.id}>
        <p>{user.email}</p>
        <button onClick={() => add_friend(user.id)}>Add Friend</button>
    </div>);
    return(<div id="test-content">
        <Head title="Users" />
        {accepted_friends}
        {incoming_friends}
        {outgoing_friends}
        {other_users}
    </div>);
}

Friends.layout = (page) => <MainLayout children={page} />