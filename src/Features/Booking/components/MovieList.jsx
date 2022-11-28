import React from "react";
import { Col, Row, Card, Button } from "antd";

const MovieList = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">Danh sách phim</h1>
      <Row gutter={30}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className=" text-3xl my-2 font-semibold">The walking dead</h1>
            <p className="text-2xl my-2">Good</p>
            <Button type="primary" size="large">
              Đặt vé
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className=" text-3xl my-2 font-semibold">The walking dead</h1>
            <p className="text-2xl my-2">Good</p>
            <Button type="primary" size="large">
              Đặt vé
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className=" text-3xl my-2 font-semibold">The walking dead</h1>
            <p className="text-2xl my-2">Good</p>
            <Button type="primary" size="large">
              Đặt vé
            </Button>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <h1 className=" text-3xl my-2 font-semibold">The walking dead</h1>
            <p className="text-2xl my-2">Good</p>
            <Button type="primary" size="large">
              Đặt vé
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MovieList;
