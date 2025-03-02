/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ContentSection.js

    Fragment to contain page content accompanied by a section title
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import { Row, Col } from 'reactstrap';

import '../../scss_styles/ContentSection.scss';

const ContentSection = ({title, text, size, icon, iconOffset, iconMobile, includeUnderline, includePadding, includeTitlePadding, titleWeight, children}) => (
    <Fragment>
        {icon && (
            <Img src={icon} alt="" className={"ContentSection-icon" + (iconOffset ? " ContentSection-icon--iconOffset" : "") + (iconMobile ? " ContentSection-icon--mobile" : "")} />
        )}
        {title && (
            <h3 className={"ContentSection-title" + (titleWeight ? "--" + titleWeight : "") + (size ? " ContentSection-title--" + size : "")}>
                {title}
            </h3>
        )}
        {includeTitlePadding && (
            <div className="ContentSection-titlePadding" />
        )}
        {includeUnderline && (
            <div className={"ContentSection-underline" + (size ? "--" + size : "")} />
        )}
        {text && (
            <Row className={(size ? "ContentSection-body ContentSection-body--" + size : "ContentSection-body") + " Wick-row"}>
                <Col sm="9" lg="6">
                    {text}
                </Col>
            </Row>
        )}
        {includePadding && (
            <div className="ContentSection-padding" />
        )}
        {children}
    </Fragment>
);

export default ContentSection;