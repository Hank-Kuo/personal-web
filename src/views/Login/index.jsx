import React, { Component } from 'react';
import { Formik } from 'formik';

import { withUserConsumer } from '../../context/UserContext';
import { S, I } from './styles';

import { loginAPI } from '../../api';
import { LoginSchema } from '../../core/utils/validateForm';
import FocusError from '../../core/utils/focusError';

class Login extends Component {
  state = {
    armL: 'matrix(-0.25881, 0.96592, -0.96592, -0.25881, -45.8977, 278.257)',
    armR: 'matrix(-0.25881, -0.96592, 0.96592, -0.25881, 346.842, 651.573)',
    body:
      'M200,158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8c-28-0.5-50.9,22.1-50.9,50v50 H35.8C16,122,0,138,0,157.8L0,213h200L200,158.5z',
    twoFingers: 'matrix(1, 0, 0, 1, 0, 0)',
    hair: 'matrix(1, 0, 0, 1, 0, 0)',
    eyebrow: 'matrix(1, 0, 0, 1, 0, 0)',
    mouth: 'matrix(1, 0, 0, 1, 0.00285517, -0.0269728)',
    eyeR: 'matrix(1, 0, 0, 1, 0, 0)',
    eyeL: 'matrix(1, 0, 0, 1, 0, 0)',
    face: 'matrix(1, 0, 0, 1, 0, 0)',
    chin: 'matrix(1, 0, 0, 1, 0, 0)',
    nose: 'matrix(0.99999, 0.00418, -0.00418, 0.99999, 0.351982, -0.417965)',
    tongue: 'matrix(1, 0, 0, 1, 0, 0)',
    mouthOutline:
      'M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z',
    mouthMask:
      'M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z',
    mouthBG:
      'M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z',
    body_1: 'matrix(1, 0, 0, 1, 0, 0)',
    toggle: false,
    errMsg: '',
  };

  componentDidMount() {
    this.blink = setInterval(this.startBlink, 5000);
  }

  startBlink = () => {
    this.setState(() => ({
      eyeL: 'matrix(0.85, 0, 0,0.02673281, 12.3, 76.0466)',
      eyeR: 'matrix(0.85, 0, 0,0.0812673281, 16.65, 71.562766)',
    }));
    setTimeout(() => {
      this.setState(() => ({
        eyeL: 'matrix(1, 0, 0, 1, 0, 0)',
        eyeR: 'matrix(1, 0, 0, 1, 0, 0)',
      }));
    }, 200);
  };

  _onFocusAccount = () => {
    clearInterval(this.blink);
    this.setState(() => ({
      hair: 'matrix(1, 0, 0, 1.2, 0.2399808, -5.5858)',
      eyebrow: 'matrix(1, 0,  -0.01743, 0.99984, 0.479881, 4.000339)',
      mouth: 'matrix(0.99999, 0.00418, -0.00418, 0.99999, -0.480668, 9.5474)',
      eyeR: 'matrix(0.85, 0, 0, 0.85, 15.175, 21.7249)',
      eyeL: 'matrix(0.85, 0, 0, 0.85, 15.175, 21.7249)',
      face: 'matrix(1, 0, -0.00348, 0.999999, -0.1153380, 3.99708)',
      chin: 'matrix(1, 0, 0, 0.9895, -0.735412, 6.2728)',
      nose: 'matrix(0.99999, 0.00418, -0.00418, 0.99999, -0.122144, 9.57991)',
      tongue: 'matrix(1, 0, 0, 1, 0, 1)',
      mouthOutline:
        'M 95 104.2 c -4.5 0 -8.2 -3.7 -8.2 -8.2 v -2 c 0 -1.2 1 -2.2 2.2 -2.2 h 22 c 1.2 0 2.2 1 2.2 2.2 v 2 c 0 4.5 -3.7 8.2 -8.2 8.2 H 95 Z',
      mouthMask:
        'M 95 104.2 c -4.5 0 -8.2 -3.7 -8.2 -8.2 v -2 c 0 -1.2 1 -2.2 2.2 -2.2 h 22 c 1.2 0 2.2 1 2.2 2.2 v 2 c 0 4.5 -3.7 8.2 -8.2 8.2 H 95 Z',
      mouthBG:
        'M 95 104.2 c -4.5 0 -8.2 -3.7 -8.2 -8.2 v -2 c 0 -1.2 1 -2.2 2.2 -2.2 h 22 c 1.2 0 2.2 1 2.2 2.2 v 2 c 0 4.5 -3.7 8.2 -8.2 8.2 H 95 Z',
    }));
  };

