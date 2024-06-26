import { ReactNode } from "react";

export function Button({ children, className, type = "normal" }: Readonly<{
  children: ReactNode;
  className?: string;
  type?: "normal" | "relevant" | "important";
}>) {
  let bgColor;

  switch (type) {
  case "relevant":
    bgColor = "bg-green-700 hover:bg-green-800";
    break;

  case "important":
    bgColor = "bg-red-700 hover:bg-red-800";
    break;

  default:
    bgColor = "bg-zinc-900 hover:bg-zinc-800";
  }

  return <>
    <button className={`${bgColor} transition-colors duration-75 ease-linear rounded-md outline-none  ${className ? className : "min-w-24 px-3 py-2 "}`}>
      {children}
    </button>
  </>;
}
