import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Window.module.css';

export default function Window(props) {
	return (
		<>
		  <div className={ styles.window }>
		    <div className={ styles.header }>
		      <ul className={ styles.buttons }>
		        <li>
		          <Link href="/">
		            <a aria-label="Close pane">
		              <span className={ `${styles.button} ${styles.close}` }>
		                <FontAwesomeIcon icon={ faCircleXmark } />
		              </span>
		            </a>
		          </Link>
		        </li>
		        <li>
		          <span className={ styles.button }>
		            <FontAwesomeIcon icon={ faCircle } />
		          </span>
		        </li>
		        <li>
		          <span className={ styles.button }>
		            <FontAwesomeIcon icon={ faCircle } />
		          </span>
		        </li>
		      </ul>
		      <div className={ styles.filler }></div>
		      <div className={ styles.title }>{ props.title }</div>
		      <div className={ styles.filler }></div>
		      <div className={ styles.buttons }></div>
		    </div>
		    <div className={ styles.contents }>
		      { props.children }
		    </div>
		  </div>
		</>
	);
}
