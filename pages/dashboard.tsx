import React from "react";
import { Row, Col } from "antd";
import { AppLayout } from "../components";
import {
  RadialChart,
  RadialChartProps,
  makeVisFlexible,
  FlexibleXYPlotProps,
} from "react-vis";
const Dashboard: React.FC = () => {
  const FlexibleRadial = makeVisFlexible(RadialChart);
  const props: Omit<RadialChartProps, "height" | "width"> = {
    data: [
      {
        angle: 102,
        label: "Cardio",
        style: { fill: "#1890FE", stroke: "#1890FE" },
      },
      {
        angle: 520,
        label: "Strength",
        style: { fill: "#faad14", stroke: "#faad14" },
      },
      {
        angle: 243,
        label: "Flexibility",
        style: { fill: "#58C41A", stroke: "#58C41A" },
      },
    ],
    showLabels: true,
    labelsAboveChildren: true,
  };
  return (
    <AppLayout title="Welcome to the Dashboard">
      <Col xs={24} md={12} lg={8}>
        <p>Last 7 days</p>
        <FlexibleRadial {...props} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <p>Last 28 days</p>
        <FlexibleRadial {...props} />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <p>All time</p>
        <FlexibleRadial {...props} />
      </Col>
    </AppLayout>
  );
};

export default Dashboard;
