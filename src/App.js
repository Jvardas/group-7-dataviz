import React, {Component, Fragment} from 'react';
import {SideBar} from './components/Sidebar/SideBar'
import ReactDOM from 'react-dom'
import Home from './components/Home'

class App extends Component {
  state = null

  constructor(props) {
    super(props);
    this.state = { sections: [], activeItemHandlers: [] };
    window["appstate"] = this.state;
  }

  sectionMount = component => {
    var domElem = ReactDOM.findDOMNode(component);
    this.state.sections.push(domElem);
  }


  componentDidMount() {
    var sections = this.state.sections;

    document.addEventListener('scroll', () => {
      var pageScrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
      if(isNaN(pageScrollTop)) return;
      pageScrollTop = pageScrollTop + Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2;
      var activeSectionId = null;
      for(var i = 0; i < sections.length; i++) {
        var sectionOffsetTop = sections[i].offsetTop || 0;

        if(pageScrollTop >= sectionOffsetTop) {
          activeSectionId = sections[i].id;
        }
      }

      this.state.activeItemHandlers.forEach(handler => {
        handler(activeSectionId);
      });
    });
  }

  registerChangeActiveItemHandler(callback) {
    window["appstate"].activeItemHandlers.push(callback);
  }

  render() {
    return (
      <Fragment>
          <SideBar registerChangeActiveItemHandler={this.registerChangeActiveItemHandler}/>
          <Home onSectionMount={this.sectionMount}/>
      </Fragment>
    );
  }
}

export default App;
