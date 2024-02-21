import { PropsWithChildren } from "react";
import { Breadcrumb } from "../breadcrumb";
import Sidebar from '../sidebar';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-row layout">
      <Sidebar />
      <div className="flex flex-col w-full ml-64">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
