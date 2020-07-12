import React from 'react';
import About from './About'
import Viz from './Viz'
import Team from './Team'
import Used from './Used'
import './Home.scss';

export default class Home extends React.Component {
    render() {
      return (
        <div className='home'>
            <About sectionId="about" onMount={this.props.onSectionMount}/>
            <br/><br/>
            <Viz sectionId="data-visualization" onMount={this.props.onSectionMount}/>
            <br/><br/>
            <Team sectionId="team" onMount={this.props.onSectionMount}/>
            <br/><br/>
            <Used sectionId="used" onMount={this.props.onSectionMount}/>
        </div>
      );
    }
  }