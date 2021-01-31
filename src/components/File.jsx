import React from "react";

export default class File extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    let nestedDirs = this.props.dirs.children ? this.props.dirs.children.map((el) => {
      return (
        <div key={el.name}>
          <File dirs={el}/>
        </div>
      )}) : null;

    return (
      <div onClick={this.handleClick}>
        Name:{this.props.dirs.name} -- Type:{this.props.dirs.type}
        <div style={{
          marginLeft: 20,
          display: (this.state.isClicked ? null : "none")
        }}> {nestedDirs} </div>
      </div>
    )
  }
}

