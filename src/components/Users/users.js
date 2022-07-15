import React from "react";
import { Component } from "react";
import { connect } from 'react-redux'
import { getUsers } from '../../store/actions/usersAction'
import UserCards from './userCards'
import axios from "axios";
import './users.css';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SelectedList: [],
      Users: [],
    };
  }

  componentDidMount() {
    axios.get(`https://immense-bastion-95145.herokuapp.com/api/users`)
      .then(res => {
        const Users = res.data.users;
        this.setState({ Users });
      });
    const UsersRedux = this.props.getUsers();
    this.setState({ UsersRedux });
  }

  // Update List Item's state 
  onItemCheck(e, item) {
    let updatedList = this.state.Users;
    updatedList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    // Update State
    this.setState({
      Users: updatedList,
      SelectedList: this.state.Users.filter((e) => e.selected),
    });
  }


  render() {
    const { users } = this.props.users
    console.log(this.props.users)

    return (
      <div className="grid-container">
        <table className="grid-child">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={user.selected ? "selected" : ""}>
                <th>
                  <input
                    type="checkbox"
                    checked={user.selected}
                    className="form-check-input"
                    id="rowcheck{user.id}"
                    onChange={(e) => this.onItemCheck(e, user)}
                  />
                </th>
                <td>{user.name}</td>
                <td>{user.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid-child">
          <UserCards first={this.state.SelectedList} />
          <div>{console.log(this.state.SelectedList)} </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(Users)