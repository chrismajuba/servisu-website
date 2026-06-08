import { ROUTES } from "../../config/routes";

const PublicRoute = ({ children, redirectTo = ROUTES.HOME }) => {
  void redirectTo;
  return children;
};

export default PublicRoute;
