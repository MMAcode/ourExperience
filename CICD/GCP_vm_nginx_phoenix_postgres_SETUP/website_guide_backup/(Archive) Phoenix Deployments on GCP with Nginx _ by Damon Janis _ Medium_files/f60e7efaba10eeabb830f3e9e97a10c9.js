document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-598610950903.css">')
document.write('<div id=\"gist106299025\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-deploy-sh\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-shell  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Shell\" data-tagsearch-path=\"deploy.sh\">\n        <tr>\n          <td id=\"file-deploy-sh-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-deploy-sh-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#!<\/span>/bin/bash<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-deploy-sh-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">set<\/span> -e<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-deploy-sh-LC3\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-deploy-sh-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Update to latest version of code<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-deploy-sh-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">cd<\/span> /home/<span class=\"pl-k\">&lt;<\/span>YOUR_USERNAME<span class=\"pl-k\">&gt;<\/span>/optimized_nginx<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-deploy-sh-LC6\" class=\"blob-code blob-code-inner js-file-line\">git fetch<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-deploy-sh-LC7\" class=\"blob-code blob-code-inner js-file-line\">git reset --hard origin/master<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-deploy-sh-LC8\" class=\"blob-code blob-code-inner js-file-line\">MIX_ENV=prod mix deps.get<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-deploy-sh-LC9\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-deploy-sh-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Optional CI steps<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-deploy-sh-LC11\" class=\"blob-code blob-code-inner js-file-line\">CI=true mix <span class=\"pl-c1\">test<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-deploy-sh-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> mix credo --strict (credo is not used in example repo, commented out)<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-deploy-sh-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-deploy-sh-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Build phase<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-deploy-sh-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">export<\/span> MIX_ENV=prod<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-deploy-sh-LC16\" class=\"blob-code blob-code-inner js-file-line\">mix compile<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-deploy-sh-LC17\" class=\"blob-code blob-code-inner js-file-line\">npm install --prefix ./assets<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-deploy-sh-LC18\" class=\"blob-code blob-code-inner js-file-line\">npm run deploy --prefix ./assets<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-deploy-sh-LC19\" class=\"blob-code blob-code-inner js-file-line\">mix phx.digest<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-deploy-sh-LC20\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-deploy-sh-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Create release<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-deploy-sh-LC22\" class=\"blob-code blob-code-inner js-file-line\">now_in_unix_seconds=<span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>date +<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>%s<span class=\"pl-pds\">&#39;<\/span><\/span><span class=\"pl-pds\">)<\/span><\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-deploy-sh-LC23\" class=\"blob-code blob-code-inner js-file-line\">mix release --path ../releases/<span class=\"pl-smi\">\${now_in_unix_seconds}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-deploy-sh-LC24\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-deploy-sh-LC25\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Update env var file with latest release name<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-deploy-sh-LC26\" class=\"blob-code blob-code-inner js-file-line\">sed -i <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>s/LATEST_RELEASE=.*/LATEST_RELEASE=<span class=\"pl-pds\">&#39;<\/span><\/span><span class=\"pl-smi\">\$now_in_unix_seconds<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>/g<span class=\"pl-pds\">&#39;<\/span><\/span> ../env_vars<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L27\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"27\"><\/td>\n          <td id=\"file-deploy-sh-LC27\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L28\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"28\"><\/td>\n          <td id=\"file-deploy-sh-LC28\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Find the port in use, and the available port<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L29\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"29\"><\/td>\n          <td id=\"file-deploy-sh-LC29\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">if<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>curl --output /dev/null --silent --head --fail localhost:4000<span class=\"pl-pds\">)<\/span><\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L30\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"30\"><\/td>\n          <td id=\"file-deploy-sh-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">then<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L31\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"31\"><\/td>\n          <td id=\"file-deploy-sh-LC31\" class=\"blob-code blob-code-inner js-file-line\">  port_in_use=4000<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L32\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"32\"><\/td>\n          <td id=\"file-deploy-sh-LC32\" class=\"blob-code blob-code-inner js-file-line\">  open_port=4001<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L33\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"33\"><\/td>\n          <td id=\"file-deploy-sh-LC33\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">else<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L34\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"34\"><\/td>\n          <td id=\"file-deploy-sh-LC34\" class=\"blob-code blob-code-inner js-file-line\">  port_in_use=4001<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L35\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"35\"><\/td>\n          <td id=\"file-deploy-sh-LC35\" class=\"blob-code blob-code-inner js-file-line\">  open_port=4000<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L36\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"36\"><\/td>\n          <td id=\"file-deploy-sh-LC36\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">fi<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L37\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"37\"><\/td>\n          <td id=\"file-deploy-sh-LC37\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L38\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"38\"><\/td>\n          <td id=\"file-deploy-sh-LC38\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Update release env vars with new port and set non-conflicting node name<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L39\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"39\"><\/td>\n          <td id=\"file-deploy-sh-LC39\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>export PORT=<span class=\"pl-smi\">\${open_port}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">&gt;&gt;<\/span> ../releases/<span class=\"pl-smi\">\${now_in_unix_seconds}<\/span>/releases/0.1.0/env.sh<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L40\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"40\"><\/td>\n          <td id=\"file-deploy-sh-LC40\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">echo<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&quot;<\/span>export RELEASE_NAME=<span class=\"pl-smi\">\${open_port}<\/span><span class=\"pl-pds\">&quot;<\/span><\/span> <span class=\"pl-k\">&gt;&gt;<\/span> ../releases/<span class=\"pl-smi\">\${now_in_unix_seconds}<\/span>/releases/0.1.0/env.sh<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L41\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"41\"><\/td>\n          <td id=\"file-deploy-sh-LC41\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L42\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"42\"><\/td>\n          <td id=\"file-deploy-sh-LC42\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Start new instance of app<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L43\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"43\"><\/td>\n          <td id=\"file-deploy-sh-LC43\" class=\"blob-code blob-code-inner js-file-line\">sudo systemctl start my_app@<span class=\"pl-smi\">\${open_port}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L44\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"44\"><\/td>\n          <td id=\"file-deploy-sh-LC44\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L45\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"45\"><\/td>\n          <td id=\"file-deploy-sh-LC45\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Pause script till app is fully up<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L46\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"46\"><\/td>\n          <td id=\"file-deploy-sh-LC46\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">until<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">\$(<\/span>curl --output /dev/null --silent --head --fail localhost:<span class=\"pl-smi\">\$open_port<\/span><span class=\"pl-pds\">)<\/span><\/span><span class=\"pl-k\">;<\/span> <span class=\"pl-k\">do<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L47\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"47\"><\/td>\n          <td id=\"file-deploy-sh-LC47\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">printf<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>Waiting for app to boot...\\n<span class=\"pl-pds\">&#39;<\/span><\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L48\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"48\"><\/td>\n          <td id=\"file-deploy-sh-LC48\" class=\"blob-code blob-code-inner js-file-line\">  sleep 1<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L49\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"49\"><\/td>\n          <td id=\"file-deploy-sh-LC49\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">done<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L50\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"50\"><\/td>\n          <td id=\"file-deploy-sh-LC50\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L51\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"51\"><\/td>\n          <td id=\"file-deploy-sh-LC51\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Run migrations<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L52\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"52\"><\/td>\n          <td id=\"file-deploy-sh-LC52\" class=\"blob-code blob-code-inner js-file-line\">mix ecto.migrate<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L53\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"53\"><\/td>\n          <td id=\"file-deploy-sh-LC53\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L54\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"54\"><\/td>\n          <td id=\"file-deploy-sh-LC54\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Update Nginx config to direct requests to new version of app<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L55\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"55\"><\/td>\n          <td id=\"file-deploy-sh-LC55\" class=\"blob-code blob-code-inner js-file-line\">sudo sed -i <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>s/server 127\\.0\\.0\\.1\\:.*/server 127.0.0.1:<span class=\"pl-pds\">&#39;<\/span><\/span><span class=\"pl-smi\">\$open_port<\/span><span class=\"pl-cce\">\\;<\/span><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>/g<span class=\"pl-pds\">&#39;<\/span><\/span> /etc/nginx/sites-available/default<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L56\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"56\"><\/td>\n          <td id=\"file-deploy-sh-LC56\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L57\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"57\"><\/td>\n          <td id=\"file-deploy-sh-LC57\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Reload Nginx so it gracefully starts routing to new version of app<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L58\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"58\"><\/td>\n          <td id=\"file-deploy-sh-LC58\" class=\"blob-code blob-code-inner js-file-line\">sudo systemctl reload nginx<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L59\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"59\"><\/td>\n          <td id=\"file-deploy-sh-LC59\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L60\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"60\"><\/td>\n          <td id=\"file-deploy-sh-LC60\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Stop previous version of app<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-deploy-sh-L61\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"61\"><\/td>\n          <td id=\"file-deploy-sh-LC61\" class=\"blob-code blob-code-inner js-file-line\">sudo systemctl stop my_app@<span class=\"pl-smi\">\${port_in_use}<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/damonvjanis/f60e7efaba10eeabb830f3e9e97a10c9/raw/93c109adcbd1c2f5ecd7437e81db0d34503df6cb/deploy.sh\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/damonvjanis/f60e7efaba10eeabb830f3e9e97a10c9#file-deploy-sh\">\n          deploy.sh\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
