import ams from "@ams-team/ams";

const config = {
  resources: {
    "resource-demo-list": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        read: "GetInfo",
        update: "Edit",
        list: "list",
        delete: "Del",
        create: "add"
      },
      fields: {
        id: {
          type: "text",
          label: "序号",
          ctx: "view"
        },
        testText: {
          type: "text",
          label: "活动"
        },
        testTime: {
          type: "time",
          label: "时间"
        },
        testColor: {
          type: "color",
          label: "颜色"
        },
        testSwitch: {
          type: "switch",
          label: "开关"
        },
        testRate: {
          type: "rate",
          label: "评分"
        },
        testSlider: {
          type: "slider",
          label: "滑块"
        }
      }
    },
    "resource-demo-form": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        read: "read",
        update: "Edit",
        list: "list",
        delete: "Del",
        create: "add"
      },
      fields: {
        id: {
          type: "text",
          label: "序号",
          ctx: "view"
        },
        testText: {
          type: "text",
          label: "活动"
        },
        testDatetime: {
          type: "datetime",
          label: "日期时间"
        },
        testColor: {
          type: "color",
          label: "颜色"
        },
        testSwitch: {
          type: "switch",
          label: "开关"
        },
        testRate: {
          type: "rate",
          label: "评分"
        },
        testRadio: {
          type: "radio",
          label: "单选",
          props: {
            options: {
              a: "黄金糕",
              b: "双皮奶",
              c: "蚵仔煎",
              d: "龙须面",
              e: "北京烤鸭"
            }
          }
        }
      }
    },
    "resource-calendar": {
      fields: {
        date: {
          type: "date",
          label: "活动时间"
        },
        testRadio: {
          type: "radio",
          label: "单选",
          props: {
            options: {
              a: "黄金糕",
              b: "双皮奶",
              c: "蚵仔煎",
              d: "龙须面",
              e: "北京烤鸭"
            }
          }
        }
      }
    },
    "resource-editor": {
      api: {
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list"
      },
      fields: {
        testEditor: {
          type: "editor",
          label: "富文本"
        },
        testMarkdown: {
          type: "markdown",
          label: "markdown"
        },
        tags: {
          type: "tag",
          label: "栏目标签",
          props: {
            successCode: 200,
            placeholder: "请输入标签",
            action: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            queryKey: ""
          }
        },
        Cascader: {
          type: "cascader",
          label: "部门选择",
          props: {
            options: []
          }
        }
      }
    },
    date: {
      fields: {
        time: {
          label: "time",
          type: "time",
          props: {
            "picker-options": {
              step: "00:15"
            }
          }
        },
        timepicker: {
          label: "timepicker",
          type: "timepicker"
        },
        timerange: {
          label: "timerange",
          type: "timerange"
        },
        year: {
          label: "year(format int)",
          type: "date",
          props: {
            "value-format": "timestamp",
            type: "year"
          }
        },
        month: {
          label: "month(format string)",
          type: "date",
          props: {
            "value-format": "yyyy-MM",
            type: "month"
          }
        },
        date: {
          label: "date",
          type: "date"
        },
        datetimeWithFormat: {
          label: "datetime自定义格式化",
          type: "datetime",
          formart: "{y}-{m}-{d} {h}:{i}"
        },
        week: {
          label: "week",
          type: "date",
          props: {
            type: "week"
          }
        },
        datetime: {
          label: "datetime",
          type: "date"
        },
        datetimerange: {
          label: "datetimerange",
          type: "datetimerange"
        },
        daterange: {
          label: "daterange",
          type: "datetimerange",
          props: {
            type: "daterange"
          }
        },
        dates: {
          label: "dates",
          type: "datetimerange",
          props: {
            type: "dates"
          }
        }
      }
    },
    unitselect: {
      fields: {
        money: {
          type: "unitselect",
          label: "金额",
          defaultUnit: "万元",
          units: ["万元", "亿元"],
          style: {
            width: "200px"
          },
          get: function(val, field) {
            if (isNaN(val)) {
              val = "0万元";
            } else if (val > 1e8) {
              val = (val / 1e8).toFixed(2) + "亿元";
            } else {
              val = (val / 1e4).toFixed(2) + "万元";
            }
            let currentUnit = field.defaultUnit;
            for (let i = 0; i < field.units.length; i++) {
              if (new RegExp(field.units[i] + "$").test(val)) {
                currentUnit = field.units[i];
                break;
              }
            }
            console.log("getUnits", val, "currentUnit", currentUnit);
            return {
              unit: currentUnit,
              val: val ? val.replace(new RegExp(currentUnit + "$"), "") : ""
            };
          },
          set: function(val, field) {
            console.log("setUnits", val);
            if (val.unit === "万元") {
              return isNaN(val.val) ? 0 : val.val * 1e4;
            } else {
              return isNaN(val.val) ? 0 : val.val * 1e8;
            }
          },
          view: function(value, field) {
            console.log("viewUnits", value);
            if (isNaN(value)) {
              return "0万元";
            } else if (value > 1e8) {
              return (value / 1e8).toFixed(2) + "亿元";
            } else {
              return (value / 1e4).toFixed(2) + "万元";
            }
          }
        },
        meter: {
          type: "unitselect",
          label: "距离",
          defaultUnit: "毫米",
          units: ["毫米", "厘米", "分米", "千米"],
          style: {
            width: "200px"
          }
        }
      }
    },
    select: {
      api: {
        successCode: 200,
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
        tags: "tag"
      },
      key: "id",
      foreignKeys: ["projectId"],
      fields: {
        normalSelectEdit: {
          type: "select",
          label: "select多选",
          props: {
            options: {
              a: "黄金糕",
              b: "双皮奶",
              c: "蚵仔煎",
              d: "龙须面",
              e: "北京烤鸭"
            }
          }
        },
        normalSingleSelectEdit: {
          type: "select",
          label: "select单选",
          props: {
            multiple: false,
            options: {
              a: "黄金糕",
              b: "双皮奶",
              c: "蚵仔煎",
              d: "龙须面",
              e: "北京烤鸭"
            }
          }
        },
        selectEdit: {
          BASE: "SELECT_REMOTE",
          label: "select",
          type: "select",
          remoteConfig: {
            action: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            queryKey: "requiredName"
          }
        },
        selectView: {
          BASE: "SELECT_REMOTE",
          ctx: "view",
          label: "select",
          type: "select",
          remoteConfig: {
            action: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            queryKey: "requiredName"
          }
        },
        singleSelectView: {
          BASE: "SELECT_REMOTE",
          ctx: "view",
          label: "select单选",
          type: "select",
          props: {
            multiple: false
          },
          remoteConfig: {
            action: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            queryKey: "requiredName"
          }
        },
        singleSelectEdit: {
          BASE: "SELECT_REMOTE",
          label: "select单选",
          type: "select",
          props: {
            multiple: false
          },
          remoteConfig: {
            action: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            queryKey: "requiredName"
          }
        }
      }
    },
    arrayObject: {
      api: {
        successCode: 200,
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
        read: "array-object-read",
        list: "array-object-list"
      },
      fields: {
        simpleObject: {
          type: "object",
          label: "simpleObject",
          fields: {
            text: {
              type: "text",
              label: "rule2",
              rules: [
                {
                  required: true,
                  message: "请输入活动名称",
                  trigger: "blur"
                },
                {
                  min: 3,
                  max: 5,
                  message: "长度在 3 到 5 个字符",
                  trigger: "blur"
                }
              ]
            },
            date: {
              type: "date",
              label: "date"
            }
          }
        },
        mutiObject: {
          type: "object",
          label: "mutiObject",
          fields: {
            date: {
              type: "date",
              label: "date"
            },
            checkbox: {
              type: "checkbox",
              label: "checkbox",
              props: {
                options: {
                  "1": "黄金糕",
                  "2": "哈哈哈"
                }
              }
            },
            ArrayArray: {
              type: "array",
              label: "ArrayArray",
              field: {
                type: "array",
                label: "array",
                field: {
                  type: "text",
                  label: "text"
                }
              }
            },
            ArrayObject: {
              type: "array",
              label: "ArrayObject",
              field: {
                type: "object",
                label: "object",
                fields: {
                  text: {
                    type: "text",
                    label: "text",
                    rules: [
                      {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur"
                      },
                      {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符",
                        trigger: "blur"
                      }
                    ]
                  },
                  date: {
                    type: "date",
                    label: "date"
                  }
                }
              }
            }
          }
        },
        simpleArray: {
          type: "array",
          label: "simpleArray",
          field: {
            type: "text",
            label: "text"
          }
        },
        ArrayArray: {
          type: "array",
          label: "ArrayArray",
          field: {
            type: "array",
            label: "array",
            field: {
              type: "text",
              label: "text"
            }
          }
        },
        checkbox: {
          type: "checkbox",
          label: "checkbox",
          props: {
            options: {
              "1": "黄金糕",
              "2": "哈哈哈"
            }
          }
        }
      }
    },
    getSetView: {
      fields: {
        datetime: {
          label: "datetime",
          type: "datetime",
          get: function(value) {
            return Number(value.slice(5));
          },
          set: function(value) {
            return "date:" + (value instanceof Date ? value.getTime() : value);
          },
          view: function(value) {
            return value.slice(5) / 1000;
          }
        }
      }
    },
    ecahrtRes: {
      api: {
        prefix: "https://www.easy-mock.com/mock/5bf25b2b34392218c898a5fd/",
        read: "read"
      },
      fields: {}
    },
    "resource-demo-login": {
      api: {
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/",
        create: "login"
      },
      fields: {
        username: {
          type: "text",
          label: "用户名",
          rules: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur"
            }
          ]
        },
        password: {
          type: "password",
          label: "密码",
          rules: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ]
        }
      }
    },
    image: {
      fields: {
        image1: {
          label: "默认图片上传",
          type: "image",
          successUrlKey: "url",
          props: {
            action:
              "https://easy-mock.com/mock/5a0023effbbb09615044cb82/upload-image"
          },
          rules: [
            {
              required: true,
              message: "请输入活动名称",
              trigger: "change"
            }
          ]
        },
        image2: {
          label: "大小限制",
          type: "image",
          tip: "只能不超过50kb的图片",
          successUrlKey: "url",
          check: {
            maxSizeInKB: 50
          },
          props: {
            action:
              "https://easy-mock.com/mock/5a0023effbbb09615044cb82/upload-image"
          }
        },
        image3: {
          label: "尺寸范围",
          type: "image",
          tip: "范围640-640",
          successUrlKey: "url",
          check: {
            imgMaxWidth: 640,
            imgMaxHeight: 640,
            imgMinWidth: 640,
            imgMinHeight: 640
          },
          props: {
            action:
              "https://easy-mock.com/mock/5a0023effbbb09615044cb82/upload-image"
          }
        },
        image4: {
          label: "固定尺寸",
          type: "image",
          tip: "640x640",
          successUrlKey: "url",
          check: {
            imgWidth: 640,
            imgHeight: 640
          },
          props: {
            action:
              "https://easy-mock.com/mock/5a0023effbbb09615044cb82/upload-image"
          }
        },
        image5: {
          label: "图片类型",
          type: "image",
          tip: "只能上传png文件",
          successUrlKey: "url",
          props: {
            accept: "image/png",
            action:
              "https://easy-mock.com/mock/5a0023effbbb09615044cb82/upload-image"
          }
        }
      }
    }
  },
  blocks: {
    routerBlock1: {
      type: "router",
      ctx: "view",
      router: {
        defaultBreadcrumb: false,
        routes: [
          {
            path: "",
            name: "基础列表",
            block: "demoListView"
          },
          {
            path: "form",
            name: "基础表单",
            meta: {
              icon: "",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            },
            children: [
              {
                name: "展示",
                path: "path1_0",
                block: "demoFormViewAll",
                meta: {
                  icon: "",
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "编辑",
                path: "path1_1",
                block: "demoFormEditAll",
                meta: {
                  icon: "",
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              }
            ]
          },
          {
            path: "block",
            name: "基础组件",
            meta: {
              icon: "",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            },
            children: [
              {
                name: "折叠面板",
                path: "collapse",
                block: "collapseBlock1",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "表格",
                path: "table",
                block: "tableBlock1",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "日历看板",
                path: "schedule",
                block: "scheduleBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "富文本编辑器",
                path: "editor",
                block: "editorEdit",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "Markdown编辑器",
                path: "markdown",
                block: "markdownEdit",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "日期示例",
                path: "date",
                block: "componentBlock1",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "单位选择示例",
                path: "date",
                block: "componentBlock2",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "单位选择示例",
                path: "unitselect",
                block: "componentBlock2",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "Select使用示例",
                path: "select",
                block: "selectBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "array & object 使用示例",
                path: "arrayobject",
                block: "componentBlock3",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "卡片",
                path: "Card",
                block: "componentBlock5",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "标签",
                path: "tag",
                block: "tagEdit",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "图片上传",
                path: "image",
                block: "componentBlock6",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "标题组件",
                path: "image",
                block: "componentBlock7",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "步骤条",
                path: "steps",
                block: "componentBlock7",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "级联选择",
                path: "cascader",
                block: "cascaderBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              }
            ]
          },
          {
            path: "chart",
            name: "基础表格",
            meta: {
              hasMenu: true,
              hidden: false,
              noRedirect: false
            },
            children: [
              {
                name: "折线图表",
                path: "line",
                block: "echartLineBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "柱状图表",
                path: "bar",
                block: "echartBarBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "饼状图表",
                path: "pie",
                block: "echartPieBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "漏斗图表",
                path: "funnel",
                block: "echartFunnelBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "散点图表",
                path: "scatter",
                block: "echartScatterBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "雷达图表",
                path: "radar",
                block: "echartRadarBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              }
            ]
          },
          {
            path: "scene",
            name: "其它场景",
            meta: {
              hasMenu: true,
              hidden: false,
              noRedirect: false
            },
            children: [
              {
                name: "动态添加block",
                path: "dynamic",
                block: "dynamicBlock",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "get-set-view 示例",
                path: "getsetview",
                block: "componentBlock4",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              },
              {
                name: "登录表单",
                path: "login",
                block: "demoLogin",
                meta: {
                  hasMenu: true,
                  hidden: false,
                  noRedirect: false
                }
              }
            ]
          },
          {
            path: "error",
            name: "错误页",
            block: "errorBlock1",
            meta: {
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          }
        ]
      },
      blocks: {
        demoListView: {
          type: "list",
          ctx: "view",
          style: {
            width: "100%"
          },
          resource: "resource-demo-list",
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @delete init",
            editItem: "@demoListEditDialog.show",
            addItem: "@demoListAddDialog.show"
          },
          actions: {},
          sorts: {
            id: true
          },
          operations: {
            id: {
              slot: "searchs",
              type: "field",
              field: "id",
              label: "id"
            },
            search: {
              slot: "searchs",
              type: "button",
              props: {
                type: "primary"
              },
              label: "搜索",
              event: "list"
            },
            addItem: {
              slot: "searchs",
              type: "button",
              label: "添加",
              props: {
                type: "primary"
              }
            },
            editItem: {
              type: "button",
              props: {
                type: "primary",
                icon: "el-icon-edit",
                circle: true
              }
            },
            removeItem: {
              type: "button",
              props: {
                type: "danger",
                icon: "el-icon-delete",
                circle: true
              }
            }
          }
        },
        demoListEditDialog: {
          type: "dialog",
          data: {
            title: "编辑",
            visible: false
          },
          events: {
            submit: "editDialogForm.submit"
          },
          actions: {},
          operations: {
            submit: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            },
            hide: {
              type: "button",
              label: "关闭"
            }
          },
          blocks: {
            editDialogForm: {
              type: "form",
              resource: "resource-demo-list",
              ctx: "edit",
              events: {
                init: "@read",
                submit:
                  "@validate @update demoListView.init @demoListEditDialog.hide"
              },
              blocks: {}
            }
          }
        },
        demoListAddDialog: {
          type: "dialog",
          data: {
            title: "添加",
            visible: false
          },
          events: {
            submit: "addDialogForm.submit"
          },
          actions: {},
          operations: {
            submit: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            },
            hide: {
              type: "button",
              label: "关闭"
            }
          },
          blocks: {
            addDialogForm: {
              type: "form",
              resource: "resource-demo-list",
              ctx: "edit",
              events: {
                submit:
                  "@validate @create demoListView.init @demoListAddDialog.hide @clear"
              },
              actions: {
                clear: function() {
                  // 清空表单数据
                  this.data = {};
                }
              }
            }
          }
        },
        demoFormEditAll: {
          ctx: "edit",
          type: "form",
          resource: "resource-demo-form",
          style: {
            width: "50%"
          },
          events: {
            init: "@read",
            submit: "@validate @confirm:确认提交吗? @update",
            cancel: "@cancel"
          },
          actions: {
            fieldChange: function({ name, value }) {
              if (name === "testSwitch") {
                // this.block.fields.testPassword.props.disabled = !value
              }
            },
            cancel: function() {
              this.$router.back();
            },
            console: function() {
              console.log("@console action", this.data.id);
            }
          },
          fields: {
            text: {
              label: "新文本",
              props: {
                disabled: false
              }
            },
            password: {
              props: {
                disabled: true
              }
            },
            textarea: false
          },
          operations: {
            submit: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            },
            cancel: {
              type: "button",
              label: "取消"
            }
          }
        },
        demoFormViewAll: {
          ctx: "view",
          type: "form",
          resource: "resource-demo-form",
          style: {
            width: "50%"
          },
          events: {
            init: "@read"
          },
          actions: {
            console: function() {
              console.log("@console action", this.data.id);
            }
          }
        },
        errorBlock1: {
          type: "error",
          ctx: "view"
        },
        collapseBlock1: {
          type: "collapse",
          ctx: "view",
          blocks: {
            demoFormEditAll: {
              ctx: "edit",
              type: "form",
              resource: "resource-demo-form",
              style: {
                width: "50%"
              },
              events: {
                init: "@read",
                submit: "@validate @confirm:确认提交吗? @update",
                cancel: "@cancel"
              },
              actions: {
                fieldChange: function({ name, value }) {
                  if (name === "testSwitch") {
                    // this.block.fields.testPassword.props.disabled = !value
                  }
                },
                cancel: function() {
                  this.$router.back();
                },
                console: function() {
                  console.log("@console action", this.data.id);
                }
              },
              fields: {
                text: {
                  label: "新文本",
                  props: {
                    disabled: false
                  }
                },
                password: {
                  props: {
                    disabled: true
                  }
                },
                textarea: false
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交",
                  props: {
                    type: "primary"
                  }
                },
                cancel: {
                  type: "button",
                  label: "取消"
                }
              }
            },
            demoFormViewAll: {
              ctx: "view",
              type: "form",
              resource: "resource-demo-form",
              style: {
                width: "50%"
              },
              events: {
                init: "@read"
              },
              actions: {
                console: function() {
                  console.log("@console action", this.data.id);
                }
              }
            }
          },
          data: {
            active: "demoFormEditAll"
          },
          operations: {
            button: {
              type: "button",
              label: "按钮1"
            }
          },
          options: {
            demoFormEditAll: "表单编辑",
            demoFormViewAll: "表单查看"
          }
        },
        tableBlock1: {
          type: "table",
          ctx: "view",
          blocks: {},
          resource: "resource-demo-list"
        },
        echartLineBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            title: "折线图表",
            legend: ["邮件营销", "联盟广告"],
            xAxis: ["周二", "周二", "周二", "周四", "周五", "周六", "周日"],
            series1: [120, 132, 101, 134, 90, 230, 210]
          },
          options: {
            BASE: "LINE",
            series: [
              {
                name: "邮件营销",
                stack: "总量",
                data: "data.series1"
              },
              {
                name: "联盟广告",
                stack: "总量",
                data: [220, 182, 191, 234, 290, 330, 310]
              }
            ]
          },
          events: {}
        },
        echartBarBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            legend: ["邮件营销", "联盟广告"],
            xAxis: ["周二", "周二", "周二", "周四", "周五", "周六", "周日"],
            series1: [120, 132, 101, 134, 90, 230, 210],
            series2: [220, 182, 191, 234, 290, 330, 310]
          },
          options: {
            BASE: "BAR",
            series: [
              {
                name: "邮件营销",
                data: "data.series1"
              },
              {
                name: "联盟广告",
                data: "data.series2"
              }
            ]
          },
          events: {}
        },
        echartPieBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            legend: [
              "直接访问",
              "邮件营销",
              "联盟广告",
              "视频广告",
              "搜索引擎"
            ],
            xAxis: ["周二", "周二", "周二", "周四", "周五", "周六", "周日"],
            series: [
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 310,
                name: "邮件营销"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 135,
                name: "视频广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
              }
            ]
          },
          options: {
            BASE: "PIE",
            series: [
              {
                name: "访问来源",
                type: "pie",
                radius: ["50%", "70%"],
                data: "data.series"
              }
            ]
          }
        },
        echartFunnelBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            legend: ["展现", "点击", "访问", "咨询", "订单"],
            series: [
              {
                value: 60,
                name: "访问"
              },
              {
                value: 40,
                name: "咨询"
              },
              {
                value: 20,
                name: "订单"
              },
              {
                value: 80,
                name: "点击"
              },
              {
                value: 100,
                name: "展现"
              }
            ]
          },
          options: {
            BASE: "FUNNEL",
            series: [
              {
                name: "漏斗图",
                type: "funnel",
                data: "data.series"
              }
            ]
          }
        },
        echartScatterBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            scatterData: [
              [
                [28604, 77, 17096869, "Australia", 1990],
                [31163, 77.4, 27662440, "Canada", 1990],
                [1516, 68, 1154605773, "China", 1990],
                [13670, 74.7, 10582082, "Cuba", 1990],
                [28599, 75, 4986705, "Finland", 1990],
                [29476, 77.1, 56943299, "France", 1990],
                [31476, 75.4, 78958237, "Germany", 1990],
                [28666, 78.1, 254830, "Iceland", 1990],
                [1777, 57.7, 870601776, "India", 1990],
                [29550, 79.1, 122249285, "Japan", 1990],
                [2076, 67.9, 20194354, "North Korea", 1990],
                [12087, 72, 42972254, "South Korea", 1990],
                [24021, 75.4, 3397534, "New Zealand", 1990],
                [43296, 76.8, 4240375, "Norway", 1990],
                [10088, 70.8, 38195258, "Poland", 1990],
                [19349, 69.6, 147568552, "Russia", 1990],
                [10670, 67.3, 53994605, "Turkey", 1990],
                [26424, 75.7, 57110117, "United Kingdom", 1990],
                [37062, 75.4, 252847810, "United States", 1990]
              ],
              [
                [44056, 81.8, 23968973, "Australia", 2015],
                [43294, 81.7, 35939927, "Canada", 2015],
                [13334, 76.9, 1376048943, "China", 2015],
                [21291, 78.5, 11389562, "Cuba", 2015],
                [38923, 80.8, 5503457, "Finland", 2015],
                [37599, 81.9, 64395345, "France", 2015],
                [44053, 81.1, 80688545, "Germany", 2015],
                [42182, 82.8, 329425, "Iceland", 2015],
                [5903, 66.8, 1311050527, "India", 2015],
                [36162, 83.5, 126573481, "Japan", 2015],
                [1390, 71.4, 25155317, "North Korea", 2015],
                [34644, 80.7, 50293439, "South Korea", 2015],
                [34186, 80.6, 4528526, "New Zealand", 2015],
                [64304, 81.6, 5210967, "Norway", 2015],
                [24787, 77.3, 38611794, "Poland", 2015],
                [23038, 73.13, 143456918, "Russia", 2015],
                [19360, 76.5, 78665830, "Turkey", 2015],
                [38225, 81.4, 64715810, "United Kingdom", 2015],
                [53354, 79.1, 321773631, "United States", 2015]
              ]
            ],
            legend: ["1990", "2015"]
          },
          options: {
            BASE: "SCATTER",
            series: [
              {
                type: "scatter",
                name: "1990",
                data: "data.scatterData[0]",
                symbolSize: function(data) {
                  return Math.sqrt(data[2]) / 5e2;
                }
              },
              {
                type: "scatter",
                name: "2015",
                data: "data.scatterData[1]",
                symbolSize: function(data) {
                  return Math.sqrt(data[2]) / 5e2;
                }
              }
            ]
          }
        },
        echartRadarBlock: {
          type: "chart",
          style: {
            width: "100%",
            height: "500px"
          },
          data: {
            legend: [
              "预算分配（Allocated Budget）",
              "实际开销（Actual Spending）"
            ],
            series: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配（Allocated Budget）"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销（Actual Spending）"
              }
            ],
            indicator: [
              {
                name: "销售（sales）",
                max: 6500
              },
              {
                name: "管理（Administration）",
                max: 16000
              },
              {
                name: "信息技术（Information Techology）",
                max: 30000
              },
              {
                name: "客服（Customer Support）",
                max: 38000
              },
              {
                name: "研发（Development）",
                max: 52000
              },
              {
                name: "市场（Marketing）",
                max: 25000
              }
            ]
          },
          options: {
            BASE: "RADAR",
            radar: {
              indicator: "data.indicator"
            },
            series: [
              {
                type: "radar",
                name: "预算 vs 开销（Budget vs spending）",
                data: "data.series"
              }
            ]
          }
        },
        scheduleBlock: {
          type: "calendar",
          ctx: "view",
          resource: "resource-calendar",
          data: {
            searchs: {
              year: "",
              month: ""
            },
            year: 2019,
            month: 0,
            content: {}
          },
          options: {
            title: "活动日历看板",
            draggable: true
          },
          searchs: {
            year: true,
            month: true
          },
          on: {
            end: function(obj) {
              console.log(
                "from:",
                obj.from.dataset.date,
                obj.from.dataset.time,
                obj.oldIndex
              );
              console.log(
                "to:",
                obj.to.dataset.date,
                obj.to.dataset.time,
                obj.newIndex
              );
            },
            "cell-click": function(index, id, date, time) {
              console.log("click", index, id, date, time);
            }
          },
          events: {
            init: "@fieldChange",
            getList: "@getList"
          },
          actions: {
            fieldChange: function({ name, value }) {
              console.log(name, value);
              const data = this.block.data;
              if (name) {
                data.searchs[name] = value;
              }
              const args = {};
              this.callAction(this.block.events.getList, args);
            },
            getList: function(args) {
              if (this.block.options.draggable) {
                // 拖拽
                this.block.data.content = {
                  1546272000000: {
                    10: [
                      {
                        html: `&lt;div&gt;测试数据1&lt;/div&gt;`,
                        id: 1
                      },
                      {
                        html: `&lt;div&gt;测试数据2&lt;/div&gt;`,
                        id: 2
                      }
                    ],
                    20: [
                      {
                        html: `&lt;div&gt;测试数据3&lt;/div&gt;`,
                        id: 3
                      }
                    ]
                  },
                  1546876800000: {
                    10: [
                      {
                        html: `&lt;div&gt;测试数据4&lt;/div&gt;`,
                        id: 4
                      }
                    ],
                    20: [
                      {
                        html: `&lt;div&gt;测试数据5&lt;/div&gt;`,
                        id: 5
                      }
                    ]
                  }
                };
              } else {
                // 不可拖拽
                this.block.data.content = {
                  1546272000000: {
                    10: [
                      `&lt;div&gt;测试数据1&lt;/div&gt;`,
                      `&lt;div&gt;测试数据2&lt;/div&gt;`
                    ],
                    20: [`&lt;div&gt;测试数据3&lt;/div&gt;`]
                  },
                  1546876800000: {
                    10: [`&lt;div&gt;测试数据4&lt;/div&gt;`],
                    20: [`&lt;div&gt;测试数据5&lt;/div&gt;`]
                  }
                };
              }
            }
          }
        },
        editorEdit: {
          type: "form",
          resource: "resource-editor",
          ctx: "edit",
          events: {
            init: "@read"
          },
          fields: {
            testMarkdown: false,
            tags: false,
            Cascader: false
          },
          operations: {
            update: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            }
          }
        },
        markdownEdit: {
          type: "form",
          resource: "resource-editor",
          ctx: "edit",
          events: {
            init: "@read"
          },
          fields: {
            testEditor: false,
            tags: false
          },
          operations: {
            update: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            }
          },
          blocks: {}
        },
        componentBlock1: {
          type: "component",
          ctx: "view",
          blocks: {
            editDate: {
              data: {
                time: "11:00",
                timepicker: 1548404069000,
                timerange: "1548413724000,1548417324000",
                year: 1420041600000,
                month: "2019-06-01",
                date: 1546272000000,
                week: 1546272000000,
                datetime: 1546272000000,
                datetimeWithFormat: 1546272000000,
                datetimerange: "1547568120000,1551290400000",
                daterange: "1548259200000,1551110400000",
                dates: "1546963200000,1547568000000,1548086400000,1548172800000"
              },
              type: "form",
              resource: "date",
              ctx: "edit",
              style: {
                width: "50%"
              },
              events: {
                submit: "@create"
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交"
                }
              }
            },
            viewDate: {
              data: {
                time: "11:00",
                timepicker: 1548404069000,
                timerange: "1548413724000,1548417324000",
                year: 1420041600000,
                month: "2019-06-01",
                date: 1546272000000,
                week: 1546272000000,
                datetime: 1546272000000,
                datetimeWithFormat: 1546272000000,
                datetimerange: "1547568120000,1551290400000",
                daterange: "1548259200000,1551110400000",
                dates: "1546963200000,1547568000000,1548086400000,1548172800000"
              },
              type: "form",
              resource: "date",
              ctx: "view",
              style: {
                width: "50%"
              },
              events: {
                submit: "@create"
              }
            }
          }
        },
        componentBlock2: {
          type: "component",
          ctx: "view",
          blocks: {
            unitselectEdit: {
              type: "form",
              resource: "unitselect",
              ctx: "edit",
              data: {
                money: 123918241234,
                meter: "222毫米"
              },
              operations: {
                update: {
                  type: "button",
                  label: "提交",
                  props: {
                    type: "primary"
                  }
                }
              }
            },
            unitselectView: {
              type: "form",
              ctx: "view",
              resource: "unitselect",
              data: {
                money: 123918241234,
                meter: "222毫米"
              }
            }
          }
        },
        selectBlock: {
          data: {
            selectView: "aaaa.bbb",
            selectEdit: "aaaa.bbb",
            singleSelectEdit: "aaaa.bbb",
            singleSelectView: "aaaa.bbb"
          },
          type: "form",
          resource: "select",
          ctx: "edit",
          events: {
            submit: "@create"
          },
          operations: {
            submit: {
              type: "button",
              label: "提交"
            }
          }
        },
        componentBlock3: {
          type: "component",
          ctx: "view",
          blocks: {
            arrayEdit: {
              type: "form",
              resource: "arrayObject",
              ctx: "edit",
              events: {
                init: "@read",
                submit: "@validate @create"
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交"
                }
              }
            },
            arrayList: {
              type: "list",
              resource: "arrayObject",
              ctx: "view",
              events: {
                init: "@list"
              }
            }
          }
        },
        dynamicBlock: {
          type: "form",
          operations: {
            addBlock: {
              type: "button",
              label: "动态增加block"
            }
          },
          blocks: {
            run1: {
              type: "error"
            }
          },
          actions: {
            addBlock: function() {
              let currentId;
              if (window.currentId) {
                currentId = window.currentId;
              } else {
                window.currentId = 0;
                currentId = 0;
              }
              const blockId = `run${++currentId}`;
              ams.block(blockId, {
                type: "error"
              });
              this.block.blocks.push(blockId);
            }
          }
        },
        componentBlock4: {
          type: "component",
          ctx: "view",
          blocks: {
            editGetSetView: {
              data: {
                datetime: "date:1546278503030"
              },
              type: "form",
              resource: "getSetView",
              ctx: "edit",
              style: {
                width: "50%"
              },
              actions: {
                submit: function() {}
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交"
                }
              }
            },
            viewGetSetView: {
              data: {
                datetime: "date:1546278503030"
              },
              type: "form",
              resource: "getSetView",
              ctx: "view",
              style: {
                width: "50%"
              },
              events: {
                submit: "@create"
              }
            }
          }
        },
        componentBlock5: {
          type: "component",
          ctx: "view",
          blocks: {
            emptyCardBlock: {
              type: "card",
              style: {
                width: "600px",
                margin: "20px auto 0"
              },
              blocks: {
                emptyCardText: {
                  type: "component",
                  options: {
                    is: "div",
                    text: "自定义内容"
                  }
                }
              }
            },
            textHeaderCardBlock: {
              type: "card",
              style: {
                width: "600px",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "自定义标题"
              },
              blocks: {
                textHeaderCardText: {
                  type: "component",
                  options: {
                    is: "div",
                    text: "自定义内容"
                  }
                }
              }
            },
            scheduleBlock: {
              type: "card",
              style: {
                width: "600px",
                margin: "20px auto"
              },
              resource: "resource-card",
              operations: {
                submit: {
                  type: "button",
                  label: "库存预警",
                  props: {
                    type: "mini"
                  }
                }
              },
              blocks: {
                scheduleTitle: {
                  slot: "header",
                  type: "component",
                  options: {
                    is: "div"
                  },
                  style: {
                    width: "40px",
                    height: "40px",
                    lineHeight: "40px",
                    float: "left"
                  },
                  operations: {
                    text: {
                      type: "button",
                      label: "部类货品",
                      props: {
                        type: "mini"
                      }
                    }
                  }
                },
                scheduleContent: {
                  type: "chart",
                  style: {
                    width: "480px",
                    height: "480px",
                    margin: "20px auto 0"
                  },
                  resource: "ecahrtRes",
                  data: {
                    legend: [
                      "直接访问",
                      "邮件营销",
                      "联盟广告",
                      "视频广告",
                      "搜索引擎"
                    ],
                    xAxis: [
                      "周二",
                      "周二",
                      "周二",
                      "周四",
                      "周五",
                      "周六",
                      "周日"
                    ],
                    series: [
                      {
                        value: 335,
                        name: "直接访问"
                      },
                      {
                        value: 310,
                        name: "邮件营销"
                      },
                      {
                        value: 234,
                        name: "联盟广告"
                      },
                      {
                        value: 135,
                        name: "视频广告"
                      },
                      {
                        value: 1548,
                        name: "搜索引擎"
                      }
                    ]
                  },
                  options: {
                    BASE: "PIE",
                    series: [
                      {
                        name: "访问来源",
                        type: "pie",
                        radius: ["50%", "70%"],
                        data: "data.series"
                      }
                    ]
                  },
                  events: {
                    init: "@read"
                  }
                }
              }
            }
          }
        },
        tagEdit: {
          type: "form",
          resource: "resource-editor",
          ctx: "edit",
          fields: {
            testEditor: false,
            testMarkdown: false,
            Cascader: false
          }
        },
        demoLogin: {
          resource: "resource-demo-login",
          type: "form",
          ctx: "edit",
          style: {
            width: "50%",
            marginLeft: "25%",
            paddingTop: "25%"
          },
          events: {
            login: "@validate @goLogin @routerReplace:/"
          },
          operations: {
            login: {
              type: "button",
              label: "登录"
            }
          },
          actions: {
            goLogin: async function() {
              const res = await this.$ams.request({
                url: `${this.resource.api.prefix}login`,
                method: "post",
                data: this.data
              });
              if (res.data.code === 0) {
                this.$message.success("登录成功");
              }
            }
          }
        },
        componentBlock6: {
          type: "component",
          ctx: "view",
          blocks: {
            editImage: {
              type: "form",
              resource: "image",
              ctx: "edit",
              style: {
                width: "50%"
              },
              events: {
                submit: "@validate @create"
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交"
                }
              }
            },
            viewImage: {
              type: "form",
              resource: "image",
              ctx: "view",
              style: {
                width: "50%"
              }
            }
          }
        },
        componentBlock7: {
          type: "component",
          ctx: "view",
          blocks: {
            titles: {
              type: "title",
              style: {
                width: "200px",
                height: "50px",
                margin: "20px auto"
              },
              options: {
                title: "标题文本标题文本"
              }
            },
            subTitle: {
              type: "title",
              style: {
                width: "200px",
                height: "50px",
                margin: "20px auto"
              },
              options: {
                title: "标题文本标题文本",
                subTitle: "副标题"
              }
            }
          }
        },
        stepsBlock: {
          type: "steps",
          data: {
            active: 0
          },
          style: {
            width: "80%",
            margin: "100px auto"
          },
          options: {
            step1: "step1",
            step2: "step2",
            step3: "step3"
          },
          blocks: {
            step1: {
              type: "component",
              options: {
                is: "div",
                text: "我是step1的内容"
              },
              style: {
                padding: "100px"
              }
            },
            step2: {
              type: "component",
              options: {
                is: "div",
                text: "我是step2的内容"
              },
              style: {
                padding: "100px"
              }
            },
            step3: {
              type: "component",
              options: {
                is: "div",
                text: "我是step3的内容"
              },
              style: {
                padding: "100px"
              }
            }
          },
          operations: {
            next: {
              type: "button",
              label: "下一步",
              props: {
                type: "primary"
              }
            }
          },
          actions: {
            next: function() {
              let next = (this.block.data.active = this.block.data.active + 1);
              if (next >= Object.keys(this.block.blocks).length) {
                this.block.data.active = 0;
                next = 0;
              }
              this.setBlockData({
                active: next
              });
            }
          }
        },
        cascaderBlock: {
          resource: "resource-editor",
          data: {
            Cascader: "1,1,1"
          },
          ctx: "edit",
          type: "form",
          fields: {
            testEditor: false,
            testMarkdown: false,
            Cascader: false
          },
          events: {
            init: "@getCascader"
          },
          actions: {
            getCascader: async function() {
              let fields = this.fields.Cascader;
              if (!fields.props.init) {
                const ams = window.ams;
                const successCode = this.getConfig("resource.api.successCode");
                const res = await ams.request({
                  url:
                    "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/department",
                  method: "get"
                });
                if (res.data.code === successCode) {
                  fields.props.options = res.data.data.list;
                  fields.props.init = true;
                }
              }
            }
          },
          operations: {
            submit: {
              type: "button",
              label: "提交"
            }
          }
        }
      }
    }
  },
  config: {
    materiels: {
      "field-editor": {
        version: "0.2.2",
        cdn: [
          "https://h5rsc.vipstatic.com/ams/vue-quill-editor@3.0.6/quill/quill.min.js",
          "https://h5rsc.vipstatic.com/ams/vue-quill-editor@3.0.6/dist/vue-quill-editor.js",
          "https://h5rsc.vipstatic.com/ams/fields/field-editor@0.2.2.js"
        ]
      },
      "field-markdown": {
        version: "0.2.3",
        cdn: [
          "https://h5rsc.vipstatic.com/ams/mavon-editor@2.6.17/dist/mavon-editor.js",
          "https://h5rsc.vipstatic.com/ams/fields/field-markdown@0.2.3.js"
        ]
      },
      "field-tag": {
        version: "1.2.0",
        cdn: ["https://h5rsc.vipstatic.com/ams/fields/field-tag@1.2.0.js"]
      },
      "block-chart": {
        version: "0.1.3",
        cdn: [
          "https://h5rsc.vipstatic.com/ams/echarts@4.2.1/dist/echarts.min.js",
          "https://h5rsc.vipstatic.com/ams/block/block-chart@0.1.3.js"
        ]
      },
      "block-calendar": {
        version: "1.0.5",
        cdn: ["https://h5rsc.vipstatic.com/ams/block/block-calendar@1.0.5.js"]
      }
    }
  }
};

ams.block("base", config);
