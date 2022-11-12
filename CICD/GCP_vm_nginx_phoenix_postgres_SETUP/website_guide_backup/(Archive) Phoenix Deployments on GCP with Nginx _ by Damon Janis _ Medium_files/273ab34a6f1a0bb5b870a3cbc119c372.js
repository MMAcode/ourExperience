document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-598610950903.css">')
document.write('<div id=\"gist106153860\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-prod-secret-exs\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-elixir  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Elixir\" data-tagsearch-path=\"prod.secret.exs\">\n        <tr>\n          <td id=\"file-prod-secret-exs-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-prod-secret-exs-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>Mix.Config<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-prod-secret-exs-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-prod-secret-exs-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-en>config<\/span> <span class=pl-pds>:my_app<\/span><span class=pl-kos>,<\/span> <span class=pl-v>MyApp.Repo<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-prod-secret-exs-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>username: <\/span><span class=pl-s>&quot;postgres&quot;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-prod-secret-exs-LC5\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>password: <\/span><span class=pl-s>&quot;&lt;the random password you generated&gt;&quot;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-prod-secret-exs-LC6\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>database: <\/span><span class=pl-s>&quot;my_app&quot;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-prod-secret-exs-LC7\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>hostname: <\/span><span class=pl-s>&quot;localhost&quot;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-prod-secret-exs-LC8\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>ssl: <\/span><span class=pl-c1>true<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-prod-secret-exs-LC9\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>pool_size: <\/span><span class=pl-c1>10<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-prod-secret-exs-LC10\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-prod-secret-exs-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-en>config<\/span> <span class=pl-pds>:my_app<\/span><span class=pl-kos>,<\/span> <span class=pl-v>MyAppWeb.Endpoint<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-prod-secret-exs-LC12\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>server: <\/span><span class=pl-c1>true<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-prod-secret-exs-LC13\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>secret_key_base: <\/span><span class=pl-s>&quot;&lt;run mix phx.gen.secret and paste the value here&gt;&quot;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-prod-secret-exs-LC14\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-pds>http: <\/span><span class=pl-kos>[<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-prod-secret-exs-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-pds>port: <\/span><span class=pl-c1>4000<\/span><span class=pl-kos>,<\/span> <span class=pl-c># default value, overridden in config/runtime.exs<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-prod-secret-exs-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-pds>transport_options: <\/span><span class=pl-kos>[<\/span><span class=pl-pds>socket_opts: <\/span><span class=pl-kos>[<\/span><span class=pl-pds>:inet6<\/span><span class=pl-kos>]<\/span><span class=pl-kos>]<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-prod-secret-exs-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-prod-secret-exs-LC17\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-kos>]<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/damonvjanis/273ab34a6f1a0bb5b870a3cbc119c372/raw/0a8fcb3f2109776c4f7eb71aa2914e93eca0b1ab/prod.secret.exs\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/damonvjanis/273ab34a6f1a0bb5b870a3cbc119c372#file-prod-secret-exs\">\n          prod.secret.exs\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
