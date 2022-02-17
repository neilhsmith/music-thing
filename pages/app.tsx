import type { NextPage } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/accessDenied";

const App: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  } else if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>Signed in as {session?.user?.email}</p>
      <p>
        <Link href="/api/auth/signout">Sign Out</Link>
      </p>
    </>
  );
};

export default App;
