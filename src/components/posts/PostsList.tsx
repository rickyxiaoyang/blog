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

export function PostsList({ posts }: { posts: Post[] }) {
	return (
		<div className="posts-list">
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
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
