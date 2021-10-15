import { useMutation } from "react-query";

export default function useAddWebPage() {
  const mutation = useMutation(({ url }: { url: string }) => {
    return fetch("localhost:3000/webpage", {
      method: "POST",
      body: JSON.stringify({ url }),
    });
  });

  return mutation;
}
