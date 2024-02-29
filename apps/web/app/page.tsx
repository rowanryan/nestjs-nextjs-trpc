import Clientside from "./Clientside";
import { trpc } from "./trpc";

export const dynamic = "force-dynamic";

export default async function Home() {
    const response = await trpc.hello.query({});
    return (
        <div>
            <p>Server side - {response}</p>
            <Clientside />
        </div>
    );
}
