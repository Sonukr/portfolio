import React, {Component} from 'react';
import styles from './work.module.css'
import classnames from 'classnames';
import {data} from './data'
import {shuffleArray} from '../../utils/utils';

export class WorkWith extends Component {

  render() {
    shuffleArray(data)
    return (
      <div className={classnames(styles.wrapper, 'text-center mb-4')}>
        <div className="container">
          <h2>Big to small</h2>
          <p>I've worked with 'em all.</p>
          <div className={styles.listWrapper}>
            <div className="row">
              {data.map((item,i) =>
                <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12" key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                    <img src={item.image} alt={item.name} className={styles.listItem}/>
                  </a>
                </div>
              )}
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
              <a href="http://zfn.io" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                <div className={styles.zeta}>
                  <p>ζ</p>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
