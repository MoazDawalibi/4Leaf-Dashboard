import { useNavigate } from "react-router-dom";
import useAuthState from "../zustand/AuthState";
import { useEffect } from "react";

interface ProtectedRouteProviderProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

function ProtectedRouteProvider({
  children,
  ...props
}: ProtectedRouteProviderProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  return <div {...props}>{children}</div>;
}

export default ProtectedRouteProvider;
