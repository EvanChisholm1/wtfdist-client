import { useMutation } from "react-query";

export default function useAddWebPage() {
  const mutation = useMutation(
    ({ url, text, title }: { url?: string; title?: string; text: string }) => {
      return fetch("localhost:3000/document", {
        method: "POST",
        body: JSON.stringify({ url, text, title }),
      });
    }
  );

  return mutation;
}
