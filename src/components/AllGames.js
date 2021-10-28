import GamesList from "./GamesList";
import Dropdown from './Dropdown'
import AllGamesContent from './AllGamesContent'
const AllGames = () => {
    return (
        <div className="AllGames">
            <div className="allGamesHero">

                <h1 className="pageTitle">
                    ALL GAMES
                </h1>
            </div>
            {/* <Dropdown /> */}
            <AllGamesContent></AllGamesContent>
        </div>
    );
}

export default AllGames;