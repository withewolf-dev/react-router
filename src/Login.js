import React, { Fragment } from "react";
import "./App.css";
import { Card,  Typography } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined,  } from '@ant-design/icons';
import { GooglePlusSquareFilled } from '@ant-design/icons'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Registration from './Registration'

function Login() {

  const { Title, Text } = Typography;
  const onFinish = values => {
    console.log('Received values of form: ', values);
  }

  return (
    <Router>
    <Fragment className='App'>
      <Card
        bordered={false}
        style={{
          width: 500 ,
          
          
        }}
      >
        <div >
          <br />
          <Title level={2}> Login Now</Title>
          <br />
          <Text> please login to enter in the app</Text>
          <br />
          <br />
          <Text> center via social network</Text>
          <br />
        </div>

        <GooglePlusSquareFilled style={{ color: "#ff0000" }} />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!"
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!"
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
              block
            >
              Log in
            </Button>

            <a href="/registration">register now!</a>
            <Route exact path="/Registration" component={Registration}/>

            <a href="/"> back</a>

          </Form.Item>
        </Form>
      </Card>
    </Fragment>
    </Router>
  );
}

export default Login;