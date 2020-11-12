import React, {PureComponent} from "react";

const withOpening = (Component) => {
  class WithOpening extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpened: false,
      };
      this.handleMenuClose = this.handleMenuClose.bind(this);
      this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuClose() {
      this.setState({isOpened: false});
    }

    handleMenuToggle(isOpened) {
      this.setState({isOpened: !isOpened});
    }

    render() {
      const {isOpened} = this.state;

      return (
        <Component
          {...this.props}
          isOpened={isOpened}
          onCloseMenu={this.handleMenuClose}
          onToggleMenu={this.handleMenuToggle}
        />
      );
    }
  }

  return WithOpening;
};

export default withOpening;
