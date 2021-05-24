class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log("click!");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log("Remove all");
  }
  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {options.map((option) => (
          <Option option={option} key={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return <p>{option}</p>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      console.log(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    const options = ["a", "b", "c"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
