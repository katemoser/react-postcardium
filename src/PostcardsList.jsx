import PostcardListItem from "./PostcardListItem";

/** PostcardsList
 *
 * props: postcards like [{id, message, photo_url, location, photo_id, created_at}, ...]
 *
 * state: None
 *
 * renders: PostcardsListPage -> PostcardsList -> PostcardListItem
 */
function PostcardsList({ postcards }) {
  console.debug("postcardslist, postcards=", postcards);

  return (
    <div className="PostcardsList row">


      {postcards.map(p => (
        <div className="PostcardsList-postcard col-12 col-sm-6 col-md-4" key={p.id}>

          <PostcardListItem
            id={p.id}
            message={p.message}
            photoUrl={p.photo_url} />
        </div>
      )
      )}
    </div>
  );
}

export default PostcardsList;