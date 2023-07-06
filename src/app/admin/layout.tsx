export const metadata = {
  title: "Amer Mohamed",
  description:
    "A great portfolio has a nice stuff about me and my nice projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-800">{children}</div>;
}
