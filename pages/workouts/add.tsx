import React, { useState } from "react";
import { AppLayout } from "../../components";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Row,
  Divider,
  Card,
  Checkbox,
  Slider,
  Col,
} from "antd";
import {
  ACTIVITY_OPTIONS,
  PERCEIVED_EXERTION_DESCRIPTION,
} from "../../utils/constants";
import moment from "moment";

const layout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 8 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 16 },
    lg: { span: 10 },
  },
};
const tailLayout = {
  wrapperCol: { xs: { span: 24 }, md: { offset: 8, span: 16 } },
};

interface Props {
  handleBack: () => void;
  callback: () => void;
}

const AddWorkout: React.FC<Props> = ({ handleBack, callback }) => {
  const onFinishFailed = () => {};
  const [exertion, setExertion] = useState(5);
  const [feelScore, setFeelScore] = useState(5);
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
    <AppLayout title="Add new Workout">
      <Col xs={24} md={{ span: 16, offset: 4 }}>
        <Card>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please the activity date!" }]}
            >
              <DatePicker defaultValue={moment()} />
            </Form.Item>

            <Form.Item
              label="Activity"
              name="activity"
              rules={[{ required: true, message: "Please input the activity" }]}
            >
              <Select
                placeholder="Select your activity"
                options={ACTIVITY_OPTIONS}
              />
            </Form.Item>

            <Form.Item
              label="Duration"
              name="duration"
              rules={[
                { required: true, message: "Please input a display name" },
              ]}
            >
              <Input type="number" suffix="mins" />
            </Form.Item>
            <Form.Item
              label="Distance"
              name="distance"
              rules={[
                { required: true, message: "Please input a display name" },
              ]}
            >
              <Input type="number" suffix="km" />
            </Form.Item>

            <Form.Item
              {...tailLayout}
              name="type"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please enter the type of activity",
                },
              ]}
            >
              <Input.Group>
                <Checkbox.Group
                  options={["Cardio", "Flexibility", "Strength"]}
                />
              </Input.Group>
            </Form.Item>

            <Form.Item label="Description" name="description">
              <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item label="Perceived Exertion" name="perceivedExertion">
              <Slider
                min={1}
                max={10}
                step={1}
                defaultValue={5}
                onChange={(value) => setExertion(value)}
              />
              <p>{PERCEIVED_EXERTION_DESCRIPTION[exertion]}</p>
            </Form.Item>

            <Form.Item label="How do you feel?" name="howDoYouFeel">
              <Slider
                min={1}
                max={10}
                step={1}
                defaultValue={5}
                onChange={(value) => setFeelScore(value)}
              />
              <p>{PERCEIVED_EXERTION_DESCRIPTION[feelScore]}</p>
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
        </Card>
      </Col>
    </AppLayout>
  );
};

export default AddWorkout;
