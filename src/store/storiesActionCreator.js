export const StoriesActionCreator = {
    loadStories : (type)=>{
        return {
            type : "LOAD_STORIES",
            payload : type
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