import Link from 'next/link';
import { useRouter } from 'next/router';

import Document from '../components/Document';

import styles from '../styles/Dir.module.css';

function Post(props) {
	return (
		<>
		  <li>
		    <Document title={ props.post.title } date={ props.post.date } src={ props.post.slug } />
		  </li>
		</>
	);
}

export default function Default(props) {

	return(
		<>
		  <ul className={ styles.dir }>
		    { props.posts.map(post => <Post post={ post } />) }
		  </ul>
		</>
	);
}
