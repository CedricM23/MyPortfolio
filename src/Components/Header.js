import React from 'react'
import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons/faSquareGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Header() {
  return (
    <div className='App'>
      <div className="App-header">
        <p>Cedric Mentor</p>
        <TypeAnimation 
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
          src="https://lottie.host/89090780-2ea4-4e78-a891-1f0aa3c7091e/VPUfpJBGk6.lottie"
          loop
          autoplay 
          />
        </div>

    </div>
  )
}

export default Header
