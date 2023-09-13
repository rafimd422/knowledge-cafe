import Bookmarks from './Bookmarks';

const Bookmark = ({ setBookmark, mark }) => {
  return (
    <div className="w-64 md:w-1/3 bg-neutral-900 bg-opacity-5 rounded-lg px-2 h-fit my-10">
      <div className="bg-indigo-600 bg-opacity-10 rounded-lg border border-indigo-600 mt-4">
        <p className="text-indigo-600 text-2xl font-bold p-3">Spent time on read: {mark}</p>
      </div>
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
