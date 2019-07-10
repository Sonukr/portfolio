import React, { Component } from 'react';
import styles from './projects.module.css';
import classnames from 'classnames';
import { UncontrolledCarousel } from 'reactstrap';
import {data} from './data'

export class Projects extends Component {
    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    getImage = (images) => {
        const items = [];
        if(images.length > 1) {
            for(let i=0; i< images.length; i++){
                let obj ={}
                obj.src=images[i]
                items.push(obj)
            }
            return (
              <UncontrolledCarousel items={items} indicators={false}/>
            )
        }
        return(
          <img className="card-img-top" src={images[0]}/>
        )
    };

    render() {
        this.shuffleArray(data)
        return (
            <div className={classnames(styles.wrapper, 'text-center')}>
                <div className="container">
                    <h2>Projects I've worked on</h2>
                    <div className="row mt-4">
                    {data.map((item,i) => (
                      <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mb-4">
                      <a className={classnames(styles.projectItem, 'card')}
                         href={item.url} key={i} target={'_blank'}>
                          {this.getImage(item.images)}
                          <hr/>
                          <div className={styles.details}>
                              <h6 className={'mb-3'}>{item.title}</h6>
                              <div className={styles.tags}>
                                  {item.tags.map((item,i) => (
                                    <span className="badge badge-secondary"
                                      key={i}>
                                        {item}
                                    </span>
                                  ))}
                              </div>
                          </div>
                      </a>
                      </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
}
