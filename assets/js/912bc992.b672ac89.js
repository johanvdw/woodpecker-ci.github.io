"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5326],{7350:function(e){e.exports=JSON.parse('{"name":"Surge preview plugin","repoName":"plugin-surge-preview","url":"https://github.com/woodpecker-ci/plugin-surge-preview","icon":"https://woodpecker-ci.org/img/logo.svg","description":"Plugin to create static pages deployments as preview environments on pull-requests.","docs":"<p>The surge-preview plugin uploads a files of a directory to the CDN of <a href=\\"https://surge.sh/\\">surge.sh</a> it automatically generates an url and posts the status of the deployment with an url as a comment to the pull-request. After closing a pull-request it automatically destroys the preview environment again.</p>\\n<h2 id=\\"usage\\">Usage</h2>\\n<p>To use the plugin add a step similar to the following one to your Woodpecker pipeline config:</p>\\n<pre><code class=\\"language-yml\\">pipeline:\\n  preview:\\n    image: woodpeckerci/plugin-surge-preview\\n    settings:\\n      path: dist/ # path to directory to publish files from\\n      surge_token: xxx # install surge cli and run `surge token`: https://surge.sh/help/getting-started-with-surge\\n      forge_type: github # or gitea, gitlab, ...\\n      forge_url: https://github.com # or https://codeberg.org, https://gitlab.com, ...\\n      forge_repo_token: xxx # access token for your forge\\n    when:\\n      event: pull_request\\n</code></pre>\\n"}')}}]);