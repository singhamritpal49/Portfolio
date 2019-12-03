import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl'
// import me from '../profilepic.png'
import me from '../Enlight1172.jpg'
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
                        
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Full Stack Developer with experience using frontend and backend technologies such as Ruby, Ruby on Rails, JavaScript, and
React. I have a background in Electrical Engineering. Previously worked 6 plus years as lead IT Technician,
I bring strong skills in collaborating with teams, solving problems, by using innovative ideas, and creativity for accomplishing
projects.
                             Email: singhamritpal49@gmail.com
                        </p>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default About;