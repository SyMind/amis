amis.define('docs/zh-CN/components/form/anchor-nav.md', function(require, exports, module, define) {

  module.exports = {
    "title": "AnchorNav 锚点导航",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "AnchorNav 锚点导航",
    "icon": null,
    "order": 53,
    "html": "<div class=\"markdown-body\"><p>有多组表单输入框时，可以通过锚点导航来分组，方便定位查看。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"controls\": [\n    {\n      \"type\": \"anchor-nav\",\n      \"links\": [\n        {\n          \"title\": \"员工基本信息\",\n          \"controls\": [\n            {\n                \"type\": \"fieldSet\",\n                \"title\": \"员工基本信息\",\n                \"controls\": [\n                    {\n                    \"name\": \"name\",\n                    \"type\": \"text\",\n                    \"label\": \"用户名\"\n                    },\n\n                    {\n                    \"name\": \"age\",\n                    \"type\": \"text\",\n                    \"label\": \"年龄\"\n                    }\n                ]\n                }\n          ]\n        },\n\n        {\n          \"title\": \"在职信息\",\n          \"controls\": [\n            {\n                \"type\": \"fieldSet\",\n                \"title\": \"在职信息\",\n                \"controls\": [\n                    {\n                    \"name\": \"home\",\n                    \"type\": \"text\",\n                    \"label\": \"居住地址\"\n                    },\n\n                    {\n                    \"name\": \"address\",\n                    \"type\": \"text\",\n                    \"label\": \"工作地址\"\n                    }\n                ]\n            }\n          ]\n        },\n\n        {\n          \"title\": \"教育经历\",\n          \"controls\": [\n            {\n                \"type\": \"fieldSet\",\n                \"title\": \"教育经历\",\n                \"controls\": [\n                    {\n                    \"name\": \"school1\",\n                    \"type\": \"text\",\n                    \"label\": \"经历1\"\n                    },\n                    {\n                    \"name\": \"school2\",\n                    \"type\": \"text\",\n                    \"label\": \"经历2\"\n                    },\n                    {\n                    \"name\": \"school2\",\n                    \"type\": \"text\",\n                    \"label\": \"经历2\"\n                    }\n                ]\n            }\n          ]\n        },\n\n        {\n          \"title\": \"紧急联系人信息\",\n          \"controls\": [\n            {\n                \"type\": \"fieldSet\",\n                \"title\": \"紧急联系人信息\",\n                \"controls\": [\n                    {\n                    \"name\": \"contact1\",\n                    \"type\": \"text\",\n                    \"label\": \"联系人1\"\n                    },\n                    {\n                    \"name\": \"contact2\",\n                    \"type\": \"text\",\n                    \"label\": \"联系人2\"\n                    },\n                    {\n                    \"name\": \"contact3\",\n                    \"type\": \"text\",\n                    \"label\": \"联系人3\"\n                    }\n                ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD\" href=\"#%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>更多功能</h2><p>请参考<a href=\"../anchor-nav\">这里</a>。</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>请参考<a href=\"../anchor-nav#属性表\">这里</a>。</p>\n</div>",
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