  _onBlurAccount = () => {
    this.setState(() => ({
      hair: 'matrix(1, 0, 0, 1, 0, 0)',
      eyebrow: 'matrix(1, 0, 0, 1, 0, 0)',
      mouth: 'matrix(1, 0, 0, 1, 0.00285517, -0.0269728)',
      eyeR: 'matrix(1, 0, 0, 1, 0, 0)',
      eyeL: 'matrix(1, 0, 0, 1, 0, 0)',
      face: 'matrix(1, 0, 0, 1, 0, 0)',
      chin: 'matrix(1, 0, 0, 1, 0, 0)',
      nose: 'matrix(0.99999, 0.00418, -0.00418, 0.99999, 0.351982, -0.417965)',
    }));
    this.blink = setInterval(this.startBlink, 5000);
  };

  _onFocusPassword = () => {
    this.setState(() => ({
      armL: 'matrix(1, 0, 0, 1, -93, 10)',
      armR: 'matrix(1, 0, 0, 1, -93, 10)',
      body_1: 'matrix(1, 0, 0, 1.09, 0, -1)',
    }));
  };

  _onBlurPassword = () => {
    this.setState(() => ({
      armL: 'matrix(-0.25881, 0.96592, -0.96592, -0.25881, -45.8977, 278.257)',
      armR: 'matrix(-0.25881, -0.96592, 0.96592, -0.25881, 346.842, 651.573)',
      body_1: 'matrix(1, 0, 0, 1, 0, 0)',
      body:
        'M200,158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8c-28-0.5-50.9,22.1-50.9,50v50 H35.8C16,122,0,138,0,157.8L0,213h200L200,158.5z',
    }));
  };

  twoFingers = (toggle) => {
    if (toggle) {
      return 'matrix(0.86602, 0.49999, -0.49999, 0.86602, 55.6082, -69.521)';
    } else {
      return 'matrix(1, 0, 0, 1, 0, 0)';
    }
  };

  _onChangeToggle = () => {
    this.setState((prev) => {
      const twoFingers = this.twoFingers(!prev.toggle);
      return {
        toggle: !prev.toggle,
        twoFingers: twoFingers,
      };
    });
  };

  onSubmit = (values) => {
    loginAPI.post(values).then((vals)=>{
      this.props.context.setUserInfo(vals);
    }).catch((err)=>{
      this.setState(()=>({errMsg: err.response.data.message}));
    })
  };

  renderForm = () => {
    return (
      <Formik
        initialValues={{ account: '', password: '' }}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={LoginSchema}
        onSubmit={this.onSubmit}
      >
        {(formikProps) => (
          <S.Form onSubmit={formikProps.handleSubmit}>
            <S.InputGroup>
              <S.InputLabel>Account</S.InputLabel>
              <S.Input
                name="account"
                type="text"
                autoComplete="off"
                onChange={formikProps.handleChange}
                onFocus={this._onFocusAccount}
                onBlur={this._onBlurAccount}
                value={formikProps.values.account}
                error={formikProps.errors.account}
                autoFocus
              />
              {formikProps.errors.account ? (
                <S.ErrorText>{formikProps.errors.account}</S.ErrorText>
              ) : null}
            </S.InputGroup>
            <S.InputGroup>
              <S.InputLabel>Password</S.InputLabel>
              <S.Input
                name="password"
                type={this.state.toggle ? 'text' : 'password'}
                onChange={formikProps.handleChange}
                onFocus={this._onFocusPassword}
                onBlur={this._onBlurPassword}
                value={formikProps.values.password}
                error={formikProps.errors.password}
              />
              <S.Toggle>
                Show
                <S.ToggleInput
                  id="toggle1"
                  type="checkbox"
                  onChange={this._onChangeToggle}
                  checked={this.state.toggle}
                />
                <S.ToggleShow htmlFor="toggle1" active={this.state.toggle} />
              </S.Toggle>
              {formikProps.errors.password ? (
                <S.ErrorText>{formikProps.errors.password}</S.ErrorText>
              ) : null}
            </S.InputGroup>
            {this.state.errMsg ? <S.ErrorText>{this.state.errMsg}</S.ErrorText>: null}
            <S.Btn type="submit">Login</S.Btn>
            <FocusError />
          </S.Form>
        )}
      </Formik>
    );
  };

