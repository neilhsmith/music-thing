import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/accessDenied";

const App: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  } else if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <p>Signed in as {session?.user?.email}</p>;
};

export default App;
