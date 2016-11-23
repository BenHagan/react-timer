var React = require('react');
var Clock = require('Clock')

var Countdown = React.createClass({
  render: () => (
    <div>
      <Clock totalSeconds={129} />
    </div>
  )
});

module.exports = Countdown;
