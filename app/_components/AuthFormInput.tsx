export function AuthFormInput({
  type,
  placeholder,
  name,
}: Readonly<{
  type: string;
  placeholder: string;
  name: string;
}>) {
  return <>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      required
      className="outline-none bg-zinc-900 px-5 py-4 rounded-lg border border-zinc-900 focus:border-gray-500/50 w-full"
    />
  </>;
}
