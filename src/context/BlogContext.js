import createDataContext from "./createDataContext";
import jsonServe from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;
    case "EDIT_BLOG_POST":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case "DELETE_BLOG_POST":
      return state.filter(blogPost => blogPost.id !== action.payload);
    case "ADD_BLOG_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServe.get("/blogposts");

    dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
  };
};

const addBlogPosts = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: "ADD_BLOG_POST", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "DELETE_BLOG_POST", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({ type: "EDIT_BLOG_POST", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
