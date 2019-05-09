import React, {Component} from 'react';
import styles from './work.module.css'
import classnames from 'classnames';

/* Import all company logos */

import OYO from './logos/oyo.svg';
import GreyLoft from  './logos/greyloft.png';
import NearBuy from './logos/nearbuy.svg';
import Stack from  './logos/9stacks.jpg';
import quidli from './logos/quidli.png';
import bitcot from './logos/bitcot.png'


export class WorkWith extends Component {
  render() {
    return (
      <div className={classnames(styles.wrapper, 'text-center')}>
        <div className="container">
          <h2>Big to small</h2>
          <p>I've worked with em all.</p>
          <div className={styles.listWrapper}>
            <div className="row">
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <img src={OYO} alt="" className={styles.listItem}/>
              </div>
              <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12">
                <img src={GreyLoft} alt="" className={styles.listItem}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
