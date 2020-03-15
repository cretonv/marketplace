import React, {Component} from 'react'
import {Button, Checkbox, Form, Input} from "antd";
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";
import {Link} from "react-router-dom"
import * as ROUTES from "../constants/Routes"

const layout = {
    labelCol: {
        span: 9,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Signin extends Component {

    render() {
        const res = values => {
            console.log(values)
            this.props.firebase.doSignInWithEmailAndPassword(values.user.email, values.password)
            //console.log(this.props.firebase.doCreateUserWithEmailAndPassword)
        };

        return(
            <div>
                <h1 style={{textAlign: "center"}}> SIGN IN PAGE</h1>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={res}
                >
                    <Form.Item name={['user', 'email']} label="Email" rules={[{required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Connexion
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default withAuthorization(withFirebase(Signin));

// admin@admin.fr
// adminadminadmin
/*onClick={this.props.firebase.auth.currentUser? "" : res}*/
/* this.props.firebase.doSignInWithEmailAndPassword(values.email, values.password) */