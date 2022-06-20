import fs from "fs";
import path from "path";
export function getBlogs() {
    const cwd = process.cwd();
    const blogs = fs.readdirSync(path.join(cwd, "blogs")).map((fileName) => {
        const name = fileName.replace(".md", "");
        return {
            blogTitle: name,
            blogUrl: name?.replace(/ /g, '_'),
        };
    });
    return blogs;
}