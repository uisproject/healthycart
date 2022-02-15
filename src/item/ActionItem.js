const ActionItem = ({text}) => {
    return(
        <div style={{
            width:'50px',
            height:'50px',
            backgroundColor:'#F4F6F8',
            fontSize:'2em',
            display:"grid",
            placeContent:'center',
            borderRadius:'.3em',
            margin:'0 5px',
            cursor:'pointer'
        }}>
            {text}
        </div>
    )
}

export default ActionItem