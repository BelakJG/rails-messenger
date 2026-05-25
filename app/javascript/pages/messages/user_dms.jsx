import { Head, useForm } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";
import "./user_dms.css";

export default function DMs({ auth, messages, other_user }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        messages: {
            body: '',
            receiver_id: other_user.id
        }
    })

    function submit(e) {
        e.preventDefault();
        post("/messages", {
            onSuccess: () => reset("messages.body")
        });
    }

    const message_elements = messages.map((message) => <p className={message.sender_id === auth.user.id ? "sent" : "received"}>{message.body}</p>);

    return(<div id="user-messages">
        <Head title={`${other_user.email}`} />
        <h1>{other_user.email}</h1>
        <div id="messages">
            {message_elements}
        </div>
        <form onSubmit={submit}>
            <input type="textarea" value={data.messages.body} onChange={(e) => setData("messages", {...data.messages, body: e.target.value})} ></input>
            {errors.body && <div>{errors.body}</div>}
            <button type="submit" disabled={processing}>Send</button>
        </form>
    </div>);
}

DMs.layout = (page) => <MainLayout children={page} />