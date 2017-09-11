/* global Prism */
import Prism from 'prismjs'
import React, { PureComponent } from "react";
import { PropTypes } from "prop-types";
import classNames from 'classnames'
// import styles from './styles.css'

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
    let minusSpaces = arr[1].search(/\S/)
    console.log('minusSpaces', minusSpaces)
    const wrapperStyles = classNames({
      [className]: true,
      // 'line-numbers': true,
    })

    for (let i=1; i<arr.length-1; i++) {
      let numSpaces = arr[i].search(/\S/)
      arrNew[j] = `${' '.repeat(numSpaces - minusSpaces)}${arr[i].trim()}\n`
      j++
    }
    return (
      <Wrapper
        ref={this._handleRefMount}
        className={wrapperStyles}
      >

        {arrNew}

      </Wrapper>
    );
  }
}
