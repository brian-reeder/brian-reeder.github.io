import Link from 'next/link';
import styles from '../styles/Window.module.css';

export default function Window(props) {
	return (
		<>
		  <div className={ styles.window }>
		    <div className={ styles.header }>
		      <ul className={ styles.buttons }>
		        <li>
		          <Link href="/">
		            <a>
		              <div className={ `${styles.button} ${styles.close}` }></div>
		            </a>
		          </Link>
		        </li>
		        <li>
		          <div className={ styles.button }></div>
		        </li>
		        <li>
		          <div className={ styles.button }></div>
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
