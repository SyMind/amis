amis.define('docs/zh-CN/components/form/tabs.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Tabs 选项卡",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Tabs 选项卡",
    "icon": null,
    "order": 53,
    "html": "<div class=\"markdown-body\"><p>有多组输入框时，也可以通过选项卡来分组。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"controls\": [\n      {\n      \"type\": \"tabs\",\n      \"tabs\": [\n        {\n          \"title\": \"基本配置\",\n          \"controls\": [\n            {\n              \"name\": \"text1\",\n              \"type\": \"text\",\n              \"label\": \"文本1\"\n            },\n\n            {\n              \"name\": \"text2\",\n              \"type\": \"text\",\n              \"label\": \"文本2\"\n            }\n          ]\n        },\n\n        {\n          \"title\": \"其他配置\",\n          \"controls\": [\n            {\n              \"name\": \"text3\",\n              \"type\": \"text\",\n              \"label\": \"文本3\"\n            },\n\n            {\n              \"name\": \"text4\",\n              \"type\": \"text\",\n              \"label\": \"文本4\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%90%8C%E6%AD%A5%E8%A1%A8%E5%8D%95%E5%80%BC\" href=\"#%E5%90%8C%E6%AD%A5%E8%A1%A8%E5%8D%95%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>同步表单值</h2><p>默认 Tabs 只是展示，如果希望把当前 tab 作为值提交给后端，则可以配置 <code>name</code> 来同步，意味着切换 tab 会写入值，如果外部修改了这个值，tabs 也会相应的切换到对应的 tab。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"controls\": [\n      {\n      \"type\": \"radios\",\n      \"name\": \"tabs\",\n      \"value\": \"tab2\",\n      \"label\": \"Tabs值\",\n      \"mode\": \"normal\",\n      \"options\": [\n        {\n          \"label\": \"基本信息\",\n          \"value\": \"tab1\"\n        },\n        {\n          \"label\": \"其他信息\",\n          \"value\": \"tab2\"\n        }\n      ]\n    },\n\n    {\n      \"type\": \"tabs\",\n      \"name\": \"tabs\",\n      \"tabs\": [\n        {\n          \"title\": \"基本配置\",\n          \"value\": \"tab1\",\n          \"controls\": [\n            {\n              \"name\": \"text1\",\n              \"type\": \"text\",\n              \"label\": \"文本1\"\n            },\n\n            {\n              \"name\": \"text2\",\n              \"type\": \"text\",\n              \"label\": \"文本2\"\n            }\n          ]\n        },\n\n        {\n          \"title\": \"其他配置\",\n          \"value\": \"tab2\",\n          \"controls\": [\n            {\n              \"name\": \"text3\",\n              \"type\": \"text\",\n              \"label\": \"文本3\"\n            },\n\n            {\n              \"name\": \"text4\",\n              \"type\": \"text\",\n              \"label\": \"文本4\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD\" href=\"#%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>更多功能</h2><p>请参考<a href=\"../tabs\">这里</a>。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>请参考<a href=\"../tabs#属性表\">这里</a>。</p>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "同步表单值",
          "fragment": "%E5%90%8C%E6%AD%A5%E8%A1%A8%E5%8D%95%E5%80%BC",
          "fullPath": "#%E5%90%8C%E6%AD%A5%E8%A1%A8%E5%8D%95%E5%80%BC",
          "level": 2
        },
        {
          "label": "更多功能",
          "fragment": "%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD",
          "fullPath": "#%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
