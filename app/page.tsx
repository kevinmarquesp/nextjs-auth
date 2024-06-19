export default function App() {
  const current_session = { msg: 'Hello', data: { foo: 'foo', bar: 'bar', baz: 'baz' } }
  // const current_session = null

  return (
    <main className="w-screen h-screen p-4 bg-black">
      <div className="max-w-sm">
        <pre className="w-full px-8 py-4 mb-3 bg-zinc-900 rounded-md text-green-500">
          {JSON.stringify(current_session, null, 2)}
        </pre>
        <a href="/login" className="inline-block w-full px-8 py-4 mb-3 text-center text-white bg-green-700 hover:bg-green-800 transition-all ease-linear font-bold rounded-md">
          Login
        </a>
        {current_session ?
          <button className="inline-block w-full px-8 py-4 text-center text-white bg-red-700 hover:bg-red-800 transition-all ease-linear font-bold rounded-md">
            Logout
          </button>
          : <></>}
      </div>
    </main >
  );
}
