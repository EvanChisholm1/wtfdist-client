import { useEffect } from "react";

function AddDoc() {
  useEffect(() => {
    console.log("hello world");
  });
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="url">Url:</label>
      <input type="text" name="url" id="url" />
    </form>
  );
}

export default AddDoc;
