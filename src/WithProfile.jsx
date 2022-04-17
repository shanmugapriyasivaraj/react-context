const loggedInUser = {
  firstName: "Nithya",
  lastName: "varun",
  city: "chennai",
};

function withProfile(WrapperComponent) {
  //   const loggedInUser = localStorage.getItem("userInfo");
  return (props) => {
    return (
      <div style={{ border: "1px solid" }}>
        <WrapperComponent {...props} user={loggedInUser} />
      </div>
    );
  };
}

export default withProfile;
