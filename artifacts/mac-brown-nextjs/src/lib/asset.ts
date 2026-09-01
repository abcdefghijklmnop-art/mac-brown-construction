export function img(src: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}

export function api(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api${path}`;
}

export function prefixHtml(html: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return html;
  return html
    .replace(/href="(?=\/)/g, `href="${base}`)
    .replace(/src="(?=\/)/g, `src="${base}`);
}

export function sanitizeContentHtml(html: string): string {
  return html
    .replace(/<h1(\s|>)/gi, "<h2$1")
    .replace(/<\/h1>/gi, "</h2>");
}
