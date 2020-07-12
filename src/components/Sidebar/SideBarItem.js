import React from 'react';
import {Menu, Image, Icon} from "semantic-ui-react";
import './SideBarItem.scss';

export class SideBarItem extends React.Component {

  scrollToSection = (e, sectionHref) => {    
    e.preventDefault();

    document.querySelector(sectionHref).scrollIntoView({
        behavior: 'smooth'
    });
  }

  menuItemClick = (e, element) => {
    this.scrollToSection(e, element.href);

    this.props.handler(e, element);

  }

  render() {
    const highlight = this.props.highlight ? 'highlight-item' : null;
    return (
        <Menu.Item 
          className={['sidebar-item', highlight].join(' ')}
          onClick={this.menuItemClick}
          active={this.props.path===this.props.activeItemHandler()}
          href={this.props.path}
        >
          <div className='sidebar-item-alignment-container'>
            <span><Icon size='large' name={this.props.icon}/> </span>
            <span>{this.props.label}</span>
          </div>
        </Menu.Item>
    );
  }
}

export function SideBarImage(props) {
  return (
    <Menu.Item>
      <div>
        <Image src={props.image} circular></Image>
      </div>
    </Menu.Item>
  );
}

// export default withRouter(SideBarItem);