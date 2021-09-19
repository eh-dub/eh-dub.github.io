import { process } from '$lib/markdown';

export function get({ params }) {
  const { slug } = params;

  const { metadata, content } = process(`static/posts/${slug}.md`);
  const body = JSON.stringify({ metadata, content });

  return {
    body
  }
}