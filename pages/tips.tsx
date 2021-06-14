import React from "react";
import { Row, Col } from "antd";
import { AppLayout } from "../components";
import Link from "next/link";
const WorkoutsHome: React.FC = () => {
  return (
    <AppLayout title="List workouts">
      <Link href="/workouts/add">
        <a>Add new</a>
      </Link>
    </AppLayout>
  );
};

export default WorkoutsHome;
