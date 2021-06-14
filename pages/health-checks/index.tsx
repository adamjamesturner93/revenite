import React from "react";
import { Row, Col } from "antd";
import { AppLayout } from "../../components";
import Link from "next/link";
const HealthChecksHome: React.FC = () => {
  return (
    <AppLayout title="List health checks">
      <Link href="/health-checks/add">
        <a>Add new</a>
      </Link>
    </AppLayout>
  );
};

export default HealthChecksHome;
