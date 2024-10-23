import TrendingImg from "../assets/icons/trending.svg";
import NewReleaseImg from "../assets/icons/newRelease.svg";
import ComingSoonImg from "../assets/icons/comingSoon.svg";
import FavoriteImg from "../assets/icons/favorite.svg";
import WatchLaterImg from "../assets/icons/watchLater.svg";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={TrendingImg} width="24" height="24" alt="" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={NewReleaseImg} width="24" height="24" alt="" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={ComingSoonImg} width="24" height="24" alt="" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={FavoriteImg} width="24" height="24" alt="" />
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={WatchLaterImg} width="24" height="24" alt="" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
