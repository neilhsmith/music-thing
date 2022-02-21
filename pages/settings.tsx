import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { useSession } from "next-auth/react";
import { AppLayout } from "../components/layouts/app";
import AccessDenied from "../components/accessDenied";
import { Tabs } from "../components/tabs";

const Settings: NextPageWithLayout = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  } else if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <Tabs
      orientation="vertical"
      items={[
        {
          label: "General",
          panel: (
            <div>
              <h1>General Settings</h1>
            </div>
          ),
        },
        {
          label: "Account",
          panel: (
            <div>
              <h1>Account Settings</h1>
            </div>
          ),
        },
      ]}
    />
  );
};

Settings.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Settings;
