import PageJsonEditor from "./PageJsonEditor";

export default function VideosEditor() {
  return (
    <PageJsonEditor
      title="Edit Videos Page Content"
      select={(root) => root.videos}
      update={(root, next) => ({ ...root, videos: next })}
    />
  );
}


