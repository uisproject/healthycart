import loadingGIF from './assets/Shopping cart.gif'

const Loading = () => {
    return(
        <div className='loading__wrapper' style={{
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50%,-50%)'

        }}>
            <div className='loading-gif__wrapper' style={{
                display:'grid',
                placeContent:'center'
            }}>
                <img src={loadingGIF} />
            </div>
            <span style={{marginTop:'10px'}}>Loading Fruits and Vegetables. . .</span>
        </div>
    )
}

export default Loading