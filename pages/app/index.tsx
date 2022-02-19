import { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { AppLayout } from "../../components/layouts/app";
import AccessDenied from "../../components/accessDenied";

const App: NextPageWithLayout = () => {
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

App.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default App;
