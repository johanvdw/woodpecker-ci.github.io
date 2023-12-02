"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4138],{46653:t=>{t.exports=JSON.parse('{"name":"Git Push","url":"https://github.com/appleboy/drone-git-push","icon":"https://raw.githubusercontent.com/appleboy/drone-git-push/master/images/logo.svg","description":"Commit and push to an git repo via SSH","docs":"<p>Use this plugin for commit and push an git repo.\\nYou will need to supply Drone / Woodpecker with a private SSH key or use the same credentials as the cloned repo to being able to push changes.</p>\\n<pre><code class=\\"language-yaml\\">- name: push commit\\n  image: appleboy/drone-git-push\\n  settings:\\n    branch: master\\n    remote: ssh://git@git.heroku.com/falling-wind-1624.git\\n    force: false\\n    commit: true\\n</code></pre>\\n<p>An example of pushing a branch back to the current repository:</p>\\n<pre><code class=\\"language-yaml\\">- name: push commit\\n  image: appleboy/drone-git-push\\n  settings:\\n    remote_name: origin\\n    branch: gh-pages\\n    local_ref: gh-pages\\n</code></pre>\\n<p>An example of specifying the path to a repo:</p>\\n<pre><code class=\\"language-yaml\\">- name: push commit\\n  image: appleboy/drone-git-push\\n  settings:\\n    remote_name: origin\\n    branch: gh-pages\\n    local_ref: gh-pages\\n    path: path/to/repo\\n</code></pre>\\n<h2>Parameter Reference</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>setting</th>\\n<th>description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td>ssh_key</td>\\n<td>private SSH key for the remote machine (make sure it ends with a newline)</td>\\n</tr>\\n<tr>\\n<td>remote</td>\\n<td>target remote repository (if blank, assume exists)</td>\\n</tr>\\n<tr>\\n<td>remote_name</td>\\n<td>name of the remote to use locally (default \\"deploy\\")</td>\\n</tr>\\n<tr>\\n<td>branch</td>\\n<td>target remote branch, defaults to master</td>\\n</tr>\\n<tr>\\n<td>local_branch</td>\\n<td>local branch or ref to push (default \\"HEAD\\")</td>\\n</tr>\\n<tr>\\n<td>path</td>\\n<td>path to git repo (if blank, assume current directory)</td>\\n</tr>\\n<tr>\\n<td>force</td>\\n<td>force push using the <code>--force</code> flag, defaults to false</td>\\n</tr>\\n<tr>\\n<td>skip_verify</td>\\n<td>skip verification of HTTPS certs, defaults to false</td>\\n</tr>\\n<tr>\\n<td>commit</td>\\n<td>add and commit the contents of the repo before pushing, defaults to false</td>\\n</tr>\\n<tr>\\n<td>commit_message</td>\\n<td>add a custom message for commit, if it is omitted, it will be <code>[skip ci] Commit dirty state</code></td>\\n</tr>\\n<tr>\\n<td>empty_commit</td>\\n<td>if you only want generate an empty commit, you can do it using this option</td>\\n</tr>\\n<tr>\\n<td>tag</td>\\n<td>if you want to add a tag to the commit, you can do it using this option. You must also set <code>followtags</code> to <code>true</code> if you want the tag to be pushed to the remote</td>\\n</tr>\\n<tr>\\n<td>author_name</td>\\n<td>the name to use for the author of the commit (if blank, assume push commiter name)</td>\\n</tr>\\n<tr>\\n<td>author_email</td>\\n<td>the email address to use for the author of the commit (if blank, assume push commiter name)</td>\\n</tr>\\n<tr>\\n<td>followtags</td>\\n<td>push with --follow-tags option</td>\\n</tr>\\n<tr>\\n<td>rebase</td>\\n<td>pull --rebase before pushing</td>\\n</tr>\\n</tbody></table>\\n","tags":["deploy","publish","git-push"],"author":"appleboy","containerImage":"appleboy/drone-git-push","containerImageUrl":"https://hub.docker.com/r/appleboy/drone-git-push","verified":false}')}}]);