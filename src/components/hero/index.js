import React, { Component } from 'react';
import classnames from 'classnames';
import desk from './desk.svg'
import bgc from './Hero.svg';
import styles from './hero.module.css';
import {NavBar} from '../navbar/header';


export class Hero extends Component {
    render() {
      console.log(styles)
        return (
            <div className={'position-relative'}>
              <NavBar/>
                <div className={styles.imageWrapper}>
                  <img src={bgc} alt=""/>
                </div>

                <div className={classnames(styles.Wrapper)}>
                  <div className="container">
                    <div className={styles.content}>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <div className={'centerContent'}>
                            <h3 className={styles.title}>
                              Hey there, <br/>
                              I am Sonu Kumar
                            </h3>
                            <p className={styles.subtitle}>
                              <b>Front-end/UI Develoepr </b> from India.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                          <img src={desk} alt="logo" className={styles.desk}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