  render() {
    const {
      armL,
      armR,
      twoFingers,
      hair,
      eyebrow,
      mouth,
      eyeR,
      eyeL,
      face,
      chin,
      nose,
      tongue,
      mouthOutline,
      mouthMask,
      mouthBG,
      body,
      body_1,
    } = this.state;

    return (
      <S.Wrapper>
        <S.Box>
          <I.Wrapper>
            <I.Box>
              <SVG
                armL={armL}
                armR={armR}
                twoFingers={twoFingers}
                hair={hair}
                eyebrow={eyebrow}
                mouth={mouth}
                eyeR={eyeR}
                eyeL={eyeL}
                face={face}
                chin={chin}
                nose={nose}
                tongue={tongue}
                mouthOutline={mouthOutline}
                mouthMask={mouthMask}
                mouthBG={mouthBG}
                body={body}
                body_1={body_1}
              />
            </I.Box>
          </I.Wrapper>
          {this.renderForm()}
        </S.Box>
      </S.Wrapper>
    );
  }
}
export default withUserConsumer(Login);

class SVG extends Component {
  render() {
    const {
      armL,
      armR,
      twoFingers,
      hair,
      eyebrow,
      mouth,
      eyeR,
      eyeL,
      face,
      chin,
      nose,
      tongue,
      mouthOutline,
      mouthMask,
      mouthBG,
      body,
      body_1,
    } = this.props;
    return (
      <svg
        id="mySVG"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 200 200"
      >
        <defs>
          <circle id="armMaskPath" cx="100" cy="100" r="100" />
        </defs>
        <clipPath id="armMask">
          <use xlinkHref="#armMaskPath" overflow="visible" />
        </clipPath>
        <circle cx="100" cy="100" r="100" fill="#a9ddf3" />
        <g id="body">
          <path
            id="bodyBGchanged"
            style={{ display: 'none' }}
            fill="#FFFFFF"
            d="M200,122h-35h-14.9V72c0-27.6-22.4-50-50-50s-50,22.4-50,50v50H35.8H0l0,91h200L200,122z"
          />
          <path
            id="bodyBGnormal"
            stroke="#3A5E77"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#FFFFFF"
            style={{
              transition: 'all 1s ease-out',
              transform: body_1,
            }}
            d={body}
          />
          <path
            fill="#DDF1FA"
            d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"
          />
        </g>
        <g id="earL">
          <g id="outerEar" fill="#ddf1fa" stroke="#3a5e77" strokeWidth="2.5">
            <circle cx="47" cy="83" r="11.5" />
            <path
              d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g id="earHair">
            <rect x="51" y="64" fill="#FFFFFF" width="15" height="35" />
            <path
              d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9"
              fill="#fff"
              stroke="#3a5e77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <g id="earR">
          <g id="outerEar">
            <circle
              fill="#DDF1FA"
              stroke="#3A5E77"
              strokeWidth="2.5"
              cx="153"
              cy="83"
              r="11.5"
            />
            <path
              fill="#DDF1FA"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M153.7,78.9 c2.3,0,4.1,1.9,4.1,4.1c0,2.3-1.9,4.1-4.1,4.1"
            />
          </g>
          <g id="earHair">
            <rect x="134" y="64" fill="#FFFFFF" width="15" height="35" />
            <path
              fill="#FFFFFF"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M146.6,62.8 c4.9,4.6,8.4,9.4,10.6,14.2c-3.4-0.1-6.8-0.1-10.1,0.1c4,3.7,6.8,7.6,8.2,11.6c-2.1,0-4.2,0-6.3,0.2c2.6,4.1,3.8,8.3,3.7,12.5 c-1.2-0.7-3.4-1.4-5.2-1.9"
            />
          </g>
        </g>

        <path
          id="chin"
          style={{
            transform: chin,
            transition: 'all 0.8s ease-out',
          }}
          d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1"
          fill="none"
          stroke="#3a5e77"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="face"
          style={{
            transform: face,
            transition: 'all 0.8s ease-out',
          }}
          fill="#DDF1FA"
          d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"
        />
        <path
          style={{
            transform: hair,
            transition: 'all 0.8s ease-out',
          }}
          id="hair"
          fill="#FFFFFF"
          stroke="#3A5E77"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474"
        />
        <g
          id="eyebrow"
          style={{
            transform: eyebrow,
            transition: 'all 0.8s ease-out',
          }}
        >
          <path
            fill="#FFFFFF"
            d="M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z"
          />
          <path
            fill="#FFFFFF"
            stroke="#3A5E77"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599"
          />
        </g>
        <g
          id="eyeL"
          style={{
            transform: eyeL,
            transition: 'all 0.8s ease-out',
          }}
        >
          <circle cx="85.5" cy="78.5" r="3.5" fill="#3a5e77" />
          <circle cx="84" cy="76" r="1" fill="#fff" />
        </g>
        <g
          id="eyeR"
          style={{
            transform: eyeR,
            transition: 'all 0.8s ease-out',
          }}
        >
          <circle cx="114.5" cy="78.5" r="3.5" fill="#3a5e77" />
          <circle cx="113" cy="76" r="1" fill="#fff" />
        </g>
        <g
          id="mouth"
          style={{
            transform: mouth,
            transition: 'all 0.8s ease-out',
          }}
        >
          <path id="mouthBG" fill="#617E92" d={mouthBG} />
          <path
            style={{ display: 'none' }}
            id="mouthSmallBG"
            fill="#617E92"
            d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"
          />
          <path
            style={{ display: 'none' }}
            id="mouthMediumBG"
            d="M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z"
          />
          <path
            style={{ display: 'none' }}
            id="mouthLargeBG"
            d="M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z"
            fill="#617e92"
            stroke="#3a5e77"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
          <defs>
            <path id="mouthMaskPath" d={mouthMask} />
          </defs>
          <clipPath id="mouthMask">
            <use xlinkHref="#mouthMaskPath" overflow="visible" />
          </clipPath>
          <g clipPath="url(#mouthMask)">
            <g
              id="tongue"
              style={{
                transform: tongue,
                transition: 'all 0.8s ease-out',
              }}
            >
              <circle cx="100" cy="107" r="8" fill="#cc4a6c" />
              <ellipse
                id="tongueHighlight"
                cx="100"
                cy="100.5"
                rx="3"
                ry="1.5"
                opacity=".1"
                fill="#fff"
              />
            </g>
          </g>
          <path
            clipPath="url(#mouthMask)"
            id="tooth"
            style={{ fill: '#FFFFFF' }}
            d="M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z"
          />
          <path
            id="mouthOutline"
            fill="none"
            stroke="#3A5E77"
            strokeWidth="2.5"
            strokeLinejoin="round"
            d={mouthOutline}
          />
        </g>
        <path
          id="nose"
          style={{
            transform: nose,
            transition: 'all 0.8s ease-out',
          }}
          d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z"
          fill="#3a5e77"
        />
        <g id="arms" clipPath="url(#armMask)">
          <g
            id="armL"
            style={{
              visibility: 'visible',
              transform: armL,
              transition: 'all 1s ease-out',
            }}
          >
            <polygon
              fill="#DDF1FA"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="121.3,98.4 111,59.7 149.8,49.3 169.8,85.4"
            />
            <path
              fill="#DDF1FA"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M134.4,53.5l19.3-5.2c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-10.3,2.8"
            />
            <path
              fill="#DDF1FA"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M150.9,59.4l26-7c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-21.3,5.7"
            />

            <g id="twoFingers" style={{ transform: twoFingers }}>
              <path
                fill="#DDF1FA"
                stroke="#3A5E77"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M158.3,67.8l23.1-6.2c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-23.1,6.2"
              />
              <path
                fill="#A9DDF3"
                d="M180.1,65l2.2-0.6c1.1-0.3,2.2,0.3,2.4,1.4v0c0.3,1.1-0.3,2.2-1.4,2.4l-2.2,0.6L180.1,65z"
              />
              <path
                fill="#DDF1FA"
                stroke="#3A5E77"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="M160.8,77.5l19.4-5.2c2.7-0.7,5.4,0.9,6.1,3.5v0c0.7,2.7-0.9,5.4-3.5,6.1l-18.3,4.9"
              />
              <path
                fill="#A9DDF3"
                d="M178.8,75.7l2.2-0.6c1.1-0.3,2.2,0.3,2.4,1.4v0c0.3,1.1-0.3,2.2-1.4,2.4l-2.2,0.6L178.8,75.7z"
              />
            </g>
            <path
              fill="#A9DDF3"
              d="M175.5,55.9l2.2-0.6c1.1-0.3,2.2,0.3,2.4,1.4v0c0.3,1.1-0.3,2.2-1.4,2.4l-2.2,0.6L175.5,55.9z"
            />
            <path
              fill="#A9DDF3"
              d="M152.1,50.4l2.2-0.6c1.1-0.3,2.2,0.3,2.4,1.4v0c0.3,1.1-0.3,2.2-1.4,2.4l-2.2,0.6L152.1,50.4z"
            />
            <path
              fill="#FFFFFF"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M123.5,97.8 c-41.4,14.9-84.1,30.7-108.2,35.5L1.2,81c33.5-9.9,71.9-16.5,111.9-21.8"
            />
            <path
              fill="#FFFFFF"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M108.5,60.4 c7.7-5.3,14.3-8.4,22.8-13.2c-2.4,5.3-4.7,10.3-6.7,15.1c4.3,0.3,8.4,0.7,12.3,1.3c-4.2,5-8.1,9.6-11.5,13.9 c3.1,1.1,6,2.4,8.7,3.8c-1.4,2.9-2.7,5.8-3.9,8.5c2.5,3.5,4.6,7.2,6.3,11c-4.9-0.8-9-0.7-16.2-2.7"
            />
            <path
              fill="#FFFFFF"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M94.5,103.8 c-0.6,4-3.8,8.9-9.4,14.7c-2.6-1.8-5-3.7-7.2-5.7c-2.5,4.1-6.6,8.8-12.2,14c-1.9-2.2-3.4-4.5-4.5-6.9c-4.4,3.3-9.5,6.9-15.4,10.8 c-0.2-3.4,0.1-7.1,1.1-10.9"
            />
            <path
              fill="#FFFFFF"
              stroke="#3A5E77"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M97.5,63.9 c-1.7-2.4-5.9-4.1-12.4-5.2c-0.9,2.2-1.8,4.3-2.5,6.5c-3.8-1.8-9.4-3.1-17-3.8c0.5,2.3,1.2,4.5,1.9,6.8c-5-0.6-11.2-0.9-18.4-1 c2,2.9,0.9,3.5,3.9,6.2"
            />
          </g>
          <g
            id="armR"
            style={{
              visibility: 'visible',
              transform: armR,
              transition: 'all 1s ease-out',
            }}
          >
            <path
              fill="#ddf1fa"
              stroke="#3a5e77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2.5"
              d="M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z"
            />
            <path
              fill="#ddf1fa"
              stroke="#3a5e77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2.5"
              d="M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7"
            />
            <path
              fill="#a9ddf3"
              d="M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM211.2 54.8l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM234.6 49.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z"
            />
            <path
              fill="#fff"
              stroke="#3a5e77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1"
            />
            <path
              fill="#fff"
              stroke="#3a5e77"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9M284.5 100.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4"
            />
          </g>
        </g>
      </svg>
    );
  }
}
