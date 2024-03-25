import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {}

  render() {
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="top-card">
          <form>
            <h1 className="head">Add New Password</h1>
            <div className="inputs-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="image"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="user-input"
              />
            </div>
            <div className="inputs-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="image"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="user-input"
              />
            </div>
            <div className="inputs-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="image"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Password"
                className="user-input"
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="bottom-container">
          <div className="header-sec">
            <div className="password-count">
              <p className="bt-tittle">Your Passwords</p>
              <div className="count-container">
                <p className="count">0</p>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    )
  }
}

export default PasswordManager
