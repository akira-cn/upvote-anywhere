# Upvote Anywhere

Congratulations! I've generated a new Upvote button for you, and its ID is <a href="/show?id=${params.id}&link=1" target="_blank">${params.id}</a>.

[Create another button ->](/create)

## Demo

- <img id="upvoteBtn" src="/show?id=64dc3a330fa968996d352dbd" width="35" style="vertical-align: bottom;cursor:pointer;"> Do you like Upvote Anywhere? If you do, please give it an upvote.

<script>
upvoteBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  await fetch('/upvote', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({id: '64dc3a330fa968996d352dbd'}),
  });
  upvoteBtn.src = "/show?id=64dc3a330fa968996d352dbd&t=" + Date.now();
});
</script>

## Usage

### In Web App:

\`\`\`html
<img id="upvoteBtn" src="${url}/show?id=${params.id}" width="35" style="vertical-align: bottom;cursor:pointer;"> Do you like Upvote Anywhere? If you do, please give it an upvote.

<script>
upvoteBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  await fetch('${url}/upvote', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({id: '${params.id}'}),
  });
  upvoteBtn.src = "${url}/show?id=${params.id}&t=" + Date.now();
});
</script>
\`\`\`

### In Github Markdown

\`\`\`html
<table>
  <tr>
    <td valign="center">
      <a href="${url}/upvote?id=${params.id}&redirect=https://github.com/[your]/[repo]">
        <img src="${url}/show?id=${params.id}" width="50">
      </a> 
    </td>
    <td>Do you like Upvote Anywhere? If you do, please give it an upvote.</td>
  </tr>
</table>
\`\`\`