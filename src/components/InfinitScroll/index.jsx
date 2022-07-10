import React, { Component } from "react";

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      page: 1,
      totalPage: 1,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.api().then((v) => {
      this.setState(() => ({ data: v[0], loading: false, totalPage: v[1].total_page }));
    });
    const listEnd = document.querySelector(`#${this.props.name}-list-end`);
    if (!listEnd) {
      console.log("Not found list end element");
    }

    const observer = new IntersectionObserver(this.callback, {
      threshold: 0,
    });
    observer.observe(listEnd);
  }

  callback = (entries) => {
    if (entries[0].isIntersecting && this.state.page !== this.state.totalPage) {
      this.setState({ loading: true });
      this.props.api(this.state.page + 1).then((v) => {
        this.setState((prev) => ({
          data: prev.data.concat(v[0]),
          page: prev.page + 1,
          loading: false,
        }));
      });
    }
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.loading, this.state.data)}
        <div id={`${this.props.name}-list-end`} />
      </div>
    );
  }
}
export default InfiniteScroll;
