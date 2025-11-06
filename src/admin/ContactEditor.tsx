import PageJsonEditor from "./PageJsonEditor";

export default function ContactEditor() {
  return (
    <PageJsonEditor
      title="Edit Contact Page Content"
      select={(root) => root.contact}
      update={(root, next) => ({ ...root, contact: next })}
    />
  );
}


