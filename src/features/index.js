import React, { Component } from 'react';
import { Hero } from '../components/hero';
import { Skills } from '../components/skills';
import { WorkWith } from '../components/workWith';
import {Github} from '../components/github';

export class Home extends Component {

    render() {
        return (
            <div>
                <Hero/>
                <Skills/>
                <WorkWith/>
                <Github/>
            </div>

         );
    }
}
