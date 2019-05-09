import React, { Component } from 'react';
import { Hero } from '../components/hero';
import { Skills } from '../components/skills';
import { WorkWith } from '../components/workWith';

export class Home extends Component {

    render() {
        return (
            <div>
                <Hero/>
                <Skills/>
                <WorkWith/>
            </div>

         );
    }
}
