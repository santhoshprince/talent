import React from "react";
import { Tabs, Row, Col, Card, Typography } from "antd";
import { ArrowUpOutlined} from '@ant-design/icons';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tab 1",
    children: (
      <div>
        <Row style={{marginLeft:"0px",marginRight:"0px"}} gutter={[12,12]}>
          <Col lg={6}>
            <Card
              title="Web Developer  #001"
              className="card-css"
              bordered={false}
              width={350}
            >
              <Typography.Title level={5} style={{marginBottom: "34px"}}>Senior Developers</Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">Total Applicants</Typography.Title>
              <div style={{display:"flex",justifyContent: "space-evenly"}}>
                <div style={{display:"flex"}}>
                <ArrowUpOutlined style={{paddingRight:"10px",color:"#0A66C2"}}/>
                <p><span style={{color:"#0A66C2"}}>28%</span> vs Last month</p>
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
              <Typography.Title level={5} style={{marginBottom: "34px"}}>Senior Developers</Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">Total Applicants</Typography.Title>
              <div style={{display:"flex",justifyContent: "space-evenly"}}>
                <div style={{display:"flex"}}>
                <ArrowUpOutlined style={{paddingRight:"10px",color:"#0A66C2"}}/>
                <p><span style={{color:"#0A66C2"}}>28%</span> vs Last month</p>
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
              <Typography.Title level={5} style={{marginBottom: "34px"}}>Senior Developers</Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">Total Applicants</Typography.Title>
              <div style={{display:"flex",justifyContent: "space-evenly"}}>
                <div style={{display:"flex"}}>
                <ArrowUpOutlined style={{paddingRight:"10px",color:"#0A66C2"}}/>
                <p><span style={{color:"#0A66C2"}}>28%</span> vs Last month</p>
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
              <Typography.Title level={5} style={{marginBottom: "34px"}}>Senior Developers</Typography.Title>
              <span className="card-no">258</span>
              <Typography.Title level={5} className="total-css">Total Applicants</Typography.Title>
              <div style={{display:"flex",justifyContent: "space-evenly"}}>
                <div style={{display:"flex"}}>
                <ArrowUpOutlined style={{paddingRight:"10px",color:"#0A66C2"}}/>
                <p><span style={{color:"#0A66C2"}}>28%</span> vs Last month</p>
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
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];
const App = () => (
  
    <Row>
      <Col lg={20}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
);

export default App;
