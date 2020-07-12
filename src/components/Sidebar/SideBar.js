import React from 'react';
import {SideBarItem, SideBarImage} from './SideBarItem';
import SideBarFooter from './SideBarFooter';
import {Menu, Divider} from 'semantic-ui-react';
import logo from '../../images/Flag_of_Europe.png'
import './SideBar.scss';

export class SideBar extends React.Component {
  state = { activeItem: "#about" };

  constructor(props) {
    super(props);
    window["sidebarobj"] = this;
  }

  handleItemClick = (e, { path }) => this.setState({ activeItem: path })

  getActiveItem = () => this.state.activeItem;

  changeActiveItem(activeSectionId) {
    window["sidebarobj"].setState({ activeItem: "#" + activeSectionId });
  }

  componentDidMount(){
    this.props.registerChangeActiveItemHandler(this.changeActiveItem);
  }

  render() {
    return (
      <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SideBarImage image={logo}/>
        <div className="text-center">
          <h1>Group 7 Project</h1>
          <span><b>Κοινωνικές Ανισότητες ανάμεσα σε μαθητές στις χώρες της Ευρωπαϊκής Ένωσης και πώς αυτό επηρεάζει τη μετέπειτα μαθησιακή και εργασιακή τους πορεία</b></span>
        </div>
        <Divider />
        <SideBarItem highlight={true} path="#about" label='Σχετικά με το Project' icon='archive' handler={this.handleItemClick} activeItemHandler={this.getActiveItem}/>
        <SideBarItem highlight={true} path="#data-visualization" label='Data Visualization' icon='area graph'  handler={this.handleItemClick} activeItemHandler={this.getActiveItem}/>
        <SideBarItem highlight={true} path="#team" label='Γνωρίστε την ομάδα' icon='users' handler={this.handleItemClick} activeItemHandler={this.getActiveItem}/>
        <SideBarItem highlight={true} path="#used" label='Τεχνολογίες που χρησιμοποίηθηκαν' icon='settings' handler={this.handleItemClick} activeItemHandler={this.getActiveItem}/>
        <SideBarFooter />
      </Menu>
    );
  }
}