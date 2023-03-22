import { useAuth } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../const';

export default function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate(Path.HOME));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
