import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="bg-red-500 h-full">{children}</div>;
};

export default AuthLayout;
