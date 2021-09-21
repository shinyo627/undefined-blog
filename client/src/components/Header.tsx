import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Header: FC = (props: Props) => {
  return (
    <header>
      <div>
        <Link to='/'>{/* <img src="" alt="" /> */}</Link>
      </div>

      <div>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
