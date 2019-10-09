import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css'
class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }} >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-8.jpg"
                            alt="Avitor"
                            className="avatar-img"
                        />
                    </Cell>
                    <div className="banner-text">
                        <h1> Full Stack Developer</h1>
                        <hr />
                        <p>HTML/CSS | Ruby | Rails | JavaScript | React </p>
                    </div>
                </Grid>

            </div>
        );
    }
}

export default Landing;