import GamesList from "./GamesList";

const Recently  = () => {
    return ( 
        <div className="Recently">
        <div className="addedHero">
            <h1 className="pageTitle">
            RECENTLY ADDED
            </h1>
        </div>
        <GamesList/>
    </div>
     );
}
 
export default Recently ;