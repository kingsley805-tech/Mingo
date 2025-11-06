import PageJsonEditor from "./PageJsonEditor";

export default function AcademicsEditor() {
  return (
    <PageJsonEditor
      title="Edit Academics Page Content"
      select={(root) => root.academics}
      update={(root, next) => ({ ...root, academics: next })}
    />
  );
}


