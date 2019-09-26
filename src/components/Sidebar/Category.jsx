import React, {Component} from 'react';

import Content from './Content';

export default class Category extends Component {
  state = { expanded: false };

  render () {
    return (
      <div className={'filter-category'}>
        <div className={'header'} onClick={() => {console.log('click'); this.handleClick()}}>filter category</div>
        <Content expanded={this.state.expanded}>
          {this.props.children}
        </Content>
      </div>
    )
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}
