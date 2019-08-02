import React, {Component} from 'react';
import Layout from "../components/Layout/Layout";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {emailRegex} from "../config/regularExpressions";
import {faUser, faEnvelope, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: {
        name: false,
        email: false,
        message: false,
      },
      form: {
        name: '',
        email: '',
        message: ''
      }
    };

  }

  setName = (e) => {
    const {value} = e.target;
    this.setState({form: {...this.state.form, name: value}})
  };

  validName = (e) => {
    const invalid = this.state.form.name.length === 0;
    this.setState({isInvalid: {...this.state.isInvalid, name: invalid}})
    return !invalid;
  };
  setEmail = (e) => {
    const {value} = e.target;
    this.setState({form: {...this.state.form, email: value}});
  };
  validEmail = (e) => {
    const match = !!this.state.form.email.match(emailRegex);
    this.setState({isInvalid: {...this.state.isInvalid, email: !match}});
  };
  setMessage = (e) => {
    const {value} = e.target;
    this.setState({form: {...this.state.form, message: value}})
  };
  validMessage = (e) => {
    const invalid = this.state.form.message.length === 0;
    this.setState({isInvalid: {...this.state.isInvalid, message: invalid}})
  };
  submit = (e) => {

    const name = this.state.form.name.length === 0;
    const email = !(!!this.state.form.email.match(emailRegex));
    const message = this.state.form.message.length === 0;

    this.setState({isInvalid: {name, email, message,}});

    if (!name && !email && !message) {
      //  all g, do some submitting :)
      console.log('Success')
    } else {
      console.error('Missing required fields.')
    }
  };

  render() {
    return (
      <Layout>


        <section className="section fixed-nav-padding">
          <div className="container">

            <div className="columns is-centered">

              <div className="column is-half">

                <h1 className="title">Say hello! :)</h1>

                <div className="field">
                  <label className="label">Name</label>
                  <div className="control has-icons-left has-icons-right">
                    <input className="input"
                           type="text"
                           placeholder="Enter your full name"
                           value={this.state.form.name}
                           onChange={this.setName}
                           onBlur={this.validName}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faUser}/>
                    </span>
                    {this.state.isInvalid.name && (
                      <span className="icon is-small is-right">
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                      </span>
                    )}
                  </div>
                  {this.state.isInvalid.name && (
                    <p className="help is-danger">A name is required</p>
                  )}
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left has-icons-right">

                    <input className={`input ${this.state.isInvalid.email && 'is-danger'}`}
                           type="email"
                           placeholder="Enter your email address" value={this.state.form.email}
                           onChange={this.setEmail}
                           onBlur={this.validEmail}/>

                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                    {this.state.isInvalid.email && (
                      <span className="icon is-small is-right">
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                      </span>
                    )}
                  </div>
                  {this.state.isInvalid.email && (
                    <p className="help is-danger">This email is invalid</p>
                  )}
                </div>

                <div className="field">
                  <label className="label">Subject</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>General Question</option>
                        <option>Job Opportunity (Full Time)</option>
                        <option>Job Opportunity (Contract)</option>
                        <option>Tutoring</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className={`textarea ${this.state.isInvalid.message && 'is-danger'}`}
                              placeholder="Enter your message"
                              value={this.state.form.message}
                              onChange={this.setMessage}
                              onBlur={this.validMessage}
                    />
                  </div>
                  {this.state.isInvalid.message && (
                    <p className="help is-danger">A message is required</p>
                  )}
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link" onClick={this.submit}>Submit</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>
      </Layout>
    )
  }
}

Contact.propTypes = {};

export default Contact;

