function withBorder(WrapperComponent) {
  return () => {
    return (
      <div style={{ border: "1px solid" }}>
        <WrapperComponent />
      </div>
    );
  };
}

export default withBorder;
