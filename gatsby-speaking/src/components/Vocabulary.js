import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FaMinus, FaPlus} from 'react-icons/fa';
import cx from 'classnames';

import styles from './vocabulary.module.css';

const Vocabulary = ({ content, title }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <section className={styles.contentBox}>
      <header className={cx(
        styles.header, {
          [styles.headerBoxShadow] : !showContent
        }
      )}>
        <h2>{title}</h2>
        <button
          type="button"
          className={styles.button}
          aria-label={`Show ${title}`}
          onClick={() => setShowContent(!showContent)}
        >
          {showContent ? <FaMinus /> : <FaPlus />}
        </button>
      </header>
      {showContent && (
        <div className={styles.content}>
          {ReactHtmlParser(content)}
        </div>
      )}
    </section>
  );
};

export default Vocabulary;