import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../profilepic.png';
import '../App.css';


class Landing extends Component {
    render() {
        return (
            
            <div style={{ width: '100%', margin: 'auto' }} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            // src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg"
                            src={me}
                            alt="Avitor"
                            className="avatar-img"
                        />
                        
                    </Cell>
                    <div className="banner-text">
                        <h1> Full Stack Developer</h1>
                        <hr />
                        <p>Ruby | Rails | JavaScript | React | HTML | CSS | Postgresql | SQLite | JWT | API | OOP | JSON | GitHub </p>
                        <div className="social-links">
                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/amritpal-singh-2108b4168/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>
                            {/* GitHub */}
                            <a href="https://github.com/singhamritpal49" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github" aria-hidden="true" />
                            </a>
                            {/* Medium */}
                            <a href="https://medium.com/@singhamritpal49" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-medium-m" aria-hidden="true" />
                            </a>
                            {/* Instagram */}
                            {/* <a href="https://instagram.com/singhamritpal1" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true" />
                            </a> */}

                        </div>
                    </div>
                </Grid>
                

            </div>
        );
    }
}

export default Landing;