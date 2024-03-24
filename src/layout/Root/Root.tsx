import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "util";
import Layout from "..";

interface Props {
  isHeader?: boolean;
}
export const Root = ({ isHeader = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isHeader && !getCookie("access")) {
      if (location.pathname === "/check_in") {
        navigate("/", { state: { redirect: "/check_in" } });
      } else if (location.pathname === "/coupon") {
        navigate("/", { state: { redirect: "/coupon" } });
      } else navigate("/");
    }
  }, []);

  return (
    <Layout.Container>
      {isHeader && <Layout.Header />}
      <Outlet />
    </Layout.Container>
  );
};
