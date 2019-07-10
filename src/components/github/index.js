import React, {Component} from 'react';
import styles from './git.module.css'
import classnames from 'classnames';

export class Github extends Component {
  render() {
    return (
      <div className={classnames(styles.wrapper, 'text-center mt-4 mb-4')}>
        <h2>My Github Contributions</h2>
        <img src={'https://ghchart.rshah.org/1ab4d7/sonukr'} alt="" className={'mt-4 image'}/>
      </div>
    );
  }
}
