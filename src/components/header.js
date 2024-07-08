import React from "react";
import {
  FilterOutlined,
  ArrowUpOutlined,
  CalendarOutlined,
  SearchOutlined,
  FieldTimeOutlined,
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Avatar,
  Image,
  Input,
  Row,
  Col,
  Typography,
  Button,
  Card,
  Tabs,
  Tag,
  Table,
  CalendarProps,
  Space,
  Calendar,
} from "antd";

import { DualAxes } from "@ant-design/plots";
const { Header, Content, Sider } = Layout;
const { Meta } = Card;
// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));
const items1 = [
  {
    key: "sub1",
    // label: 'Navigation One',
    icon: <Image preview={false} src="./icons/1.png" width={20} />,
  },
  {
    key: "sub2",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/2.png" width={20} />,
  },
  {
    key: "sub3",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/3.png" width={20} />,
  },
  {
    key: "sub4",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/4.png" width={20} />,
  },
  {
    key: "sub4",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/5.png" width={20} />,
  },
];


const items2 = [
  {
    key: "sub1",
    // label: 'Navigation One',
    icon: <Image preview={false} src="./icons/g1.png" width={20} />,
  },
  {
    key: "sub2",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g2.png" width={20} />,
  },
  {
    key: "sub3",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g3.png" width={20} />,
  },
  {
    key: "sub4",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g4.png" width={20} />,
  },
  {
    key: "sub5",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g5.png" width={20} />,
  },
  {
    key: "sub6",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g6.png" width={20} />,
  },
  {
    key: "sub7",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g7.png" width={20} />,
  },
  {
    key: "sub8",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g8.png" width={20} />,
  },
  {
    key: "sub9",
    // label: 'Navigation Two',
    icon: <Image preview={false} src="./icons/g9.png" width={20} />,
  },
];
const paletteSemanticRed = "#277ACC";
const config = {
  xField: "time",
  colorField: 'type',
  data: [
    { time: "10:10", call: 4, Received: 2, Processed: 2 },
    { time: "10:15", call: 2, Received: 6, Processed: 3 },
    { time: "10:20", call: 13, Received: 2, Processed: 5 },
    { time: "10:25", call: 9, Received: 9, Processed: 1 },
    { time: "10:30", call: 5, Received: 2, Processed: 3 },
    { time: "10:35", call: 8, Received: 2, Processed: 1 },
    { time: "10:40", call: 13, Received: 1, Processed: 2 },
    { time: "10:60", call: 14, Received: 9, Processed: 2 },
    { time: "10:80", call: 15, Received: 5, Processed: 2 },
    { time: "10:90", call: 16, Received: 1, Processed: 2 },
    { time: "11:00", call: 17, Received: 4, Processed: 2 },
    { time: "11:20", call: 14, Received: 5, Processed: 2 },
  ],
  legend: {
    color: {
      itemMarker: (v) => {
        if (v === "Received") return "rect";
        return "smooth";
      },
    },
  },
  children: [
    {
      type: "interval",
      yField: "Received",
      style: { maxWidth: 40 },
      color: ({ type }) => {
        if (type === "Received") {
          return paletteSemanticRed;
        }
       
      },
  
     
    },
    {
      type: "line",
      yField: "Processed",
      shapeField: "smooth",
      scale: { color: { relations: [["Processed", "#002B55BD"]] } },
      axis: { y: { position: "right" } },
      style: { lineWidth: 1 },
    },
  ],
};

