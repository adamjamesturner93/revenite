import React from "react";
import { Tabs, List, Typography, Tag, Button } from "antd";
import { AppLayout } from "../../components";
import Link from "next/link";
import moment from "moment";
import router from "next/router";

const WorkoutsHome: React.FC = () => {
  const data = [
    {
      id: 0,
      date: moment("2021-01-12"),
      description: "40 minute Swim.",
      cardio: true,
      flex: false,
      str: false,
    },
    {
      id: 1,
      date: moment("2021-01-06"),
      description: "1 hour Hike.",
      cardio: true,
      flex: false,
      str: true,
    },
    {
      id: 2,
      date: moment("2021-01-03"),
      description: "30 minute Yoga.",
      cardio: false,
      flex: true,
      str: false,
    },
    {
      id: 3,
      date: moment("2021-01-02"),
      description: "45 HIIT Class.",
      cardio: true,
      flex: false,
      str: true,
    },
  ];

  return (
    <AppLayout title="List workouts">
      <Link href="/workouts/add">
        <Button type="link">
          <a>Add new</a>
        </Button>
      </Link>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="List Activities" key="1">
          <List
            header={<Typography.Title type="secondary">March</Typography.Title>}
            bordered
            dataSource={data}
            renderItem={({ id, date, description, cardio, str, flex }) => (
              <List.Item
                role="link"
                onClick={() => router.push(`/workouts/${id}`)}
              >
                <Typography.Text>
                  <Typography.Text type="secondary">
                    {date.date()} &nbsp;
                  </Typography.Text>

                  {description}
                </Typography.Text>
                <section>
                  {cardio && <Tag color="#1890FE">Cardio</Tag>}
                  {str && <Tag color="#faad14">Strength</Tag>}
                  {flex && <Tag color="#58C41A">Flex</Tag>}
                </section>
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Summary" key="2">
          Test 2
        </Tabs.TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default WorkoutsHome;
