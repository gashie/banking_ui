import React from "react";
import Icon from "../../../icon/Icon";
import Button from "../../../button/Button";
import { UncontrolledDropdown, CardTitle, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";

const ActionCenter = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="card-inner-group">
        <div className="card-inner card-inner-md">
          <div className="card-title-group">
            <CardTitle>
              <h6 className="title">Quick Links</h6>
            </CardTitle>
            <div className="card-tools me-n1">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                  <Icon name="more-h"></Icon>
                </DropdownToggle>
                <DropdownMenu end>
                  <ul className="link-list-opt no-bdr">
                    <li>
                      <DropdownItem
                        tag="a"
                        href="#dropdownitem"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="setting"></Icon>
                        <span>Action Settings</span>
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem
                        tag="a"
                        href="#dropdownitem"
                        onClick={(ev) => {
                          ev.preventDefault();
                        }}
                      >
                        <Icon name="notify"></Icon>
                        <span>Push Notification</span>
                      </DropdownItem>
                    </li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="cc-alt-fill"></Icon>
              <div className="title">Third Party Transfer</div>
              <p>
                You did <strong>40 total transactions to third parties</strong>.
              </p>
            </div>
            <Button className="btn-icon btn-trigger me-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="help-fill"></Icon>
              <div className="title">Own Account Transfer</div>
              <p>
                Your total deposit <strong>for this months is 18</strong>
              </p>
            </div>
            <Button className="btn-icon btn-trigger me-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
        <div className="card-inner">
          <div className="nk-wg-action">
            <div className="nk-wg-action-content">
              <Icon name="wallet-fill"></Icon>
              <div className="title">MTN TopUp</div>
              <p>
                You sent <strong>200 cedis each to 10 new beneficiaries</strong>.
              </p>
            </div>
            <Button className="btn-icon btn-trigger me-n2">
              <Icon name="forward-ios"></Icon>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ActionCenter;
