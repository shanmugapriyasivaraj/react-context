function withBorder(WrapperComponent) {
  return (props) => {
    return (
      <div style={{ border: "1px solid" }}>
        <WrapperComponent {...props} />
      </div>
    );
  };
}

export default withBorder;
