import ams from "@ams-team/ams";

const config = {
  resources: {
    demo: {
      api: {
        prefix: "http://xxx.vip.com/ams/material/",
        read: "GetInfo",
        list: "getList",
        withCredentials: true,
        contentType: "json",
        successCode: 0
      },
      fields: {
        title: {
          type: "text",
          label: "案件名称"
        },
        code: {
          type: "text",
          label: "案件编号"
        },
        type: {
          type: "select",
          label: "案件类别",
          props: {
            multiple: false,
            options: {
              a: "知识产权",
              b: "劳动纠纷",
              c: "交通事故",
              d: "其它"
            }
          }
        },
        people: {
          type: "text",
          label: "立案人"
        },
        createTime: {
          type: "date",
          label: "立案时间"
        },
        status: {
          type: "radio",
          label: "状态",
          props: {
            options: {
              a: "立即立案",
              b: "延迟立案"
            }
          }
        }
      }
    },
    resource1: {
      api: {
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list",
        contentType: "json",
        successCode: 0,
        withCredentials: true,
        prefix:
          "https://easy-mock.com/mock/5a0023effbbb09615044cb82/government/batch/"
      },
      fields: {
        caseNo: {
          type: "text",
          label: "案号"
        },
        applicant: {
          type: "text",
          label: "申请人"
        },
        executedPerson: {
          type: "text",
          label: "被执行人"
        },
        preContractor: {
          type: "text",
          label: "执预承办人"
        },
        createTime: {
          type: "datetime",
          label: "立案日期"
        }
      }
    },
    resource2: {
      api: {
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list",
        contentType: "json",
        successCode: 0,
        withCredentials: true,
        prefix:
          "https://easy-mock.com/mock/5a0023effbbb09615044cb82/government/batch/"
      },
      fields: {
        caseNo: {
          type: "text",
          label: "案号"
        },
        createTime: {
          type: "datetime",
          label: "立案日期"
        },
        applicant: {
          type: "text",
          label: "申请人"
        },
        executedPerson: {
          type: "text",
          label: "被执行人"
        },
        preContractor: {
          type: "text",
          label: "承办人"
        },
        legalLicense: {
          type: "text",
          label: "法定执照"
        },
        difficultyLevel: {
          type: "text",
          label: "简易/普通"
        },
        remark: {
          type: "text",
          label: "备注"
        }
      }
    },
    resource3: {
      api: {
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list",
        contentType: "json",
        successCode: 0,
        withCredentials: true,
        prefix:
          "https://easy-mock.com/mock/5a0023effbbb09615044cb82/government/selfhelp/"
      },
      fields: {
        caseNo: {
          type: "text",
          label: "案号"
        },
        caseFrom: {
          type: "text",
          label: "案件来源"
        },
        registerPerson: {
          type: "text",
          label: "登记人"
        },
        createTime: {
          type: "datetime",
          label: "收案日期"
        },
        caseStaus: {
          type: "select",
          label: "案件状态",
          props: {
            multiple: false,
            options: {
              a: "申请立案",
              b: "诉前调解"
            }
          }
        }
      }
    }
  },
  blocks: {
    routerBlock1: {
      router: {
        defaultBreadcrumb: true,
        routes: [
          {
            path: "",
            name: "工作台",
            meta: {
              icon: "menu"
            },
            block: "componentBlock4"
          },
          {
            path: "dismantling",
            name: "拆预收案",
            block: "listBlock5",
            meta: {
              icon: "message",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "allocation",
            name: "案款账号分配",
            block: "listBlock4",
            meta: {
              icon: "printer",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "selfhelp",
            name: "当事人自助收案",
            block: "listBlock3",
            meta: {
              icon: "share",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "list",
            name: "在办案件列表",
            block: "listBlock2",
            meta: {
              icon: "tickets",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "batch",
            name: "批量操作",
            block: "listBlock1",
            meta: {
              icon: "document",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "new",
            name: "案件录入",
            block: "formBlock1",
            meta: {
              icon: "edit",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          }
        ]
      },
      blocks: {
        logoBlock: {
          options: {
            is: "div",
            text: "LOGO"
          },
          type: "component",
          slot: "menuTop",
          style: {
            color: "#fff",
            "font-size": "30px",
            "text-align": "center",
            "margin-bottom": "20px",
            "font-family": "Roboto",
            "padding-top": "10px"
          }
        },
        formBlock1: {
          ctx: "edit",
          type: "form",
          resource: "demo",
          operations: {
            submit: {
              type: "button",
              label: "提交",
              props: {
                type: "primary"
              }
            }
          },
          actions: {
            submit: function() {
              alert(
                "这是”提交“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        listBlock1: {
          events: {
            init: "@list"
          },
          type: "list",
          blocks: {
            cardBlock1: {
              blocks: {
                componentBlock1: {
                  options: {
                    is: "div",
                    html:
                      '<div style="margin: 0 40px;display: flex;align-items: center;letter-spacing: 1px;justify-content: space-between;"><div style="color: #666;border: 1px solid #f7f8fa;background-color: #fff;height: 120px;cursor: pointer;padding: 10px;border-radius: 10px;"><h2 style="color: #3080fe;margin: 8px;font-size: 30px;line-height: 30px;"><i class="el-icon-circle-check"></i></h2><h3 style="margin: 8px;font-size: 14px;">批量操作(首次分案)</h3><p style="margin: 8px;font-size: 12px;">说明: 对一批待分案案件进行分案</p></div><div style="color: #666;border: 1px solid #f7f8fa;background-color: #fff;height: 120px;cursor: pointer;padding: 10px;border-radius: 10px;"><h2 style="color: #3080fe;margin: 8px;font-size: 30px;line-height: 30px;"><i class="el-icon-refresh"></i></h2><h3 style="margin: 8px;font-size: 14px;">批量操作(普通阶段分案)</h3><p style="margin: 8px;font-size: 12px;">说明: 对一批待分案案件进行分案</p></div><div style="color: #666;border: 1px solid #f7f8fa;background-color: #fff;height: 120px;cursor: pointer;padding: 10px;border-radius: 10px;"><h2 style="color: #3080fe;margin: 8px;font-size: 30px;line-height: 30px;"><i class="el-icon-upload2"></i></h2><h3 style="margin: 8px;font-size: 14px;">批量申请延期</h3><p style="margin: 8px;font-size: 12px;">说明: 对一批办理案件进行批量申请延期</p></div></div>'
                  },
                  type: "component"
                }
              },
              slot: "top",
              type: "card",
              style: {
                "margin-bottom": "20px"
              }
            }
          },
          resource: "resource1",
          options: {
            multipleSelect: true
          },
          operations: {
            viewtem: {
              type: "button",
              label: "查看",
              props: {
                type: "primary",
                size: "mini"
              }
            }
          },
          actions: {
            editItem: function() {
              alert(
                "这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        listBlock2: {
          events: {
            init: "@list"
          },
          type: "list",
          resource: "resource2",
          operations: {
            viewItem: {
              type: "button",
              label: "办理",
              props: {
                type: "primary",
                size: "mini"
              }
            },
            caseNo: {
              slot: "searchs",
              type: "field",
              field: {
                type: "text"
              },
              label: "案号"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "查询",
              props: {
                type: "primary"
              },
              event: "list:1"
            }
          },
          actions: {
            viewItem: function() {
              alert(
                "这是”办理“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        listBlock3: {
          events: {
            init: "@list"
          },
          type: "list",
          blocks: {
            cardBlock2: {
              blocks: {
                componentBlock2: {
                  options: {
                    is: "div",
                    html:
                      '<div style="margin: 20px; letter-spacing: 1px; display: flex; justify-content: space-between; align-items: flex-start;"><div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><div style="width: 240px; height: 80px; border-radius: 10px; display: flex; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(63, 63, 68, 0.1) 0px 0px 0px 1px; color: rgb(51, 51, 51);"><div style="line-height: 80px; height: 80px; flex: 3 1 0%; text-align: center;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NTYxMzE2NTg5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc3MjYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDQ2NGE0OCA0OCAwIDEgMCAwIDk2IDQ4IDQ4IDAgMCAwIDAtOTZ6IG00NjQgMGgtNTAuOTc2QzkwMy4wMDggMjcyLjY3MiA3NTEuMjk2IDEyMS4xMDQgNTYwIDk5LjA1NlY0OGE0OCA0OCAwIDEgMC05NiAwdjUwLjk3NkMyNzIuNjcyIDEyMC45OTIgMTIxLjA4OCAyNzIuNzA0IDk5LjA1NiA0NjRINDhhNDggNDggMCAxIDAgMCA5Nmg1MC45NzZDMTIwLjk5MiA3NTEuMzI4IDI3Mi43MDQgOTAyLjkxMiA0NjQgOTI0Ljk0NFY5NzZhNDggNDggMCAxIDAgOTYgMHYtNTEuMDU2Qzc1MS4yOTYgOTAyLjkxMiA5MDMuMDA4IDc1MS4zMjggOTI1LjAyNCA1NjBIOTc2YTQ4IDQ4IDAgMSAwIDAtOTZ6IG0tMjQwIDk2aDkyLjAxNkM4MDcuMTY4IDY5OC4yMjQgNjk4LjE0NCA4MDcuMjQ4IDU2MCA4MjguMTEyVjczNmE0OCA0OCAwIDEgMC05NiAwdjkyLjA5NkMzMjUuODU2IDgwNy4yNDggMjE2LjgzMiA2OTguMjI0IDE5NS45ODQgNTYwSDI4OGE0OCA0OCAwIDEgMCAwLTk2aC05Mi4wOTZDMjE2Ljc1MiAzMjUuODU2IDMyNS43OTIgMjE2LjgzMiA0NjQgMTk1Ljk4NFYyODhhNDggNDggMCAxIDAgOTYgMHYtOTIuMDk2QzY5OC4xNDQgMjE2Ljc1MiA4MDcuMTY4IDMyNS43OTIgODI4LjAxNiA0NjRINzM2YTQ4IDQ4IDAgMSAwIDAgOTZ6IiBmaWxsPSIjMWRjN2VhIiBwLWlkPSI3NzI3Ij48L3BhdGg+PC9zdmc+" alt="" style="width: 30px; height: 30px; vertical-align: middle;"></div><div style="text-align: right; font-size: 28px; padding: 10px 10px 10px 0px; height: 80px; flex: 7 1 0%;"><h3 style="font-size: 12px; text-align: right; margin: 0px;">预检后收案登记</h3><span>12</span></div></div><p style="text-align: center; font-size: 12px; width: 240px;margin-top: 12px;line-height: 20px;">说明: 对材料预检登记案件进行收案登记</p></div><div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><div style="width: 240px; height: 80px; border-radius: 10px; display: flex; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(63, 63, 68, 0.1) 0px 0px 0px 1px; color: rgb(51, 51, 51);"><div style="line-height: 80px; height: 80px; flex: 3 1 0%; text-align: center;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NTYwOTY5OTU1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwNjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjUuNiA4OTZjMTUuMzYgMCAyNS42LTEwLjI0IDI1LjYtMjUuNmwwLTEwMi40YzAtMTUuMzYtMTAuMjQtMjUuNi0yNS42LTI1LjZzLTI1LjYgMTAuMjQtMjUuNiAyNS42bDAgMTAyLjRDMCA4ODUuNzYgMTAuMjQgODk2IDI1LjYgODk2eiIgcC1pZD0iMzA2MSIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjxwYXRoIGQ9Ik0yNS42IDM4NGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42bDAtMTAyLjRjMC0xNS4zNi0xMC4yNC0yNS42LTI1LjYtMjUuNnMtMjUuNiAxMC4yNC0yNS42IDI1LjZsMCAxMDIuNEMwIDM3My43NiAxMC4yNCAzODQgMjUuNiAzODR6IiBwLWlkPSIzMDYyIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTEwMi40IDk3Mi44IDAgOTcyLjhsMCA1MS4yIDEwMi40IDBjMTUuMzYgMCAyNS42LTEwLjI0IDI1LjYtMjUuNlMxMTcuNzYgOTcyLjggMTAyLjQgOTcyLjh6IiBwLWlkPSIzMDYzIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTQwOS42IDUxLjJsMTAyLjQgMGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42IDAtMTUuMzYtMTAuMjQtMjUuNi0yNS42LTI1LjZsLTEwMi40IDBjLTE1LjM2IDAtMjUuNiAxMC4yNC0yNS42IDI1LjZDMzg0IDQwLjk2IDM5NC4yNCA1MS4yIDQwOS42IDUxLjJ6IiBwLWlkPSIzMDY0IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTY2NS42IDUxLjJsMTAyLjQgMGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42IDAtMTUuMzYtMTAuMjQtMjUuNi0yNS42LTI1LjZsLTEwMi40IDBjLTE1LjM2IDAtMjUuNiAxMC4yNC0yNS42IDI1LjZDNjQwIDQwLjk2IDY1MC4yNCA1MS4yIDY2NS42IDUxLjJ6IiBwLWlkPSIzMDY1IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTI1LjYgMTI4YzE1LjM2IDAgMjUuNi0xMC4yNCAyNS42LTI1LjZMNTEuMiAwIDAgMGwwIDEwMi40QzAgMTE3Ljc2IDEwLjI0IDEyOCAyNS42IDEyOHoiIHAtaWQ9IjMwNjYiIGZpbGw9IiMxZGM3ZWEiPjwvcGF0aD48cGF0aCBkPSJNMjgxLjYgMjUuNmMwLTE1LjM2LTEwLjI0LTI1LjYtMjUuNi0yNS42TDE1My42IDBDMTM4LjI0IDAgMTI4IDEwLjI0IDEyOCAyNS42YzAgMTUuMzYgMTAuMjQgMjUuNiAyNS42IDI1LjZsMTAyLjQgMEMyNzEuMzYgNTEuMiAyODEuNiA0MC45NiAyODEuNiAyNS42eiIgcC1pZD0iMzA2NyIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjxwYXRoIGQ9Ik0yNS42IDY0MGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42bDAtMTAyLjRjMC0xNS4zNi0xMC4yNC0yNS42LTI1LjYtMjUuNnMtMjUuNiAxMC4yNC0yNS42IDI1LjZsMCAxMDIuNEMwIDYyOS43NiAxMC4yNCA2NDAgMjUuNiA2NDB6IiBwLWlkPSIzMDY4IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTM1OC40IDk3Mi44bC0xMDIuNCAwYy0xNS4zNiAwLTI1LjYgMTAuMjQtMjUuNiAyNS42czEwLjI0IDI1LjYgMjUuNiAyNS42bDEwMi40IDBjMTUuMzYgMCAyNS42LTEwLjI0IDI1LjYtMjUuNlMzNzMuNzYgOTcyLjggMzU4LjQgOTcyLjh6IiBwLWlkPSIzMDY5IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTk5OC40IDY0MGMtMTUuMzYgMC0yNS42IDEwLjI0LTI1LjYgMjUuNmwwIDEwMi40YzAgMTUuMzYgMTAuMjQgMjUuNiAyNS42IDI1LjZzMjUuNi0xMC4yNCAyNS42LTI1LjZsMC0xMDIuNEMxMDI0IDY1MC4yNCAxMDEzLjc2IDY0MCA5OTguNCA2NDB6IiBwLWlkPSIzMDcwIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTk5OC40IDM4NGMtMTUuMzYgMC0yNS42IDEwLjI0LTI1LjYgMjUuNmwwIDEwMi40YzAgMTUuMzYgMTAuMjQgMjUuNiAyNS42IDI1LjZzMjUuNi0xMC4yNCAyNS42LTI1LjZsMC0xMDIuNEMxMDI0IDM5NC4yNCAxMDEzLjc2IDM4NCA5OTguNCAzODR6IiBwLWlkPSIzMDcxIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTkyMS42IDBjLTE1LjM2IDAtMjUuNiAxMC4yNC0yNS42IDI1LjYgMCAxNS4zNiAxMC4yNCAyNS42IDI1LjYgMjUuNmwxMDIuNCAwTDEwMjQgMCA5MjEuNiAweiIgcC1pZD0iMzA3MiIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjxwYXRoIGQ9Ik05OTguNCAxMjhjLTE1LjM2IDAtMjUuNiAxMC4yNC0yNS42IDI1LjZsMCAxMDIuNGMwIDE1LjM2IDEwLjI0IDI1LjYgMjUuNiAyNS42czI1LjYtMTAuMjQgMjUuNi0yNS42TDEwMjQgMTUzLjZDMTAyNCAxMzguMjQgMTAxMy43NiAxMjggOTk4LjQgMTI4eiIgcC1pZD0iMzA3MyIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjxwYXRoIGQ9Ik05OTguNCA4OTZjLTE1LjM2IDAtMjUuNiAxMC4yNC0yNS42IDI1LjZsMCAxMDIuNCA1MS4yIDAgMC0xMDIuNEMxMDI0IDkwNi4yNCAxMDEzLjc2IDg5NiA5OTguNCA4OTZ6IiBwLWlkPSIzMDc0IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTg3MC40IDk3Mi44bC0xMDIuNCAwYy0xNS4zNiAwLTI1LjYgMTAuMjQtMjUuNiAyNS42czEwLjI0IDI1LjYgMjUuNiAyNS42bDEwMi40IDBjMTUuMzYgMCAyNS42LTEwLjI0IDI1LjYtMjUuNlM4ODUuNzYgOTcyLjggODcwLjQgOTcyLjh6IiBwLWlkPSIzMDc1IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTYxNC40IDk3Mi44bC0xMDIuNCAwYy0xNS4zNiAwLTI1LjYgMTAuMjQtMjUuNiAyNS42czEwLjI0IDI1LjYgMjUuNiAyNS42bDEwMi40IDBjMTUuMzYgMCAyNS42LTEwLjI0IDI1LjYtMjUuNlM2MjkuNzYgOTcyLjggNjE0LjQgOTcyLjh6IiBwLWlkPSIzMDc2IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTUxMiA3OTMuNmMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42bDAtMjMwLjQgMjMwLjQgMGMxNS4zNiAwIDI1LjYtMTAuMjQgMjUuNi0yNS42cy0xMC4yNC0yNS42LTI1LjYtMjUuNmwtMjMwLjQgMCAwLTIzMC40YzAtMTUuMzYtMTAuMjQtMjUuNi0yNS42LTI1LjZzLTI1LjYgMTAuMjQtMjUuNiAyNS42bDAgMjMwLjQtMjMwLjQgMGMtMTUuMzYgMC0yNS42IDEwLjI0LTI1LjYgMjUuNnMxMC4yNCAyNS42IDI1LjYgMjUuNmwyMzAuNCAwIDAgMjMwLjRDNDg2LjQgNzgzLjM2IDQ5Ni42NCA3OTMuNiA1MTIgNzkzLjZ6IiBwLWlkPSIzMDc3IiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PC9zdmc+" alt="" style="width: 30px; height: 30px; vertical-align: middle;"></div><div style="text-align: right; font-size: 28px; padding: 10px 10px 10px 0px; height: 80px; flex: 7 1 0%;"><h3 style="font-size: 12px; text-align: right; margin: 0px;">已收案待当事人补全信息</h3><span>3</span></div></div><p style="text-align: center; font-size: 12px; width: 240px;margin-top: 12px;line-height: 20px;">说明: 对当事人正在登记案件进行查询</p></div><div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><div style="width: 240px; height: 80px; border-radius: 10px; display: flex; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(63, 63, 68, 0.1) 0px 0px 0px 1px; color: rgb(51, 51, 51);"><div style="line-height: 80px; height: 80px; flex: 3 1 0%; text-align: center;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NTYxMDg0NzcyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcwMDkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDA4IDEwMi40bDM4MS4zMTIgMGMxOS4yIDAgMzQuNjg4IDE1LjI5NiAzNC42ODggMzQuMTEybDAgNzUwLjk3NmMwIDE4Ljg4LTE1LjQ4OCAzNC4xMTItMzQuNjg4IDM0LjExMkwyMzQuNjg4IDkyMS42Yy0xOS4yIDAtMzQuNjg4LTE1LjIzMi0zNC42ODgtMzQuMTEyTDIwMCAzMDcuMmwyMDggMEw0MDggMTAyLjR6TTk2IDI3My4wODhsMCA2ODIuNjg4Qzk2IDk5My40NzIgMTI3LjA0IDEwMjQgMTY1LjMxMiAxMDI0bDY5My4zNzYgMGMzOC4yNzIgMCA2OS4zMTItMzAuNTI4IDY5LjMxMi02OC4yMjRMOTI4IDY4LjI4OEM5MjggMzAuNTI4IDg5Ni45NiAwIDg1OC42ODggMEwzNzMuMzc2IDAgOTYgMjczLjA4OHpNNDQyLjY4OCA3ODUuMTUybDEzOC42MjQgMCAwLTEzNi42NCAxMTQuODggMEw1MTIuMjU2IDQ2Ny42NDhsLTE4Mi42NTYgMTgwLjg2NCAxMTMuMTUyIDBMNDQyLjc1MiA3ODUuMTUyeiIgcC1pZD0iNzAxMCIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjwvc3ZnPg==" alt="" style="width: 30px; height: 30px; vertical-align: middle;"></div><div style="text-align: right; font-size: 28px; padding: 10px 10px 10px 0px; height: 80px; flex: 7 1 0%;"><h3 style="font-size: 12px; text-align: right; margin: 0px;">当事人已提交待确认</h3><span>1</span></div></div><p style="text-align: center; font-size: 12px; width: 240px;margin-top: 12px;line-height: 20px;">说明: 对当事人完成的执行案件进行登记</p></div><div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><div style="width: 240px; height: 80px; border-radius: 10px; display: flex; overflow: hidden; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px, rgba(63, 63, 68, 0.1) 0px 0px 0px 1px; color: rgb(51, 51, 51);"><div style="line-height: 80px; height: 80px; flex: 3 1 0%; text-align: center;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NTYxMDA2NTc1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNjgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjU2IDE2MGwtMTkyIDBjLTM1LjM5MiAwLTY0IDI4LjY3Mi02NCA2NGwwIDcwNGMwIDM1LjM2IDI4LjY0IDY0IDY0IDY0bDE5MiAwYzM1LjM2IDAgNjQtMjguNjA4IDY0LTY0bDAtNzA0YzAtMzUuMzI4LTI4LjY0LTY0LTY0LTY0ek05NiA4MDBjLTE3LjY5NiAwLTMyLTE0LjMwNC0zMi0zMnMxNC4zMDQtMzIgMzItMzJjMTcuNjk2IDAgMzIgMTQuMzA0IDMyIDMycy0xNC4zMDQgMzItMzIgMzJ6TTI1NiA0MTZsLTE5MiAwIDAtNjQgMTkyIDAgMCA2NHpNMjU2IDI4OGwtMTkyIDAgMC02NCAxOTIgMCAwIDY0eiIgcC1pZD0iNDM2OSIgZmlsbD0iIzFkYzdlYSI+PC9wYXRoPjxwYXRoIGQ9Ik02NzIgODY0bDAtNjQtMTkyIDAgMCA2NGMtMzUuMzYgMC02NCAyOC42NC02NCA2NGwzMjAgMGMwLTM1LjM5Mi0yOC42MDgtNjQtNjQtNjR6IiBwLWlkPSI0MzcwIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PHBhdGggZD0iTTk2MCAzMmwtNzY4IDBjLTM1LjM2IDAtNjQgMjguNjcyLTY0IDY0bDgzMiAwIDAgNTEyLTU3NiAwIDAgMTI4IDU3NiAwYzM1LjM2IDAgNjQtMjguNjA4IDY0LTY0bDAtNTc2YzAtMzUuMzI4LTI4LjY0LTY0LTY0LTY0ek01NzYgNzA0Yy0xNy42OTYgMC0zMi0xNC4zMDQtMzItMzIgMC0xNy42NjQgMTQuMzA0LTMyIDMyLTMyczMyIDE0LjMwNCAzMiAzMmMwIDE3LjY5Ni0xNC4zMDQgMzItMzIgMzJ6IiBwLWlkPSI0MzcxIiBmaWxsPSIjMWRjN2VhIj48L3BhdGg+PC9zdmc+" alt="" style="width: 30px; height: 30px; vertical-align: middle;"></div><div style="text-align: right; font-size: 28px; padding: 10px 10px 10px 0px; height: 80px; flex: 7 1 0%;"><h3 style="font-size: 12px; text-align: right; margin: 0px;">已确认代办理</h3><span>12</span></div></div><p style="text-align: center; font-size: 12px; width: 240px;margin-top: 12px;line-height: 20px;">说明: 对已确认通过案件进行立案确认</p></div></div>'
                  },
                  type: "component"
                }
              },
              slot: "top",
              type: "card",
              style: {
                "margin-bottom": "20px"
              }
            }
          },
          resource: "resource3",
          operations: {
            caseNo: {
              slot: "searchs",
              type: "field",
              label: "案号"
            },
            createTime: {
              slot: "searchs",
              type: "field",
              field: {
                type: "date"
              },
              label: "立案日期"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "查询",
              props: {
                type: "primary"
              },
              event: "list:1"
            },
            viewItem: {
              type: "button",
              label: "办理",
              props: {
                type: "primary",
                size: "mini"
              }
            }
          },
          actions: {
            viewItem: function() {
              alert(
                "这是”办理“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        listBlock4: {
          events: {
            init: "@list"
          },
          type: "list",
          resource: "resource3",
          operations: {
            caseNo: {
              slot: "searchs",
              type: "field",
              label: "案号"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "查询",
              props: {
                type: "primary"
              },
              event: "list:1"
            },
            viewItem: {
              type: "button",
              label: "分配案号",
              props: {
                size: "mini"
              }
            }
          },
          actions: {
            viewItem: function() {
              alert(
                "这是”办理“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        listBlock5: {
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @delete @list"
          },
          type: "list",
          resource: "resource3",
          operations: {
            caseNo: {
              slot: "searchs",
              type: "field",
              label: "案号"
            },
            createTime: {
              slot: "searchs",
              type: "field",
              field: {
                type: "date"
              },
              label: "立案日期"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "查询",
              props: {
                type: "primary"
              },
              event: "list:1"
            },
            editItem: {
              type: "button",
              label: "编辑",
              props: {
                size: "mini"
              }
            },
            viewItem1: {
              type: "button",
              label: "补正",
              props: {
                size: "mini"
              }
            },
            viewItem2: {
              type: "button",
              label: "材料退回",
              props: {
                size: "mini"
              }
            },
            viewItem3: {
              type: "button",
              label: "申请人主动退回",
              props: {
                size: "mini"
              }
            },
            viewItem4: {
              type: "button",
              label: "发送办理",
              props: {
                size: "mini"
              }
            },
            removeItem: {
              type: "button",
              label: "删除",
              props: {
                type: "danger",
                size: "mini"
              }
            }
          },
          actions: {
            viewItem: function() {
              alert(
                "这是”办理“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            },
            editItem: function() {
              alert(
                "这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
              );
            }
          }
        },
        cardBlock3: {
          blocks: {
            titleBlock1: {
              options: {
                title: "信息窗"
              },
              type: "title",
              slot: "header"
            },
            componentBlock3: {
              options: {
                is: "ul",
                html:
                  '<li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>习近平主持召开中央财经委员会第三次会议</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>17种抗癌药纳入医保支付范围</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>新闻办介绍《乡村振兴战略规划（2018—2022年）》有关情况</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>民生问题无小事——2018年国务院大督查赴部门实地督查盯紧民生痛点督促整改</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-02]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>商务部通报2018年电子商务进农村综合示范工作有关情况</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-02]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>中国国际矿业大会准备就绪</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[02-23]</span></li>'
              },
              type: "component",
              style: {
                padding: "0",
                margin: "0"
              }
            }
          },
          type: "card",
          style: {
            width: "49%"
          }
        },
        componentBlock4: {
          type: "component",
          blocks: {
            cardBlock3: {
              blocks: {
                titleBlock1: {
                  options: {
                    title: "信息窗"
                  },
                  type: "title",
                  slot: "header"
                },
                componentBlock3: {
                  options: {
                    is: "ul",
                    html:
                      '<li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>习近平主持召开中央财经委员会第三次会议</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>17种抗癌药纳入医保支付范围</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>新闻办介绍《乡村振兴战略规划（2018—2022年）》有关情况</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-13]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>民生问题无小事——2018年国务院大督查赴部门实地督查盯紧民生痛点督促整改</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-02]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>商务部通报2018年电子商务进农村综合示范工作有关情况</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[03-02]</span></li><li style="margin: 16px 0;color: #454973;font-size: 14px;display: flex;align-items: center;justify-content: space-between;cursor: pointer;"><span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor: pointer;"><span style="border: 1px solid #1861d5;border-radius: 50%;width: 7px;height: 7px;margin-right: 10px;display: inline-block;"></span>中国国际矿业大会准备就绪</span><span style="align-self: flex-end;display: inline-block;text-align: right;white-space: nowrap;flex: 1;">[02-23]</span></li>'
                  },
                  type: "component",
                  style: {
                    padding: "0",
                    margin: "0"
                  }
                }
              },
              type: "card",
              style: {
                width: "49%"
              }
            },
            cardBlock4: {
              blocks: {
                titleBlock2: {
                  options: {
                    title: "个人工作指标"
                  },
                  type: "title",
                  slot: "header"
                },
                chartBlock1: {
                  style: {
                    width: "50%",
                    height: "220px"
                  },
                  data: {
                    xAxis: ["收案数", "结案数", "存案数"],
                    series1: [120, 132, 101]
                  },
                  options: {
                    BASE: "BAR",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "邮件营销",
                        barWidth: "40%",
                        data: "data.series1"
                      }
                    ]
                  },
                  type: "chart"
                },
                chartBlock2: {
                  style: {
                    width: "50%",
                    height: "220px"
                  },
                  data: {
                    legend: ["实际指标", "平均指标"],
                    xAxis: ["执限内执结率", "实际执行率", "执行终结率"],
                    series1: [120, 132, 101],
                    series2: [220, 182, 191]
                  },
                  options: {
                    BASE: "BAR",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "实际指标",
                        data: "data.series1"
                      },
                      {
                        name: "平均指标",
                        data: "data.series2"
                      }
                    ]
                  },
                  type: "chart"
                }
              },
              type: "card",
              style: {
                width: "49%",
                "margin-left": "20px"
              }
            },
            cardBlock5: {
              blocks: {
                titleBlock3: {
                  options: {
                    title: "任务区"
                  },
                  type: "title",
                  slot: "header"
                },
                componentBlock5: {
                  options: {
                    is: "div",
                    html:
                      '<div style="display: flex;height: 200px;flex-wrap: wrap;align-items: flex-start;padding-top: 20px;justify-content: space-between;"><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(238, 112, 109);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDA5OTU4NTk4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzOTM2IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3MC40MTYzNjEgMjkxLjQ4ODE5OGMxOS4xOTI0NDkgMzUuMTg2MTU2IDM4LjM4NDg5OCA2MC43NzYwODggNjMuOTc0ODI5IDgzLjE2NzI3OCAyOC43ODg2NzMtMjIuMzkxMTkgNTQuMzc4NjA1LTUxLjE3OTg2NCA3My41NzEwNTUtODMuMTY3Mjc4aC0xMzcuNTQ1ODg0eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjM5MzciPjwvcGF0aD48cGF0aCBkPSJNNzc0LjI5NjgwMyAxMjUuMTUzNjRDNjA3Ljk2MjI0NS00MS4xODA5MTggMzM5LjI2Nzk1OS00MS4xODA5MTggMTcyLjkzMzQwMiAxMjEuOTU0ODk4IDYuNTk4ODQ0IDI4OC4yODk0NTYgNi41OTg4NDQgNTU2Ljk4Mzc0MiAxNjkuNzM0NjYgNzIzLjMxODI5OWwyOTcuNDgyOTU5IDMwMC42ODE3MDEgMzAwLjY4MTcwMS0yOTcuNDgyOTU5YzE2OS41MzMyOTktMTY2LjMzNDU1OCAxNjkuNTMzMjk5LTQzNS4wMjg4NDMgNi4zOTc0ODMtNjAxLjM2MzQwMXpNMzIzLjI3NDI1MiAyMTEuNTE5NjZsMzEuOTg3NDE1IDEyLjc5NDk2NmMtMjguNzg4NjczIDU0LjM3ODYwNS01NC4zNzg2MDUgMTAyLjM1OTcyOC03Ni43Njk3OTYgMTM3LjU0NTg4NWg1MS4xNzk4NjRjOS41OTYyMjQtMTkuMTkyNDQ5IDIyLjM5MTE5LTQxLjU4MzYzOSAzNS4xODYxNTYtNjMuOTc0ODNsMzEuOTg3NDE1IDE1Ljk5MzcwN2MtNDEuNTgzNjM5IDczLjU3MTA1NC03Ni43Njk3OTYgMTI3Ljk0OTY2LTEwMi4zNTk3MjggMTY2LjMzNDU1OCAyNS41ODk5MzItMy4xOTg3NDEgNTQuMzc4NjA1LTYuMzk3NDgzIDg2LjM2NjAyMS0xMi43OTQ5NjYtMy4xOTg3NDEgMTIuNzk0OTY2LTMuMTk4NzQxIDIyLjM5MTE5LTMuMTk4NzQyIDMxLjk4NzQxNS0zMS45ODc0MTUgMy4xOTg3NDEtNzMuNTcxMDU0IDkuNTk2MjI0LTEyMS41NTIxNzcgMTkuMTkyNDQ5bC02LjM5NzQ4My0zMS45ODc0MTVjMTUuOTkzNzA3LTE5LjE5MjQ0OSAzOC4zODQ4OTgtNTEuMTc5ODY0IDY3LjE3MzU3Mi05NS45NjIyNDUtMzEuOTg3NDE1IDMuMTk4NzQxLTUxLjE3OTg2NCAzLjE5ODc0MS02Ny4xNzM1NzIgMy4xOTg3NDFsLTkuNTk2MjI0LTI4Ljc4ODY3M2MyOC43ODg2NzMtMzEuOTg3NDE1IDU0LjM3ODYwNS04Ni4zNjYwMiA4My4xNjcyNzktMTUzLjUzOTU5MnogbTY3LjE3MzU3MSAzNzEuMDU0MDE0Yy0zOC4zODQ4OTggOS41OTYyMjQtODYuMzY2MDIgMTkuMTkyNDQ5LTE0MC43NDQ2MjYgMzUuMTg2MTU2bC05LjU5NjIyNC0zNS4xODYxNTZjNDQuNzgyMzgxLTkuNTk2MjI0IDk1Ljk2MjI0NS0xOS4xOTI0NDkgMTUwLjM0MDg1LTM1LjE4NjE1N3YzNS4xODYxNTd6IG0yMjMuOTExOTA1IDYwLjc3NjA4OGMtNzMuNTcxMDU0LTI1LjU4OTkzMi0xNDAuNzQ0NjI2LTQ3Ljk4MTEyMi0xOTguMzIxOTczLTYzLjk3NDgzbDEyLjc5NDk2Ni0zMS45ODc0MTVjNTQuMzc4NjA1IDE1Ljk5MzcwNyAxMjEuNTUyMTc3IDM1LjE4NjE1NiAxOTguMzIxOTczIDU3LjU3NzM0N2wtMTIuNzk0OTY2IDM4LjM4NDg5OHogbS0xNDcuMTQyMTA5LTE0My45NDMzNjdsMTIuNzk0OTY2LTI4Ljc4ODY3NGM0NC43ODIzODEgMTIuNzk0OTY2IDg5LjU2NDc2MiAyOC43ODg2NzMgMTMxLjE0ODQwMSA0NC43ODIzODFsLTE1Ljk5MzcwNyAzNS4xODYxNTdjLTM4LjM4NDg5OC0yMi4zOTExOS04My4xNjcyNzktMzguMzg0ODk4LTEyNy45NDk2Ni01MS4xNzk4NjR6IG0xOTUuMTIzMjMxLTIyLjM5MTE5MWMtNTEuMTc5ODY0LTE1Ljk5MzcwNy05Mi43NjM1MDMtMzUuMTg2MTU2LTEzMS4xNDg0MDEtNjAuNzc2MDg4LTM4LjM4NDg5OCAyNS41ODk5MzItODMuMTY3Mjc5IDQ3Ljk4MTEyMi0xMzcuNTQ1ODg0IDY3LjE3MzU3MS0zLjE5ODc0MS05LjU5NjIyNC05LjU5NjIyNC0yMi4zOTExOS0xNS45OTM3MDgtMzEuOTg3NDE1IDQ3Ljk4MTEyMi0xMi43OTQ5NjYgODkuNTY0NzYyLTMxLjk4NzQxNSAxMjcuOTQ5NjYtNTcuNTc3MzQ3LTIyLjM5MTE5LTIyLjM5MTE5LTQxLjU4MzYzOS00Ny45ODExMjItNTcuNTc3MzQ3LTc2Ljc2OTc5NS0xMi43OTQ5NjYgMjIuMzkxMTktMjguNzg4NjczIDQ0Ljc4MjM4MS00NC43ODIzODEgNjcuMTczNTcxbC0yMi4zOTExOS0yMi4zOTExOWMzNS4xODYxNTYtNDcuOTgxMTIyIDYzLjk3NDgzLTk1Ljk2MjI0NSA4My4xNjcyNzktMTUwLjM0MDg1MWwzMS45ODc0MTUgOS41OTYyMjUtMTkuMTkyNDQ5IDM4LjM4NDg5OEg2MzkuOTQ5NjZ2MzEuOTg3NDE1Yy0yMi4zOTExOSAzOC4zODQ4OTgtNTEuMTc5ODY0IDczLjU3MTA1NC04Ni4zNjYwMjEgMTAyLjM1OTcyNyAzMS45ODc0MTUgMjIuMzkxMTkgNzMuNTcxMDU0IDM4LjM4NDg5OCAxMTguMzUzNDM2IDQ0Ljc4MjM4MSAwIDE1Ljk5MzcwNy0zLjE5ODc0MSAyOC43ODg2NzMtOS41OTYyMjUgMzguMzg0ODk4eiIgZmlsbD0iI2ZmZmZmZiIgcC1pZD0iMjM5MzgiPjwvcGF0aD48L3N2Zz4=" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">终本案件 <span style="color: #ff3000;">0</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(94, 131, 251);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDEwMDIyNDAzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI4MDQ4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxMi45OTIgNTI2LjMzNiAyMTIuOTkyIDUyNi4zMzYgMjEyLjk5MiA1MjYuMzM2IDIxNS4wNCA1MjYuMzM2IDIxMi45OTIgNTI2LjMzNloiIHAtaWQ9IjI4MDQ5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTkyNy43NDQgNTMwLjQzMiA1NjcuMjk2IDUzMC40MzJjLTEwLjI0IDAtMjAuNDggMTAuMjQtMjAuNDggMjAuNDhsMCAyMjEuMTg0YzAgMTIuMjg4IDEwLjI0IDIwLjQ4IDIwLjQ4IDIwLjQ4bDM2MC40NDggMGMxMC4yNCAwIDIwLjQ4LTguMTkyIDIwLjQ4LTIwLjQ4TDk0OC4yMjQgNTUwLjkxMkM5NDguMjI0IDUzOC42MjQgOTM3Ljk4NCA1MzAuNDMyIDkyNy43NDQgNTMwLjQzMnpNOTA5LjMxMiA3MjkuMDg4YzAgMTQuMzM2LTEwLjI0IDI0LjU3Ni0yNC41NzYgMjQuNTc2TDYxMC4zMDQgNzUzLjY2NGMtMTQuMzM2IDAtMjQuNTc2LTEwLjI0LTI0LjU3Ni0yNC41NzZMNTg1LjcyOCA1OTMuOTJjMC0xNC4zMzYgMTAuMjQtMjQuNTc2IDI0LjU3Ni0yNC41NzZsMjcyLjM4NCAwYzE0LjMzNiAwIDI0LjU3NiAxMC4yNCAyNC41NzYgMjQuNTc2TDkwNy4yNjQgNzI5LjA4OHoiIHAtaWQ9IjI4MDUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTY2My41NTIgODE1LjEwNGwxNjcuOTM2IDAgMCAyNC41NzYtMTY3LjkzNiAwIDAtMjQuNTc2WiIgcC1pZD0iMjgwNTEiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNDU0LjY1NiAxNzguMTc2IDk2LjI1NiAxNzguMTc2Yy0xMi4yODggMC0yMC40OCAxMC4yNC0yMC40OCAyMC40OGwwIDIyMS4xODRjMCAxMi4yODggOC4xOTIgMjAuNDggMjAuNDggMjAuNDhsMzYwLjQ0OCAwYzEyLjI4OCAwIDIwLjQ4LTguMTkyIDIwLjQ4LTIwLjQ4TDQ3Ny4xODQgMTk4LjY1NkM0NzUuMTM2IDE4Ni4zNjggNDY2Ljk0NCAxNzguMTc2IDQ1NC42NTYgMTc4LjE3NnpNNDM2LjIyNCAzNzYuODMyYzAgMTQuMzM2LTEwLjI0IDI0LjU3Ni0yNC41NzYgMjQuNTc2TDEzOS4yNjQgNDAxLjQwOGMtMTQuMzM2IDAtMjQuNTc2LTEwLjI0LTI0LjU3Ni0yNC41NzZsMC0xMzUuMTY4YzAtMTQuMzM2IDEwLjI0LTI0LjU3NiAyNC41NzYtMjQuNTc2bDI3Mi4zODQgMGMxNC4zMzYgMCAyNC41NzYgMTAuMjQgMjQuNTc2IDI0LjU3Nkw0MzYuMjI0IDM3Ni44MzJ6IiBwLWlkPSIyODA1MiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xOTIuNTEyIDQ2Mi44NDhsMTY3LjkzNiAwIDAgMjQuNTc2LTE2Ny45MzYgMCAwLTI0LjU3NloiIHAtaWQ9IjI4MDUzIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTcyNy4wNCAzMTMuMzQ0bDI0LjU3NiAwIDAgMjIzLjIzMi0yNC41NzYgMCAwLTIyMy4yMzJaIiBwLWlkPSIyODA1NCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik03NTEuNjE2IDE5OC42NTZjLTM2Ljg2NCAwLTY1LjUzNiAzMC43Mi02NS41MzYgNjUuNTM2czMwLjcyIDY1LjUzNiA2NS41MzYgNjUuNTM2YzM2Ljg2NCAwIDY1LjUzNi0zMC43MiA2NS41MzYtNjUuNTM2Uzc4OC40OCAxOTguNjU2IDc1MS42MTYgMTk4LjY1NnpNNzUxLjYxNiAzMDMuMTA0Yy0yMC40OCAwLTM4LjkxMi0xNi4zODQtMzguOTEyLTM4LjkxMnMxNi4zODQtMzguOTEyIDM4LjkxMi0zOC45MTIgMzguOTEyIDE2LjM4NCAzOC45MTIgMzguOTEyUzc3NC4xNDQgMzAzLjEwNCA3NTEuNjE2IDMwMy4xMDR6IiBwLWlkPSIyODA1NSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjMuNTg0IDY4NC4wMzJsMjIzLjIzMiAwIDAgMjQuNTc2LTIyMy4yMzIgMCAwLTI0LjU3NloiIHAtaWQ9IjI4MDU2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTQ3NS4xMzYgMjUzLjk1MmwyMjMuMjMyIDAgMCAyNC41NzYtMjIzLjIzMiAwIDAtMjQuNTc2WiIgcC1pZD0iMjgwNTciIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjcwLjMzNiA0ODcuNDI0bDI0LjU3NiAwIDAgMTY5Ljk4NC0yNC41NzYgMCAwLTE2OS45ODRaIiBwLWlkPSIyODA1OCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzAuMzM2IDYzOC45NzZjLTM2Ljg2NCAwLTY1LjUzNiAzMC43Mi02NS41MzYgNjUuNTM2czMwLjcyIDY1LjUzNiA2NS41MzYgNjUuNTM2IDY1LjUzNi0zMC43MiA2NS41MzYtNjUuNTM2UzMwNy4yIDYzOC45NzYgMjcwLjMzNiA2MzguOTc2ek0yNzAuMzM2IDc0My40MjRjLTIwLjQ4IDAtMzguOTEyLTE2LjM4NC0zOC45MTItMzguOTEyczE2LjM4NC0zOC45MTIgMzguOTEyLTM4LjkxMiAzOC45MTIgMTYuMzg0IDM4LjkxMiAzOC45MTJTMjkwLjgxNiA3NDMuNDI0IDI3MC4zMzYgNzQzLjQyNHoiIHAtaWQ9IjI4MDU5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">登记立案待立案 <span style="color: #ff3000;">1</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(247, 218, 71);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDEwMDQzNTY0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwNzA4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMC4xOTUzMTI1IiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTkwLjAwNzcwOSA4OTJjLTExLjIgMC0yMi01LjktMjcuOC0xNi4yQzg0MS43MDc3MDkgNjY0LjMgNjcyLjMwNzcwOSA2MzkuMiA0NDguMDA3NzA5IDYzNy40bDAgMTk4LjZjMCAxMi42LTcuMyAyNC0xOC44IDI5LjEtMTEuNCA1LjItMjQuOCAzLjItMzQuMy01LjFsLTM4NC0zMzZjLTYuOC02LTEwLjgtMTQuNS0xMC45LTIzLjUtMC4yLTkgMy41LTE3LjcgMTAuMS0yMy45bDM4NC0zNjBjOS4zLTguNyAyMi45LTExLjEgMzQuNi02IDExLjcgNS4xIDE5LjMgMTYuNiAxOS4zIDI5LjRsMCAxNjguOGMxMDAuNCA1IDE5MS45IDMzLjcgMjcyLjQgODUuNiA3MC44IDQ1LjYgMTMzIDEwOC45IDE4NC44IDE4OC4yIDg3LjMgMTMzLjYgMTE0LjkgMjY1LjYgMTE2LjEgMjcxLjEgMy4xIDE1LjQtNS40IDMwLjgtMjAuMSAzNi4zQzk5Ny42MDc3MDkgODkxLjMgOTkzLjgwNzcwOSA4OTIgOTkwLjAwNzcwOSA4OTJ6TTc5LjcwNzcwOSA0OTkuMSAzODQuMDA3NzA5IDc2NS40IDM4NC4wMDc3MDkgNjA1LjJjMC0xNy43IDE0LjMtMzIgMzItMzIgMTM2LjcgMCAyNDcuNCA3LjIgMzQzLjUgNDIuMSA1MC45IDE4LjUgOTUuMiA0My44IDEzNS4yIDc3LjEtMTIuNS0yNC45LTI3LTUwLjgtNDQtNzYuNkM3NDQuMjA3NzA5IDQ1NCA1OTguMDA3NzA5IDM3MiA0MTYuMDA3NzA5IDM3MmMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xMjYuMkw3OS43MDc3MDkgNDk5LjF6IiBwLWlkPSIzMDcwOSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">待恢复立案 <span style="color: #ff3000;">3</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(88, 202, 154);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDA5OTgyOTU2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MTM4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA2NzguNFYyNTZoNjR2NjRoMjg4bDEyOC0xMjhINjQwYzAtNzAuNC01Ny42LTEyOC0xMjgtMTI4cy0xMjggNTcuNi0xMjggMTI4SDI1NmMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NDgwbDY0LTU3LjZ6TTUxMiAxNjBjMTcuNiAwIDMyIDE0LjQgMzIgMzJzLTE0LjQgMzItMzIgMzItMzItMTQuNC0zMi0zMiAxNC40LTMyIDMyLTMyeiBtMzk2IDQzLjJsLTQ1LjYtNDUuNi03NTMuNiA3NTMuNiA0NS42IDQ1LjYgNDAuOC00MC44YzggMjUuNiAzMi44IDQ0LjggNjAuOCA0NC44aDUxMmMzNS4yIDAgNjQtMjguOCA2NC02NFYyNzguNGw3Ni03NS4yek03NjggODk2SDI1NnYtNDBsNTEyLTUxOS4yVjg5NnoiIHAtaWQ9IjI0MTM5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">本案立案庭拒签 <span style="color: #ff3000;">0</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(94, 131, 251);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDA5OTk3NjA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1MDA4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5NS45NDY2NjcgMTk2LjI2NjY2N2gxOTQuNTZjMzAuNzIgMCA1Ni4zMi0yMC40OCA1Ni4zMi00NC4zNzMzMzR2LTEzLjY1MzMzM2MwLTIzLjg5MzMzMy0yNS42LTQ0LjM3MzMzMy01Ni4zMi00NC4zNzMzMzNIMzk1Ljk0NjY2N2MtMzAuNzIgMC01Ni4zMiAyMC40OC01Ni4zMiA0NC4zNzMzMzN2MTMuNjUzMzMzYzAgMjMuODkzMzMzIDI1LjYgNDQuMzczMzMzIDU2LjMyIDQ0LjM3MzMzNHogbTM3MC4zNDY2NjYgMTg3LjczMzMzM2g2OC4yNjY2Njd2LTE4Ny43MzMzMzNjMC00Ny43ODY2NjctMzcuNTQ2NjY3LTg1LjMzMzMzMy04NS4zMzMzMzMtODUuMzMzMzM0aC0zNC4xMzMzMzR2NjguMjY2NjY3aDUxLjJ2MjA0Ljh6IG0tNDE4LjEzMzMzMy0xNy4wNjY2NjdoMjkwLjEzMzMzM2MxMy42NTMzMzMgMCAyNS42LTUuMTIgMjUuNi0xMy42NTMzMzN2LTguNTMzMzMzYzAtNi44MjY2NjctMTEuOTQ2NjY3LTEzLjY1MzMzMy0yNS42LTEzLjY1MzMzNGgtMjkwLjEzMzMzM2MtMTMuNjUzMzMzIDAtMjUuNiA1LjEyLTI1LjYgMTMuNjUzMzM0djguNTMzMzMzYzAgOC41MzMzMzMgMTEuOTQ2NjY3IDEzLjY1MzMzMyAyNS42IDEzLjY1MzMzM3ogbTAgMTE5LjQ2NjY2N2gyOTAuMTMzMzMzYzEzLjY1MzMzMyAwIDI1LjYtNS4xMiAyNS42LTEzLjY1MzMzM3YtOC41MzMzMzRjMC02LjgyNjY2Ny0xMS45NDY2NjctMTEuOTQ2NjY3LTI1LjYtMTEuOTQ2NjY2aC0yOTAuMTMzMzMzYy0xMy42NTMzMzMgMC0yNS42IDUuMTItMjUuNiAxMS45NDY2NjZ2OC41MzMzMzRjMCA4LjUzMzMzMyAxMS45NDY2NjcgMTMuNjUzMzMzIDI1LjYgMTMuNjUzMzMzeiBtNTU0LjY2NjY2NyAxNTMuNmgtMjUuNmwtNjEuNDQtMTM0LjgyNjY2N0M4MjcuNzMzMzMzIDQ5NC45MzMzMzMgODM2LjI2NjY2NyA0NzcuODY2NjY3IDgzNi4yNjY2NjcgNDYwLjhjMC0zMi40MjY2NjctMjcuMzA2NjY3LTU5LjczMzMzMy01OS43MzMzMzQtNTkuNzMzMzMzUzcxNi44IDQyOC4zNzMzMzMgNzE2LjggNDYwLjhjMCAxNy4wNjY2NjcgNi44MjY2NjcgMzAuNzIgMTcuMDY2NjY3IDQyLjY2NjY2N2wtNjMuMTQ2NjY3IDEzNi41MzMzMzNoLTIzLjg5MzMzM2MtMjkuMDEzMzMzIDAtNTEuMiAyMi4xODY2NjctNTEuMiA1MS4ydjE3LjA2NjY2N2MwIDI5LjAxMzMzMyAyMi4xODY2NjcgNTEuMiA1MS4yIDUxLjJoMjU2YzI5LjAxMzMzMyAwIDUxLjItMjIuMTg2NjY3IDUxLjItNTEuMnYtMTcuMDY2NjY3YzAtMjkuMDEzMzMzLTIyLjE4NjY2Ny01MS4yLTUxLjItNTEuMnogbS0xMzkuOTQ2NjY3LTEyMS4xNzMzMzNjMy40MTMzMzMgMS43MDY2NjcgOC41MzMzMzMgMS43MDY2NjcgMTEuOTQ2NjY3IDEuNzA2NjY2aDguNTMzMzMzbDU0LjYxMzMzMyAxMTkuNDY2NjY3aC0xMzEuNDEzMzMzbDU2LjMyLTEyMS4xNzMzMzN6IG0xNTcuMDEzMzMzIDE4OS40NGMwIDEwLjI0LTYuODI2NjY3IDE3LjA2NjY2Ny0xNy4wNjY2NjYgMTcuMDY2NjY2aC0yNTZjLTEwLjI0IDAtMTcuMDY2NjY3LTYuODI2NjY3LTE3LjA2NjY2Ny0xNy4wNjY2NjZ2LTE3LjA2NjY2N2MwLTEwLjI0IDYuODI2NjY3LTE3LjA2NjY2NyAxNy4wNjY2NjctMTcuMDY2NjY3aDI1NmMxMC4yNCAwIDE3LjA2NjY2NyA2LjgyNjY2NyAxNy4wNjY2NjYgMTcuMDY2NjY3djE3LjA2NjY2N3ogbS02OTkuNzMzMzMzLTUyOS4wNjY2NjdoNTEuMnYtNjguMjY2NjY3aC0zNC4xMzMzMzNjLTQ3Ljc4NjY2NyAwLTg1LjMzMzMzMyAzNy41NDY2NjctODUuMzMzMzM0IDg1LjMzMzMzNHY1OTcuMzMzMzMzYzAgNDcuNzg2NjY3IDM3LjU0NjY2NyA4NS4zMzMzMzMgODUuMzMzMzM0IDg1LjMzMzMzM2g1MTJjNDcuNzg2NjY3IDAgODUuMzMzMzMzLTIwLjQ4IDg1LjMzMzMzMy02OC4yNjY2NjZoLTYxNC40di02MzEuNDY2NjY3eiBtMTI4IDQyNi42NjY2NjdoMjIxLjg2NjY2N2MxMy42NTMzMzMgMCAyNS42LTUuMTIgMjUuNi0xMy42NTMzMzR2LTguNTMzMzMzYzAtNi44MjY2NjctMTEuOTQ2NjY3LTEzLjY1MzMzMy0yNS42LTEzLjY1MzMzM2gtMjIxLjg2NjY2N2MtMTMuNjUzMzMzIDAtMjUuNiA1LjEyLTI1LjYgMTMuNjUzMzMzdjguNTMzMzMzYzAgOC41MzMzMzMgMTEuOTQ2NjY3IDEzLjY1MzMzMyAyNS42IDEzLjY1MzMzNHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjI1MDA5Ij48L3BhdGg+PC9zdmc+" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">已收案待立案 <span style="color: #ff3000;">1</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(247, 218, 71);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDEwMDYwMjQ2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDE0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTkxNS41MTUyNzMgMTQyLjgxOTM4NSA5OC4yMTMwNDYgNDU4LjE5OTEyMmMtNDYuMDU4NTM5IDE3Ljc3MjgzOC00NC45MDQ3NSA0My42MDE3NTYgMi4zNDg0NTUgNTcuNjIyOTk0bDE5Ny40Nzc2ODUgNTguNTk0ODc0IDgwLjI5MjAyNCAyMzguOTEwODVjMTAuNTExODQgMzEuMjc3OTg4IDM3Ljk3MjgyMiAzNy44NzM2OTMgNjEuNDYyNDgzIDE0LjYwMzc1MmwxMDMuNTg0NDQ3LTEwMi42MTE1NDUgMjA0LjQ3NTAxOCAxNDkuODQwMjI0YzI2LjU2NTc0OSAxOS40NjcyNDIgNTMuODc4NTQ3IDkuMjIyMTMyIDYxLjA0OTYxMy0yMy4wOTAwNzZsMTQ5LjIxMDY5OS02NzIuMzQ0OTFDOTY1LjI2NDA5NiAxNDcuNTA1MDU0IDk0Ni4yMTg5MjIgMTMwLjk3MTg0OCA5MTUuNTE1MjczIDE0Mi44MTkzODV6TTc5MS4xNDExNzQgMjk0LjgzNDMzMWwtMzQ4LjYxOTg4IDMxMC42MTAyNjdjLTYuMjY4Njc5IDUuNTg0OTktMTEuOTQxNTU3IDE2LjY1Mjc3NC0xMi44MTIyNjMgMjQuODQ2ODE4bC0xNS4zOTA2NTkgMTQ0LjY5Nzc0MWMtMS43MjgxMjggMTYuMjQ4MDgtNy4zMzA0OTEgMTYuOTE4NDgzLTEyLjQ5NzUwMSAxLjM0NDg5NGwtNjcuNDU3Mjc3LTIwMy4zMzg2MDNjLTIuNjM4NjkxLTcuOTU0OTA2IDAuOTc1OTY4LTE3LjcwNTM4OSA4LjAyMjM1NS0yMS45MzExNzhsNDQyLjExNDU1NS0yNjUuMTgxMjUzQzgxMi42NzQ4MSAyNjguOTg0OTc0IDgxNS42NzQyNTEgMjcyLjk3NTcxMyA3OTEuMTQxMTc0IDI5NC44MzQzMzF6IiBwLWlkPSIzMjAxNSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">已收案待发送 <span style="color: #ff3000;">2</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(88, 202, 154);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDEwMDA5OTgwIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NDI5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk3Ljg3OCA0ODMuODUzYzAtMTE3LjA2Mi0wLjEwOC0xNjAuOTk5LTAuMTA4LTI3OC4wNjIgMC0xMDEuNDcyIDU2LjMyOC0xMDguMDgyIDExMC40ODMtMTA4LjA4Mmg0NDEuOTMzYzg1LjEyOCAwIDExMS40NTMgMjguOTY4IDExMS40NTMgMTEwLjQ4MXY1NS4yNDFjMCA0My41NjItNTUuNDE5IDM4LjU3LTU1LjQxOSAwVjIwOC4xOWMwLTQwLjkxOC0xMy4zMDktNTUuMjQtNTYuMDM1LTU1LjI0SDIwOC4yNTJjLTQ1Ljc0NiAwLTU1LjI0MSA2LjIwMy01NS4yNDEgNTUuMjR2NTUyLjQwN2MwIDMwLjI3OCAxNi41NzIgNTUuMjQxIDU1LjI0MSA1NS4yNDEgNjcuMDA0IDAgNDMuNDgyIDAuMDI2IDExMC40ODQgMCAzMy43NyAwIDM2LjI1MiA1NS4yNDEgMCA1NS4yNDFzLTYzLjcxMSAwLjQ0LTEzMS4zMDYgMC4xN2MtMzkuODY3LTAuMTYzLTcyLjg4My0yMy43NzQtODQuNjQzLTYwLjMyMi0zLjI5Mi0xMC4yMjMtNC42OTQtMjEuNTI1LTQuNjk0LTMyLjM0LTAuMzIzLTExNi42NTgtMC4yMTUtMTc4LjA3Ni0wLjIxNS0yOTQuNzM0IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNjQzMCI+PC9wYXRoPjxwYXRoIGQ9Ik02NDkuNjQ0IDkyNi4yOTFjLTE1Mi4zNDQtMC4wMjctMjc1LjY2Ni0xMjMuNTM3LTI3NS42NjYtMjc2LjEyMiAwLTE1Mi41ODYgMTIzLjkxNS0yNzYuMjU5IDI3Ni41MjktMjc2LjA0MiAxNTIuNjE2IDAuMjE1IDI3NS44ODQgMTI0LjAyMiAyNzUuNzIyIDI3Ni44NzgtMC4xNiAxNTIuMjM2LTEyMy44MDcgMjc1LjMxNC0yNzYuNTg1IDI3NS4yODZtMC43NTYtNDk2Ljg2OGMtMTIxLjEwOS0wLjI3MS0yMjAuNjQxIDk4LjgyOC0yMjAuOTEgMjIwLjA0NS0wLjI3IDEyMS41NDEgOTguMzQ1IDIyMC45MzQgMjE5LjU2MSAyMjEuMjg3IDEyMS43MDQgMC4zMjQgMjIxLjUwNS05OC4yMDggMjIxLjc3NS0yMTkuMDQ3IDAuMzI0LTEyMi41OTQtOTguMjM2LTIyMS45OS0yMjAuNDI2LTIyMi4yODVNNTk0Ljk0NSAyNjMuMDYxYzQ0LjAyIDAuMDI3IDM3Ljk3OCA1NS45NzkgMCA1NS45NzloLTMzMS40NWMtNDEuNDMxIDAtMzkuNzA0LTU1Ljk3OSAwLTU1Ljk3OSAxMDguNzU2LTAuMDI3IDI4OS4xNTUtMC4wMjcgMzMxLjQ1IDB6TTMxOC43MzYgNDI4Ljc4MmM0NC4wMjEgMC4wMjggMzcuOTc5IDU1Ljk4IDAgNTUuOThoLTU1LjI0MmMtNDEuNDMxIDAtMzkuNzA0LTU1Ljk4IDAtNTUuOTggMTA4Ljc1Ny0wLjAyNyAxMi45NDgtMC4wMjcgNTUuMjQyIDB6IiBmaWxsPSIjZmZmZmZmIiBwLWlkPSIyNjQzMSI+PC9wYXRoPjxwYXRoIGQ9Ik03ODUuNTAyIDU0Ny4yMmMtMTIuNDk2LTEyLjQ5OC0zMi43NTgtMTIuNDk4LTQ1LjI1NCAwTDYwMi4xNTEgNjg1LjMxNmwtNDIuMTkxLTQyLjE5MWMtMTIuNDk4LTEyLjQ5Ni0zMi43NTgtMTIuNDk2LTQ1LjI1NiAwLTEyLjQ5NiAxMi40OTctMTIuNDk2IDMyLjc1OSAwIDQ1LjI1Nmw2NC44MTggNjQuODE4YzYuMjQ5IDYuMjQ4IDE0LjQzOCA5LjM3MiAyMi42MjggOS4zNzJzMTYuMzc5LTMuMTI0IDIyLjYyOC05LjM3MmEzMi40MjQgMzIuNDI0IDAgMCAwIDIuNDAyLTIuNjk1IDMyLjMwNCAzMi4zMDQgMCAwIDAgMi42ODktMi4zOTdsMTU1LjYzMy0xNTUuNjMzYzEyLjQ5Ny0xMi40OTYgMTIuNDk3LTMyLjc1OCAwLTQ1LjI1NHoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjI2NDMyIj48L3BhdGg+PC9zdmc+" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">已申请保全待立案 <span style="color: #ff3000;">0</span></p></div><div style="display: flex;width: 25%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="background: rgb(238, 112, 109);width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDEwMDczMTg0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwNDQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMTkzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMy45MDYyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2LjM4NCAxNTcuNjk2cS0xMS4yNjQtOC4xOTItMTQuMzM2LTEzLjMxMnQtMy4wNzItMTQuMzM2bDAtOS4yMTZxMC0yNi42MjQgMTMuMzEyLTQxLjk4NHQ0Ni4wOC0xNS4zNmw4NDMuNzc2IDEuMDI0cTMzLjc5MiAwIDQ3LjEwNCAxNC4zMzZ0MTMuMzEyIDM5LjkzNmwxLjAyNCAxMS4yNjRxMCA5LjIxNi0yLjA0OCAxMi44dC0xNi4zODQgMTQuODQ4bC00MTguODE2IDI1MS45MDRxLTEwLjI0IDQuMDk2LTI1LjA4OCAxMS4yNjR0LTE5Ljk2OCA4LjE5MnEtNi4xNDQgMC0xOC40MzItNS42MzJ0LTI3LjY0OC0xNC44NDh6TTY0Ni4xNDQgNTcyLjQxNnEtMjEuNTA0IDAtMzQuODE2IDkuMjE2dC0yMC45OTIgMjMuNTUyLTEwLjI0IDMyLjI1Ni0yLjU2IDM0LjMwNGwwIDcxLjY4IDAgMTIuMjg4cTAgNi4xNDQgMS4wMjQgMTEuMjY0bC0xNDEuMzEyIDBxLTcyLjcwNCAwLTEzNi4xOTItMC41MTJ0LTExMS42MTYtMC41MTJsLTcwLjY1NiAwcS0zNi44NjQgMC02MC40MTYtOS43Mjh0LTM2Ljg2NC0yNS4wODgtMTguNDMyLTM1LjMyOC01LjEyLTQxLjQ3MmwwLTM3OC44OHEwLTIxLjUwNCAxMC4yNC0yNy4xMzZ0MjUuNiA1LjYzMnE1LjEyIDMuMDcyIDE4LjQzMiAxMS43NzZ0MzEuNzQ0IDE5Ljk2OCAzOC40IDI0LjA2NCAzNy44ODggMjQuMDY0IDMwLjcyIDE5LjQ1NiAxNi44OTYgMTAuMjRxMTQuMzM2IDkuMjE2IDE2LjM4NCAyMy4wNHQtMy4wNzIgMjQuMDY0cS00LjA5NiAxMC4yNC0xMi4yODggMjYuNjI0dC0xNy40MDggMzMuMjgtMTcuOTIgMzIuMjU2LTExLjc3NiAyMy41NTJxLTUuMTIgMTQuMzM2IDIuMDQ4IDE5LjQ1NnQyMi41MjgtNC4wOTZxMy4wNzItMi4wNDggMTYuODk2LTE1Ljg3MnQyOS4xODQtMzAuNzIgMjkuMTg0LTMxLjc0NCAxOC45NDQtMTcuOTJxOS4yMTYtOC4xOTIgMjQuMDY0LTExLjc3NnQyNi4xMTIgMi41NnE3LjE2OCA0LjA5NiAxOS40NTYgMTIuMjg4dDI3LjEzNiAxNy45MiAzMC4yMDggMTkuOTY4bDI3LjY0OCAxOC40MzJxMTIuMjg4IDguMTkyIDI2LjExMiAxMC4yNHQyNi42MjQgMS4wMjQgMjMuMDQtNC42MDggMTUuMzYtNi42NTYgMTkuNDU2LTExLjc3NiAzMS4yMzItMTguOTQ0IDMxLjc0NC0xOS40NTYgMjIuMDE2LTEzLjMxMmwxMjkuMDI0LTc5Ljg3MnEyLjA0OC0xLjAyNCAxMi44LTguMTkydDI2LjYyNC0xNy40MDggMzQuODE2LTIyLjUyOCAzNS44NC0yMy4wNCAzMS4yMzItMTkuOTY4IDIwLjQ4LTEzLjMxMnExOS40NTYtMTIuMjg4IDMwLjIwOC05LjcyOHQxMC43NTIgMTYuODk2bDAgMjY2LjI0cS0yOC42NzItMjMuNTUyLTU1LjgwOC00NC4wMzJ0LTQ5LjY2NC0zNC44MTZxLTIyLjUyOC0xNS4zNi0zOS40MjQtMTAuNzUydC0yNy42NDggMTkuOTY4LTE2LjM4NCAzNS44NC01LjYzMiAzNi44NjRxMCAxMS4yNjQtMC41MTIgMTguNDMydC0wLjUxMiAxMi4yODhxLTEuMDI0IDUuMTItMS4wMjQgOC4xOTJsLTE1LjM2IDAtMTA0LjQ0OCAwek0xMDI4LjA5NiA2NzkuOTM2cTEzLjMxMiAxMC4yNCAxMy44MjQgMjguNjcydC0xMC43NTIgMjYuNjI0cS0xNS4zNiAxMi4yODgtMzUuODQgMjkuMTg0dC00Mi40OTYgMzQuMzA0LTQzLjAwOCAzNC44MTYtMzguNCAzMC43MnEtMjEuNTA0IDE3LjQwOC0zMC4yMDggMTguNDMydC04LjcwNC0yNi42MjRsMC00Ni4wOHEwLTE3LjQwOC04LjcwNC0yOC42NzJ0LTIzLjA0LTExLjI2NGwtMTE4Ljc4NCAwcS0xNC4zMzYgMC0yOC4xNi0xMC4yNHQtMTMuODI0LTI2LjYyNGwwLTUyLjIyNHEwLTI4LjY3MiA5LjIxNi0zNC44MTZ0MzIuNzY4LTYuMTQ0bDIwLjQ4IDBxOS4yMTYgMCAyMC45OTIgMC41MTJ0MjguMTYgMC41MTJsNDMuMDA4IDBxMjAuNDggMCAyOS4xODQtNy4xNjh0OC43MDQtMjUuNmwwLTQ1LjA1NnEwLTE4LjQzMiA2LjE0NC0yMy41NTJ0MjIuNTI4IDguMTkycTE2LjM4NCAxMi4yODggMzcuODg4IDI5LjY5NnQ0NC41NDQgMzUuMzI4IDQ1LjA1NiAzNS44NCAzOS40MjQgMzEuMjMyeiIgcC1pZD0iMzIxOTQiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=" style="width: 24px;height: 24px;" alt=""></div><p style="margin: 12px 0 0;font-size:12px;">执保已立案待发送 <span style="color: #ff3000;">1</span></p></div></div>'
                  },
                  type: "component"
                }
              },
              type: "card",
              style: {
                width: "49%",
                "margin-top": "20px"
              }
            },
            cardBlock6: {
              blocks: {
                titleBlock4: {
                  options: {
                    title: "功能区"
                  },
                  type: "title",
                  slot: "header"
                },
                componentBlock6: {
                  options: {
                    is: "div",
                    html:
                      '<div style="height: 200px;display: flex;flex-wrap: wrap;align-items: space-between;justify-content: space-between;"><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人(执保)</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">跨院委托审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">跨省委托审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">限高业务审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">失信名单审核</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">提交银行申请审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">提交工商申请审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">提交房产申请审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">提交银联申请审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">评估超期审批</p></div><div style="width: 25%;padding: 11px 4px 0;"><p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">拍卖超期审批</p></div></div>'
                  },
                  type: "component"
                }
              },
              type: "card",
              style: {
                width: "49%",
                "margin-top": "20px",
                "margin-left": "20px"
              }
            },
            cardBlock7: {
              blocks: {
                titleBlock5: {
                  options: {
                    title: "预警区"
                  },
                  type: "title",
                  slot: "header"
                },
                componentBlock7: {
                  options: {
                    is: "div",
                    html:
                      '<div style="display: flex;height: 200px;margin: 0;flex-wrap: wrap;align-items: flex-start;padding-top: 56px;justify-content: space-between;"><div style="display: flex;width: 20%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="width: 50px;height: 50px;padding: 10px 0;position: relative;text-align: center;border-radius: 8px;background: rgb(94, 131, 251);"><img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDUxNDg3NDA4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Mzc1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi44NTUgOTEuNTE5Yy0yMzIuNTA3IDAtNDIxLjYzMiAxODkuMTI2LTQyMS42MzIgNDIxLjUyNyAwIDIzMi40MzYgMTg5LjEyNiA0MjEuNDkyIDQyMS42MzIgNDIxLjQ5MiAyMzIuNDcyIDAgNDIxLjU5Ny0xODkuMDU1IDQyMS41OTctNDIxLjQ5MiAwLTIzMi40MDMtMTg5LjEyNS00MjEuNTI3LTQyMS41OTctNDIxLjUyN3pNNTEyLjg1NSA4NTcuMDM1Yy0xODkuNzUyIDAtMzQ0LjA5NC0xNTQuMzA4LTM0NC4wOTQtMzQzLjk4OCAwLTE4OS42ODMgMTU0LjM0My0zNDMuOTkgMzQ0LjA5NC0zNDMuOTkgMTg5LjY4MiAwIDM0NC4wMjUgMTU0LjMwOCAzNDQuMDI1IDM0My45OSAwIDE4OS42ODItMTU0LjM0MyAzNDMuOTg4LTM0NC4wMjUgMzQzLjk4OHpNNzEyLjg0MyA2MTcuNDYybC0xNjEuMjM2LTEwNC42MjUgMC0yMTEuNTgyYzAtMjEuNDExLTE3LjMwMy0zOC43ODYtMzguNzUxLTM4Ljc4NnMtMzguNzg1IDE3LjM3NS0zOC43ODUgMzguNzg2bDAgMjUzLjY3NCAxOTYuNTA2IDEyNy41NjljNi41OCA0LjI0OCAxMy44OTEgNi4yNjcgMjEuMDk4IDYuMjY3IDEyLjcxIDAgMjUuMTc0LTYuMTk5IDMyLjU1NS0xNy42NTIgMTEuNjk5LTE4LjAwMSA2LjU0NS00MS45ODktMTEuMzg2LTUzLjY1MnoiIHAtaWQ9IjE3Mzc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 30px;height: 30px;" style="transform: rotate(0deg);"><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;text-align: center;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">已经到期未办理</p></div><div style="display: flex;width: 20%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="width: 50px;height: 50px;padding: 10px 0;position: relative;text-align: center;border-radius: 8px;background: rgb(247, 218, 71);"><img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDUxNDg3NDA4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Mzc1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi44NTUgOTEuNTE5Yy0yMzIuNTA3IDAtNDIxLjYzMiAxODkuMTI2LTQyMS42MzIgNDIxLjUyNyAwIDIzMi40MzYgMTg5LjEyNiA0MjEuNDkyIDQyMS42MzIgNDIxLjQ5MiAyMzIuNDcyIDAgNDIxLjU5Ny0xODkuMDU1IDQyMS41OTctNDIxLjQ5MiAwLTIzMi40MDMtMTg5LjEyNS00MjEuNTI3LTQyMS41OTctNDIxLjUyN3pNNTEyLjg1NSA4NTcuMDM1Yy0xODkuNzUyIDAtMzQ0LjA5NC0xNTQuMzA4LTM0NC4wOTQtMzQzLjk4OCAwLTE4OS42ODMgMTU0LjM0My0zNDMuOTkgMzQ0LjA5NC0zNDMuOTkgMTg5LjY4MiAwIDM0NC4wMjUgMTU0LjMwOCAzNDQuMDI1IDM0My45OSAwIDE4OS42ODItMTU0LjM0MyAzNDMuOTg4LTM0NC4wMjUgMzQzLjk4OHpNNzEyLjg0MyA2MTcuNDYybC0xNjEuMjM2LTEwNC42MjUgMC0yMTEuNTgyYzAtMjEuNDExLTE3LjMwMy0zOC43ODYtMzguNzUxLTM4Ljc4NnMtMzguNzg1IDE3LjM3NS0zOC43ODUgMzguNzg2bDAgMjUzLjY3NCAxOTYuNTA2IDEyNy41NjljNi41OCA0LjI0OCAxMy44OTEgNi4yNjcgMjEuMDk4IDYuMjY3IDEyLjcxIDAgMjUuMTc0LTYuMTk5IDMyLjU1NS0xNy42NTIgMTEuNjk5LTE4LjAwMSA2LjU0NS00MS45ODktMTEuMzg2LTUzLjY1MnoiIHAtaWQ9IjE3Mzc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 30px;height: 30px;transform: rotate(72deg);" style="transform: rotate(72deg);"><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;text-align: center;line-height: 18px;border-radius: 50%;background-color: #ff3000;">13</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有1天</p></div><div style="display: flex;width: 20%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="width: 50px;height: 50px;padding: 10px 0;position: relative;text-align: center;border-radius: 8px;background: rgb(88, 202, 154);"><img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDUxNDg3NDA4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Mzc1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi44NTUgOTEuNTE5Yy0yMzIuNTA3IDAtNDIxLjYzMiAxODkuMTI2LTQyMS42MzIgNDIxLjUyNyAwIDIzMi40MzYgMTg5LjEyNiA0MjEuNDkyIDQyMS42MzIgNDIxLjQ5MiAyMzIuNDcyIDAgNDIxLjU5Ny0xODkuMDU1IDQyMS41OTctNDIxLjQ5MiAwLTIzMi40MDMtMTg5LjEyNS00MjEuNTI3LTQyMS41OTctNDIxLjUyN3pNNTEyLjg1NSA4NTcuMDM1Yy0xODkuNzUyIDAtMzQ0LjA5NC0xNTQuMzA4LTM0NC4wOTQtMzQzLjk4OCAwLTE4OS42ODMgMTU0LjM0My0zNDMuOTkgMzQ0LjA5NC0zNDMuOTkgMTg5LjY4MiAwIDM0NC4wMjUgMTU0LjMwOCAzNDQuMDI1IDM0My45OSAwIDE4OS42ODItMTU0LjM0MyAzNDMuOTg4LTM0NC4wMjUgMzQzLjk4OHpNNzEyLjg0MyA2MTcuNDYybC0xNjEuMjM2LTEwNC42MjUgMC0yMTEuNTgyYzAtMjEuNDExLTE3LjMwMy0zOC43ODYtMzguNzUxLTM4Ljc4NnMtMzguNzg1IDE3LjM3NS0zOC43ODUgMzguNzg2bDAgMjUzLjY3NCAxOTYuNTA2IDEyNy41NjljNi41OCA0LjI0OCAxMy44OTEgNi4yNjcgMjEuMDk4IDYuMjY3IDEyLjcxIDAgMjUuMTc0LTYuMTk5IDMyLjU1NS0xNy42NTIgMTEuNjk5LTE4LjAwMSA2LjU0NS00MS45ODktMTEuMzg2LTUzLjY1MnoiIHAtaWQ9IjE3Mzc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 30px;height: 30px;transform: rotate(144deg);" style="transform: rotate(144deg);"><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;text-align: center;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有5天</p></div><div style="display: flex;width: 20%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="width: 50px;height: 50px;padding: 10px 0;position: relative;text-align: center;border-radius: 8px;background: rgb(238, 112, 109);"><img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDUxNDg3NDA4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Mzc1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi44NTUgOTEuNTE5Yy0yMzIuNTA3IDAtNDIxLjYzMiAxODkuMTI2LTQyMS42MzIgNDIxLjUyNyAwIDIzMi40MzYgMTg5LjEyNiA0MjEuNDkyIDQyMS42MzIgNDIxLjQ5MiAyMzIuNDcyIDAgNDIxLjU5Ny0xODkuMDU1IDQyMS41OTctNDIxLjQ5MiAwLTIzMi40MDMtMTg5LjEyNS00MjEuNTI3LTQyMS41OTctNDIxLjUyN3pNNTEyLjg1NSA4NTcuMDM1Yy0xODkuNzUyIDAtMzQ0LjA5NC0xNTQuMzA4LTM0NC4wOTQtMzQzLjk4OCAwLTE4OS42ODMgMTU0LjM0My0zNDMuOTkgMzQ0LjA5NC0zNDMuOTkgMTg5LjY4MiAwIDM0NC4wMjUgMTU0LjMwOCAzNDQuMDI1IDM0My45OSAwIDE4OS42ODItMTU0LjM0MyAzNDMuOTg4LTM0NC4wMjUgMzQzLjk4OHpNNzEyLjg0MyA2MTcuNDYybC0xNjEuMjM2LTEwNC42MjUgMC0yMTEuNTgyYzAtMjEuNDExLTE3LjMwMy0zOC43ODYtMzguNzUxLTM4Ljc4NnMtMzguNzg1IDE3LjM3NS0zOC43ODUgMzguNzg2bDAgMjUzLjY3NCAxOTYuNTA2IDEyNy41NjljNi41OCA0LjI0OCAxMy44OTEgNi4yNjcgMjEuMDk4IDYuMjY3IDEyLjcxIDAgMjUuMTc0LTYuMTk5IDMyLjU1NS0xNy42NTIgMTEuNjk5LTE4LjAwMSA2LjU0NS00MS45ODktMTEuMzg2LTUzLjY1MnoiIHAtaWQ9IjE3Mzc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 30px;height: 30px;transform: rotate(200deg);" style="transform: rotate(216deg);"><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;text-align: center;line-height: 18px;border-radius: 50%;background-color: #ff3000;">2</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有15天</p></div><div style="display: flex;width: 20%;cursor: pointer;align-items: center;flex-direction: column;justify-content: center;"><div style="width: 50px;height: 50px;padding: 10px 0;position: relative;text-align: center;border-radius: 8px;background: rgb(68, 126, 255);"><img alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5MDUxNDg3NDA4IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Mzc1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi44NTUgOTEuNTE5Yy0yMzIuNTA3IDAtNDIxLjYzMiAxODkuMTI2LTQyMS42MzIgNDIxLjUyNyAwIDIzMi40MzYgMTg5LjEyNiA0MjEuNDkyIDQyMS42MzIgNDIxLjQ5MiAyMzIuNDcyIDAgNDIxLjU5Ny0xODkuMDU1IDQyMS41OTctNDIxLjQ5MiAwLTIzMi40MDMtMTg5LjEyNS00MjEuNTI3LTQyMS41OTctNDIxLjUyN3pNNTEyLjg1NSA4NTcuMDM1Yy0xODkuNzUyIDAtMzQ0LjA5NC0xNTQuMzA4LTM0NC4wOTQtMzQzLjk4OCAwLTE4OS42ODMgMTU0LjM0My0zNDMuOTkgMzQ0LjA5NC0zNDMuOTkgMTg5LjY4MiAwIDM0NC4wMjUgMTU0LjMwOCAzNDQuMDI1IDM0My45OSAwIDE4OS42ODItMTU0LjM0MyAzNDMuOTg4LTM0NC4wMjUgMzQzLjk4OHpNNzEyLjg0MyA2MTcuNDYybC0xNjEuMjM2LTEwNC42MjUgMC0yMTEuNTgyYzAtMjEuNDExLTE3LjMwMy0zOC43ODYtMzguNzUxLTM4Ljc4NnMtMzguNzg1IDE3LjM3NS0zOC43ODUgMzguNzg2bDAgMjUzLjY3NCAxOTYuNTA2IDEyNy41NjljNi41OCA0LjI0OCAxMy44OTEgNi4yNjcgMjEuMDk4IDYuMjY3IDEyLjcxIDAgMjUuMTc0LTYuMTk5IDMyLjU1NS0xNy42NTIgMTEuNjk5LTE4LjAwMSA2LjU0NS00MS45ODktMTEuMzg2LTUzLjY1MnoiIHAtaWQ9IjE3Mzc2IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+" style="width: 30px;height: 30px;transform: rotate(288deg);" style="transform: rotate(288deg);"><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;text-align: center;line-height: 18px;border-radius: 50%;background-color: #ff3000;">0</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有30天</p></div></div>'
                  },
                  type: "component"
                }
              },
              type: "card",
              style: {
                width: "49%",
                "margin-top": "20px"
              }
            }
          }
        }
      },
      type: "router"
    }
  },
  config: {
    materiels: {}
  }
};

ams.block("government", config);
