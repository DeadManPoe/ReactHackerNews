export const StoriesActionCreator = {
    loadStories : ()=>{
        return {
            type : "LOAD_STORIES",
            payload : null
        }
    },
    likeStory : (storyId) => {
        return {
            type : "LIKE_STORY",
            payload: storyId
        }
    },
    provideStories : (stories) => {
        return {
            type : "PROVIDE_STORIES",
            payload : stories
        }
    }
};