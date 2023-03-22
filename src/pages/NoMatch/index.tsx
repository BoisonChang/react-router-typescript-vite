import { Link } from 'react-router-dom';
import { Path } from '../../const';

export default function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={Path.HOME}>Go to the home page</Link>
      </p>
    </div>
  );
}
