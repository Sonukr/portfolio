import React, { Component } from 'react';
import { Hero } from '../components/hero';
import { Skills } from '../components/skills';

export class Home extends Component {

    render() {
        return (
            <div>
                <Hero/>
                <Skills/>
            </div>

         );
    }
}
