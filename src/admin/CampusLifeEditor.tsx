import PageJsonEditor from "./PageJsonEditor";

export default function CampusLifeEditor() {
  return (
    <PageJsonEditor
      title="Edit Campus Life Page Content"
      select={(root) => root.campusLife}
      update={(root, next) => ({ ...root, campusLife: next })}
    />
  );
}


