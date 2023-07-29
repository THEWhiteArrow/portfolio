import { Component } from "react";
import Title from "./Title";
import "../styles/Contact.css";

import { ReactComponent as ContactSvg } from "../assets/svg/contact.svg";
import { ReactComponent as FacebookSvg } from "../assets/svg/facebook.svg";
import { ReactComponent as GithubSvg } from "../assets/svg/github.svg";
import { ReactComponent as LinkedinSvg } from "../assets/svg/linkedin.svg";
import { ReactComponent as InstagramSvg } from "../assets/svg/instagram.svg";
import { Link } from "react-router-dom";

import Animation from "./Animation";

export default class Contact extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      nameValid: false,
      emailValid: false,
      messageValid: false,
      isValidating: false,
    };
  }

  required = (value: string) => new RegExp(".+", "m").test(value.trim());
  email = (value: string) =>
    new RegExp("^\\w(\\w*|\\.[^.]+)*@[\\w]+\\.[a-zA-Z]{2,}$").test(value);

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({ isValidating: true });
    const { name, email, message } = this.state;

    const nameValid = this.required(name);
    const emailValid = this.email(email);
    const messageValid = this.required(message);

    this.setState({ isValidating: true, nameValid, emailValid, messageValid });
    if (nameValid && emailValid && messageValid) {
      console.log("succeeded in validating");
      this.sendForm();
    } else {
      console.log("failed to validate");
    }
  };

  encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  sendForm = () => {
    console.log("Sending the form...");
    const { name, email, message } = this.state;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => console.log("Submitted succcessfully"))
      .catch((error) => console.log("Failed to submit :("));
  };

  handleChangeCupture = (e: any) => {
    this.setState(
      () => ({ [e.target.name]: e.target.value }),
      () => {
        if (this.state.isValidating) {
          const { name, email, message } = this.state;

          const nameValid = this.required(name);
          const emailValid = this.email(email);
          const messageValid = this.required(message);

          const st = { nameValid, emailValid, messageValid };
          this.setState(st);
        }
      }
    );
  };

  render() {
    let nameFieldInfoStyle = "";
    let emailFieldInfoStyle = "";
    let messageFieldInfoStyle = "";

    if (this.state.isValidating) {
      nameFieldInfoStyle = this.state.nameValid ? "valid-name" : "invalid-name";
      emailFieldInfoStyle = this.state.emailValid
        ? "valid-email"
        : "invalid-email";
      messageFieldInfoStyle = this.state.messageValid
        ? "valid-message"
        : "invalid-message";
    }
    return (
      <section id="contact" className="Contact flex bg-black text-white">
        <div className="container py-8 relative grow flex flex-col ">
          <Title content="Contact" colorType="white" />

          <div className="Contact-content flex flex-col md:flex-row grow divide-y divide-white divide-solid text-xl md:divide-x md:divide-y-0">
            <div className="Contact-info py-10 grow-0 md:flex md:flex-col md:pr-10">
              <Animation name="zoom-in-right" className="h-min">
                <p>Hit me up on social medias :</p>
              </Animation>
              <div className="mt-10 flex flex-row justify-around">
                <Animation
                  name="zoom-in-up"
                  delay={100}
                  className="w-min h-min"
                >
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=100028115170023"
                    aria-label="My Facebook"
                  >
                    <FacebookSvg className="hover:-translate-y-3 duration-200" />
                  </Link>
                </Animation>
                <Animation
                  name="zoom-in-up"
                  delay={200}
                  className="w-min h-min"
                >
                  <Link
                    target="_blank"
                    to="https://github.com/THEWhiteArrow"
                    aria-label="My Github"
                  >
                    <GithubSvg className="hover:-translate-y-3 duration-200" />
                  </Link>
                </Animation>
                <Animation
                  name="zoom-in-up"
                  delay={300}
                  className="w-min h-min"
                >
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/damian-trafialek/"
                    aria-label="My LinkedIn"
                  >
                    <LinkedinSvg className="hover:-translate-y-3 duration-200" />
                  </Link>
                </Animation>
                <Animation
                  name="zoom-in-up"
                  delay={400}
                  className="w-min h-min"
                >
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/dami_trafi/"
                    aria-label="My Instagram"
                  >
                    <InstagramSvg className="hover:-translate-y-3 duration-200" />
                  </Link>
                </Animation>
              </div>
              <Animation
                delay={200}
                name="zoom-out-down"
                className="flex items-center"
              >
                <ContactSvg className="hidden md:block  max-w-15 lg:max-w-25" />
              </Animation>
            </div>

            <form
              name="contact"
              onSubmit={this.handleSubmit}
              className="py-10 shadow-md rounded grow flex flex-col justify-center md:pl-10"
            >
              <Animation name="zoom-out-left">
                <div>
                  <p>Or email me directly on </p>
                  <Link
                    to="mailto:damian.trafialek@gmail.com"
                    className="underline"
                  >
                    damian.trafialek@gmail.com
                  </Link>
                </div>
              </Animation>
              <Animation delay={50} name="fade-right">
                <div className={`mt-10 ${nameFieldInfoStyle}`}>
                  <label className="block mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    formNoValidate={true}
                    value={this.state.name}
                    onChangeCapture={this.handleChangeCupture}
                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your precious name"
                  />
                </div>
              </Animation>
              <Animation delay={150} name="fade-right">
                <div className={`mt-10 ${emailFieldInfoStyle}`}>
                  <label className="block mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    formNoValidate={true}
                    value={this.state.email}
                    onChangeCapture={this.handleChangeCupture}
                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your communication email"
                  />
                </div>
              </Animation>
              <Animation delay={250} name="fade-right">
                <div className={`mt-10 ${messageFieldInfoStyle}`}>
                  <label className="block mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    value={this.state.message}
                    onChangeCapture={this.handleChangeCupture}
                    className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-white focus:shadow-outline"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your thoughts"
                  ></textarea>
                </div>
              </Animation>
              <Animation delay={350} name="fade-right">
                <div className="mt-10 flex items-center justify-center">
                  <button
                    className="w-full p-2 rounded-md outline outline-white hover:bg-white hover:text-black hover:shadow-xl transition duration-200 ease-in-out"
                    type="submit"
                  >
                    Punch It
                  </button>
                </div>
              </Animation>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
