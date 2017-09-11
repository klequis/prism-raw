/* global Prism */
import Prism from 'prismjs'
import React, { PureComponent } from "react";

import { PropTypes } from "prop-types";

export default class PrismCode extends PureComponent {
  static propTypes = {
    async: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
    component: PropTypes.node,
  };

  static defaultProps = {
    component: `code`,
  }

  componentDidMount() {
    this._hightlight();
  }

  componentDidUpdate() {
    this._hightlight();
  }

  _hightlight() {
    console.log('_domNode', this._domNode)
    Prism.highlightElement(this._domNode, this.props.async);
  }

  _handleRefMount = (domNode) => {
    this._domNode = domNode
  }

  render() {
    const { className, component: Wrapper, children } = this.props;
    let arr = children.split(/[\r\n]+/)
    let j = 0
    let arrNew = []
    let level = 0

    function decrement(str) {
       // console.log(str + ' str={' + ' ' + (str === '{'))
       return (str === '}')
    }
    function increment(str) {
        return (str === '{')
    }

    for (let i=1; i<arr.length-1; i++) {
      let chr = arr[i].slice(-1) // get last character off of string
      if (decrement(chr)) {
        level -= 2
      }
      console.log('level', level)
      let indent = ' '.repeat(level)
      arrNew[j] = indent + arr[i].trim() + '\n'
      j++
      if (increment(chr)) {
        level += 2
      }
    }
    return (
      <Wrapper
        ref={this._handleRefMount}
        className={className}
      >
        {arrNew}
      </Wrapper>
    );
  }
}
