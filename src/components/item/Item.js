import ActionItem from "./ActionItem"

const Item = ({fruit_img,name,id,total,addingTotal}) => {

    return(
        <div className="item__wrapper" style={{
            margin:'20px 0',
            // boxShadow:'0px 7px 20px -4px rgba(171,171,171,1)',
            borderRadius:'20px',
            backgroundColor:'#fff',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            userSelect:'none'
        }}>
            <div className="item" style={{
                display:'flex',
                alignItems:'center',
                padding:'10px 0'
            }}>
                <div className="item--img__wrapper" style={{
                    width:'92px',
                    marginRight:'15px',
                }}>
                    <img src={fruit_img} style={{width:'100%'}}/>
                </div>
                <h5>{name}</h5>
            </div>
            <div className="item-action" style={{
                display:'flex',
                alignItems:'center'
            }}>
                <span className="total-item">{total}</span>
                <div className="add-item" onClick={() => {addingTotal(id,1)}}>
                    <ActionItem text='+'/>
                </div>
                <div className="decrease-item" onClick={() => {addingTotal(id,-1)}}>
                    <ActionItem text='-'/>
                </div>
            </div>

        </div>
    )
}

export default Item