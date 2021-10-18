import { useMutation } from "react-query";

export default function useAddDocument() {
  const mutation = useMutation(
    ({ url, text, title }: { url?: string; title?: string; text: string }) => {
      return fetch("http://localhost:4000/document", {
        method: "POST",
        body: JSON.stringify({ url, text, title }),
      });
    }
  );

  return mutation;
}
