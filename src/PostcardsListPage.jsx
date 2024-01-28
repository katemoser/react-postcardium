import { useEffect, useState } from "react";
import PostcardsList from "./PostcardsList";
import PostcardiumApi from "./api";

/**
 *
 *
 *
 */
function PostcardsListPage() {
    const [postcards, setPostcards] = useState({
        data: [],
        isLoading: true
    });

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
        <div className="PostcardsListPage" >
            <PostcardsList postcards={postcards.data} />
        </div>
    );

}

export default PostcardsListPage;