import Link from 'next/link';
import styles from '../styles/Window.module.css';

export default function Window({children}) {
	return (
	  <>
		<div className={styles.window}>
			<div className={styles.header}>
				<ul className={styles.buttons}>
					<Link href="/">
						<a>
							<li className={`${styles.button} ${styles.close}`}></li>
						</a>
					</Link>
					<li className={styles.button}></li>
					<li className={styles.button}></li>
				</ul>
				<div className={styles.filler}></div>
				<div className={styles.title}>Hello, World!</div>
				<div className={styles.filler}></div>
				<div className={styles.buttons}></div>
			</div>
			<div className={styles.contents}>
				{ children }
			</div>
		</div>
	  </>
	);
}
