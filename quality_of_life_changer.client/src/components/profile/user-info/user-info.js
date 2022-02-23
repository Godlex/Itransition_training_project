import { Component } from "react";
import "./user-info.scss";

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info">
        <div>
          <h1 className="user-name">{this.props.name}</h1>
          <div className="user-email">Email - {this.props.email}</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
