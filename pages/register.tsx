import { Col, Card, Row, Steps, Result, Button } from "antd";
import {
  AppLayout,
  RegisterForm,
  PersonalDetailsForm,
  InjuryDetailsForm,
} from "../components";
import Link from "next/link";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const { Step } = Steps;

const Register: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(2);
  let formContent: React.ReactNode;
  const screenWidth = useBreakpoint();

  const handleGoBack = () => {
    setPageIndex((p) => p - 1);
  };

  console.log(screenWidth);

  switch (pageIndex) {
    case 0:
      formContent = (
        <Card title="Register">
          <RegisterForm callback={() => setPageIndex((index) => index + 1)} />
        </Card>
      );
      break;
    case 1:
      formContent = (
        <Card title="Personal Details">
          <PersonalDetailsForm
            handleBack={handleGoBack}
            callback={() => setPageIndex((index) => index + 1)}
          />
        </Card>
      );
      break;
    case 2:
      formContent = (
        <Card title="Injury Details">
          <InjuryDetailsForm
            handleBack={handleGoBack}
            callback={() => setPageIndex((index) => index + 1)}
          />
        </Card>
      );
      break;
    case 3:
      formContent = (
        <Card>
          <Result
            status="success"
            title="Successfully Registered for Revenite!"
            extra={[
              <Button type="primary" title="Go to dashboard" key="console">
                <Link href="/dashboard">
                  <a>Continue to Dashboard</a>
                </Link>
              </Button>,
            ]}
          />
        </Card>
      );
      break;
  }

  return (
    <AppLayout>
      <Col xs={24} md={{ span: 16, offset: 4 }}>
        {formContent}
      </Col>
      <Col span={20} offset={2} style={{ alignSelf: "flex-end" }}>
        <Steps type="default" current={pageIndex} onChange={setPageIndex}>
          <Step
            status={pageIndex === 0 ? "process" : "finish"}
            title="Register"
            icon={<UserOutlined />}
          />
          <Step
            status={
              pageIndex < 1 ? "wait" : pageIndex === 1 ? "process" : "finish"
            }
            disabled={pageIndex < 1}
            title="Personal Details"
            icon={<SolutionOutlined />}
          />
          <Step
            status={
              pageIndex < 2 ? "wait" : pageIndex === 1 ? "process" : "finish"
            }
            disabled={pageIndex < 2}
            title="Amputation Details"
            icon={<SmileOutlined />}
          />
          <Step
            status={
              pageIndex < 3 ? "wait" : pageIndex === 1 ? "process" : "finish"
            }
            disabled={pageIndex < 3}
            title="Complete"
            icon={<SmileOutlined />}
          />
        </Steps>
      </Col>
    </AppLayout>
  );
};

export default Register;
