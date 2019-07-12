import React, { Component } from 'react';
import classnames from 'classnames';
import desk from './images/desk.svg'
import bgc from './images/Hero.svg';
import projects from './images/projects.svg';
import company from './images/company.svg';
import house from './images/house.svg';
import skill from './images/skill.svg'
import git from './images/git.svg'
import styles from './hero.module.css';
import {NavBar} from '../navbar/header';


export class Hero extends Component {
    render() {
        return (
            <div className={'position-relative'} id={'hero'}>
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
                              <b>Front-end/UI Developer </b> from India.
                            </p>
                            <div className={styles.linksWrapper}>
                              <a href="https://github.com/sonukr" target="_blank" rel="noopener noreferrer" className={classnames(styles.linkItem, styles.github)} title="Github">
                                <i className="fab fa-github"></i>
                              </a>
                              <a href="https://stackoverflow.com/users/4223801/sonu" target="_blank" rel="noopener noreferrer" className={classnames(styles.linkItem, styles.stackoverflow)} title="overflow">
                                <i className="fab fa-stack-overflow"></i>
                              </a>
                              <a href="http://codepen.io/sonukry/" target="_blank" rel="noopener noreferrer" className={classnames(styles.linkItem, styles.codepan)} title="Codepan">
                                <i className="fab fa-codepen"></i>
                              </a>
                              <a href="https://in.linkedin.com/in/krsonu" target="_blank" rel="noopener noreferrer" className={classnames(styles.linkItem, styles.linkedin)} title="linkedin">
                                <i className="fab fa-linkedin"></i>
                              </a>
                              <a href="https://www.facebook.com/sonukry" target="_blank" rel="noopener noreferrer" className={classnames(styles.linkItem, styles.facebook)} title="Facebook">
                                <i className="fab fa-facebook-square"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 text-right">
                          <img src={desk} alt="logo" className={styles.desk}/>
                        </div>
                        <div className={styles.menu}>
                          <ul className={styles.menuList}>
                            <li className={styles.menuListItem}>
                              <a href="#hero">
                                <img src={house} alt=""/>
                                <p>Home</p>
                              </a>
                            </li>
                            <li className={styles.menuListItem}>
                              <a href="#skills">
                                <img src={skill} alt=""/>
                                <p>Skills</p>
                              </a>
                            </li>
                            <li className={styles.menuListItem}>
                              <a href="#work">
                                <img src={company} alt=""/>
                                <p>Org</p>
                              </a>
                            </li>
                            <li className={styles.menuListItem}>
                              <a href="#projects">
                                <img src={projects} alt=""/>
                                <p>Projects</p>
                              </a>
                            </li>
                            <li className={styles.menuListItem}>
                              <a href="#github">
                                <img src={git} alt=""/>
                                <p>GitHub</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
