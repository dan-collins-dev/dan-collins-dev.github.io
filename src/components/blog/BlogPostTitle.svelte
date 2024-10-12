<script>
    export let frontmatter;
    const {title, description, author, pubDate} = frontmatter;
    const date = new Date(pubDate); 
</script>

<article class="blog-card">
    <h1 class="blog-label roboto-bold">{title}</h1>
    <p class="roboto-thin">Written by {author}</p>
    <p class="roboto-thin">
        Date Published: {date.toUTCString().slice(0, 16)}
    </p>
</article>