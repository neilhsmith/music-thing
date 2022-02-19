import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { useSession } from "next-auth/react";
import { AppLayout } from "../components/layouts/app";
import AccessDenied from "../components/accessDenied";

const Search: NextPageWithLayout = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  } else if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Search</h1>
    </>
  );
};

Search.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Search;
