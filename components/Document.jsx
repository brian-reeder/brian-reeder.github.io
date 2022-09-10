import Link from 'next/link';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Document.module.css';

function Tag(props) {
	return (
		<span className={ styles.tag }>{ props.name }</span>
	);
}

export default function Default(props) {
	var tags = [];
	if(typeof(props.tags) !== 'undefined') {
		tags = props.tags.split(',');
	}

	return(
		<>
		  <div className={ styles.document }>
		    <span className={ styles.file }>
		      <FontAwesomeIcon icon={ faFileLines } />
		    </span>
		    <div className={ styles.details }>
		        <p className={ styles.description }>{ props.title }</p>
		        <p className={ styles.date }>{ props.date }</p>
		        <div className={ styles.tags }>{
				tags.map(tag => <Tag name={tag} />)
			  }
		        </div>
		    </div>
		  </div>
		</>
	)
}
