import React, { Component } from "react";
import { Button } from "./Button";

import { aboutLogisticsList } from "../data/aboutLogisticsList";
import { buttonPropsList } from "../data/buttonPropsList";
import { planPropsLists } from "../data/planPropsLists";
import { testimonialsPropsLists } from "../data/testimonialsPropsLists";
import { skillsPropsLists } from "../data/skillsPropsLists";
import { profileProps } from "../data/profileProps";

export class About extends Component {
  render() {
    return (
      <div
        className="w3-content w3-justify w3-text-grey w3-padding-64"
        id="about"
      >
        <Profile profileProps={profileProps} />

        <Skills skillsProps={skillsPropsLists} />

        <AboutLogistics aboutLogistics={aboutLogisticsList} />

        <Button buttonProps={buttonPropsList} />

        {/* <Plans
          planProps={planPropsLists}
          divClassName="w3-row-padding"
          divStyle={{ margin: 0 - 16 }}
          h3ClassName="w3-padding-16 w3-text-light-grey"
          heading="My Prices"
        /> */}

        <Testimonials testimonialsProps={testimonialsPropsLists} />
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    const { profileProps } = this.props;

    return (
      <div>
        <h2 className={profileProps.h2ClassName}>{profileProps.name}</h2>
        <hr style={profileProps.hrStyle} className={profileProps.hrClassName} />
        <p>{profileProps.content}</p>
      </div>
    );
  }
}

class Skills extends Component {
  render() {
    const { skillsProps } = this.props;
    return (
      <div>
        <h3 className={skillsProps.h3ClassName}>{skillsProps.heading}</h3>
        {skillsProps.skillsPropsList.map((skillsProp, i) => {
          return (
            <div key={i}>
              <div className={skillsProp.divClassName}>
                <div
                  className={skillsProp.div2ClassName}
                  style={skillsProp.div2Style}
                >
                  <p
                    className={skillsProp.pClassName}
                    style={{
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                    }}
                  >
                    {skillsProp.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <br />
      </div>
    );
  }
}

class AboutLogistics extends Component {
  render() {
    const { aboutLogistics } = this.props;

    return aboutLogistics.map((aboutLogistic, i) => {
      return (
        <div
          key={i}
          className="w3-row w3-center w3-padding-16 w3-section w3-light-grey"
          style={{ paddingLeft: "43%" }}
        >
          <div className={aboutLogistic.divClassName}>
            <span className={aboutLogistic.spanClassName}>
              {aboutLogistic.value}
            </span>
            {/* <br /> */}
            {"      "}
            {aboutLogistic.name}
          </div>
        </div>
      );
    });
  }
}

class Plans extends Component {
  render() {
    const {
      planProps,
      divClassName,
      divStyle,
      h3ClassName,
      heading,
    } = this.props;

    return (
      <div>
        <h3 className={h3ClassName}>{heading}</h3>

        <div className={divClassName} style={divStyle}>
          {planProps.map((planProp, i) => {
            return (
              <div key={i} className={planProp.divClassName}>
                <ul className={planProp.ulClassName}>
                  {planProp.liPropsList.map((liProps, i) => {
                    return (
                      <li key={i} className={liProps.className}>
                        {liProps.text}
                      </li>
                    );
                  })}

                  <li className={planProp.price.liClassName}>
                    <h2>{planProp.price.amount}</h2>
                    <span className={planProp.spanClassName}>
                      {planProp.price.duration}
                    </span>
                  </li>
                  <li className={planProp.signUp.liClassName}>
                    <a href={planProp.signUp.href}>
                      <button className={planProp.signUp.buttonClassName}>
                        {planProp.signUp.text}
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class Testimonials extends Component {
  render() {
    const { testimonialsProps } = this.props;
    return (
      <div>
        <h3 className={testimonialsProps.h3ClassName}>
          {testimonialsProps.heading}
        </h3>

        {testimonialsProps.testimonialsPropsList.map((testimonialsProp, i) => {
          return (
            <div key={i}>
              <img
                src={testimonialsProp.imgSrc}
                alt={testimonialsProp.name}
                className={testimonialsProp.imgClassName}
                style={testimonialsProp.imgStyle}
              />
              <p>
                <span className={testimonialsProp.spanClassName}>
                  {testimonialsProp.name}.
                </span>
                {testimonialsProp.position}.
              </p>
              <p>{testimonialsProp.remarks}</p>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
