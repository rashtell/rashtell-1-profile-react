import React, { Component } from "react";

import { Button } from "./Button";

import { formPropsLists } from "../data/formPropsLists";
import { contactInfoList } from "../data/contactInfoList";
import { appVariables } from "./Body";

class Form extends Component {
  state = {};

  persistInput = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  sendMail = (e) => {
    e.preventDefault();

    const url = appVariables().baseurl;

    fetch(`${url}/v1/message`, {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...this.state }),
    })
      .then((res) => res.json)
      .then((resJson) => {
        window.alert("Message succeessfully sent. Thanks.");
      })
      .catch((error) => {
        window.alert("Message failed. Thanks.");
      });
  };

  render() {
    const { formProps } = this.props;

    return (
      <form>
        {formProps.formPropsList.map((formProp, i) => {
          return (
            <p key={i}>
              <input
                onChange={this.persistInput}
                className={formProp.className}
                type={formProp.type}
                placeholder={formProp.placeholder}
                required
                name={formProp.name}
              />
            </p>
          );
        })}

        <Button
          type="submit"
          submitHandler={this.sendMail}
          buttonProps={formProps.buttonPropsList}
        />
      </form>
    );
  }
}

class ContactInfo extends Component {
  render() {
    const { contactInfos } = this.props;
    return contactInfos.map((contactInfo, i) => {
      return (
        <div key={i} className="w3-section">
          <p>
            <i className={contactInfo.iClassName}></i>
            {contactInfo.info}
          </p>
        </div>
      );
    });
  }
}

export class Contact extends Component {
  render() {
    return (
      <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey">Contact Me</h2>
        <hr width={200 + "px"} className="w3-opacity" />

        <ContactInfo contactInfos={contactInfoList} />

        <br />
        <p>Lets get in touch. Send me a message:</p>

        <Form formProps={formPropsLists} />
      </div>
    );
  }
}
