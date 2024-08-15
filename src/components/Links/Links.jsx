import LinksItem from '../LinksItem/LinksItem';
import './Links.css'

function Links() {

    const ArrayOfObject = [
        {ItemName: "GitHub" ,id:1},
        {ItemName: "Frontend Mentor" ,id:2 },
        {ItemName: "Linkedin" ,id:3},
        {ItemName: "Twitter" ,id:4},
        {ItemName: "Instagram" ,id:5}
        
    ];
    return(
       
        <div id='links'>
            {ArrayOfObject.map((item) => {
                return(
                    
                    <LinksItem 
                    key={item.id}
                    ItemName={item.ItemName} >
                    </LinksItem>                    
                )
           
         })}
                        
        </div>
        
        
    )
}

export default Links;


        //  <div id='links'>
    //     <button  href="#">
    //     <span>GitHub</span>
    // </button>

    // <button  href="#">
    //     <span>Frontend Mentor</span>
    // </button>

    // <button id='lnkedin' href="#">
    //     <span>Linkedin</span>
    // </button>

    // <button  href="#">
    //     <span>Twitter</span>
    // </button>

    // <button  href="#">
    //     <span>Instagram</span>
    // </button>

        // </div>



         // return (
    //     <div id='links'>
           
    //         <LinksItem ItemName="GitHub" ></LinksItem>
    //         <LinksItem ItemName="Frontend Mentor" ></LinksItem>
    //         <LinksItem ItemName="Linkedin" ></LinksItem>
    //         <LinksItem ItemName="Twitter" ></LinksItem>
    //         <LinksItem ItemName="Instagram" ></LinksItem>
 
    //     </div>

    // )
