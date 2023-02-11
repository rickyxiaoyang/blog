import * as React from "react";
import { navigate } from "gatsby";
import "./PostsList.scss";

type Post = {
	slug: string;
	title: string;
	seoTitle: string;
	dateString: string;
	date: string;
	image: string;
};

const byDate = (a: Post, b: Post) => {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export function PostsList({ posts }: { posts: Post[] }) {
	return (
		<div className="posts-list">
			{posts.sort(byDate).map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
			<div style={{ height: "70vh" }}></div>
		</div>
	);
}

function PostItem({ post }: { post: Post }) {
	return (
		<div className="post-item" onClick={() => navigate(post.slug)}>
			<div
				className="post-item-image"
				style={{ backgroundImage: `url('${post.image}')` }}
			></div>
			<div className="post-item-text-container">
				<div className="post-item-title">{post.title}</div>
				<span>{post.dateString}</span>
			</div>
		</div>
	);
}
