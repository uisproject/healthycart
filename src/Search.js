import mainStyle from './styles/mainStyle.css'
import searchIcon from './assets/search-icon.png'
import inputPlaceholder from './styles/inputPlaceholder.css'

const Search = ({searchHandler}) => {

    return(
        <div className="search__wrapper" style={{
            width:'100%',
            position:'relative',
            }}>
            <div className='search-icon__wrapper' style={{
                width:'15px',
                position:'absolute',
                right:'10px',
                top:'50%',
                transform:'translateY(-50%)',
                display:'grid',
                placeContent:'center'
                }}>

                <img src={searchIcon} style={{
                    width:'100%'
                    }}/>
            </div>
            <input type='text' onChange={(e)=>{searchHandler(e)}} className='input-search' placeholder='Search' style={{
                width:'100%',
                height:'3em',
                borderRadius:'1em',
                border:'none',
                padding:'0 25px 0 15px',
                boxSizing:'border-box',
                backgroundColor:'#F4F6F8'
            }}/>
        </div>
    )
}

export default Search