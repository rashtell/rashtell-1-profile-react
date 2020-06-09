import React, { Component } from "react";

import { Button } from "./Button";

import { formPropsLists } from "../data/formPropsLists";
import { contactInfoList } from "../data/contactInfoList";

class Form extends Component {
  render() {
    const { formProps } = this.props;

    return (
      <form>
        {formProps.formPropsList.map((formProp, i) => {
          return (
            <p key={i}>
              <input
                className={formProp.className}
                type={formProp.type}
                placeholder={formProp.placeholder}
                required
                name={formProp.name}
              />
            </p>
          );
        })}

        <Button buttonProps={formProps.buttonPropsList} />
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
