import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Cascader,
  Row,
  Divider,
} from "antd";
import {
  ETHNICITY_OPTIONS,
  GENDER_OPTIONS,
  MILITARY_OPTIONS,
} from "../../utils/constants";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 10 },
};

interface Props {
  handleBack: () => void;
  callback: () => void;
}

export const PersonalDetailsForm: React.FC<Props> = ({
  handleBack,
  callback,
}) => {
  const onFinishFailed = () => {};
  const onFinish = async (event: {
    confirmPassword: string;
    password: string;
    over18: boolean;
    email: string;
    confirmCode: string;
  }) => {
    callback();
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input your full name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Display Name"
        name="displayName"
        tooltip="How do you want to be known on the platform?"
        rules={[{ required: true, message: "Please input a display name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Select placeholder="select your gender" options={GENDER_OPTIONS} />
      </Form.Item>

      <Form.Item label="Ethnicity" name="ethnicity">
        <Cascader options={ETHNICITY_OPTIONS} expandTrigger="hover" />
      </Form.Item>

      <Form.Item label="Military Service" name="militaryService">
        <Select defaultValue="none" options={MILITARY_OPTIONS} />
      </Form.Item>

      <Divider />

      <Row justify="space-around">
        <Button type="primary" onClick={handleBack}>
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Continue
        </Button>
      </Row>
    </Form>
  );
};
