// import { cookies } from "next/headers";

import { getServerSession } from "next-auth";

export default async function App() {
  const currentSession = await getServerSession()

  // const cookie = cookies().get("next-auth.session-token")
  // const currentSession = cookie ? cookie.value : null

  return (
    <main className="w-screen h-screen p-8 bg-black">
      <div className="max-w-sm">
        <pre className="w-full px-8 py-4 mb-6 bg-zinc-900 rounded-md text-green-500">
          {JSON.stringify(currentSession, null, 2)}
        </pre>
        <a href="/login" className="inline-block w-full px-8 py-4 mb-3 text-center text-white bg-zinc-700 hover:bg-zinc-800 transition-all ease-linear font-bold rounded-md">
          Login
        </a>

        {currentSession ?
          <button className="inline-block w-full px-8 py-4 text-center text-white bg-red-700 hover:bg-red-800 transition-all ease-linear font-bold rounded-md">
            Logout
          </button>
          : <a href="/signin" className="inline-block w-full px-8 py-4 mb-3 text-center text-white bg-green-700 hover:bg-green-800 transition-all ease-linear font-bold rounded-md">
            Signin
          </a>}
      </div>
    </main >
  );
}
