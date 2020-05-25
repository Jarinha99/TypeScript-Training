type Component = {
  new (...args: any[]): {
    render(): any;
  };
};

export default function logRenderer<C extends Component>(component: C) {
  return class extends component {
    render() {
      console.log("Render has begun");
      const r: any = super.render();
      console.log("Render is complete");
      return r;
    }
  };
}
