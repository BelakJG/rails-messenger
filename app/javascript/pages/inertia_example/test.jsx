import { usePage } from "@inertiajs/react";
import MainLayout from "../layouts/main_layout";

export default function Test() {
    const {auth} = usePage().props
    return(<div>
        <h1>Test</h1>
        <h1>{auth.user.email}</h1>
    </div>);
}

Test.layout = (page) => <MainLayout children={page} />