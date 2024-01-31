import { useEffect, useState } from "react";
import PostcardsList from "./PostcardsList";
import PostcardiumApi from "./api";

/** "Brain" component for PostCards list, makes request to API
 *
 * Props: None
 *
 * State: Postcards {
 *      isLoading: boolean,
 *      data: [{id, message, photo_url, location, photo_id, create_at}, ...]
 * }
 *
 * Renders: RoutesList -> PostcardsListPage -> PostcardsList
 *
 */
function PostcardsListPage() {
    const [postcards, setPostcards] = useState({
        data: [],
        isLoading: true
    });

    console.debug("PostcardsListPage, postcards:", postcards);

    useEffect(function fetchPostcards() {
        async function getPostcards() {
            try {
                const postcardsData = await PostcardiumApi.getPostcards();
                setPostcards({
                    data: postcardsData,
                    isLoading: false
                });
            } catch (err) {
                console.error("ERROR!", err);
            }
        }

        getPostcards();
    }, []);

    if (postcards.isLoading === true) return <div>LOADING!</div>;

    return (
        <div className="PostcardsListPage mt-3" >
            <PostcardsList postcards={postcards.data} />
        </div>
    );

}

export default PostcardsListPage;