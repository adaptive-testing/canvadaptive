/** @jsx React.DOM */

var TestStartPage = React.createClass({

    propTypes: {
        testName: React.PropTypes.string.isRequired
    },

    render: function () {
        return <div className="CanvadaptiveStartScreen__Container">
            <h1 className="CanvadaptiveStartScreen__TestTitle">{this.props.testName}</h1>
            <button type="button" className="CanvadaptiveStartScreen__StartButton">Start Test</button>
        </div>
    }
});