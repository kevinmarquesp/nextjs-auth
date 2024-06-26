export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <div className="h-screen grid place-items-center">
      {children}
    </div>
  </>;
}