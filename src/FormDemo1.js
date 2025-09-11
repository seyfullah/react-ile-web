import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {username:''}
    onChangeHandler=(event)=>{
        this.setState({username:event.target.value})
    }
  render() {
    return (
      <div>
        <form>
            <h3>Kullanıcı Adı</h3>
            <input type="text" name="username" onChange={this.onChangeHandler}></input>
            <h3>Kullanıcı adı {this.state.username}</h3>
        </form>
      </div>
    )
  }
}
