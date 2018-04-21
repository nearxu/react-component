import React, { Component } from "react";
import "./index.css";
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  handClick(index) {
    let { current } = this.state;
    if (index === current) return null;
    this.setState({ current: index });
  }
  render() {
    return (
      <div>
        <div className="tabs_border_box">
          {this.props.data.map((value, index) => (
            <div
              className={`tabs_border ${
                this.state.current === index ? "tabs_border_active" : " "
              }`}
              key={index}
              onClick={this.handClick.bind(this, index)}
            >
              <span className="tabs_border_tag">{value.title}</span>
            </div>
          ))}
        </div>
        {/*注意这个api*/}
        <div className="tabs_body">
          {React.Children.map(this.props.children, child => {
            return (
              <div
                className="scrollBoxL"
                style={{
                  display: `${
                    Number(child.key) === Number(this.state.current)
                      ? "block "
                      : "none"
                  }`
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const data = [
  {
    title: "商品",
    num: 0
  },
  {
    title: "评价",
    num: 2
  },
  {
    title: "店铺",
    num: 3
  }
];
const Index = () => {
  return (
    <Tab data={data}>
      <div key={0}>1</div>
      <div key={1}>2</div>
      <div key={2}>3</div>
    </Tab>
  );
};
export default Index;
