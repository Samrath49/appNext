import Link from 'next/link';
import { Fragment } from "react";

function GamesPage() {
  return (
    <Fragment>
      <h1> The Games Page</h1>
      <ul>
        <li>
          <a href="/games/js-games">Games build with JS</a>
          {/* Here we get the page but it is not a how react single page works we load at fetching */}
        </li>
        <li>
          <Link href="/games/regular-games"> Games built without JS</Link></li>
          {/* Notice we do not fetch anything when we use the Link tag and provides single page application functionality
          and therfore it is the preferred manner of using links in the next application */}
      </ul>
    </Fragment>
  );
}

export default GamesPage;