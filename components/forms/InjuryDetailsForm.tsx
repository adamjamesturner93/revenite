import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  Divider,
  Checkbox,
  Cascader,
  Row,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  AMPUTATION_LEVEL_OPTIONS,
  HEIGHT_OPTIONS,
  INJURY_LEVEL_OPTIONS,
  WEIGHT_OPTIONS,
} from "../../utils/constants";
import { useForm } from "antd/lib/form/Form";

const layout = {
  labelCol: {
    xs: { offset: 0, span: 24 },
    md: { span: 10 },
    lg: { span: 8 },
  },
  wrapperCol: {
    xs: { offset: 0, span: 24 },
    md: { span: 14 },
    lg: { span: 10 },
  },
};

const tailLayout = {
  wrapperCol: { xs: { offset: 0, span: 24 } },
};

interface Props {
  handleBack: () => void;
  callback: () => void;
}

export const InjuryDetailsForm: React.FC<Props> = ({
  handleBack,
  callback,
}) => {
  const [form] = useForm();
  const onFinishFailed = () => {};
  const [hasAmputations, setHasAmputations] = useState(false);
  const [hasInjuries, setHasInjuries] = useState(false);

  const onFinish = async (event: any) => {
    console.log(event);
    callback();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Do you have any amputations?"
        name="hasAmputations"
        labelCol={{ md: { span: 14 } }}
        wrapperCol={{ md: { span: 10 } }}
      >
        <Switch
          unCheckedChildren="No"
          checkedChildren="Yes"
          checked={hasAmputations}
          onChange={setHasAmputations}
        />
      </Form.Item>

      {hasAmputations && (
        <React.Fragment>
          <Form.Item
            label="Height"
            name="height"
            tooltip="Height without prosthesis?"
            rules={[{ required: true, message: "Please input a valid height" }]}
          >
            <Input
              type="number"
              addonAfter={
                <Select
                  className="input__select-addon"
                  defaultValue="cm"
                  options={HEIGHT_OPTIONS}
                />
              }
            />
          </Form.Item>
          <Form.Item
            label="Weight"
            name="weight"
            tooltip="Weight without prosthesis?"
            rules={[{ required: true, message: "Please input a valid weight" }]}
          >
            <Input
              type="number"
              addonAfter={
                <Select
                  className="input__select-addon"
                  defaultValue="kg"
                  options={WEIGHT_OPTIONS}
                />
              }
            />
          </Form.Item>

          <Form.List name="amputations">
            {(fields, { add, remove }) => (
              <React.Fragment key="amputations">
                {fields.map((field) => (
                  <section
                    key={`amp-${field.key}`}
                    style={{ padding: "10px 0" }}
                  >
                    <Form.Item
                      {...field}
                      label="Limb"
                      name={[field.name, "limb"]}
                      fieldKey={[field.fieldKey, "limb"]}
                      // rules={[{ required: true, message: "Missing limb" }]}
                    >
                      <Cascader
                        options={AMPUTATION_LEVEL_OPTIONS}
                        expandTrigger="hover"
                      />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Prosthesis worn?"
                      name={[field.name, "prosthesis"]}
                      valuePropName="checked"
                      fieldKey={[field.fieldKey, "prosthesis"]}
                      // rules={[{ required: true, message: "Missing level" }]}
                    >
                      <Checkbox />
                    </Form.Item>

                    <Button
                      type="dashed"
                      onClick={() => remove(field.name)}
                      block
                      icon={<MinusCircleOutlined />}
                    >
                      Remove amputation
                    </Button>
                  </section>
                ))}

                <Form.Item {...tailLayout}>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add amputation
                  </Button>
                </Form.Item>
              </React.Fragment>
            )}
          </Form.List>
        </React.Fragment>
      )}

      <Divider />

      <Form.Item
        label="Do you have any other injuries?"
        name="hasInjuries"
        labelCol={{ md: { span: 14 } }}
        wrapperCol={{ md: { span: 10 } }}
      >
        <Switch
          unCheckedChildren="No"
          checkedChildren="Yes"
          checked={hasInjuries}
          onChange={setHasInjuries}
        />
      </Form.Item>

      {hasInjuries && (
        <Form.List name="injuries">
          {(fields, { add, remove }) => (
            <React.Fragment key="injuries">
              {fields.map((field) => (
                <section key={`inj-${field.key}`} style={{ padding: "10px 0" }}>
                  <Form.Item
                    {...field}
                    label="Limb"
                    name={[field.name, "limb"]}
                    fieldKey={[field.fieldKey, "limb"]}
                    // rules={[{ required: true, message: "Missing limb" }]}
                  >
                    <Select options={INJURY_LEVEL_OPTIONS} />
                  </Form.Item>

                  <Form.Item
                    {...field}
                    label="Chronic?"
                    name={[field.name, "chronic"]}
                    valuePropName="checked"
                    fieldKey={[field.fieldKey, "chronic"]}
                    // rules={[{ required: true, message: "Missing level" }]}
                  >
                    <Checkbox />
                  </Form.Item>

                  <Button
                    type="dashed"
                    onClick={() => remove(field.name)}
                    block
                    icon={<MinusCircleOutlined />}
                  >
                    Remove injury
                  </Button>
                </section>
              ))}

              <Form.Item {...tailLayout}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add injury
                </Button>
              </Form.Item>
            </React.Fragment>
          )}
        </Form.List>
      )}

      <Divider />

      <Row justify="space-around">
        <Button
          type="primary"
          onClick={handleBack}
          className="login-form-button"
        >
          Back
        </Button>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Continue
        </Button>
      </Row>
    </Form>
  );
};
