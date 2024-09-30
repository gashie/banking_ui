import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  Input,
  Form,
  
  Label,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledDropdown,
  Modal,
  ModalBody,
  Button,
    Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,

} from "reactstrap";
import { Block, BlockHead, BlockTitle, Icon } from "../../../components/Component";
import { Link } from "react-router-dom";

const OwnAccount = () => {
  const [currency, setCurrency] = useState("USD");
  const [icon, setIcon] = useState("sign-btc-alt");
  const [crypto, setCrypto] = useState("Main Account (GHS)");
  const [crypto_two, setCrypto_two] = useState("Savings Account (GHS)");

  const [wallet, setWallet] = useState("BTC Wallet");
  // function to close the form modal
  const onFormCancel = () => {
    setModal({ confirm: false, buyCoin: false });
  };
  const [modal, setModal] = useState({
    confirm: false,
    buyCoin: false,
  });
  return (
    <React.Fragment>
      <Head title="Crypto Dashboard"></Head>
      <Card className="card-bordered" inverse color="gray">
                  <CardHeader>Header</CardHeader>
                  <CardBody className="card-inner">
                    <CardTitle tag="h5">Transfer</CardTitle>
                    <CardText>
                        Own Account Transfer
                    </CardText>
                  </CardBody>
                </Card>
      <Content>

        <div className="buysell wide-xs m-auto">
          {/* <div className="buysell-nav text-center">
            <ul className="nk-nav nav nav-tabs nav-tabs-s2">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Buy Coin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sell Coin
                </a>
              </li>
            </ul>
          </div>
          <div className="buysell-title text-center">
            <h2 className="title">What do you want to buy!</h2>
          </div> */}
          <div className="buysell-block">
            <Form className="buysell-form">
              <div className="form-group buysell-field">
                <div className="form-label-group">
                  <Label for="buysell-choose-currency" className="form-label">
                    Source Account
                  </Label>
                </div>
                <Input type="hidden" value="btc" name="bs-currency" id="buysell-choose-currency" />
                <UncontrolledDropdown className="buysell-cc-dropdown">
                  <DropdownToggle
                    className="buysell-cc-choosen dropdown-indicator"
                    tag="a"
                    href="toggle"
                    onClick={(ev) => ev.preventDefault()}
                  >
                    <div className="coin-item coin-btc">
                      <div className="coin-icon">
                        <Icon name="property-add" />
                      </div>
                      <div className="coin-info">
                        <span className="coin-name">{crypto}</span>
                        <span className="coin-text">Last transaction: Sept 23, 2024</span>
                      </div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                    <div className="buysell-cc-list">
                      <DropdownItem
                        onClick={() => [setCrypto("Main (111400221144) GHC"), setIcon("sign-btc-alt")]}
                        className="buysell-cc-item selected"
                      >
                        <Link href="#" to="#" className="buysell-cc-opt" data-currency="btc">
                          <div className="coin-item coin-btc">
                            <div className="coin-icon">
                              <Icon name="sign-btc-alt" />
                            </div>
                            <div className="coin-info">
                              <span className="coin-name">Main (111400221144) GHC</span>
                              <span className="coin-text">Last Transaction: Sept 23, 2024</span>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => [setCrypto("Main (GHC)"), setIcon("sign-eth-alt")]}
                        className="buysell-cc-item"
                      >
                        <Link href="#" to="#" className="buysell-cc-opt" data-currency="eth">
                          <div className="coin-item coin-eth">
                            <div className="coin-icon">
                              <Icon name="sign-eth-alt" />
                            </div>
                            <div className="coin-info">
                              <span className="coin-name">Main (GHC)</span>
                              <span className="coin-text">No transaction yet!</span>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="form-group buysell-field">
                <div className="form-label-group">
                  <Label for="buysell-choose-currency" className="form-label">
                    Destinaton Account
                  </Label>
                </div>
                <Input type="hidden" value="btc" name="bs-currency" id="buysell-choose-currency" />
                <UncontrolledDropdown className="buysell-cc-dropdown">
                  <DropdownToggle
                    className="buysell-cc-choosen dropdown-indicator"
                    tag="a"
                    href="toggle"
                    onClick={(ev) => ev.preventDefault()}
                  >
                    <div className="coin-item coin-btc">
                      <div className="coin-icon">
                        <Icon name="swap" />
                      </div>
                      <div className="coin-info">
                        <span className="coin-name">{crypto_two}</span>
                        <span className="coin-text">Last transaction: Sept 23, 2024</span>
                      </div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                    <div className="buysell-cc-list">
                      <DropdownItem
                        onClick={() => [setCrypto("Current (GHC)"), setIcon("sign-btc-alt")]}
                        className="buysell-cc-item selected"
                      >
                        <Link href="#" to="#" className="buysell-cc-opt" data-currency="btc">
                          <div className="coin-item coin-btc">
                            <div className="coin-icon">
                              <Icon name="sign-btc-alt" />
                            </div>
                            <div className="coin-info">
                              <span className="coin-name">Current (GHC)</span>
                              <span className="coin-text">Last Transaction: Sept 23, 2024</span>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => [setCrypto("Main (GHC)"), setIcon("sign-eth-alt")]}
                        className="buysell-cc-item"
                      >
                        <Link href="#" to="#" className="buysell-cc-opt" data-currency="eth">
                          <div className="coin-item coin-eth">
                            <div className="coin-icon">
                              <Icon name="sign-eth-alt" />
                            </div>
                            <div className="coin-info">
                              <span className="coin-name">Savings (GHC)</span>
                              <span className="coin-text">Not order yet!</span>
                            </div>
                          </div>
                        </Link>
                      </DropdownItem>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              <div className="form-group buysell-field">
                <div className="form-label-group">
                  <Label className="form-label" for="buysell-amount">
                    Amount
                  </Label>
                </div>
                <div className="form-control-group">
                  <Input
                    type="text"
                    className="form-control form-control-lg form-control-number"
                    id="buysell-amount"
                    name="bs-amount"
                    placeholder="2000"
                  />
                  {/* <div className="form-dropdown">
                    <div className="text">
                      BTC<span>/</span>
                    </div>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className="dropdown-indicator-caret"
                        tag="a"
                        href="toggle"
                        onClick={(ev) => ev.preventDefault()}
                      >
                        {currency}
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu dropdown-menu-xxs dropdown-menu-right text-center">
                        <ul className="link-list-plain sm text-center">
                          <li onClick={() => setCurrency("USD")}>
                            <DropdownItem tag="a" href="#currency" onClick={(ev) => ev.preventDefault()}>
                              USD
                            </DropdownItem>
                          </li>
                          <li onClick={() => setCurrency("BTC")}>
                            <DropdownItem tag="a" href="#currency" onClick={(ev) => ev.preventDefault()}>
                              BTC
                            </DropdownItem>
                          </li>
                          <li onClick={() => setCurrency("ETH")}>
                            <DropdownItem tag="a" href="#currency" onClick={(ev) => ev.preventDefault()}>
                              ETH
                            </DropdownItem>
                          </li>
                          <li onClick={() => setCurrency("YEN")}>
                            <DropdownItem tag="a" href="#currency" onClick={(ev) => ev.preventDefault()}>
                              YEN
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div> */}
                </div>
                <div className="form-note-group">
                  <span className="buysell-min form-note-alt">Minimum: 10.00 GHC</span>
                  {/* <span className="buysell-rate form-note-alt">1 USD = 0.000016 BTC</span> */}
                </div>
              </div>

              {/* <div className="buysell-field form-group">
                <div className="form-label-group">
                  <label className="form-label">Payment Method</label>
                </div>
                <div className="form-pm-group">
                  <ul className="buysell-pm-list">
                    <li className="buysell-pm-item">
                      <Input className="buysell-pm-control" type="radio" name="bs-method" id="pm-paypal" />
                      <Label className="buysell-pm-label" for="pm-paypal">
                        <span className="pm-name">PayPal</span>
                        <span className="pm-icon">
                          <Icon name="paypal-alt" />
                        </span>
                      </Label>
                    </li>
                    <li className="buysell-pm-item">
                      <Input className="buysell-pm-control" type="radio" name="bs-method" id="pm-bank" />
                      <Label className="buysell-pm-label" for="pm-bank">
                        <span className="pm-name">Bank Transfer</span>
                        <span className="pm-icon">
                          <Icon name="building-fill" />
                        </span>
                      </Label>
                    </li>
                    <li className="buysell-pm-item">
                      <Input className="buysell-pm-control" type="radio" name="bs-method" id="pm-card" />
                      <Label className="buysell-pm-label" for="pm-card">
                        <span className="pm-name">Credit / Debit Card</span>
                        <span className="pm-icon">
                          <Icon name="cc-alt-fill" />
                        </span>
                      </Label>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className="buysell-field form-action">
                <Button
                  color="primary"
                  className="btn btn-lg btn-block btn-primary"
                  onClick={() => setModal({ buyCoin: true })}
                >
                  Proceed to transfer
                </Button>
              </div>

              <div className="form-note text-base text-center">
                Note: our transfer fee included,{" "}
                <Link tag="a" to="#" href="#" onClick={(ev) => ev.preventDefault()}>
                  see our fees
                </Link>
                .
              </div>
            </Form>
          </div>
        </div>
        <Modal
          isOpen={modal.buyCoin}
          toggle={() => setModal({ buyCoin: false })}
          className="modal-dialog-centered"
          size="md"
        >
          <a
            href="#close"
            onClick={(ev) => {
              ev.preventDefault();
              onFormCancel();
            }}
            className="close"
          >
            <Icon name="cross-sm" />
          </a>
          <ModalBody className="modal-body-lg">
            <BlockHead className="nk-block-head-xs text-center">
              <BlockTitle tag="h5">Confirm Transfer</BlockTitle>
              <div className="nk-block-text">
                <div className="caption-text">
                  You are about to transfer from Main account to your Savings account
                </div>
                {/* <span className="sub-text-sm">Exchange rate: 1 BTC = 9,804.00 USD</span> */}
              </div>
            </BlockHead>
            <Block>
              <div className="buysell-overview">
                <ul className="buysell-overview-list">
                  {/* <li className="buysell-overview-item">
                    <span className="pm-title">Pay with</span>
                    <span className="pm-currency">
                      <Icon name="paypal-alt" /> <span>PayPal</span>
                    </span>
                  </li> */}
                  <li className="buysell-overview-item">
                    <span className="pm-title">Total</span>
                    <span className="pm-currency">500.00 GHC</span>
                  </li>
                </ul>
                <div className="sub-text-sm">
                  * Our transaction fee are included.{" "}
                  <Link
                    tag="a"
                    to="#"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    See transaction fee
                  </Link>
                </div>
              </div>
              {/* <Form className="buysell-field">
                <div className="form-group buysell-field">
                  <div className="form-label-group">
                    <Label for="buysell-choose-currency" className="form-label">
                      Choose what you want to get
                    </Label>
                    <Link tag="a" to="#" className="link">
                      Add Wallet
                    </Link>
                  </div>
                  <Input type="hidden" value="btc" name="bs-currency" id="buysell-choose-currency" />
                  <UncontrolledDropdown className="buysell-cc-dropdown">
                    <DropdownToggle
                      className="buysell-cc-choosen dropdown-indicator"
                      tag="a"
                      href="toggle"
                      onClick={(ev) => ev.preventDefault()}
                    >
                      <div className="coin-item coin-btc">
                        <div className="coin-icon">
                          <Icon name={icon} />
                        </div>
                        <div className="coin-info">
                          <span className="coin-name">{wallet}</span>
                          <span className="coin-text">1X38 * * * * YW94</span>
                        </div>
                      </div>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                      <div className="buysell-cc-list">
                        <DropdownItem className="buysell-cc-item selected" onClick={() => [setWallet("BTC Wallet"), setIcon("sign-btc-alt")]}>
                          <Link href="#" to="#" className="buysell-cc-opt" data-currency="btc">
                            <div className="coin-item coin-btc">
                              <div className="coin-icon">
                                <Icon name="sign-btc-alt" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">BTC Wallet</span>
                                <span className="coin-text">1X38 * * * * YW94</span>
                              </div>
                            </div>
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="buysell-cc-item" onClick={() => [setWallet("Ethereum (ETH)"), setIcon("sign-eth-alt")]}>
                          <Link href="#" to="#" className="buysell-cc-opt" data-currency="eth">
                            <div className="coin-item coin-eth">
                              <div className="coin-icon">
                                <Icon name="sign-eth-alt" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">Ethereum (ETH)</span>
                                <span className="coin-text">Not order yet!</span>
                              </div>
                            </div>
                          </Link>
                        </DropdownItem>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </Form> */}
              <div className="buysell-field form-action text-center">
                <div>
                  <Button
                    color="primary"
                    className="btn btn-primary btn-lg"
                    onClick={() => setModal({ confirm: true })}
                  >
                    Confirm the Transfer
                  </Button>
                </div>
                <div className="pt-3">
                  <a
                    href="#"
                    className="link link-danger"
                    onClick={(ev) => {
                      ev.preventDefault();
                      onFormCancel();
                    }}
                  >
                    Cancel Transfer
                  </a>
                </div>
              </div>
            </Block>
          </ModalBody>
        </Modal>
        <Modal
          isOpen={modal.confirm}
          toggle={() => setModal({ confirm: false })}
          className="modal-dialog-centered"
          size="md"
        >
          <a
            href="#close"
            onClick={(ev) => {
              ev.preventDefault();
              onFormCancel();
            }}
            className="close"
          >
            <Icon name="cross-sm" />
          </a>
          <ModalBody className="modal-body-lg text-center">
            <div className="nk-modal">
              <Icon name="check" className="nk-modal-icon icon-circle icon-circle-xxl bg-success" />
              <h4 className="nk-modal-title">Funds transferred successfully!</h4>
              <div className="nk-modal-text">
                <p className="caption-text">
                  You’ve successfully transferred <strong>200.00</strong> GHC.
                </p>
                {/* <p className="sub-text-sm">
                  Learn when you reciveve bitcoin in your wallet.
                  <Link to="#" tag="a">
                    Click here
                  </Link>
                </p> */}
              </div>
              <div className="nk-modal-action-lg">
                <ul className="btn-group gx-4">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/acc_summary`} className="btn btn-lg btn-mw btn-primary">
                      Return
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default OwnAccount;
