import PageJsonEditor from "./PageJsonEditor";

export default function AboutEditor() {
  return (
    <PageJsonEditor
      title="Edit About Page Content"
      select={(root) => root.about}
      update={(root, next) => ({ ...root, about: next })}
    />
  );
}


