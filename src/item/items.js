import Item from "./Item.js"

const Items = ({itemData,category,addingTotal,search}) => {
    // console.log(itemData)
    // console.log(search)
    // console.log(itemData)
    return (
        <div style={{
            paddingBottom:'170px'
            }}>
            {itemData.filter(item => item.type == category && (item.name).includes(search) ).map(item => {
                return <Item {...item} addingTotal={addingTotal}/>
            })}

        </div>
    )
}

export default Items