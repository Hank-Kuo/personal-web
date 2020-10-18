import React, { Component } from 'react';
import Progress from '../../core/hoc/progress';
import { setCookies } from '../../core/utils/cookie';
import ReactMarkdown from 'react-markdown';
import input from '../../data/NLP.md';
import { S } from './styles';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }
  componentDidMount() {
    fetch(input)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
    setCookies(this.props.match.params.id);
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <S.Wrapper>
        <ReactMarkdown source={this.state.terms} />
      </S.Wrapper>
    );
  }
}

export default Progress(Article);
