var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
var foundation = require('foundation-sites');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start counting up and set state to "started" when started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');


    setTimeout(() => {
      expect(timer.state.countDownStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

    it('should set state to paused and stop counting when paused', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 5});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.countDownStatus).toBe('paused');
        expect(timer.state.count).toBe(5);
        done();
      }, 1001);
    });

    it('should stop countdown on stopped status and reset count', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({count: 5});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');


      setTimeout(() => {
        expect(timer.state.countDownStatus).toBe('stopped');
        expect(timer.state.count).toBe(0);
        done();
      }, 1001);
    });
});
