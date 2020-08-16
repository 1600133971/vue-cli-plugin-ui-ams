import ams from "@ams-team/ams";

const config = {
  resources: {
    demoResource: {
      api: {
        contentType: "form",
        prefix: "https://www.yournana.club/vipshop/ams-page-demo/",
        //prefix: "/api/",
        read: "read",
        update: "update",
        list: "getList",
        delete: "delete",
        create: "create"
      },
      fields: {
        id: {
          type: "text",
          label: "id",
          ctx: "view"
        },
        title: {
          type: "text",
          label: "标题"
        },
        content: {
          type: "textarea",
          label: "内容"
        },
        create_time: {
          type: "datetime",
          label: "创建时间",
          ctx: "view"
        },
        update_time: {
          type: "datetime",
          label: "更新时间",
          ctx: "view"
        }
      }
    }
  },
  blocks: {
    demoBlockRouter: {
      type: "router",
      ctx: "view",
      router: {
        defaultBreadcrumb: false,
        routes: [
          {
            path: "",
            name: "首页",
            meta: {
              hasMenu: true,
              hidden: false,
              noRedirect: false
            },
            block: "demoBlockList4"
          }
        ]
      },
      blocks: {
        demoBlockList4: {
          pageSize: 20,
          type: "list",
          ctx: "view",
          resource: "demoResource",
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @deleteAction @delete init",
            editItem: "@adminEditDialog.show",
            addItem: "@adminAddDialog.show"
          },
          actions: {
            deleteAction: function(e) {
              var t = e.id;
              console.log("删除id：", t);
            }
          },
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
        adminEditDialog: {
          type: "dialog",
          data: {
            title: "编辑",
            visible: false
          },
          events: {
            submit: "editDialogForm.submit"
          },
          style: {
            zIndex: 10,
            margin: "5% 5% 5% 15%"
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
              resource: "demoResource",
              ctx: "edit",
              events: {
                init: "@read",
                submit:
                  "@validate @update adminListView.init @adminEditDialog.hide"
              }
            }
          }
        },
        adminAddDialog: {
          type: "dialog",
          data: {
            title: "添加",
            visible: false
          },
          events: {
            submit: "addDialogForm.submit"
          },
          style: {
            margin: "5% 5% 5% 15%"
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
              fields: {
                id: false,
                create_time: false,
                update_time: false
              },
              resource: "demoResource",
              ctx: "edit",
              events: {
                submit:
                  "@validate @create adminListView.init @adminAddDialog.hide @clear"
              },
              actions: {
                clear: function() {
                  this.data = {};
                }
              }
            }
          }
        }
      }
    }
  }
};

ams.block("list", config);
