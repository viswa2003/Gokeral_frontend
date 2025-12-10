import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      {/* You can add a shared header, navbar, or footer here */}
      <Outlet />
    </>
  );
};

export default RootLayout;