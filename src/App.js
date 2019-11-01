import React from 'react';
import Main from './components/main'
import './App.css'
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'
function App() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-top" title="P O R T F O L I O" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <a href="https://drive.google.com/file/d/1A7fAvp6zG41ygbJegtfRzT0dqqOqo4rz/view?usp=sharing">Resume</a>
                        <Link to="/projects">Projects</Link>
                        <Link to="/aboutme">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="P O R T F O L I O">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <a href="https://drive.google.com/file/d/1A7fAvp6zG41ygbJegtfRzT0dqqOqo4rz/view?usp=sharing">Resume</a>
                        <Link to="/projects">Project</Link>
                        <Link to="/aboutme">About</Link>
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
