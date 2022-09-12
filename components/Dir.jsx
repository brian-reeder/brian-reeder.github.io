import Link from 'next/link';
import { useRouter } from 'next/router';
import { join } from 'path';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Dir.module.css';

function Tag(props) {
        return (
                <span className={ styles.tag }>{ props.name }</span>
        );
}

function Document(props) {
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

export default function Default(props) {
	const router = useRouter();

	return(
		<>
		  <ul className={ styles.dir }>
		    { props.posts.map((post) => (
			    <li>
			      <Link href={ join(router.pathname, post.slug) }>
			        <a className={styles.postlink}>
			          <Document title={ post.title } date={ post.date } />
			        </a>
			      </Link>
			    </li>
		    ))}
		  </ul>
		</>
	);
}