const itemstab = [
  {
    key: "1",
    label: "Active Jobs",
    children: (
      <div>
        <Row
          style={{ marginLeft: "0px", marginRight: "0px" }}
          gutter={[12, 12]}
        >
          <Col lg={6}>
            <Card
              title={
                <>
                  <div className="role-icon">
                    <Typography.Title className="f1" level={5} style={{ fontSize: "12px" }}>
                      {" "}
                      <Image
                        src="./icons/ang1.png"
                        style={{ paddingRight: "10px", fontSize: "13px" }}
                      />
                      Python Developers
                    </Typography.Title>

                    <div>
                      <Typography.Title className="f1" level={5} style={{ fontSize: "12px",marginTop: "25px" }}>
                        #001
                      </Typography.Title>
                    </div>
                  </div>
                </>
              }
              className="card-css"
              bordered={false}
            >
              <Typography.Title
                level={5}
                className="f1"
                style={{ marginBottom: "34px", fontSize: "13px" }}
              >
                Senior Developers
              </Typography.Title>
              <span className="card-no f1">258</span>
              <Typography.Title
                level={5}
                className="total-css f1"
                style={{ fontSize: "13px" }}
              >
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p className="f1" style={{ fontSize: "13px" ,    fontSize: "12px",marginRight: "13px"}}>
                    <span style={{ color: "#0A66C2", fontSize: "13px" }}>
                      28%
                    </span>{" "}
                    vs Last month
                  </p>
                </div>

                <p className="f1" style={{fontSize: "12px",marginTop: "13px",}}>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title={
                <>
                  <div className="role-icon">
                    <Typography.Title level={5} className="f1" style={{ fontSize: "12px" }}>
                      {" "}
                      <Image
                        src="./icons/ang2.png"
                        style={{ paddingRight: "5px" }}
                      />
                      Angular Developers
                    </Typography.Title>

                    <div>
                      <Typography.Title className="f1" level={5} style={{ fontSize: "12px",marginTop: "25px" }}>
                        #002
                      </Typography.Title>
                    </div>
                  </div>
                </>
              }
              className="card-css"
              bordered={false}
            >
              <Typography.Title
                level={5}
                style={{ marginBottom: "34px", fontSize: "13px" }}
                className="f1"
              >
                Senior Developers
              </Typography.Title>
              <span className="card2 f1">258</span>
              <Typography.Title
                level={5}
                style={{ fontSize: "13px" }}
                className="total-css f1"
              >
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p className="f1" style={{ fontSize: "12px",marginRight: "13px"}}>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p className="f1" style={{fontSize: "12px",marginTop: "13px",}}>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title={
                <>
                  <div className="role-icon">
                    <Typography.Title className="f1" level={5} style={{ fontSize: "12px" }}>
                      {" "}
                      <Image
                        src="./icons/ang3.png"
                        style={{ paddingRight: "10px" }}
                      />
                      Java Developers
                    </Typography.Title>

                    <div>
                      <Typography.Title className="f1" level={5} style={{ fontSize: "12px" ,marginTop: "25px"}}>
                        #003
                      </Typography.Title>
                    </div>
                  </div>
                </>
              }
              className="card-css"
              bordered={false}
            >
              <Typography.Title
                level={5}
                className="f1"
                style={{ marginBottom: "34px", fontSize: "13px" }}
              >
                Senior Developers
              </Typography.Title>
              <span className="card3">258</span>
              <Typography.Title
                level={5}
                style={{ fontSize: "13px" }}
                className="total-css f1"
              >
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p className="f1" style={{ fontSize: "12px",marginRight: "13px" }}>
                    <span style={{ color: "#0A66C2", fontSize: "13px" }}>
                      28%
                    </span>{" "}
                    vs Last month
                  </p>
                </div>

                <p  className="f1" style={{fontSize: "12px",marginTop: "13px"}}>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title={
                <>
                  <div className="role-icon">
                    <Typography.Title className="f1" level={5} style={{ fontSize: "12px" }}>
                      {" "}
                      <Image
                        src="./icons/ang4.png"
                        style={{ paddingRight: "10px" }}
                      />
                      UX|UI Designers
                    </Typography.Title>

                    <div>
                      <Typography.Title className="f1" level={5} style={{ fontSize: "12px",marginTop: "25px" }}>
                        #004
                      </Typography.Title>
                    </div>
                  </div>
                </>
              }
              className="card-css"
              bordered={false}
            >
              <Typography.Title
                level={5}
                style={{ marginBottom: "34px", fontSize: "13px" }}
                className="f1"
              >
                Senior Developers
              </Typography.Title>
              <span className="card4 f1">258</span>
              <Typography.Title
                level={5}
                style={{ fontSize: "13px" }}
                className="total-css f1"
                
              >
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p className="f1" style={{ fontSize: "12px",marginRight: "13px" }}>
                    <span style={{ color: "#0A66C2", fontSize: "13px" }}>
                      28%
                    </span>{" "}
                    vs Last month
                  </p>
                </div>

                <p className="f1" style={{fontSize: "12px",marginTop: "13px"}}>6 mins ago</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    ),
  },
  {
    key: "2",
    label: "Iactive Jobs",
    children: (
      <div>
        <Row
          style={{ marginLeft: "0px", marginRight: "0px" }}
          gutter={[12, 12]}
        >
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    ),
  },
  {
    key: "3",
    label: "Completed Jobs",
    children: (
      <div>
        <Row
          style={{ marginLeft: "0px", marginRight: "0px" }}
          gutter={[12, 12]}
        >
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
            >
              <Typography.Title level={5} style={{ marginBottom: "34px" }}>
                Senior Developers
              </Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">
                Total Applicants
              </Typography.Title>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex" }}>
                  <ArrowUpOutlined
                    style={{ paddingRight: "10px", color: "#0A66C2" }}
                  />
                  <p>
                    <span style={{ color: "#0A66C2" }}>28%</span> vs Last month
                  </p>
                </div>

                <p>6 mins ago</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    ),
  },
];

