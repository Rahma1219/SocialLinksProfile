import './LinksItem.css'

function LinksItem(props){
    return(
    <button href='#'>
        <span>{props.ItemName}</span>
    </button>

    );
}

export default LinksItem