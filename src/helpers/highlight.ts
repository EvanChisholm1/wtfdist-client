function highlight(queryString: string, content: string): string {
  let highlightedContent = content;
  const tokens = queryString.split(" ");
  for (const token of tokens) {
    highlightedContent = highlightedContent.replaceAll(
      token,
      `<span class="bg-indigo-500 rounded-sm text-white">${token}</span>`
    );
  }

  return highlightedContent;
}

export default highlight;
