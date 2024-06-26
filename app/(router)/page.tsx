import Link from "next/link";
import { Button } from "../_components/Button";

export default function Root() {
  return <>
    <div className="space-x-3">
      <Link href="/register">
        <Button type="relevant">Register</Button>
      </Link>
      <Link href="/">
        <Button>Enter</Button>
      </Link>
    </div>

    <hr className="border-zinc-800 my-4" />

    <h1 className="text-3xl font-bold">
      Hello world!
    </h1>
  </>;
}
