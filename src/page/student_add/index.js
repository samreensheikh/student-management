import React from 'react';
import 'antd/dist/antd.css';

import { Form, Input, InputNumber, Button,Card } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const buttonItemLayout ={
  wrapperCol: { offset: 10 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a validate year!',
    },
};

const onFinish = values => {
    console.log(values);
    alert("Value added to the server "+ JSON.stringify(values));
    //write ajax using axios to save data on backend
};

const StudentAddForm = () => {
    return (
        <div className="containiner">
        <Card title="School Admission Form">
        <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item {...layout}
                name={['name']}
                label="Name"
                rules={[
                {
                    required: true,
                },
                {
                    pattern: new RegExp(/^[a-zA-Z0-20]+$/),

                    message: "Accept only alphabets"
                }
                ]}
            >
                <Input
                maxlength="20"
                />
            </Form.Item>
            <Form.Item  {...layout}
            name={['Last Name']} label="Last Name"
                rules={[
                {
                    required: true,
                },
                {
                    pattern: new RegExp(/^[a-zA-Z0-20]+$/),

                    message: "Accept only alphabets"
                }
                ]}
            >
                <Input
                maxlength="20"
                />
            </Form.Item>

            <Form.Item  {...layout}
            name={['Class']} label="Class"
                rules={[
                {
                    required: true,
                },
                {
                    pattern: new RegExp(/^[1-9][A-Z]+$/),
                    message: "Enter class section (It can be 5A or 6A)",
                },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item  {...layout}
            name={['Passing Year']} label="Passing Year"
            rules={[
                    {
                    required: true,
                    },
                    {
                type:'number',
                max:2017,
                    }
                ]}
                >
                <InputNumber />
            </Form.Item>

            <Form.Item  {...layout}
            name={['Percentage']} label="Percentage"
            rules={[
                {
                required: true,
                },
                {
                    pattern: new RegExp(/^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/),
                    message: "Accept in number only 0 to 100 ",
                },
                ]}>
                <Input />
            </Form.Item>

            <Form.Item {...buttonItemLayout}>
                <Button
                type="primary"  htmlType="submit">
                Submit
                </Button>
            </Form.Item>

           <Form.Item {...buttonItemLayout}>
          <Button   type="primary" ><a href="/">Student List</a></Button>
          </Form.Item>
          </Form>
          </Card>
        </div>
    );
}
export default StudentAddForm;
