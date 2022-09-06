import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/styles.css'

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
	return (
	  <Layout>
	    <Component {...pageProps} />
	  </Layout>
	);
}
