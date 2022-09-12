import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleXmark, faCircleChevronLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Window.module.css';



function Buttons(props) {
	return (
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
		    <BackButton href={ props.back } />
		  </li>
		  <li>
		    <Button />
		  </li>
		</ul>
	);
}

function Button(props) {
	return(
		<>
		  <span className={ styles.button }>
                    <FontAwesomeIcon icon={ faCircle } />
                  </span>
		</>
	);
}

function BackButton(props) {
	if(typeof props.href !== 'undefined') {
		return (
			<>
			  <Link href={ props.href }>
			    <a aria-label="Back">
			      <span className={ `${styles.button} ${styles.back}` }>
			        <FontAwesomeIcon icon={ faCircleChevronLeft } />
			      </span>
			    </a>
			  </Link>
			</>
		);
	}
	else {
		return (<Button />);
	}
}



export default function Window(props) {
	return (
		<>
		  <div className={ styles.window }>
		    <div className={ styles.header }>
		      <Buttons back={ props.back }/>
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
