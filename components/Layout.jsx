import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import{ join } from 'path';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolderClosed } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/Layout.module.css';

function FolderElement(props) {
  const router = useRouter()
  const pathname = "/" + props.id;
  var icon = faFolderClosed;
  var className = `${ styles['nav-icon'] } `;
  var route = `/${props.id}`;
  if(router.pathname.startsWith(pathname)) {
	  icon = faFolderOpen;
	  className +=  styles['active'];
	  route = "/";
  }
  return (
	  <li id={ styles[props.id] } className={ styles['nav-item'] }>
            <Link href={ route }>
              <a>
	        <span>
                  <FontAwesomeIcon icon={ icon } className={ className } />
	        </span>
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
