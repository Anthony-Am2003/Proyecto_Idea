// falta crear e importar el modelo de posts

export const getPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
        
    }

export const getPost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        res.json(post);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
        
    }

export const createPost = async (req, res) => {
    try {
        const {  } = req.body; 
        // que va a llevar el body??
        const newPost = new Posts(req.body);
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
        
    }

export const updatePost = async (req, res) => {
   try {
    // updatepost
} catch (error) {
    return res.status(404).json({ message: "Post not found" });
}
}

export const deletePost = async (req, res) => {
    try {
        // deletepost
    } catch (error) {
        return res.status(404).json({ message: "Post not found" });
    }
}
