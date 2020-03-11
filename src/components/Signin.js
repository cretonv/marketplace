import React, {Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";

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
            this.props.firebase.doSignInWithEmailAndPassword(values.user.email, values.password)
            //console.log(this.props.firebase.doCreateUserWithEmailAndPassword)
        };

        return(
            <div>
                <h1 style={{textAlign: "center"}}> SIGNIN PAGE</h1>
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

                    {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked" >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>*/}
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.props.isLogin? "" : this.props.toLogIn}>
                            Submit
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
