import { useBreadcrumb } from "@refinedev/core";
import { Link } from "react-router-dom";

export const Breadcrumb = () => {
  const { breadcrumbs } = useBreadcrumb();

  return (
    <ul className="breadcrumb">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <li key={`${breadcrumb.label}`}>
            {breadcrumb.href ? (
              <>
                {index > 0 && <span className="separator">/</span>}
                <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
              </>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
