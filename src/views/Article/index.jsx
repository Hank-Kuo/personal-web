import React, { Component } from 'react';
import Progress from '../../lib/hoc/progress';
import ReactMarkdown from 'react-markdown';
// import input from '../../data/NLP.md';
import { S } from './styles';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }
  /*
  componentDidMount() {
    fetch(input)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ terms: text });
      });
  }
  */
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
