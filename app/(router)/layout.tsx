export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <div className="max-w-[80ch] mx-auto px-5 py-6">
      {children}
    </div>
  </>;
}
