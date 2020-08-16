import ams from "@ams-team/ams";

const config = {
  resources: {
    allAppList: {
      api: {
        prefix:
          "https://www.easy-mock.com/mock/5d1b56ca5594fb3177097d89/wwjTest/allApplication/",
        list: "list"
      },
      fields: {
        app_id: {
          type: "text",
          label: "ID"
        },
        app_name: {
          type: "text",
          label: "应用名"
        },
        app_level: {
          type: "text",
          label: "等级"
        },
        app_owner: {
          type: "text",
          label: "Owner"
        },
        app_status: {
          type: "text",
          label: "状态"
        }
      }
    },
    applyForm: {
      fields: {
        operations: {
          type: "select",
          label: "操作类型",
          rules: {
            required: true,
            trigger: "blur",
            message: "必选"
          },
          props: {
            minWidth: 150,
            options: [
              {
                value: 0,
                label: "账号删除"
              },
              {
                value: 1,
                label: "账号添加"
              }
            ]
          },
          style: {
            width: "100%"
          }
        },
        operSys: {
          type: "select",
          label: "操作系统",
          rules: {
            trigger: "blur"
          },
          props: {
            minWidth: 150,
            options: [
              {
                value: 0,
                label: "Linux"
              }
            ]
          },
          style: {
            width: "100%"
          }
        },
        operPermission: {
          type: "select",
          label: "操作权限",
          rules: {
            trigger: "blur"
          },
          props: {
            minWidth: 150,
            options: [
              {
                value: 0,
                label: "一般用户"
              },
              {
                value: 1,
                label: "应用管理员"
              },
              {
                value: 2,
                label: "系统管理员"
              }
            ]
          },
          style: {
            width: "100%"
          }
        },
        operTimeLimit: {
          type: "select",
          label: "操作期限",
          rules: {
            trigger: "blur"
          },
          props: {
            minWidth: 150,
            options: [
              {
                value: 0,
                label: "一周"
              },
              {
                value: 1,
                label: "一个月"
              },
              {
                value: 2,
                label: "一年"
              }
            ]
          },
          style: {
            width: "100%"
          }
        },
        applyContent: {
          type: "textarea",
          label: "申请内容",
          rules: {
            required: true,
            trigger: "blur",
            message: "请填写申请内容"
          },
          collapseLimit: 15,
          props: {
            minWidth: 150,
            placeholder: "请输入机器ip，支持多个，逗号或换行分割",
            clearable: true
          },
          style: {
            width: "100%"
          }
        },
        applyReason: {
          type: "textarea",
          label: "申请理由",
          rules: {
            trigger: "blur"
          },
          props: {
            minWidth: 150
          },
          style: {
            width: "100%"
          }
        }
      }
    },
    myReleaseList: {
      api: {
        prefix:
          "https://www.easy-mock.com/mock/5d1b56ca5594fb3177097d89/wwjTest/myApplication/",
        list: "list"
      },
      fields: {
        release_id: {
          type: "text",
          label: "发布单ID"
        },
        app_name: {
          type: "text",
          label: "应用名"
        },
        type: {
          type: "text",
          label: "类型"
        },
        environment: {
          type: "text",
          label: "发布环境"
        },
        status: {
          type: "text",
          label: "状态"
        },
        schedule: {
          type: "progress",
          label: "进度"
        },
        publisher: {
          type: "text",
          label: "发布者"
        },
        failPercentage: {
          type: "text",
          label: "失败机器占比"
        },
        time: {
          type: "text",
          label: "发布时间"
        }
      }
    },
    appInfo1: {
      api: {
        prefix:
          "https://www.easy-mock.com/mock/5d1b56ca5594fb3177097d89/wwjTest/myApplication/",
        list: "list"
      },
      fields: {
        app_name: {
          type: "text",
          label: "名称"
        },
        app_creator: {
          type: "text",
          label: "创建人"
        },
        type: {
          type: "text",
          label: "场景类型"
        },
        modify_time: {
          type: "text",
          label: "最近修改时间"
        },
        users: {
          type: "text",
          label: "使用人数"
        }
      }
    },
    appInfo2: {
      api: {
        prefix:
          "https://www.easy-mock.com/mock/5d1b56ca5594fb3177097d89/wwjTest/myApplication/",
        list: "list"
      },
      fields: {
        status: {
          type: "text",
          label: "状态"
        },
        created_time: {
          type: "text",
          label: "创建时间"
        },
        belong_company: {
          type: "text",
          label: "所属公司"
        },
        latest_version: {
          type: "text",
          label: "最新版本号"
        },
        download_times: {
          type: "text",
          label: "下载量"
        }
      }
    }
  },
  blocks: {
    routerBlock: {
      type: "router",
      router: {
        defaultBreadcrumb: true,
        routes: [
          {
            path: "",
            name: "我的应用",
            meta: {
              icon: "menu"
            },
            block: "myAppBlock"
          },
          {
            path: "search",
            name: "应用查询",
            block: "searchBlock",
            meta: {
              icon: "search",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "apply",
            name: "账号申请",
            block: "applyBlock",
            meta: {
              icon: "edit",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "detail",
            name: "应用详情",
            block: "detailBlock",
            meta: {
              icon: "document",
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
            text: "应用管理系统"
          },
          type: "component",
          slot: "menuTop",
          style: {
            color: "#fff",
            "font-size": "20px",
            "margin-bottom": "10px",
            "font-family": "Roboto",
            "padding-top": "20px",
            "padding-left": "15px "
          }
        },
        navRightNav: {
          type: "component",
          options: {
            is: "div"
          },
          operations: {
            feedback: {
              type: "button",
              label: "反馈",
              style: {
                "margin-top": "10px",
                "margin-right": "15px"
              },
              props: {
                type: "text",
                icon: "el-icon-document",
                size: "large"
              }
            },
            help: {
              type: "button",
              label: "帮助",
              style: {
                "margin-top": "10px",
                "margin-right": "15px"
              },
              props: {
                type: "text",
                icon: "el-icon-question",
                size: "large"
              }
            },
            myHome: {
              type: "button",
              label: "我的主页",
              style: {
                "margin-top": "10px",
                "margin-right": "15px"
              },
              props: {
                type: "text",
                icon: "el-icon-info",
                size: "large"
              }
            },
            exit: {
              type: "button",
              label: "退出",
              style: {
                "margin-top": "10px",
                "margin-right": "50px"
              },
              props: {
                type: "text",
                icon: "el-icon-back",
                size: "large"
              }
            }
          },
          actions: {
            feedback: function() {
              window.location.href = "https://vipshop.github.io/ams/";
            },
            help: function() {
              window.location.href = "https://vipshop.github.io/ams/";
            },
            myHome: function() {
              // 跳转到我的主页
            },
            exit: function() {
              // 退出到登录页面
            }
          },
          slot: "nav"
        },
        searchBlock: {
          type: "list",
          resource: "allAppList",
          operations: {
            name: {
              slot: "searchs",
              type: "field",
              field: "app_name",
              label: "应用名"
            },
            status: {
              slot: "searchs",
              type: "field",
              field: "app_status",
              label: "状态"
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
            reset: {
              slot: "searchs",
              type: "reset",
              label: "重置",
              event: "list"
            },
            editItem: {
              type: "button",
              props: {
                type: "primary",
                icon: "el-icon-upload2",
                circle: true
              }
            }
          },
          events: {
            init: "@list"
          },
          actions: {
            list: function(...args) {
              return new Promise((resolve, reject) => {
                this.$ams.actions.list.call(this, {
                  ...args,
                  success(res) {
                    if (res.data.code === 0 && res.data.data) {
                      this.data.list = res.data.data;
                      this.data.total = res.data.total;
                      resolve();
                    } else {
                      this.$message.error(`${res.data.msg}(${res.data.code})`);
                      reject();
                    }
                  }
                });
              });
            }
          }
        },
        applyBlock: {
          blocks: {
            applyTitle: {
              type: "card",
              options: {
                headerTitle: "服务器账号申请"
              },
              style: {
                border: "0px",
                boxShadow: "none",
                marginBottom: "-40px"
              }
            },
            applyForm: {
              type: "form",
              ctx: "edit",
              resource: "applyForm",
              style: {
                margin: "40px 0px 0px 70px",
                width: "40%"
              },
              operations: {
                save: {
                  type: "button",
                  label: "提交",
                  props: {
                    type: "primary"
                  }
                }
              },
              events: {
                save: "@validate @save"
              },
              actions: {
                save: function() {
                  const applyData = this.data; // data就是form中的内容
                  this.$alert(
                    "这是”保存“按钮事件响应Demo效果，可在区块配置的“actions”里修改～"
                  );
                }
              }
            }
          }
        },
        myAppBlock: {
          type: "card",
          blocks: {
            myApp1: {
              type: "card",
              style: {
                width: "49%",
                height: "200px"
              },
              blocks: {
                myApp1Title: {
                  type: "title",
                  options: {
                    title: "vip-management",
                    subTitle: "唯小宝管理后台"
                  },
                  style: {
                    width: "40%",
                    "border-bottom": "1px solid rgb(240, 240, 240)",
                    padding: "20px 0px 40px"
                  },
                  slot: "header"
                },
                app1Tag: {
                  type: "component",
                  options: {
                    is: "div"
                  },
                  style: {
                    width: "60%",
                    "border-bottom": "1px solid rgb(240, 240, 240)",
                    padding: "40px 0px 60px"
                  },
                  blocks: {
                    app1TagContent: {
                      type: "component",
                      options: {
                        is: "span",
                        text: "核心应用"
                      },
                      style: {
                        width: "80px",
                        border: "1px solid rgb(255, 173, 210)",
                        background: "rgb(255, 240, 246)",
                        height: "30px",
                        "margin-left": "auto",
                        "text-align": "center",
                        "line-height": "30px",
                        color: "rgb(235, 47, 150)",
                        "border-radius": "50px",
                        "font-size": "14px",
                        right: "20px"
                      }
                    }
                  },
                  slot: "header"
                },
                app1QPS: {
                  type: "component",
                  options: {
                    is: "span",
                    text: "QPS 5140.97/s"
                  },
                  style: {
                    width: "50%",
                    "line-height": "30px",
                    "text-align": "center",
                    "border-right": "1px solid rgb(240, 240, 240)"
                  }
                },
                app1Machine: {
                  type: "component",
                  options: {
                    is: "span",
                    text: "机器数 91"
                  },
                  style: {
                    width: "50%",
                    "line-height": "30px",
                    "text-align": "center"
                  }
                }
              }
            },
            myApp2: {
              type: "card",
              style: {
                width: "49%",
                height: "200px",
                "margin-left": "20px"
              },
              blocks: {
                myApp2Title: {
                  type: "title",
                  options: {
                    title: "content-management",
                    subTitle: "内容管理后台"
                  },
                  style: {
                    width: "100",
                    "border-bottom": "1px solid rgb(240, 240, 240)",
                    padding: "20px 0px 40px"
                  },
                  slot: "header"
                },
                app2QPS: {
                  type: "component",
                  options: {
                    is: "span",
                    text: "QPS 5140.97/s"
                  },
                  style: {
                    width: "50%",
                    "line-height": "30px",
                    "text-align": "center",
                    "border-right": "1px solid rgb(240, 240, 240)"
                  }
                },
                app2Machine: {
                  type: "component",
                  options: {
                    is: "span",
                    text: "机器数 91"
                  },
                  style: {
                    width: "50%",
                    "line-height": "30px",
                    "text-align": "center"
                  }
                }
              }
            },
            averageTime: {
              type: "card",
              style: {
                flex: 1,
                height: "260px",
                margin: "20px 20px 0 0"
              },
              blocks: {
                aveTimeTitle: {
                  type: "title",
                  options: {
                    title: "平均发布时长"
                  },
                  style: {
                    width: "100"
                  },
                  slot: "header"
                },
                aveTime: {
                  type: "component",
                  options: {
                    is: "span",
                    text: "626s"
                  },
                  style: {
                    width: "40%",
                    "line-height": "150px",
                    "font-size": "32px",
                    color: "#3080fe",
                    "text-align": "center"
                  }
                },
                aveTimeDetail: {
                  type: "form",
                  ctx: "view",
                  resource: {
                    fields: {
                      longest: {
                        type: "text",
                        label: "XX机器",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      },
                      other: {
                        type: "text",
                        label: "其他机器",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      },
                      ringRatio: {
                        type: "text",
                        label: "周环比",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      }
                    }
                  },
                  data: {
                    longest: "922s",
                    other: "331s",
                    ringRatio: "0s"
                  },
                  style: {
                    width: "60%",
                    "text-align": "center"
                  }
                }
              }
            },
            weekTimes: {
              type: "card",
              style: {
                flex: 1,
                height: "260px",
                margin: "20px 20px 0 0"
              },
              blocks: {
                weekTimesTitle: {
                  type: "title",
                  options: {
                    title: "周发布次数"
                  },
                  style: {
                    width: "100"
                  },
                  slot: "header"
                },
                weekTimesChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "150px"
                  },
                  data: {
                    series: [209, 352, 200, 49, 39, 10]
                  },
                  options: {
                    color: ["rgb(48, 128, 254)"],
                    tooltip: {
                      trigger: "axis"
                    },
                    grid: {
                      top: 10,
                      bottom: 20
                    },
                    xAxis: {
                      type: "category",
                      data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日"
                      ]
                    },
                    yAxis: {
                      type: "value"
                    },
                    series: [
                      {
                        type: "bar",
                        data: [2, 4, 6, 8, 3, 2, 1]
                      }
                    ]
                  }
                }
              }
            },
            accuracy: {
              type: "card",
              style: {
                flex: 1,
                height: "260px",
                "margin-top": "20px"
              },
              blocks: {
                accuracyTitle: {
                  type: "title",
                  options: {
                    title: "无人值守准确率"
                  },
                  style: {
                    width: "100"
                  },
                  slot: "header"
                },
                accuracyChart: {
                  type: "chart",
                  style: {
                    width: "50%",
                    height: "150px"
                  },
                  options: {
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                      {
                        name: "无人值守准确率",
                        type: "pie",
                        radius: ["70%", "80%"],
                        avoidLabelOverlap: false,
                        label: {
                          normal: {
                            show: false,
                            position: "center"
                          },
                          emphasis: {
                            show: true,
                            textStyle: {
                              fontSize: "15",
                              fontWeight: "bold"
                            }
                          }
                        },
                        labelLine: {
                          normal: {
                            show: false
                          }
                        },
                        data: [
                          {
                            value: 100,
                            name: "100%"
                          }
                        ]
                      }
                    ]
                  }
                },
                accuracyForm: {
                  type: "form",
                  ctx: "view",
                  resource: {
                    fields: {
                      accuracy_rate: {
                        type: "text",
                        label: "准确率",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      },
                      call_rate: {
                        type: "text",
                        label: "召唤率",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      },
                      ringRatio: {
                        type: "text",
                        label: "周环比",
                        style: {
                          "font-size": "16px",
                          "font-weight": "700"
                        }
                      }
                    }
                  },
                  data: {
                    accuracy_rate: "100%",
                    call_rate: "100%",
                    ringRatio: "0%"
                  },
                  style: {
                    width: "50%",
                    "text-align": "center"
                  }
                }
              }
            },
            myAppList: {
              type: "card",
              style: {
                "margin-top": "20px"
              },
              blocks: {
                myAppListTitle: {
                  type: "title",
                  options: {
                    title: "我的发布单"
                  },
                  style: {
                    width: "100"
                  },
                  slot: "header"
                },
                myAppListContent: {
                  type: "list",
                  resource: "myReleaseList",
                  style: {
                    "margin-top": "0px"
                  },
                  events: {
                    init: "@list"
                  },
                  actions: {
                    list: function(...args) {
                      return new Promise((resolve, reject) => {
                        this.$ams.actions.list.call(this, {
                          ...args,
                          success(res) {
                            console.log("list", res);
                            if (res.data.code === 0 && res.data.data) {
                              this.data.list = res.data.data;
                              this.data.total = res.data.total;
                              resolve();
                            } else {
                              this.$message.error(
                                `${res.data.msg}(${res.data.code})`
                              );
                              reject();
                            }
                          }
                        });
                      });
                    }
                  }
                }
              }
            }
          }
        },
        detailBlock: {
          blocks: {
            resource_overview: {
              type: "card",
              style: {
                "margin-bottom": "20px",
                width: "99.4%"
              },
              blocks: {
                resOverviewTitle: {
                  type: "title",
                  options: {
                    title: "资源概览"
                  },
                  slot: "header"
                },
                onlineHost: {
                  type: "component",
                  style: {
                    flex: 1,
                    "padding-right": "20px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="min-height:125px;background:#f7f8fa;border-radius:4px;padding:12px;display:flex;flex-direction: column;">\n                                  <div><i class="el-icon-upload2" style="background: #4cb587;color: white;width: 30px;height: 30px;\n                                  text-align: center;line-height: 30px;border-radius: 5px;"></i><span style="padding-left: 8px;">线上主机</span></div>\n                                  <div style="margin-top: 20px;"><span style="font-size: 20px;color: #333;">72</span><span>台</span></div>\n                                  <div style="font-size: 12px;color: #999;padding-top: 2px;">DOCKER</div></div>'
                  }
                },
                hostBudget: {
                  type: "component",
                  style: {
                    flex: 2,
                    "padding-right": "20px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="min-height:125px;background:#f7f8fa;border-radius:4px;padding:12px;display:flex;flex-direction: column;">\n                                  <div><i class="el-icon-download" style="background: #ec7a0e;color: white;width: 30px;height: 30px;text-align: center;line-height: 30px;border-radius: 5px;"></i>\n                                  <span style="padding-left: 8px;">主机预算</span></div><div style="margin-top: 20px;display: flex;flex-direction: row;"><div style="flex: 1;">\n                                  <span style="font-size: 20px;color: #333;">100</span><span>台</span><div style="font-size: 12px;color: #999;padding-top: 2px;">总预算</div>\n                                  </div><div style="flex: 1"><span style="font-size: 20px;color: #333;">72</span><span>台</span><div style="font-size: 12px;color: #999;padding-top: 2px;">已用</div></div>\n                                  <div style="flex: 1"><span style="font-size: 20px;color: #333;">28</span><span>台</span><div style="font-size: 12px;color: #999;padding-top: 2px;">剩余</div></div></div></div>'
                  }
                },
                appBaseline: {
                  type: "component",
                  style: {
                    flex: 1,
                    "padding-right": "20px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="min-height:125px;background:#f7f8fa;border-radius:4px;padding:12px;display:flex;flex-direction: column;">\n                                <div><i class="el-icon-refresh-right" style="background: #5485f7;color: white;width: 30px;height: 30px;text-align: center;line-height: 30px;\n                                border-radius: 5px;"></i><span style="padding-left: 8px;">线上主机</span></div><div style="margin-top: 20px;">\n                                <span style="font-size: 20px;color: #333;">4核 8G 60G</span></div><div style="font-size: 12px;color: #999;padding-top: 2px;">机型</div></div>'
                  }
                },
                loadBalancing: {
                  type: "component",
                  style: {
                    flex: 1
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="min-height:125px;background:#f7f8fa;border-radius:4px;padding:12px;display:flex;flex-direction: column;"><div>\n                                <i class="el-icon-bottom" style="background: #f7da47;color: white;width: 30px;height: 30px;text-align: center;line-height: 30px;border-radius: 5px;"></i>\n                                <span style="padding-left: 8px;">负载均衡</span></div><div style="margin-top: 20px;display: flex;flex-direction: row;"><div style="flex: 1;">\n                                <span style="font-size: 20px;color: #333;">0</span><span>个</span><div style="font-size: 12px;color: #999;padding-top: 2px;">Load Balancer 01</div>\n                                </div><div style="flex: 1"><span style="font-size: 20px;color: #333;">11</span><span>个</span><div style="font-size: 12px;color: #999;padding-top: 2px;">Load Balancer 02</div></div>\n                                </div></div>'
                  }
                }
              }
            },
            QPSApp: {
              type: "card",
              style: {
                width: "49%"
              },
              blocks: {
                QPSTitle: {
                  type: "title",
                  options: {
                    title: "应用QPS"
                  },
                  slot: "header"
                },
                QPSChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    xAxis: [
                      "13:50:00",
                      "13:51:00",
                      "13:52:00",
                      "13:53:00",
                      "13:54:00",
                      "13:55:00"
                    ],
                    series: [5100, 5200, 5300, 5200, 5400, 5200]
                  },
                  options: {
                    BASE: "line",
                    xAxis: {
                      type: "category",
                      data: "data.xAxis"
                    },
                    yAxis: {
                      type: "value",
                      min: 4000,
                      max: 6000
                    },
                    tooltip: {
                      trigger: "axis"
                    },
                    legend: {
                      data: ["应用QPS"]
                    },
                    series: [
                      {
                        name: "应用QPS",
                        data: "data.series",
                        type: "line",
                        smooth: true
                      }
                    ]
                  }
                }
              }
            },
            RTApp: {
              type: "card",
              style: {
                width: "49%",
                "margin-left": "20px"
              },
              blocks: {
                RTTitle: {
                  type: "title",
                  options: {
                    title: "应用RT"
                  },
                  slot: "header"
                },
                RTChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    xAxis: [
                      "13:50:00",
                      "13:51:00",
                      "13:52:00",
                      "13:53:00",
                      "13:54:00",
                      "13:55:00"
                    ],
                    series: [60, 70, 63, 78, 72, 70]
                  },
                  options: {
                    BASE: "line",
                    xAxis: {
                      type: "category",
                      data: "data.xAxis"
                    },
                    yAxis: {
                      type: "value",
                      min: 0,
                      max: 200
                    },
                    tooltip: {
                      trigger: "axis"
                    },
                    legend: {
                      data: ["应用RT"]
                    },
                    series: [
                      {
                        name: "应用RT",
                        data: "data.series",
                        type: "line",
                        smooth: true
                      }
                    ]
                  }
                }
              }
            },
            CPUUseRate: {
              type: "card",
              style: {
                "margin-top": "20px",
                width: "99.4%"
              },
              blocks: {
                CPUTitle: {
                  type: "title",
                  options: {
                    title: "CPU利用率"
                  },
                  slot: "header"
                },
                CPUChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    xAxis: [
                      "13:50:00",
                      "13:51:00",
                      "13:52:00",
                      "13:53:00",
                      "13:54:00",
                      "13:55:00"
                    ],
                    series: [12.1, 13.2, 17.1, 12.7, 16.3, 12.9]
                  },
                  options: {
                    BASE: "line",
                    xAxis: {
                      type: "category",
                      data: "data.xAxis"
                    },
                    yAxis: {
                      type: "value",
                      min: 0,
                      max: 100
                    },
                    tooltip: {
                      trigger: "axis"
                    },
                    legend: {
                      data: ["CPU利用率"]
                    },
                    series: [
                      {
                        name: "CPU利用率",
                        data: "data.series",
                        type: "line",
                        smooth: true
                      }
                    ]
                  }
                }
              }
            },
            appInfo: {
              type: "card",
              style: {
                "margin-top": "20px",
                width: "99.4%"
              },
              blocks: {
                appInfoTitle: {
                  type: "title",
                  options: {
                    title: "应用信息"
                  },
                  slot: "header"
                },
                appInfoForm1: {
                  type: "form",
                  ctx: "view",
                  resource: "appInfo1",
                  data: {
                    app_name: "唯品会",
                    app_creator: "唯小宝",
                    type: "电子商务",
                    modify_time: "2019-07-08 10:03:31",
                    users: "666888"
                  },
                  style: {
                    width: "50%",
                    "margin-left": "40px",
                    "border-right": "1px solid #eee",
                    "text-align": "center"
                  }
                },
                appInfoForm2: {
                  type: "form",
                  ctx: "view",
                  resource: "appInfo2",
                  data: {
                    status: "已上线",
                    created_time: "2019-07-08 10:03:31",
                    belong_company: "唯品会",
                    latest_version: "1.0.0",
                    download_times: "666888"
                  },
                  style: {
                    width: "40%",
                    "text-align": "center"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  config: {
    materiels: {}
  }
};

ams.block("app", config);
