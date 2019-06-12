import React, { Component } from 'react';
import styles from './projects.module.css';
import classnames from 'classnames';

export class Projects extends Component {
    constructor(props) {
        super(props)

    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div className={classnames(styles.wrapper, 'text-center')}>
                <div className="container">
                    <h2>Projects I've worked on</h2>
                </div>
            </div>
        )
    }
}
