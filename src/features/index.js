import React, {Component, Fragment} from 'react';
import { Hero } from '../components/hero';
import { Skills } from '../components/skills';
import { WorkWith } from '../components/workWith';
import {Github} from '../components/github';
import { Projects } from '../components/projects';

export class Home extends Component {

    render() {
        return (
            <Fragment>
                <Hero/>
                <Skills/>
                <WorkWith/>
                <Projects/>
                <Github/>
            </Fragment>
         );
    }
}
