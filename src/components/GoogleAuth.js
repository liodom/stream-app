import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log("this.props => ", this.props);
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "659376567554-olue7vno10m2l83lein77n2k6ukvblj7.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSigned) => {
    // get userId
    const userId = this.auth.currentUser.get().getId();

    if (isSigned) {
      console.log("if isSigned => ", isSigned);
      this.props.signIn(userId);
    } else {
      console.log("isSigned else => ", isSigned);
      this.props.signOut(userId);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps => state => ", state);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = {
  signIn,
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
