import React, { Component } from 'react'

export default class FormDemo1 extends Component {
  state = { username: '' }
  onChangeHandler = (event) => {
    //this.setState({ username: event.target.value })
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }
  onsubmitHandler = (event) => {
    event.preventDefault()
    alert('Kullanıcı adı ' + this.state.username)
  }
  render() {
    return (
      <div>
        <form>
          <h3>Kullanıcı Adı</h3>
          <input type="text" name="username" onChange={this.onChangeHandler}></input>
          <h3>Kullanıcı adı {this.state.username}</h3>

          <h3>Şehir</h3>
          <input type="text" name="city" onChange={this.onChangeHandler}></input>
          <h3>Şehir {this.state.city}</h3>

          <input type="submit" value="Kaydet" />
        </form>
      </div>
    )
  }
}
