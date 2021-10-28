import Genre from './Genre'
import Platform from './Platform'
import windows from '../img/Windows.png'
import browser from '../img/Browser.png'

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            
            {this.props.genre.map(e =>
              <Genre content={e.genre}/>
                )}
        </div>  
        );
    }
}
 
export default Tags;