import Bookmarks from "./Bookmarks";
const Bookmark = ({ setBookmark }) => {
  return (
    <div className="w-64 md:w-1/3 bg-neutral-900 bg-opacity-5 rounded-lg px-2 h-fit my-10">
      <div className="my-4 text-neutral-900 text-2xl font-semibold">
        Bookmark: {setBookmark.length}
      </div>

      {setBookmark.map((bookmark) => (
        <Bookmarks key={bookmark.id} Bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmark;
