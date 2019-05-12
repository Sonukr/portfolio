import React, {Component} from 'react';
import styles from './work.module.css'
import classnames from 'classnames';

/* Import all company logos */

import OYO from './logos/oyo.svg';
import GreyLoft from  './logos/greyloft.png';
import NearBuy from './logos/nearbuy.svg';
import Stack from  './logos/9stacks.png';
import quidli from './logos/quidli.png';
import bitcot from './logos/bitcot.png';
import acuments from './logos/acuments.svg';


export class WorkWith extends Component {
  render() {
    return (
      <div className={classnames(styles.wrapper, 'text-center')}>
        <div className="container">
          <h2>Big to small</h2>
          <p>I've worked with 'em all.</p>
          <div className={styles.listWrapper}>
            <div className="row">
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="https://www.oyorooms.com/" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={OYO} alt="" className={styles.listItem}/>
                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="http://quid.li" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={quidli} alt="" className={styles.listItem}/>
                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="https://www.bitcot.com/" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={bitcot} alt="" className={styles.listItem}/>
                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="https://www.9stacks.com/" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={Stack} alt="" className={styles.listItem}/>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="https://www.greyloft.com/" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={GreyLoft} alt="" className={styles.listItem}/>
                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="https://www.nearbuy.com" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={NearBuy} alt="" className={styles.listItem}/>

                </a>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <a href="http://acuments.com" target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
                  <img src={acuments} alt="" className={styles.listItem}/>
                </a>
              </div>
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
