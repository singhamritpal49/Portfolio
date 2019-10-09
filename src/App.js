import React from 'react';
import Main from './components/main'
import './App.css'
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-top" title="Welcome" scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/projects">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>


    );
}

export default App;
