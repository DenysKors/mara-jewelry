import Link from 'next/link';
import styles from './LinksContainer.module.css';

import ChapletImage from '../ChapletImage/ChapletImage';
import NecklaceImage from '../NecklaceImage/NecklaceImage';
import ChockerImage from '../ChockerImage/ChockerImage';
import BraceletImage from '../BraceletImage/BraceletImage';
import EarringsImage from '../EarringsImage/EarringsImage';

import { pageData } from '@/app/pageData';

export default function LinksContainer() {
  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'chaplet' },
        }}
        className={styles.chapletLink}
      >
        <div className={styles.thumb}>
          <ChapletImage />
        </div>
      </Link>
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'necklace' },
        }}
        className={styles.necklaceLink}
      >
        <div className={styles.thumb}>
          <NecklaceImage />
        </div>
      </Link>
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'chocker' },
        }}
        className={styles.chockerLink}
      >
        <div className={styles.thumb}>
          <ChockerImage />
        </div>
      </Link>
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'bracelet' },
        }}
        className={styles.braceletLink}
      >
        <div className={styles.thumb}>
          <BraceletImage />
        </div>
      </Link>
      <Link
        href={{
          pathname: pageData[1].href,
          query: { product: 'earrings' },
        }}
        className={styles.earringsLink}
      >
        <div className={styles.thumb}>
          <EarringsImage />
        </div>
      </Link>
    </div>
  );
}
