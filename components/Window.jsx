import styles from '../styles/Window.module.css';

export default function Window({children}) {
	return (
	  <>
		<div class={styles.window}>
			<div class={styles.header}>
				<ul class={styles.buttons}>
					<li class={`${styles.button} ${styles.close}`}></li>
					<li class={styles.button}></li>
					<li class={styles.button}></li>
				</ul>
				<div class={styles.filler}></div>
				<div class={styles.title}>Hello, World!</div>
				<div class={styles.filler}></div>
				<div class={styles.buttons}></div>
			</div>
			<div class={styles.contents}>
				{ children }
			</div>
		</div>
	  </>
	);
}
