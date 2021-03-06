import React from 'react';
import { cacheImages } from '../../helper';
import styles from './book.module.css';
import LazyImage from '../lazyImage';

export default function Book({ book }) {
  const { title, author, image, url } = book;

  return (
    <div className={styles.book}>
      <div className={styles.bookCover}>
        <div className={styles.bookCoverMask}/>
        <div className={styles.bookCoverImage}>
          <LazyImage src={cacheImages(image)} alt={title} />
        </div>
        <div className={styles.bookInfo}>
          <p className={styles.bookInfoTitle}>
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.bookInfoLink}
            >
              {title}
            </a>
          </p>
          <p className={styles.bookInfoAuthor}>——{author}</p>
        </div>
      </div>
    </div>
  );
}
