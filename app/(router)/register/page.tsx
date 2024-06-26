import { AuthFormInput } from "@/app/_components/AuthFormInput";
import { Button } from "@/app/_components/Button";

export default function Root() {
  return <>
    <form className="max-w-[30ch]" action="">
      <div className="space-y-2 mb-4">
        <AuthFormInput type="email" placeholder="Email" name="email" />
        <AuthFormInput type="text" placeholder="Username" name="username" />
        <AuthFormInput type="password" placeholder="Passowrd" name="password" />
      </div>
      <Button type="relevant" className="w-full px-5 py-4">
        Create Account!
      </Button>
    </form>
  </>;
}
