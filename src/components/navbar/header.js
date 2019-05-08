import React, {Component} from 'react';
import logo from  './logo.svg';
import styles from  './styles.module.css'

export class NavBar extends Component {
  render() {
    return (
      <div className={'container'}>
        <div className="row">
          <div className="col-md-12">
            <div className={styles.wrapper}>
              <img src={logo} alt="" className={styles.logo}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
