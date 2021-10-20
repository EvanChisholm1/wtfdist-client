import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import TextInput from "../components/textInput";
import useAddDocument from "../hooks/useAddDocument";

function AddDoc() {
  const add = useAddDocument();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    add.mutate({ url, title, text });

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
        onSubmit={e => e.preventDefault()}
      >
        <h2 className="text-xl font-semibold">Add A Document</h2>
        <hr />
        <div className="flex flex-col gap-2">
          <label className="text-lg" htmlFor="url">
            Url
          </label>
          <TextInput
            type="text"
            name="url"
            id="url"
            placeholder="https://example.com"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg" htmlFor="title">
            Title
          </label>
          <TextInput
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg" htmlFor="text">
            Text
          </label>
          <textarea
            className="ring-none outline-none border-none rounded ring-2 ring-gray-200 focus:ring-2 focus:ring-blue-500"
            name="text"
            id="text"
            value={text}
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            onChange={e => setText(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 font-semibold"
        >
          Add Document
        </button>
      </form>
    </div>
  );
}

export default AddDoc;
