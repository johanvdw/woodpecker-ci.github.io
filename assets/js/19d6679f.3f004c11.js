"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4138],{46653:e=>{e.exports=JSON.parse('{"name":"Trigger","url":"https://codeberg.org/woodpecker-plugins/trigger","icon":"https://woodpecker-ci.org/img/logo.svg","description":"plugin to trigger Woodpecker CI builds or deployments","docs":"<p>Woodpecker CI plugin to trigger repository builds or deployments. This plugin is a fork of <a href=\\"https://github.com/drone-plugins/drone-downstream/\\">drone-plugins/drone-downstream</a>.</p>\\n<h2 id=\\"features\\">Features</h2>\\n<ul>\\n<li>Trigger one or multiple pipelines</li>\\n<li>Trigger deploy action</li>\\n<li>Pass variables to pipelines</li>\\n</ul>\\n<h2 id=\\"settings\\">Settings</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>Settings Name</th>\\n<th>Default</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody><tr>\\n<td><code>server</code></td>\\n<td>current server</td>\\n<td>sets Woodpecker CI server URL to call</td>\\n</tr>\\n<tr>\\n<td><code>token</code></td>\\n<td><em>none</em></td>\\n<td>sets Woocpecker CI API token for server</td>\\n</tr>\\n<tr>\\n<td><code>repositories</code></td>\\n<td><em>none</em></td>\\n<td>sets repositories name whose pipelines to trigger</td>\\n</tr>\\n<tr>\\n<td><code>deploy</code></td>\\n<td><em>none</em></td>\\n<td>sets the environment to deploy to</td>\\n</tr>\\n<tr>\\n<td><code>params</code></td>\\n<td><em>none</em></td>\\n<td>sets list of params (key=value or file paths of params) to pass to triggered builds</td>\\n</tr>\\n<tr>\\n<td><code>params-from-env</code></td>\\n<td><em>none</em></td>\\n<td>sets list of environment variables to pass to triggered builds</td>\\n</tr>\\n<tr>\\n<td><code>wait</code></td>\\n<td><code>false</code></td>\\n<td>sets to wait for any currently running builds to finish</td>\\n</tr>\\n<tr>\\n<td><code>timeout</code></td>\\n<td><code>60s</code></td>\\n<td>sets how long to wait on any currently running builds</td>\\n</tr>\\n<tr>\\n<td><code>last-successful</code></td>\\n<td><code>false</code></td>\\n<td>sets to trigger last successful build</td>\\n</tr>\\n</tbody></table>\\n<h3 id=\\"repositories\\">repositories</h3>\\n<p>Multiple repositories whose pipelines need to be triggered can be provided.\\nAlso it&#39;s possible to provide specific branch to trigger can be specified with <code>@</code> separator, ex. <code>owner/repo@branch</code>.</p>\\n<h2 id=\\"examples\\">Examples</h2>\\n<pre><code class=\\"language-yaml\\">  trigger-downstream:\\n    image: woodpeckerci/plugin-trigger\\n    settings:\\n      repositories:\\n        - octocat/hello-world@master\\n        - octocat/sample\\n      token:\\n        from_secret: woodpecker_token\\n</code></pre>\\n<pre><code class=\\"language-yaml\\">  publish:\\n    image: woodpeckerci/plugin-trigger\\n    settings:\\n      repositories:\\n        - octocat/hello-world\\n      deploy: production\\n      params:\\n        - DATABASE=prod\\n      wait: true\\n      token:\\n        from_secret: woodpecker_token\\n    when:\\n      branch: ${CI_REPO_DEFAULT_BRANCH}\\n      event: push\\n</code></pre>\\n","tags":["woodpecker","trigger","pipeline"],"containerImage":"woodpeckerci/plugin-trigger","containerImageUrl":"https://hub.docker.com/r/woodpeckerci/plugin-trigger","verified":true}')}}]);