import React from 'react';
import './SideBarFooter.scss'
import {Divider} from 'semantic-ui-react'

export default function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <Divider />
        <div>Made by Group 7</div>
        <div>Vardas John, Michalopoulos John, Periklidakis John 2020</div>
        <div>Data Visualization Class 2020</div>
      </div>
    </React.Fragment>
  );
}