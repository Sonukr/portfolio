/* ref for icons https://konpa.github.io/devicon */
import React, {Component} from 'react';
import styles from './skilss.module.css';
import classnames from 'classnames';

export class Skills extends Component {
  render() {
    return (
      <div className={'container mb-5'} id={'skills'}>

        <div className="row">
          <div className="col-md-10 offset-md-1 text-center mb-4 mt-4">
            <h2 className={styles.title}>Things i am good at</h2>
            <p>Primary skilled in the below items.</p>
            <div className={classnames(styles.skillList, styles.skillListPrimary, '')}>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-react-original colored"></i>
              </a>
              <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i class="devicon-redux-original colored"></i>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-javascript-plain colored"></i>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-html5-plain colored"></i>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-css3-plain colored"></i>
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-bootstrap-plain colored"></i>
              </a>
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"
                 className={' '}>
                <i className="devicon-sass-original colored"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center mt-4">
            <h2>Things i can do</h2>
            <p>Secondary skilled in the below items.</p>
            <div className={classnames(styles.skillList, styles.skillListSecondary)}>
              <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-nodejs-plain colored"></i>
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-mongodb-plain colored"></i>
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-mysql-plain colored"></i>
              </a>
              <a href="http://docs.sequelizejs.com/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-sequelize-plain colored"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  text-center mt-4">
            <h2>Tools i can work on</h2>
            <p>Tools i use to solve the problems.</p>
            <div className={classnames(styles.skillList, styles.skillListSecondary)}>
              <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
                <i className="devicon-slack-plain colored"></i>
              </a>
              <a href="https://trello.com/en" target="_blank" rel="noopener noreferrer">
                <i className="devicon-trello-plain colored"></i>
              </a>
              <a href="https://bitbucket.org" target="_blank" rel="noopener noreferrer">
                <i className="devicon-bitbucket-plain colored"></i>
              </a>
              <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer">
                <i className="devicon-confluence-plain colored"></i>
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-git-plain colored"></i>
              </a>
              <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-webstorm-plain colored"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
