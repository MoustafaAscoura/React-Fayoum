import './Footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"

export default function Footer () {
    return <>
        <div className='Footer'>
            <p className="fs-2">Copyrights - 2024</p>
            <FontAwesomeIcon size='xl' icon={faFacebook} />
        </div>
    </>
}