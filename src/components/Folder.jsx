import React from "react";
import data from '../data.json';
import File from "./File";

export default class Folder extends React.Component {
  state = {
    data: data,
    isClicked: false,
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    let nestedDirs = this.state.data.map((el) => <File key={el.name} dirs={el}/>);

    return (
      <div onClick={this.handleClick}>
        <div>Root directory</div>
          {this.state.isClicked ?
            <div style={{ marginLeft: 10 }}>
              {nestedDirs}
            </div> : null
          }
        </div>
    )
  }
};


