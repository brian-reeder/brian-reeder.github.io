import Link from 'next/link';
import { useRouter } from 'next/router';

import Document from '../components/Document';

import styles from '../styles/Dir.module.css';

function Post(props) {
	return (
		<>
		  <li>
		    <Document title={props.title} />
		  </li>
		</>
	);
}

export default function Default(props) {

	return(
		<>
		  <ul className={ styles.dir }>
		    { props.posts.map(post => <Post title={ post } />) }
		  </ul>
		</>
	);
}
