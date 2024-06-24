'use client'

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className='w-screen h-screen p-8 bg-black'>
      <form action={async (data) => {
        const signinResponse = await signIn("credentials", {
          email: data.get("email"),
          username: data.get("username"),
          password: data.get("password"),
        })
      }} className='max-w-sm'>

        <div className='mb-3'>
          <FormInput required type='email' placeholder='Email' name='email' />
          <FormInput required type='text' placeholder='Username' name='username' />
          <FormInput required type='password' placeholder='Password' name='password' />
        </div>

        <button type='submit' className='inline-block w-full px-8 py-4 mb-3 text-center text-white bg-zinc-700 hover:bg-zinc-800 transition-all ease-linear font-bold rounded-md'>
          Enter with Google
        </button>

        <button type='submit' className='inline-block w-full px-8 py-4 mb-3 text-center text-white bg-green-700 hover:bg-green-800 transition-all ease-linear font-bold rounded-md'>
          Register
        </button>

      </form>
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
