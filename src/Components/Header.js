import React from 'react'
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons/faSquareGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import profilephoto from '../Images/pofilephoto.jpeg'

function Header() {
  return (
    <div className='App'>
      <div className="App-header">
        <div>
        <img src={profilephoto} style={{borderRadius: '100px', height: '200px', margin: '10px'}}/>
        </div>
        <p>Cedric Mentor</p>
        <TypeAnimation 
        className='TypeAnimation'
            sequence={[
                'Front-End developer.',
                1000,
                'I build web apps.',
                1000,
                'I fix problems.',
                1000
                ]}
                repeat={Infinity}
                speed={200}
                style={{ color: 'red'}}
        />
        <div>

        <a href='https://github.com/CedricM23'><FontAwesomeIcon className="logos" icon={faSquareGithub}/></a>
        <a href='https://bsky.app/profile/cedm23.bsky.social'><FontAwesomeIcon className="logos" icon={faBluesky}/></a>
        <a href='https://www.linkedin.com/in/cedric-mentor-064a77193'><FontAwesomeIcon className="logos" icon={faLinkedin}/></a>
        </div>

        <DotLottieReact
          className='arrow'
          src="https://lottie.host/182e9e07-8ddc-4833-8c0d-87d55da07455/RSACDKnQcm.lottie"
          loop
          autoplay 
          />
        </div>

    </div>
  )
}

export default Header
