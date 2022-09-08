import dynamic from 'next/dynamic';
import Head from 'next/head';

const Window = dynamic(() => import('../components/Window'), {
	ssr: false,
});

const Document = dynamic(() => import('../components/Document'), {
	ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
	<meta name="description" content="Some notes, mind-maps,and other cheetsheets." />
      </Head>
        <Window title="Notes">
          <ul className="dir">
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
	    </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
	    </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
	    </li>
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
            </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
            </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
            </li>
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
            </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
            </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
            </li>
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
            </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
            </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
            </li>
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
            </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
            </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
            </li>
            <li>
              <Document title="test.html" date="Sep 08, 2022" />
            </li>
            <li>
              <Document title="test_longer_even_so_much_longer_more_longer_than_you_can_longer.html" date="Dec 25, 1990" />
            </li>
            <li>
              <Document title="This is a longer blog title.html" date="Feb 14, 2030" />
            </li>

	  </ul>
        </Window>
    </>
  )
}
