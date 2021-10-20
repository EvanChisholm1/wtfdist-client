import { FormEvent, useRef, useState } from "react";
import { useHistory } from "react-router";
import useAddWebPage from "../hooks/useAddWebPage";
import TextInput from "../components/textInput";

function AddWebPage() {
  const [url, setUrl] = useState("");
  const urlInput = useRef<null | HTMLInputElement>(null);
  const add = useAddWebPage();
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    add.mutate({ url });

    if (add.isSuccess) {
      history.push("/");
    } else {
      console.log(add.error);
    }
  }

  return (
    <div className="grid justify-center">
      <form
        className="bg-white flex flex-col w-96 my-5 p-6 shadow rounded-md gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold">Add A Web Page</h2>
        <hr />
        <div className="flex flex-col gap-2">
          <label className="text-lg" htmlFor="url">
            Url
          </label>
          <TextInput
            value={url}
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            onChange={e => setUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 font-semibold"
        >
          Add Web Page
        </button>
      </form>
    </div>
  );
}

export default AddWebPage;
