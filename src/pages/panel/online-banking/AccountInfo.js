import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { Button, Card, Col, DropdownItem, DropdownMenu, 
    DropdownToggle, Row, UncontrolledDropdown,
   
    
    Modal,
    ModalBody,
    Form,
    Badge,
 } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockHeadSub,
  BlockTitle,
  Icon,
} from "../../../components/Component";
import Wallet from "../../../components/partials/panel/wallet/Wallet";
import { useForm } from "react-hook-form";
const AccountInfo = () => {
    const [modal, setModal] = useState({
        add: false,
      });
      const [viewModal, setViewModal] = useState(false);
    const [formData, setFormData] = useState({
        acc:"",
        dob: new Date(),
        email:"",
        phone:"",
        bill: "",
        issue: new Date(),
        due: new Date(),
        total: "",
        status: "Paid",
        ref: "",
      });
      // function to reset the form
  const resetForm = () => {
    setFormData({
      bill: "",
      issue: new Date(),
      due: new Date(),
      total: "",
      status: "Paid",
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { bill, total } = submitData;
    let submittedData = {
      id: data.length + 1,
      ref: 4970 + data.length,
      bill: bill,
      issue: dateFormatterAlt(formData.issue, true),
      due: dateFormatterAlt(formData.due, true),
      total: total + ".00",
      status: formData.status,
    };
    setData([submittedData, ...data]);

    resetForm();
    setModal({ add: false });
  };

  useEffect(() => {
    reset(formData)
  }, [formData]);


    const { reset, register, handleSubmit, formState: { errors } } = useForm();

  return (
    <React.Fragment>
      <Head title="Crypto Dashboard"></Head>
      <Content>
        <BlockHead>
          <BlockHeadSub>Account Info</BlockHeadSub>
          <div className="nk-block-between-md g-4">
            <BlockHeadContent>
              <BlockTitle tag="h2" className="fw-normal">
                My Account
              </BlockTitle>
              <BlockDes>
                <p>Here is the list of your accounts!</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <ul className="nk-block-tools gx-3">
                <li>
                  <UncontrolledDropdown className="opt-menu-md">
                    <DropdownToggle tag="a" className="btn btn-dim btn-outline-light btn-icon">
                      <Icon name="setting"></Icon>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xs" end>
                      <ul className="link-list-plain sm">
                        <li>
                          <DropdownItem tag="a">
                            <span>Display</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem tag="a">
                            <span>Show</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
                <li>
                  <Button color="primary">
                    <span>Send</span> <Icon name="arrow-long-right"></Icon>
                  </Button>
                </li>
                <li>
                  <Button color="dim" className="btn-outline-light">
                    <span>Withdraw</span> <Icon name="arrow-long-right" className="d-none d-sm-inline-block"></Icon>
                  </Button>
                </li>
              </ul>
            </BlockHeadContent>
          </div>
        </BlockHead>

        <Block>
          <BlockHead size="sm">
            <BlockHeadContent>
              <BlockTitle tag="h5">Local Accounts</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col sm="6" lg="4">
              <Card className="card-bordered is-dark">
                <Wallet
                  className="is-default"
                //   icon="sign-kobo"
                  title="Main Account"
                  firstAmount="40.509505"
                  firstCurrency="GHC"
                  secondAmount="8,924.63"
                  secondCurrency="GHC"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                //   icon="sign-eth"
                  title="Savings Account"
                  firstAmount="5.452058"
                  firstCurrency="GHC"
                  secondAmount="1,583.25"
                  secondCurrency="GHC"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                //   icon="sign-btc"
                  title="Current Account"
                  firstAmount="4.434953"
                  firstCurrency="GHC"
                  secondAmount="28,247.63"
                  secondCurrency="GHC"
                />
              </Card>
            </Col>
          </Row>
        </Block>
        <Block size="lg">
          <BlockHead size="sm">
            <BlockHeadContent>
              <BlockTitle tag="h5">Foreign Accounts</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <Row className="g-gs">
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  className="is-default"
                  icon="sign-usd"
                  title="USD Account"
                  firstAmount="12,495.90"
                  firstCurrency="USD"
                  secondAmount="12,495.90"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered">
                <Wallet
                  icon="sign-eur"
                  title="EUR Account"
                  firstAmount="12,495.90"
                  firstCurrency="EUR"
                  secondAmount="11,495.90"
                  secondCurrency="USD"
                />
              </Card>
            </Col>
            <Col sm="6" lg="4">
              <Card className="card-bordered dashed h-100" onClick={() => setModal({ add: true })}>
                <div className="nk-wgw-add">
                  <div className="nk-wgw-inner">
                    <a href="#">
                      <div className="add-icon">
                        <em className="icon ni ni-plus"></em>
                      </div>
                      <h6 className="title">Add New Account</h6>
                    </a>
                    <span className="sub-text">You can add your account to your profile and manage here.</span>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Block>

        <Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Add Account</h5>
              <div className="mt-4">
                <Form className="row gy-4 mt-4" onSubmit={handleSubmit(onFormSubmit)}>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label">Account Number</label>
                      <input
                        className="form-control"
                        {...register('acc', { required: "This field is required" })}
                        type="text"
                        value={formData.acc}
                        onChange={(e) => setFormData({ ...formData, acc: e.target.value })}
                        placeholder="Enter account number" />
                      {errors.acc && <span className="invalid">{errors.acc.message}</span>}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        className="form-control"
                        {...register('phone', { required: "This field is required" })}
                        type="number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      {errors.phone && <span className="invalid">{errors.phone.message}</span>}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label">Date of birth</label>
                      <DatePicker
                        selected={formData.dob}
                        className="form-control"
                        onChange={(date) => setFormData({ ...formData, dob: date })}
                        minDate={new Date()}
                      />
                    </div>
                  </Col>
                  <Col md="6">
                  <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        {...register('email', { required: "This field is required" })}
                        type="number"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      {errors.email && <span className="invalid">{errors.email.message}</span>}
                    </div>
                  </Col>
                  {/* <Col md="12">
                    <div className="form-group">
                      <label className="form-label">Status</label>
                      <div className="form-control-wrap">
                        <RSelect
                          options={statusOptions}
                          value={{
                            value: formData.status,
                            label: formData.status,
                          }}
                          onChange={(e) => setFormData({ ...formData, status: e.value })}
                        />
                      </div>
                    </div>
                  </Col> */}
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit">
                          Proceed
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault();
                            onFormCancel();
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default AccountInfo;
