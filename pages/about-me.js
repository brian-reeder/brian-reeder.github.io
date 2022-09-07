import dynamic from 'next/dynamic';
import Head from 'next/head';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Window = dynamic(() => import('../components/Window'), {
	ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="How to contact Brian Reeder." />
      </Head>
      <Window title="About Me">
        <h1>Hi, I'm Brian!</h1>
        <p>I'm currently a Senior Cyber Security Analyst protecting computer networks from security threats. I graduated from the University of North Texas, where I studied Computer Science.</p>
	<br />
        <ul className="socials-list flex">
          <li><p>Connect with me</p></li>
          <li>
            <a href="https://www.linkedin.com/in/brian-reeder/" aria-label="LinkedIn" target="_blank">
	      <span className="social-icons">
	        <FontAwesomeIcon icon={ faLinkedin } />
	      </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/brian-reeder" aria-label="GitHub" target="_blank">
	      <span className="social-icons">
	        <FontAwesomeIcon icon={ faSquareGithub } />
	      </span>
            </a>
          </li>
          <li>
            <a href="mailto:brian.reeder@outlook.com" aria-label="E-Mail" target="_blank">
	      <span className="social-icons">
	        <FontAwesomeIcon icon={ faSquareEnvelope } />
	      </span>
            </a>
          </li>
        </ul>
      </Window>
    </>
  );
}
