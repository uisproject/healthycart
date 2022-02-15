const AddedItem = ({totalCart}) => {

    const transformAnimation = () => {
        if(totalCart == 0){
            return 'translate(-50%,200%)'
        }

        return 'translate(-50%,-150%)'
    }

    return(
        <div className="added-item__wrapper">
            <div className="added-item"  style={{
                position:'fixed',
                zIndex:'10',
                bottom:'0',
                left:'50%',
                transform:transformAnimation(),
                display:'flex',
                justifyContent:'space-between',
                maxWidth:'500px',
                width:'300px',
                backgroundColor:'#FD9E71',
                padding:'10px',
                borderRadius:'15px',
                color:'#fff',
                transition:'all 1s'
            }}>
                <span>Item Added to cart</span>
                <span>{totalCart}</span>
            </div>
        </div>
    )
}

export default AddedItem