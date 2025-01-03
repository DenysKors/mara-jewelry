import Link from 'next/link';
import styles from './LinksContainer.module.css';

import ChapletImage from '../ChapletImage/ChapletImage';
import NecklaceImage from '../NecklaceImage/NecklaceImage';
import ChockerImage from '../ChockerImage/ChockerImage';
import BraceletImage from '../BraceletImage/BraceletImage';
import EarringsImage from '../EarringsImage/EarringsImage';

import { userLinkMap } from '@/app/userLinkMap';

export default function LinksContainer() {
  return (
    <div className={styles.container}>
      <Link
        href={{
          pathname: userLinkMap.catalog,
          query: { product: 'chaplet' },
        }}
        className={`${styles.chapletLink} ${styles.overlay}`}
      >
        <ChapletImage />
        <div className={styles.textBox}>
          <h3 className={styles.linkTitle}>Чотки</h3>
          <p className={styles.linkText}>В каталог</p>
          <svg
            className={styles.linkIcon}
            viewBox="0 0 122 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="3.47981"
              x2="117"
              y2="3.47981"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
            <path
              d="M118.501 0.684854L118.501 0.68558L121.327 3.20889C121.393 3.26749 121.429 3.31911 121.45 3.36138L121.918 3.13628L121.45 3.36138C121.469 3.4022 121.48 3.44631 121.48 3.50022C121.48 3.55413 121.469 3.59825 121.45 3.63906L121.887 3.84899L121.45 3.63906C121.429 3.68133 121.393 3.73296 121.327 3.79155L121.66 4.1637L121.327 3.79155L118.501 6.31487C118.39 6.41409 118.292 6.45737 118.205 6.47266C118.116 6.48813 118.003 6.48127 117.852 6.42371C117.699 6.36538 117.625 6.29971 117.587 6.24765C117.551 6.19881 117.52 6.12566 117.52 5.99879V1.00117C117.52 0.874818 117.551 0.802022 117.586 0.75328C117.624 0.701229 117.699 0.63532 117.852 0.576602C118.003 0.518734 118.117 0.51189 118.205 0.527298C118.292 0.542524 118.39 0.585651 118.501 0.684854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
          </svg>
        </div>
      </Link>
      <Link
        href={{
          pathname: userLinkMap.catalog,
          query: { product: 'necklace' },
        }}
        className={`${styles.necklaceLink} ${styles.overlay}`}
      >
        <NecklaceImage />
        <div className={styles.textBox}>
          <h3 className={styles.linkTitle}>Намисто</h3>
          <p className={styles.linkText}>В каталог</p>
          <svg
            className={styles.linkIcon}
            viewBox="0 0 122 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="3.47981"
              x2="117"
              y2="3.47981"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
            <path
              d="M118.501 0.684854L118.501 0.68558L121.327 3.20889C121.393 3.26749 121.429 3.31911 121.45 3.36138L121.918 3.13628L121.45 3.36138C121.469 3.4022 121.48 3.44631 121.48 3.50022C121.48 3.55413 121.469 3.59825 121.45 3.63906L121.887 3.84899L121.45 3.63906C121.429 3.68133 121.393 3.73296 121.327 3.79155L121.66 4.1637L121.327 3.79155L118.501 6.31487C118.39 6.41409 118.292 6.45737 118.205 6.47266C118.116 6.48813 118.003 6.48127 117.852 6.42371C117.699 6.36538 117.625 6.29971 117.587 6.24765C117.551 6.19881 117.52 6.12566 117.52 5.99879V1.00117C117.52 0.874818 117.551 0.802022 117.586 0.75328C117.624 0.701229 117.699 0.63532 117.852 0.576602C118.003 0.518734 118.117 0.51189 118.205 0.527298C118.292 0.542524 118.39 0.585651 118.501 0.684854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
          </svg>
        </div>
      </Link>
      <Link
        href={{
          pathname: userLinkMap.catalog,
          query: { product: 'chocker' },
        }}
        className={`${styles.chockerLink} ${styles.overlay}`}
      >
        <ChockerImage />
        <div className={styles.textBox}>
          <h3 className={styles.linkTitle}>Чокер</h3>
          <p className={styles.linkText}>В каталог</p>
          <svg
            className={styles.linkIcon}
            viewBox="0 0 122 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="3.47981"
              x2="117"
              y2="3.47981"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
            <path
              d="M118.501 0.684854L118.501 0.68558L121.327 3.20889C121.393 3.26749 121.429 3.31911 121.45 3.36138L121.918 3.13628L121.45 3.36138C121.469 3.4022 121.48 3.44631 121.48 3.50022C121.48 3.55413 121.469 3.59825 121.45 3.63906L121.887 3.84899L121.45 3.63906C121.429 3.68133 121.393 3.73296 121.327 3.79155L121.66 4.1637L121.327 3.79155L118.501 6.31487C118.39 6.41409 118.292 6.45737 118.205 6.47266C118.116 6.48813 118.003 6.48127 117.852 6.42371C117.699 6.36538 117.625 6.29971 117.587 6.24765C117.551 6.19881 117.52 6.12566 117.52 5.99879V1.00117C117.52 0.874818 117.551 0.802022 117.586 0.75328C117.624 0.701229 117.699 0.63532 117.852 0.576602C118.003 0.518734 118.117 0.51189 118.205 0.527298C118.292 0.542524 118.39 0.585651 118.501 0.684854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
          </svg>
        </div>
      </Link>
      <Link
        href={{
          pathname: userLinkMap.catalog,
          query: { product: 'bracelet' },
        }}
        className={`${styles.braceletLink} ${styles.overlay}`}
      >
        <BraceletImage />
        <div className={styles.textBox}>
          <h3 className={styles.linkTitle}>Браслет</h3>
          <p className={styles.linkText}>В каталог</p>
          <svg
            className={styles.linkIcon}
            viewBox="0 0 122 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="3.47981"
              x2="117"
              y2="3.47981"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
            <path
              d="M118.501 0.684854L118.501 0.68558L121.327 3.20889C121.393 3.26749 121.429 3.31911 121.45 3.36138L121.918 3.13628L121.45 3.36138C121.469 3.4022 121.48 3.44631 121.48 3.50022C121.48 3.55413 121.469 3.59825 121.45 3.63906L121.887 3.84899L121.45 3.63906C121.429 3.68133 121.393 3.73296 121.327 3.79155L121.66 4.1637L121.327 3.79155L118.501 6.31487C118.39 6.41409 118.292 6.45737 118.205 6.47266C118.116 6.48813 118.003 6.48127 117.852 6.42371C117.699 6.36538 117.625 6.29971 117.587 6.24765C117.551 6.19881 117.52 6.12566 117.52 5.99879V1.00117C117.52 0.874818 117.551 0.802022 117.586 0.75328C117.624 0.701229 117.699 0.63532 117.852 0.576602C118.003 0.518734 118.117 0.51189 118.205 0.527298C118.292 0.542524 118.39 0.585651 118.501 0.684854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
          </svg>
        </div>
      </Link>
      <Link
        href={{
          pathname: userLinkMap.catalog,
          query: { product: 'earrings' },
        }}
        className={`${styles.earringsLink} ${styles.overlay}`}
      >
        <EarringsImage />
        <div className={styles.textBox}>
          <h3 className={styles.linkTitle}>Сережки</h3>
          <p className={styles.linkText}>В каталог</p>
          <svg
            className={styles.linkIcon}
            viewBox="0 0 122 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="3.47981"
              x2="117"
              y2="3.47981"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
            <path
              d="M118.501 0.684854L118.501 0.68558L121.327 3.20889C121.393 3.26749 121.429 3.31911 121.45 3.36138L121.918 3.13628L121.45 3.36138C121.469 3.4022 121.48 3.44631 121.48 3.50022C121.48 3.55413 121.469 3.59825 121.45 3.63906L121.887 3.84899L121.45 3.63906C121.429 3.68133 121.393 3.73296 121.327 3.79155L121.66 4.1637L121.327 3.79155L118.501 6.31487C118.39 6.41409 118.292 6.45737 118.205 6.47266C118.116 6.48813 118.003 6.48127 117.852 6.42371C117.699 6.36538 117.625 6.29971 117.587 6.24765C117.551 6.19881 117.52 6.12566 117.52 5.99879V1.00117C117.52 0.874818 117.551 0.802022 117.586 0.75328C117.624 0.701229 117.699 0.63532 117.852 0.576602C118.003 0.518734 118.117 0.51189 118.205 0.527298C118.292 0.542524 118.39 0.585651 118.501 0.684854Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
              strokeWidth="1.04037"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
