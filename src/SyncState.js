class MakeSyncState {
  constructor(state) {
    this.instances = [];
    this.state = state;
  }

  subscribe(instance) {
    this.instances = [...this.instances, instance];
  }

  unsubscribe(instance) {
    this.instances = this.instances
      .filter((item) => (item !== instance));
  }

  synchronize(state) {
    this.state = state;
    this.instances.map((item) => item._setState(state));
  }
}


export default (Component) => {
  let instance = null;


  class SyncWrapper extends Component {
    constructor(props) {
      super(props);

      if (!instance)
        instance = new MakeSyncState(this.state);
      this.state = instance.state;
      this._setState = super.setState;
    }

    componentDidMount() {
      instance.subscribe(this);
      super.componentDidMount
      && super.componentDidMount();
    }

    componentWillUnmount() {
      instance.unsubscribe(this);
      super.componentWillUnmount
      && super.componentWillUnmount();
    }

    setState(state, callback) {
      super.setState(
        state,
        () => {
          instance.synchronize(this.state);
          callback && callback();
        },
      );
    }
  }

  return SyncWrapper;
};
