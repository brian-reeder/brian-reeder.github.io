import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Layout.module.css';

function FolderElement(props) {
  const router = useRouter()
  const pathname = "/" + props.id;
  var className = `codicon codicon-folder ${styles['codicon']}`;
  var route = props.id;
  if(pathname == router.pathname) {
	  className = `codicon codicon-folder-opened ${styles['codicon']}`;
	  route = "/";
  }
  return (
	  <li id={ styles[props.id] } className={ styles['nav-item'] }>
            <Link href={ route }>
              <a>
                <i className={ className }></i>
                { props.children }
              </a>
            </Link>
          </li>
  );
}

export default function Default({children}) {

	return(
		<>
		  <Head>
		    <title>@brian-reeder</title>
		  </Head>
		  <ul className={ styles['nav-list'] }>
		    <FolderElement id="about-me">
		      <p className={ styles['nav-description'] }>About Me</p>
		    </FolderElement>
		    <FolderElement id="blog">
		      <p className={ styles['nav-description'] }>Blog</p>
		    </FolderElement>
		    <FolderElement id="notes">
		      <p className={ styles['nav-description'] }>Notes</p>
		    </FolderElement>
		  </ul>
		  { children }
		</>
	)
}
