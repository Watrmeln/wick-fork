/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    TutorialCardDeckContainer.js

    Container for Tutorial Card Decks
*/

import React, {Component} from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import { tutorials } from '../../data/SiteData.js';

class TutorialCardDeckContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: tutorials.slice(0,3),
            linkButton: {
                text: this.props.text,
                onClick: this.props.onClick,
                routerLink: this.props.routerLink
            }
        };
    }

    render() {
        return (
            <WickCardDeckContainer
                {...this.state}
                type="tutorial"
                usePadding
            />
        );
    }
};


export default TutorialCardDeckContainer;
