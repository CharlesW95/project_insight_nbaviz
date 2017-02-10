import React from 'react';
import Draggable from 'react-draggable';

export default class NBASlider extends React.Component {

    constructor(props) {
        super(props);
        // this.dataChangedCallback = props.dataChangedCallback;
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragging = this.onDragging.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    render() {
        return (
            <div id="slider-container">
                <div id="slider-bar">
                    <Draggable
                        axis="x"
                        bounds="parent"
                        defaultPosition={{x:0, y:0}}
                        position={null}
                        onStart={this.onDragStart}
                        onDrag={this.onDragging}
                        onStop={this.onDragEnd}
                    >
                        <div id="slider-button">
                        </div>
                    </Draggable>
                </div>
            </div>
        );
    }

    onDragStart(e, data) {
        console.log("Started");
        console.log(data);
    }

    onDragging(e, data) {
        let width = document.getElementById("slider-bar").offsetWidth;
        console.log(width);
        console.log(data.x/width);
        console.log(data);
    }

    onDragEnd(e, data) {
        console.log("Ended");
        console.log(data);
        // Ranges from 0 to 365 currently
        // FIXME: Using magic numbers, if there's a better way
        // we should fix it.
        // this.dataChangedCallback();
    }
}
