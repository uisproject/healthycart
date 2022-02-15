import mainStyle from './styles/mainStyle.css'
import { memo } from 'react'

const Category = ({img, title,categoryHandler}) => {
    console.log('caetegory called')

    return(
        <div className="category" onClick={() => {categoryHandler(title)}} style={{
            backgroundColor:'#F4F6F8',
            margin:'20px 0',
            borderRadius:'1em',
            cursor:'pointer'
        }}>
            <div className="category--img__wrapper" style={{
                width:'150px',
                height:'100%',
                display:'grid',
                placeContent:'center'
            }}>
                <img src={img} alt='' className='category--img' style={{
                    width:'100px',
                    height:'70px',
                }}/>
                <h4 style={{textAlign:'center'}}>{title}</h4>
            </div>

        </div>
    )
}

export default memo(Category)