import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password" />
                </Form.Group>
                <Button variant="primary">Login</Button>
            </Form>
        )
    }
};