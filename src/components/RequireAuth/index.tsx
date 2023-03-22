import { useAuth } from '../../hooks';
import { useLocation, Navigate } from 'react-router-dom';
import { getAuthRequirement } from '../../helper/auth';
import { AuthRequirement, Path } from '../../const';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  const path = location.pathname;
  let authRequirement = getAuthRequirement(path, auth);

  switch (authRequirement as AuthRequirement) {
    case AuthRequirement.LOGIN:
      return <Navigate to={Path.LOGIN} state={{ from: location }} replace />;
    case AuthRequirement.ADMIN_ONLY:
      return <Navigate to={Path.NOMATCH} state={{ from: location }} replace />;
    case AuthRequirement.NOTHING_HERE:
      return <Navigate to={Path.NOMATCH} state={{ from: location }} replace />;
    case AuthRequirement.NONE:
      return children;
  }
}
