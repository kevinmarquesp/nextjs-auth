export default function Login() {
  return (
    <main className="w-screen h-screen p-8 bg-black">
      <form action="" className="max-w-sm">
        <div className="mb-3">
          <input
            className="w-full px-8 py-4 mb-3 bg-zinc-900 rounded-md text-white border border-zinc-900 focus:outline-none focus:border-green-800"
            required
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <input
            className="w-full px-8 py-4 mb-3 bg-zinc-900 rounded-md text-white border border-zinc-900 focus:outline-none focus:border-green-800"
            required
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
          <input
            className="w-full px-8 py-4 mb-3 bg-zinc-900 rounded-md text-white border border-zinc-900 focus:outline-none focus:border-green-800"
            required
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="inline-block w-full px-8 py-4 mb-3 text-center text-white bg-zinc-700 hover:bg-zinc-800 transition-all ease-linear font-bold rounded-md">
          Enter with Google
        </button>
        <button type="submit" className="inline-block w-full px-8 py-4 mb-3 text-center text-white bg-green-700 hover:bg-green-800 transition-all ease-linear font-bold rounded-md">
          Register
        </button>
      </form>
    </main >
  );
}
