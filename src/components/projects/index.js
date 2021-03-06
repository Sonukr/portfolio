import React, { Component, Suspense } from 'react';
import styles from './projects.module.css';
import classnames from 'classnames';
import { UncontrolledCarousel } from 'reactstrap';
import {data} from './data'
import {shuffleArray} from '../../utils/utils'

export class Projects extends Component {

    getImage = (images) => {
        shuffleArray(images)
        const items = [];
        if(images.length > 1) {
            for(let i=0; i< images.length; i++){
                let obj ={}
                obj.src=images[i];
                obj.caption =''
                items.push(obj)
            }
            return (
                <Suspense fallback={'Loading...'}>
                    <UncontrolledCarousel items={items} indicators={false}/>
                </Suspense>
            )
        }
        return(
            <Suspense fallback={'Loading...'}>
                <img className="card-img-top" src={images[0]}/>
            </Suspense>
        )
    };

    render() {
        shuffleArray(data)
        return (
            <div className={classnames(styles.wrapper, 'text-center')} id={'projects'}>
                <div className="container">
                    <h2>Projects I've worked on</h2>
                    <div className="row mt-5">
                    {data.map((item,i) => (
                      <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 mb-4" key={i}>
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
