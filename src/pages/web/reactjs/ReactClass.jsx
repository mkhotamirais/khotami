import React from "react";
import { Tabs } from "../../../components/Components";

class KelasState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handlePlus = this.handlePlus.bind(this);
  }
  handlePlus() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="border rounded p-2">
        Kelas state
        <div>state count: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Plus Count</button>
        <button onClick={this.handlePlus}>Plus Count Cara 2</button>
      </div>
    );
  }
}

class KelasStateCara2 extends React.Component {
  state = {
    count: 0,
  };
  handlePlus = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  // jika tidak menggukana arrow function maka fungsi tetap harus diikat di konstruktornya
  constructor(props) {
    super(props);
    this.handlePlusBiasa = this.handlePlusBiasa.bind(this);
  }

  handlePlusBiasa() {
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  render() {
    return (
      <div className="border rounded p-2 my-1">
        Kelas state cara 2<div>state count: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Plus count</button>
        <button onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>Plus count cara 2</button>
        <button onClick={this.handlePlus}>Plus count cara 3</button>
        <button onClick={this.handlePlusBiasa}>Plus count cara 4</button>
      </div>
    );
  }
}

class KelasProps extends React.Component {
  render() {
    return (
      <div className="border rounded p-2 my-1">
        Kelas Props
        <div>props {this.props.name}</div>
      </div>
    );
  }
}
KelasProps.propTypes;

class KelasSiklus extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "constructor dipanggil saat komponen pertama kali dibuat. tempat baik untuk instalasi state dan biding method"
    );
    this.state = {
      count: 0,
    };
  }
  componentDidMount(prevProps, prevState) {
    console.log(
      `componentDidMount dipanggil setelah komponen berhasil dirender ke DOM. cocok untuk mengambil data awal dari server atau mengatur event listener`
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "ComponentDidUpdate dipanggil setelah pembaruan komponen, baik perubahan state maupun props. berguna untuk melakukan operasi setelah pembaruan seperti perbarui DOM atau mengirimkan perintah jaringan tambahan"
    );
  }
  componentWillUnmount() {
    console.log(
      "ComponentWillUnmount dipanggil sebelum komponen dihapus dari dom, ini digunakan untuk membersihkan sumber daya yang digunakan oleh komponen. seperti membersihkan event listener atau membatalkan permintaan tertunda"
    );
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render wajib ada dan bertugas merender tampilan komponen, dipanggil setiap kali state dan props berubah");
    return (
      <div className="border rounded p-2">
        Kelas Siklus
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "lifecycle" };
    console.log("CONSTRUCTOR");
  }
  static getDerivedStateFromProps(props, state) {
    console.group("get derived state from props");
    console.log("props: ", props);
    console.log("state: ", state);
    console.groupEnd();
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.group("SHOULD UPDATE");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this props", this.props);
    console.log("this state", this.state);
    console.groupEnd();
    if (nextProps.count > 3) {
      return false;
    }
    return true;
  }
  render() {
    console.log("RENDER");
    return (
      <div>
        {this.state.title} - {this.props.name} : {this.props.count}
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.group("get snapshot before update");
    console.log("prevProps: ", prevProps);
    console.log("prevState: ", prevState);
    console.log("this.props: ", this.props);
    console.log("this.state: ", this.state);
    return true;
  }
  componentDidMount() {
    console.log("DID MOUNT");
  }
  componentDidUpdate() {
    console.log("DID UPDATE");
  }
  componentWillUnmount() {
    console.log("WILL UNMOUNT");
  }
}
Title.propTypes;

class LifecycleClass extends React.Component {
  state = {
    name: "Components",
    view: true,
    count: 0,
  };
  render() {
    console.log("RENDER");
    return (
      <div className="border rounded p-2 my-1">
        <div>lifecycle class</div>
        <p>Untuk melihat siklusnya lihat di console</p>
        {this.state.view ? <Title name={this.state.name} count={this.state.count} /> : null}
        <button onClick={() => this.setState({ view: !this.state.view })} className="underline">
          toggle copot
        </button>
        <br />
        <button onClick={() => this.setState({ name: "class" })} className="underline">
          update
        </button>
        <br />
        <button onClick={() => this.setState({ count: this.state.count + 1 })} className="underline">
          count
        </button>
        <br />
      </div>
    );
  }
}

const reactClassTabMenus = [
  { text: "state cara 1", content: <KelasState /> },
  { text: "state cara 2", content: <KelasStateCara2 /> },
  { text: "props", content: <KelasProps name="john" /> },
  { text: "lifecycle 1", content: <KelasSiklus /> },
  { text: "lifecycle 2", content: <LifecycleClass /> },
];

export default class ReactClass extends React.Component {
  render() {
    return (
      <div>
        <Tabs initialActive={"state cara 1"} menus={reactClassTabMenus} />
      </div>
    );
  }
}
