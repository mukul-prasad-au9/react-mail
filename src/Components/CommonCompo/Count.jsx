const Count = (props) => {
  var c = 0;
  if (props.data) {
    props.data.map((val) => {
      if (val.type === props.type) {
        if (val.unread) {
          c++;
        }
      }
    });
    return (
      <p>
        <span className="text-danger">Unread:</span>
        {c}
      </p>
    );
  } else {
    return <h4>Loading</h4>;
  }
};

export default Count;
