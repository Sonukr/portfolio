import React, {Component} from 'react';
import styles from './work.module.css'
import classnames from 'classnames';


export class WorkWith extends Component {
  render() {
    return (
      <div className={classnames(styles.wrapper, 'text-center')}>
        <h2>Big to small</h2>
        <p>I've worked with em all.</p>
      </div>
    );
  }
}
