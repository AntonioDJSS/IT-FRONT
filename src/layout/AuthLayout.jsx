import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="">
        <main className="">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
