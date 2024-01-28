import PostcardListItem from "./PostcardListItem"
/** PostcardsList
 *
 * props: postcards
 *
 * state:
 *
 * renders: PostcardsList -> Postcard
 */
function PostcardsList({postcards}) {
  console.debug("postcardslist, postcards=", postcards )

    return (
      postcards.map(p => (
        <PostcardListItem
          key={p.id}
          id={p.id}
          title={p.title}
          message={p.message}
          photoUrl={p.photo_url} />
      )
      )
    )
  }

  export default PostcardsList