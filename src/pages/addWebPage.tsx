function AddWebPage() {
  return (
    <div className="grid justify-center">
      <form
        className="bg-white flex flex-col w-96 my-16 p-6 shadow rounded-md gap-3"
        onSubmit={e => e.preventDefault()}
      >
        <h2 className="text-xl font-semibold">Add A Web Page</h2>
        <hr />
        <div className="flex flex-col gap-2">
          <label className="text-lg" htmlFor="url">
            Url
          </label>
          <input
            className="ring-none outline-none border-none rounded ring-2 ring-gray-200 focus:ring-2 focus:ring-blue-500"
            type="text"
            name="url"
            id="url"
            placeholder="https://example.com"
          />
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

export default AddWebPage;
