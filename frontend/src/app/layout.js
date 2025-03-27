import AdminHeader from "@/app/components/layout/header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <AdminHeader />
        {children}

      </body>
    </html>
  );
}

