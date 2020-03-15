import React, {Component} from 'react'
import { Form, Input, Button} from 'antd'
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
            /*console.log(values.email)
            console.log(values.password)*/
            this.props.firebase.doSignInWithEmailAndPassword(values.email, values.password)
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
                    <Form.Item name='email' label="Email" rules={[{required: true, type: 'email' }]}>
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
                        {/*<Button type="primary" htmlType="submit" onClick={this.props.isLogin? "" : this.props.toLogIn}>
                            <Link to={ROUTES.LANDING}> Submit</Link>
                        </Button>*/}
                        <Button type="primary" htmlType="submit" onClick={this.props.firebase.auth.currentUser? "" : res}>
                            <Link to={ROUTES.LANDING}> Submit</Link>
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