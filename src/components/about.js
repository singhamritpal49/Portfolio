import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl'
// import me from '../profilepic.png'
import me from '../Enlight117.jpg'
class About extends Component {
    render() {
        return (
            <div>
                <Grid className="contact-grid contact-list">
                    <Cell col={6}>
                        <h2>Amritpal Singh</h2>
                        
                        <img 
                            
                            src={me}
                            alt="avatar"
                            style={{ height: '310px', fontFamily: 'Indie Flower',  'border-radius': '8px'
                        }}
                        />
                    
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Full Stack Developer with experience building web applications. With experience using frontend and backend technologies
                            such as  Ruby on Rails, JavaScript, and React and a background in Electrical Engineering and Tax Accounting. As a Flatiron
                             School Software Engineering graduate, I am excited to utilize my skills to develop creative applications.
                             Email: singhamritpal49@gmail.com
                        </p>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default About;