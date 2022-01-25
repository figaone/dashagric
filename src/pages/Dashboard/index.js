import React, { Component } from "react";
import SettingMenu from "../Shared/SettingMenu";
import { Row, Col, Button, Input, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import servicesIcon5 from "../../assets/images/services-icon/farmer.png"
import servicesIcon6 from "../../assets/images/services-icon/fertilizer.png"
import servicesIcon7 from "../../assets/images/services-icon/field.png"
import servicesIcon8 from "../../assets/images/services-icon/four-species.png"
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart";
import RadialChart from "../AllCharts/apex/apexdonut";
import Apexdonut from "../AllCharts/apex/apexdonut1";
import SparkLine from "../AllCharts/sparkline/sparkline";
import SparkLine1 from "../AllCharts/sparkline/sparkline1";
import Salesdonut from "../AllCharts/apex/salesdonut";

import "chartist/dist/scss/chartist.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Row className="align-items-center">
            <Col sm={6}>
              <div className="page-title-box">
                <h4 className="font-size-18">Dashboard</h4>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item active">
                    Welcome to SMART ACRES Dashboard
                  </li>
                </ol>
              </div>
            </Col>

            <Col sm="6">
              <div className="float-right d-none d-md-block">
                <SettingMenu />
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon5} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Farmers
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      50{" "}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon6} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Fert Types
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      3{" "}
                      <i className="mdi mdi-arrow-down text-danger ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-danger">
                      <p className="mb-0">- 28%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon8} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Species
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      2{" "}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-left mini-stat-img mr-4">
                      <img src={servicesIcon7} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Fields
                    </h5>
                    <h4 className="font-weight-medium font-size-24">
                      4{" "}
                      <i className="mdi mdi-arrow-up text-success ml-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-warning">
                      <p className="mb-0">+ 84%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-right">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={9}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Fields Used Monthly</h4>
                  <Row>
                    <Col lg={7}>
                      <div>
                        <LineAreaChart />
                      </div>
                    </Col>
                    <Col lg={5}>
                      <Row>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">Last month</p>
                            <h3>8</h3>
                            <p className="text-muted mb-5">
                              Eight fields were used for the experiments
                              a month ago
                            </p>
                            <RadialChart />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">This month</p>
                            <h3>4</h3>
                            <p className="text-muted mb-5">
                              Four fields are used for the experiments
                              this month
                            </p>
                            <Apexdonut />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3}>
                  <Card className="bg-primary">
                    <CardBody>
                      <div className="text-center text-white py-4">
                        <h5 className="mt-0 mb-4 text-white-50 font-size-16">
                          Highest Plant Growth
                        </h5>
                        <h1>14</h1>
                        <p className="font-size-14 pt-1">cm</p>
                        <p className="text-white-50 mb-0">
                          At field 4, the highest plant growth in height was recorded{" "}
                          <Link to="#" className="text-white">
                            View more
                          </Link>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
            

            {/* <Col xl={3}>
              <Card>
                <CardBody>
                  <div>
                    <h4 className="card-title mb-4">Sales Analytics</h4>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Online</p>
                          <h5 className="mb-4">1,542</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Offline</p>
                          <h5 className="mb-4">6,451</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine1 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Marketing</p>
                          <h5>84,574</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          </Row>

          <Row>
            <Col xl={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Total plant Growth Report</h4>
                  <div className="cleafix">
                    <p className="float-left">
                      <i className="mdi mdi-calendar mr-1 text-primary"></i> Jan
                      01 - Jan 31
                    </p>
                    <h5 className="font-18 text-right">40cm</h5>
                  </div>
                  <div id="ct-donut" className="ct-chart wid pt-4">
                    <Salesdonut />
                  </div>
                  <div className="mt-4">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <span className="badge badge-primary">Fert1</span>
                          </td>
                          <td>fertilizer 1</td>
                          <td className="text-right">54.5%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge badge-success">Fert2</span>
                          </td>
                          <td>Fertilizer 2</td>
                          <td className="text-right">28.0%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge badge-warning">Fert3</span>
                          </td>
                          <td>Fertilizer 3</td>
                          <td className="text-right">17.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Activity</h4>
                  <ol className="activity-feed">
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 22</span>
                        <span className="activity-text">
                          change replicates
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 20</span>
                        <span className="activity-text">
                          changed field for experiments
                          <Link to="#" className="text-success">
                            Read more
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 19</span>
                        <span className="activity-text">
                          added more farmers
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 17</span>
                        <span className="activity-text">
                          visit to fields
                        </span>
                      </div>
                    </li>
                    {/* <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 16</span>
                        <span className="activity-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          rem.
                        </span>
                      </div>
                    </li> */}
                  </ol>
                  <div className="text-center">
                    <Link to="#" className="btn btn-primary">
                      Load More
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Latest Farmers</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">(#) Id</th>
                          <th scope="col">Farmer Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Amount</th>
                          <th scope="col" colSpan="2">
                            Fertilizer Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#14256</th>
                          <td>
                            <div>
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge badge-success">
                             Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14257</th>
                          <td>
                            <div>
                              <img
                                src={user3}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Brent Shipley
                            </div>
                          </td>
                          <td>16/1/2019</td>
                          <td>$112</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14258</th>
                          <td>
                            <div>
                              <img
                                src={user4}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Robert Sitton
                            </div>
                          </td>
                          <td>17/1/2019</td>
                          <td>$116</td>
                          <td>
                            <span className="badge badge-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14259</th>
                          <td>
                            <div>
                              <img
                                src={user5}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Alberto Jackson
                            </div>
                          </td>
                          <td>18/1/2019</td>
                          <td>$109</td>
                          <td>
                            <span className="badge badge-danger">Cancel</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14260</th>
                          <td>
                            <div>
                              <img
                                src={user6}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              David Sanchez
                            </div>
                          </td>
                          <td>19/1/2019</td>
                          <td>$120</td>
                          <td>
                            <span className="badge badge-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>


            {/* <Col xl={5}>
              <Row>
                <Col md={6}>
                  <Card className="text-center">
                    <CardBody>
                      <div className="py-4">
                        <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

                        <h5 className="text-primary mt-4">Order Successful</h5>
                        <p className="text-muted">
                          Thanks you so much for your order.
                        </p>
                        <div className="mt-4">
                          <Link to="" className="btn btn-primary btn-sm">
                            Chack Status
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="bg-primary">
                    <CardBody>
                      <div className="text-center text-white py-4">
                        <h5 className="mt-0 mb-4 text-white-50 font-size-16">
                          Top Product Sale
                        </h5>
                        <h1>1452</h1>
                        <p className="font-size-14 pt-1">Computer</p>
                        <p className="text-white-50 mb-0">
                          At solmen va esser necessi far uniform myth...{" "}
                          <Link to="#" className="text-white">
                            View more
                          </Link>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Card>
                    <CardBody>
                      <h4 className="card-title mb-4">Client Reviews</h4>
                      <p className="text-muted mb-3 pb-4">
                        " Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators
                        it would be necessary. "
                      </p>
                      <div className="float-right mt-2">
                        <Link to="#" className="text-primary">
                          <i className="mdi mdi-arrow-right h5"></i>
                        </Link>
                      </div>
                      <h6 className="mb-0">
                        {" "}
                        <img
                          src={user3}
                          alt=""
                          className="avatar-sm rounded-circle mr-2"
                        />{" "}
                        James Athey James Athey
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col> */}
          </Row>

          {/* <Row> */}
            {/* <Col xl={8}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Latest Trasaction</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">(#) Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Amount</th>
                          <th scope="col" colSpan="2">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#14256</th>
                          <td>
                            <div>
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge badge-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14257</th>
                          <td>
                            <div>
                              <img
                                src={user3}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Brent Shipley
                            </div>
                          </td>
                          <td>16/1/2019</td>
                          <td>$112</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14258</th>
                          <td>
                            <div>
                              <img
                                src={user4}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Robert Sitton
                            </div>
                          </td>
                          <td>17/1/2019</td>
                          <td>$116</td>
                          <td>
                            <span className="badge badge-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14259</th>
                          <td>
                            <div>
                              <img
                                src={user5}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Alberto Jackson
                            </div>
                          </td>
                          <td>18/1/2019</td>
                          <td>$109</td>
                          <td>
                            <span className="badge badge-danger">Cancel</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14260</th>
                          <td>
                            <div>
                              <img
                                src={user6}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              David Sanchez
                            </div>
                          </td>
                          <td>19/1/2019</td>
                          <td>$120</td>
                          <td>
                            <span className="badge badge-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle mr-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge badge-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link to="#" className="btn btn-primary btn-sm">
                                Edit
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
            {/* <Col xl={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Chat</h4>
                  <div className="chat-conversation">
                    <SimpleBar style={{ height: "365px" }}>
                      <ul
                        className="conversation-list"
                        data-simplebar
                        style={{ maxHeight: "367px" }}
                      >
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:00</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Hello!</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="Female"
                            />
                            <span className="time">10:01</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>
                                Hi, How are you? What about our next meeting?
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:04</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Yeah everything is fine</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:05</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>Wow that's great</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:08</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name mb-2">Smith</span>

                              <img
                                src={smimg1}
                                alt=""
                                height="48"
                                className="rounded mr-2"
                              />
                              <img
                                src={smimg2}
                                alt=""
                                height="48"
                                className="rounded"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </SimpleBar>

                    <Row className="mt-3 pt-1">
                      <Col md="9" className="chat-inputbar col-8">
                        <Input
                          type="text"
                          className="chat-input"
                          placeholder="Enter your text"
                        />
                      </Col>
                      <Col md="3" className="chat-send col-4">
                        <Button
                          type="submit"
                          color="success"
                          className="btn-block"
                        >
                          Send
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          {/* </Row> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
