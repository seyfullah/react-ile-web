import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
    state = { email: "", password: "", description: "", city: "" }
    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({ [name]: value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alertify.success(this.state.email + " " + this.state.password + " " + this.state.description + " " + this.state.city)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">E-posta</Label>
                        <Input type="email" name="email" id="email" placeholder="E-posta giriniz" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Parola</Label>
                        <Input type="password" name="password" id="password" placeholder="Parola giriniz" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Açıklama</Label>
                        <Input type="textarea" name="description" id="description" placeholder="Açıklama giriniz" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Şehir</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Kaydet</Button>
                </Form>
            </div >
        )
    }
}
