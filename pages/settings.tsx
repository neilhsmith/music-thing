import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import { useSession } from "next-auth/react";
import { AppLayout } from "../components/layouts/app";
import AccessDenied from "../components/accessDenied";
import { Tabs, Tab, TabPanel } from "../components/tabs";

const Settings: NextPageWithLayout = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  } else if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <Tabs
      items={[
        <Tab label="General">
          <h1>General Settings</h1>
        </Tab>,
        <Tab label="Account">
          <h1>Account Settings</h1>
        </Tab>,
      ]}
    />
  );
};

Settings.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default Settings;
