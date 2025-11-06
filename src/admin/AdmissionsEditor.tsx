import PageJsonEditor from "./PageJsonEditor";

export default function AdmissionsEditor() {
  return (
    <PageJsonEditor
      title="Edit Admissions Page Content"
      select={(root) => root.admissions}
      update={(root, next) => ({ ...root, admissions: next })}
    />
  );
}


