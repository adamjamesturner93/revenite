import { Form, Button, Row } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { AppLayout } from "../components";
// import Link from "next/link";

// import { useAuth } from "../hooks";

const layout = {
  wrapperCol: { xs: { offset: 0, span: 24 }, sm: { offset: 6, span: 12 } },
};

const Profile: React.FC = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <AppLayout title="Edit Profile">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <Button type="primary">Connect to Strava</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Connect to Garmin</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Connect to Fitbit</Button>
        </Form.Item>

        <Row>
          <Button type="ghost" htmlType="reset">
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Row>
      </Form>
    </AppLayout>
  );
};

export default Profile;
