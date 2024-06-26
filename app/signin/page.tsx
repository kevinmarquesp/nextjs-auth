'use client'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  return (
    <main className='w-screen h-screen p-8 bg-black'>
      <form className='max-w-sm' onSubmit={async (event) => {
        event.preventDefault()

        const data = new FormData(event.target as HTMLFormElement)

        const signinResponse = await signIn("credentials", {
          redirect: false,
          email: data.get("email") as string,
          username: data.get("username") as string,
          password: data.get("password") as string,
        })

        if (signinResponse?.error)
          setError(signinResponse.error)
        else
          router.push("/")
      }}>
        <div>
          <FormInput required type='email' placeholder='Email' name='email' />
          <FormInput required type='text' placeholder='Username' name='username' />
          <FormInput required type='password' placeholder='Password' name='password' />
        </div>
        <button type='submit' className='inline-block w-full px-8 py-4 mb-3 text-center text-white bg-green-700 hover:bg-green-800 transition-all ease-linear font-bold rounded-md'>
          Register
        </button>
      </form>
      {error &&
        <span className="max-w-sm inline-block w-full px-8 py-4 mb-3 text-center text-white bg-red-700 rounded-md">
          {error}
        </span>}
    </main >
  );
}

function FormInput(props: Readonly<{
  className?: string,
  required?: boolean,
  type: string,
  placeholder: string,
  name: string,
}>) {
  return (
    <input
      className={'w-full px-8 py-4 mb-3 bg-zinc-900 rounded-md text-white border border-zinc-900 focus:outline-none focus:border-green-800 ' + (props.className ? props.className : '')}
      required={props.required ? true : false}
      type={props.type}
      placeholder={props.placeholder}
      id={props.name}
      name={props.name}
    />
  )
}
