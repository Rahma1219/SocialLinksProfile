import './SocialLinks.css'
import PhotoProfile from '../../assets/images/avatar-jessica.jpeg'
import Links from '../Links/Links'


function SocialLinksProfile() {

    return (
        <div id='pp' className='profilecard'>
            <img src={PhotoProfile} />
            <div id='info'>
                <h2 id='name' >Jessica Randall</h2>
                <p id='adress' >London,United Kingdum</p>
                <p id='job'>"Front-end developer and avid reader."</p>
            </div>
            <div>
                <Links></Links>
            </div>
        </div>
      


    )
}

export default SocialLinksProfile

