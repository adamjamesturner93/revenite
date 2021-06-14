import React from "react";
import { Calendar, Badge } from "antd";
import { AppLayout } from "../components";
import moment from "moment";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const WorkoutsHome: React.FC = () => {
  const { sm, xs } = useBreakpoint();

  const getListData = (
    value: moment.Moment
  ): {
    type: "warning" | "success" | "error" | "processing" | "default";
    content: string;
  }[] => {
    let listData: {
      type: "warning" | "success" | "error" | "processing" | "default";
      content: string;
    }[] = [];

    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." },
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          {
            type: "processing",
            content: "This is very long usual event。。....",
          },
        ];
        break;
      default:
    }
    return listData;
  };

  const dateCellRender = (value: moment.Moment) => {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ listStyle: "none", padding: 0 }}>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} />
          </li>
        ))}
      </ul>
    );
  };

  const getMonthData = (value: moment.Moment) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: moment.Moment) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  return (
    <AppLayout title="Calendar">
      <Calendar
        fullscreen={true}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </AppLayout>
  );
};

export default WorkoutsHome;