const onChange = (key) => {
  console.log(key);
};
const columns = [
  {
    title: "Job Id",
    dataIndex: "JobId",
    key: "JobId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Position",
    dataIndex: "Position",
    key: "Position",
  },
  {
    title: "1st Level",
    dataIndex: "stLevel",
    key: "stLevel",
  },
  {
    title: "2nd Level",
    dataIndex: "tstLevel",
    key: "tstLevel",
  },
  {
    title: "3rd Level",
    dataIndex: "tstLevel",
    key: "tstLevel",
  },
  {
    title: "4th Level",
    dataIndex: "tstLevel",
    key: "tstLevel",
  },
  {
    title: "Total Marks",
    dataIndex: "tstLevel",
    key: "tstLevel",
  },
 
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "tstLevel",
  },
];
const data = [
  {
    key: "1",
    JobId: "#001",
    name: "John Brown",
    Position: 32,
    stLevel: "7/10",
    tstLevel: "6/10",
    tags: ["Active"],
    action:<div><img src="./icons/view.png" /></div>
  },
  {
    key: "2",
    JobId: "#002",
    name: "Jim Green",
    Position: 42,
    stLevel: "4/10",
    tstLevel: "6/10",
    tags: ["Hired"],
    action:<div><img src="./icons/view.png" /></div>
  },
 
  {
    key: "3",
    JobId: "#003",
    name: "Joe Black",
    Position: 32,
    stLevel: "2/10",
    tstLevel: "6/10",
    tags: ["Reject"],
    action:<div><img src="./icons/view.png" /></div>
  },
  {
    key: "3",
    JobId: "#003",
    name: "Joe Black",
    Position: 32,
    stLevel: "2/10",
    tstLevel: "6/10",
    tags: ["Hired"],
    action:<div><img src="./icons/view.png" /></div>
  },
  {
    key: "3",
    JobId: "#003",
    name: "Joe Black",
    Position: 32,
    stLevel: "2/10",
    tstLevel: "6/10",
    tags: ["Active"],
    action:<div><img src="./icons/view.png" /></div>
  },
];
const dataSource = [
  {
    key: "1",
    name: "2nd Level:" + "\xa0\xa0\xa0\xa0" + " 6/10",
    age: 32,
    address: "Interviewer:" + "\xa0\xa0\xa0\xa0" + "Stella",
  },
  {
    key: "2",
    name: "2nd Level:" + "\xa0\xa0\xa0\xa0" + "6/10",
    age: 42,
    address: "Interviewer:" + "\xa0\xa0\xa0\xa0" + "Smith",
  },
  {
    key: "2",
    name: "2nd Level:" + "\xa0\xa0\xa0\xa0" + "waiting",
    age: 42,
    address: "Interviewer:" + "\xa0\xa0\xa0\xa0" + "Stephan",
  },
  {
    key: "2",
    name: "Meet Via:" + "\xa0\xa0\xa0\xa0" + "G-Meet",
    age: 42,
    address: "Interviewer:" + "\xa0\xa0\xa0\xa0" + "Johnson",
  },
];
const columnsuser = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 350,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const App = () => {
  return (
    <Layout className="main">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="menu-icon"
      >
        <div className="demo-logo">
          <Image src="./logo.png" />
        </div>
        <Input
          placeholder="Search"
          style={{ width: "250px", marginLeft: "50px" }}
          suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
        />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout className="sider-css">
        <Sider
          width={80}
          // style={{
          //   background: colorBgContainer,
          // }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
          // style={{
          //   padding: 24,
          //   margin: 0,
          //   minHeight: 280,
          //   background: colorBgContainer,
          //   borderRadius: borderRadiusLG,
          // }}
          >
            <Row gutter={[24, 24]}>
              <Col lg={13}>
                <Typography.Title level={4} className="f1">HR Employee</Typography.Title>
                <Typography.Title level={5} className="f1">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </Typography.Title>
                
                <DualAxes {...config} className="chart-bg" title={"Application’s  Info"}  />
          
               
              </Col>
              <Col lg={11} className="bg-girl">
                <Row>
                  <Col lg={10} style={{ marginTop: "50px",padding:"22px" }}>
                    <Image
                      src="./sheet.png"
                      preview={false}
                      className="sheet-img"
                    />
                    <Typography.Title level={2} className="number f2">
                      0033
                    </Typography.Title>
                    <Typography.Title
                      level={3}
                       className="f1"
                      style={{ color: "#ffff", fontSize: "22px" }}
                    >
                      New Assessment's
                    </Typography.Title>
                  </Col>
                  <Col lg={14}>
                    <Row>
                      <Col lg={24} className="office-girl">
                        <div style={{ display: "flex" }}>
                          <Image
                            src={"./officegirl_2.png"}
                            preview={false}
                            style={{ paddingTop: "40px" }}
                          />
                          <div>
                            <Image
                              src={"./officegirl_1.png"}
                              preview={false}
                              className="office-girl-two"
                            />
                            <div className="office-girl-button">
                              <Button className="f2">VIEW DETAILS</Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row gutter={[12, 12]} style={{paddingTop:"50px"}}>
              <Col lg={19}>
                <Card className="user-card">
                  <Typography.Title className="level f1" level={4}>Today Interviews Meetings Info</Typography.Title>
                  <div>
                    <Row className="user-row">
                      <Col lg={8} style={{ textAlign: "center" }}>
                        <Card
                          className="card-main"
                          bordered={false}
                          style={{
                            width: 340,
                          }}
                          actions={[
                            <div>
                              <Image src="./icons/cal.png" />
                              <p className="f1" style={{ color: "#0A66C2" }}>19th Feb 2024</p>
                            </div>,
                            <div>
                              <Image src="./icons/c2.png" />

                              <p className="f1" style={{ color: "#0A66C2" }}>10.30 A.M</p>
                            </div>,
                          ]}
                        >
                          <Meta
                            title={
                              <div>
                                <img className="circle-img" src="./user1.png" />
                              </div>
                            }
                            description={
                              <div>
                                <p style={{ color: "black" }} className="f1">John Smith</p>
                                <p style={{ color: "black" }} className="f1">
                                  Senior Python Developer
                                </p>
                              </div>
                            }
                          />
                        </Card>
                      </Col>
                      <Col lg={16}>
                        <Table
                          className="user-table"
                          dataSource={dataSource}
                          columns={columnsuser}
                          bordered
                          showHeader={false}
                          pagination={false}
                        />
                        <div className="user-button">
                          <Button className="btn-1 f1">Reschedule Meeting</Button>
                          <Button className="btn-2 f1">Join Meeting</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
              <Col lg={5}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} className="side-cal"  />
                <div className="side-cont">
                  <Typography.Title level={5} className="f1">UpComings</Typography.Title>
                  <Typography.Title level={5} className="f1" style={{ paddingTop: "8px" }}>
                    View All
                  </Typography.Title>
                </div>
                <Row style={{ padding: "4px" }}>
                  <Col lg={6}>
                    <div className="v2">
                      <p className="f1" style={{margin:"2px"}}>07</p>
                      <p className="f1">Feb</p>
                    </div>
                  </Col>
                  <Col lg={10}>
                    <p className="v1 f1">Interview with Designer</p>
                    <p className="v1 f1">Created by Stella</p>
                    <p className="v1 f1">10 A.M to 11 A.M</p>
                  </Col>
                  <Col lg={8}>
                    <Button className="side-button f1">Details</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col lg={19}>
                <Card style={{ marginTop: "50px" }} className="user-card">
                  <Row>
                    <Col lg={12}>
                      <div style={{ display: "flex" }}>
                        <Typography.Title level={3} className="f1">
                          Posted Jobs
                        </Typography.Title>
                        <Typography.Title level={5} style={{margin: "11px"}} className="tab-view f1">
                          View All
                        </Typography.Title>
                      </div>
                    </Col>
                    <Col lg={12} style={{ marginTop: "30px" }}>
                      <div className="filter">
                        <Input
                          placeholder="Search"
                          className="filter-input"
                          suffix={
                            <SearchOutlined
                              style={{ color: "rgba(0,0,0,.45)" }}
                            />
                          }
                        />
                        <Button
                          className="filter-but f1"
                          icon={<FilterOutlined style={{ color: "#0A66C2" }} />}
                        >
                          Filters
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <Tabs
                    defaultActiveKey="1"
                    items={itemstab}
                    onChange={onChange}
                    className="tab-font"
                  />
                </Card>
              </Col>
              <Col lg={5}>
                <Row style={{ padding: "4px" }}>
                  <Col lg={6}>
                    <div className="v2">
                      <p className="f1" style={{margin:"2px"}}>07</p>
                      <p className="f1">Feb</p>
                    </div>
                  </Col>
                  <Col lg={10}>
                    <p className="v1 f1">Interview with Designer</p>
                    <p className="v1 f1">Created by Stella</p>
                    <p className="v1 f1">10 A.M to 11 A.M</p>
                  </Col>
                  <Col lg={8}>
                    <Button className="side-button f1">Details</Button>
                  </Col>
                </Row>
                {/* <Row style={{ padding: "4px" }}>
                  <Col lg={6}>
                    <div className="v2">
                      <p style={{margin:"2px"}}>07</p>
                      <p>Feb</p>
                    </div>
                  </Col>
                  <Col lg={10}>
                    <p className="v1">Interview with Designer</p>
                    <p className="v1">Created by Stella</p>
                    <p className="v1">10 A.M to 11 A.M</p>
                  </Col>
                  <Col lg={8}>
                    <Button className="side-button">Details</Button>
                  </Col>
                </Row> */}
                <div className="side-cont">
                  <Typography.Title level={5} style={{marginLeft: "17px"}}>Activity</Typography.Title>
                  <Typography.Title level={5} style={{ paddingTop: "8px" }}>
                    View All
                  </Typography.Title>
                </div>
                <div className="user-side">
                  <Image src="./icons/user1.png" preview={false} />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                </div>
                <div className="user-side">
                  <Image src="./icons/user2.png" preview={false} />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                </div>
                <div className="user-side">
                  <Image src="./icons/user3.png" preview={false} />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                </div>
                
              </Col>
            </Row>
            <Row style={{ paddingTop: "50px" }}>
              <Col lg={19} className="table-css">
                <Card className="user-card">
                  <Row style={{paddingBottom: "20px"}}>
                    <Col lg={12}>
                      <div style={{ display: "flex" }}>
                        <Typography.Title level={3} className="f1">
                          Candidate Status
                        </Typography.Title>
                        <Typography.Title style={{margin: "11px"}}  level={5} className="tab-view f1">
                          View All
                        </Typography.Title>
                      </div>
                    </Col>
                    <Col lg={12} style={{ marginTop: "30px" }}>
                      <div className="filter">
                        <Input
                          placeholder="Search"
                          className="filter-input"
                          suffix={
                            <SearchOutlined
                              style={{ color: "rgba(0,0,0,.45)" }}
                            />
                          }
                        />
                        <Button
                          className="filter-but f1"
                          icon={<FilterOutlined style={{ color: "#0A66C2" }} />}
                        >
                          Filters
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Table className="last-tab" columns={columns} dataSource={data} pagination={false} />
                </Card>
              </Col>
              <Col lg={5}>
              <div className="side-cont">
                  <Typography.Title className="f1" level={5} style={{marginLeft: "17px"}}>Hiring Candidates</Typography.Title>
                  <Typography.Title className="f1" level={5} style={{ paddingTop: "8px" }}>
                    View All
                  </Typography.Title>
                </div>
                <div className="user-side">
                  <Image src="./1.png" preview={false} className="circle-img2" />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                  <Button className="last-but">Details</Button>
                </div>
                <div className="user-side">
                  <Image src="./2.png" preview={false} className="circle-img2" />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                  <Button className="last-but">Details</Button>
                </div>
                <div className="user-side">
                  <Image src="./3.png" preview={false} className="circle-img2" />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  </div>
                  <Button className="last-but">Details</Button>
                </div>
                <div className="user-side">
                  <Image src="./4.png" preview={false} className="circle-img2" />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p className="f1">John Doe [Python Developer]</p>
                    <p className="f1">Interview with Stella</p>
                    <p className="f1">Interview with Stella</p>
                  
                  </div>
                  <div>
                  <Button className="last-but f1">Details</Button>
                  </div>
                
                </div>  
                
                {/* <div className="user-side">
                  <Image src="./icons/user2.png" preview={false} />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p>John Doe [Python Developer]</p>
                    <p>Interview with Stella</p>
                    <p>Interview with Stella</p>
                  </div>
                </div>
                <div className="user-side">
                  <Image src="./icons/user3.png" preview={false} />
                  <div style={{ marginLeft: "10px", fontSize: "12px" }}>
                    <p>John Doe [Python Developer]</p>
                    <p>Interview with Stella</p>
                    <p>Interview with Stella</p>
                  </div>
                </div> */}
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
