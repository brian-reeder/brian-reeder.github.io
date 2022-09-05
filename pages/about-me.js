import dynamic from 'next/dynamic';
import Head from 'next/head';

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
          <li>Connect with me</li>
          <li>
            <a href="https://www.linkedin.com/in/brian-reeder/" target="_blank">
              <i className="socials fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/brian-reeder" target="_blank">
              <i className="socials fa-brands fa-square-github"></i>
            </a>
          </li>
          <li>
            <a href="mailto:brian.reeder@outlook.com" target="_blank">
              <i className="socials codicon codicon-mail"></i>
            </a>
          </li>
        </ul>
      </Window>
    </>
  );
}
