import GamesList from "./GamesList";
import SingleCardSmall from "./SingleCardSmall";
import HomeRecentlyAddedGrid from "./HomeRecentlyAddedGrid";
import HomeBrowserGrid from "./HomeBrowserGrid";
// Fabi
import Top1Card from './Top1Card';
import TopCardItem from "./TopCardItem";
import TopPCGamesFabi from "./TopPcGamesFabi";


const Home = () => {
    return (
        <div className="Home">
            <div className="homeHero">
                <h1 className="pageTitle">
                    FIND & TRACK THE <br /> BEST FREE-TO-PLAY <br /> GAMES!
                </h1>
            </div>
            <section className="added">
                <h3>Recently Added</h3>
                {/* auskommentiert Fabi */}
                {/* <GamesList/> */}
                {/* Test SingleCardSmall Fabi */}
                <HomeRecentlyAddedGrid />
            </section>
            <section className="top-games">
                <h3>Top 4 Games for PC in Septmeber 2021</h3>
                {/* Fabi */}
                {/* <Top1Card />
                <TopCardItem /> */}
                <TopPCGamesFabi />
            </section>
            <section className="top-browser-games">
                <h3>Top 4 Games for Browser in September 2021</h3>
                <HomeBrowserGrid />
            </section>
        </div>
    );
}

export default Home;