import PageJsonEditor from "./PageJsonEditor";

export default function NewsEditor() {
  return (
    <PageJsonEditor
      title="Edit News Page Content"
      select={(root) => root.news}
      update={(root, next) => ({ ...root, news: next })}
    />
  );
}


