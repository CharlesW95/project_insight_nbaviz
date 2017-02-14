import React from 'react';

export default class FloatingHead extends React.Component {

    constructor(props) {
        super(props);
        this.imageSrc = `../app/static/images/floating-head-${this.props.number}.png`;
        // this.dataChangedCallback = props.dataChangedCallback;
        // this.onDragStart = this.onDragStart.bind(this);
        // this.onDragging = this.onDragging.bind(this);
        // this.onDragEnd = this.onDragEnd.bind(this);
    }

    render() {
        return (
            <div id= {this.props.number}>
            	<img src= {this.imageSrc} />
            </div>
        );
    }

    /*onDragStart(e, data) {
    }

    onDragging(e, data) {
        // Ranges from 0 to 365 currently
        // FIXME: Using magic numbers, if there's a better way
        // we should fix it.
        this.dataChangedCallback(data.x);
    }

    onDragEnd(e, data) {
    } */
}
