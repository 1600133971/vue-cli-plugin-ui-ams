import ams from "@ams-team/ams";

const config = {
  resources: {
    order: {
      api: {
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/order/",
        read: "read",
        update: "",
        list: "list",
        delete: "",
        create: "",
        withCredentials: true,
        contentType: "json",
        successCode: 0
      },
      fields: {
        orderNo: {
          type: "text",
          label: "订单编号",
          ctx: "view",
          props: {
            placeholder: "请输入订单编号"
          }
        },
        goodsNo: {
          type: "text",
          label: "商品编号",
          props: {
            placeholder: "请输入商品编号"
          }
        },
        name: {
          type: "text",
          label: "订单名称",
          props: {
            placeholder: "请输入订单名称"
          }
        },
        payment: {
          type: "select",
          label: "付款方式",
          props: {
            multiple: false,
            options: {
              a: "银行卡付款",
              b: "微信付款",
              c: "支付宝付款"
            }
          }
        },
        type: {
          type: "select",
          label: "订单类型",
          props: {
            multiple: false,
            options: {
              a: "普通订单",
              b: "代付订单"
            }
          }
        },
        createTime: {
          type: "datetime",
          label: "创建时间"
        },
        shipping: {
          type: "select",
          label: "物流方式",
          props: {
            multiple: false,
            options: {
              a: "同城配送",
              b: "上门自提",
              c: "快递发货"
            }
          }
        },
        status: {
          type: "select",
          label: "订单状态",
          props: {
            multiple: false,
            options: {
              a: "代付款",
              b: "代收货",
              c: "已完成",
              d: "已取消"
            }
          }
        }
      }
    },
    goods: {
      api: {
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list",
        contentType: "json",
        successCode: 0,
        withCredentials: true,
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/goods/"
      },
      fields: {
        name: {
          type: "text",
          label: "商品名称",
          props: {
            placeholder: "请输入商品名称"
          }
        },
        goodsClass: {
          type: "select",
          label: "商品分类",
          props: {
            multiple: false,
            options: {
              a: "数码",
              b: "智能",
              c: "新品"
            }
          }
        },
        goodsTag: {
          type: "tag",
          label: "商品标签",
          props: {
            placeholder: "请输入标签",
            action:
              "https://www.easy-mock.com/mock/5a0023effbbb09615044cb82/tag",
            size: "mini",
            withCredentials: true,
            closable: true,
            button: "+ 添加标签",
            successCode: 200
          }
        },
        store: {
          type: "select",
          label: "在售门店",
          props: {
            multiple: false,
            options: {
              a: "余杭店",
              b: "滨江店",
              c: "西湖店"
            }
          }
        },
        totalSales: {
          type: "text",
          label: "总销量"
        },
        service: {
          type: "select",
          label: "商品服务",
          props: {
            multiple: false,
            options: {
              a: "可体验",
              b: "不可体验"
            }
          }
        }
      }
    },
    dispatch: {
      api: {
        create: "create",
        update: "update",
        read: "read",
        delete: "delete",
        list: "list",
        contentType: "json",
        successCode: 0,
        withCredentials: true,
        prefix: "https://easy-mock.com/mock/5a0023effbbb09615044cb82/dispatch/"
      },
      fields: {
        serialNo: {
          type: "text",
          label: "流水号"
        },
        orderNo: {
          type: "text",
          label: "订单号"
        },
        name: {
          type: "text",
          label: "商品名称"
        },
        specification: {
          type: "text",
          label: "商品规格"
        },
        deliveryTime: {
          type: "datetime",
          label: "发货时间"
        },
        orderTime: {
          type: "datetime",
          label: "下单时间"
        },
        orderQuantity: {
          type: "text",
          label: "订购数量"
        },
        shippedQuantity: {
          type: "text",
          label: "已发货数量"
        },
        shippedQuantityAmount: {
          type: "text",
          label: "已发货商品金额"
        }
      }
    },
    chargeback: {
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
          "https://easy-mock.com/mock/5a0023effbbb09615044cb82/chargeback/"
      },
      fields: {
        chargebackNo: {
          type: "text",
          label: "退单号"
        },
        clientName: {
          type: "text",
          label: "客户名称"
        },
        orderTime: {
          type: "datetime",
          label: "下单时间"
        },
        goodsNo: {
          type: "text",
          label: "商品编码"
        },
        goodsName: {
          type: "text",
          label: "商品名称"
        },
        price: {
          type: "text",
          label: "价格"
        }
      }
    }
  },
  blocks: {
    routerBlock1: {
      type: "router",
      ctx: "view",
      router: {
        routes: [
          {
            path: "",
            name: "工作台",
            meta: {
              icon: "menu"
            },
            block: "componentBlock1"
          },
          {
            path: "orderReport",
            name: "订单报表",
            block: "componentBlock2",
            redirect: "",
            meta: {
              icon: "tickets",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "orderList",
            name: "订单管理",
            block: "orderlist",
            redirect: "",
            meta: {
              icon: "document",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "chargeback",
            name: "退单管理",
            block: "chargebackList",
            redirect: "",
            meta: {
              icon: "service",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "dispatch",
            name: "发货管理",
            block: "dispatchList",
            redirect: "",
            meta: {
              icon: "time",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          },
          {
            path: "goods",
            name: "商品管理",
            block: "goodsList",
            redirect: "",
            meta: {
              icon: "goods",
              hasMenu: true,
              hidden: false,
              noRedirect: false
            }
          }
        ]
      },
      blocks: {
        orderlist: {
          type: "list",
          ctx: "view",
          blocks: {
            dialogBlock1: {
              type: "dialog",
              ctx: "view",
              blocks: {
                formBlock1: {
                  type: "form",
                  ctx: "edit",
                  blocks: {},
                  resource: "order"
                }
              },
              data: {
                title: "添加订单"
              },
              props: {
                "append-to-body": true
              },
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
            dialogBlock2: {
              type: "dialog",
              ctx: "view",
              blocks: {
                formBlock2: {
                  type: "form",
                  ctx: "view",
                  blocks: {},
                  resource: "order",
                  events: {
                    init: "@read"
                  }
                }
              },
              data: {
                title: "订单详情"
              },
              props: {
                "append-to-body": true
              },
              events: {}
            }
          },
          resource: "order",
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @delete @list",
            addItem: "dialogBlock1.show",
            editItem: "dialogBlock2.show"
          },
          operations: {
            editItem: {
              type: "button",
              label: "查看",
              props: {
                type: "primary",
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
            },
            orderNo: {
              slot: "searchs",
              type: "field",
              label: "订单编号"
            },
            goodsNo: {
              slot: "searchs",
              type: "field",
              label: "商品编号"
            },
            requisitionNo: {
              slot: "searchs",
              type: "field",
              label: "申请单号",
              field: {
                type: "text",
                props: {
                  placeholder: "请输入申请单号"
                }
              }
            },
            name: {
              slot: "searchs",
              type: "field",
              label: "订单名称"
            },
            status: {
              slot: "searchs",
              type: "field",
              label: "订单状态"
            },
            type: {
              slot: "searchs",
              type: "field",
              label: "订单类型"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "搜索",
              props: {
                type: "primary"
              },
              event: "list:1"
            },
            reset: {
              slot: "searchs",
              type: "reset",
              label: "重置"
            },
            addItem: {
              type: "button",
              label: "添加订单",
              slot: "searchs"
            }
          },
          actions: {}
        },
        goodsList: {
          type: "list",
          ctx: "view",
          blocks: {
            dialogBlock3: {
              type: "dialog",
              ctx: "view",
              blocks: {
                formBlock3: {
                  type: "form",
                  ctx: "view",
                  blocks: {},
                  resource: "goods",
                  events: {
                    init: "@read"
                  }
                }
              },
              data: {
                title: "商品详情"
              },
              props: {
                "append-to-body": true
              }
            }
          },
          resource: "goods",
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @delete @list",
            editItem: "dialogBlock3.show"
          },
          operations: {
            name: {
              slot: "searchs",
              type: "field",
              label: "商品名称"
            },
            goodsClass: {
              slot: "searchs",
              type: "field",
              label: "商品分类"
            },
            store: {
              slot: "searchs",
              type: "field",
              label: "归属门店"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "搜索",
              props: {
                type: "primary"
              },
              event: "list:1"
            },
            editItem: {
              type: "button",
              label: "详情",
              props: {
                type: "primary",
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
          actions: {}
        },
        dispatchList: {
          type: "list",
          ctx: "view",
          blocks: {
            dialogBlock4: {
              type: "dialog",
              ctx: "view",
              blocks: {
                formBlock4: {
                  type: "form",
                  ctx: "view",
                  blocks: {},
                  resource: "dispatch",
                  events: {
                    init: "@read"
                  },
                  props: {
                    "label-width": "120px"
                  }
                }
              },
              data: {
                title: "详情"
              },
              props: {
                "append-to-body": true
              }
            }
          },
          resource: "dispatch",
          events: {
            init: "@list",
            removeItem: "@confirm:确认删除吗? @delete @list",
            editItem: "dialogBlock4.show"
          },
          operations: {
            editItem: {
              type: "button",
              label: "详情",
              props: {
                type: "primary",
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
            },
            deliveryTime: {
              slot: "searchs",
              type: "field",
              label: "发货时间",
              field: {
                type: "datetimerange"
              }
            },
            orderTime: {
              slot: "searchs",
              type: "field",
              label: "下单时间",
              field: {
                type: "datetimerange"
              }
            },
            name: {
              slot: "searchs",
              type: "field",
              label: "商品名称"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "搜索",
              props: {
                type: "primary"
              },
              event: "list:1"
            }
          },
          actions: {}
        },
        chargebackList: {
          type: "list",
          ctx: "view",
          blocks: {},
          resource: "chargeback",
          events: {
            init: "@list"
          },
          operations: {
            orderTime: {
              slot: "searchs",
              type: "field",
              label: "下单时间"
            },
            goodsName: {
              slot: "searchs",
              type: "field",
              label: "商品名称"
            },
            orderMethod: {
              slot: "searchs",
              type: "field",
              field: {
                type: "select",
                props: {
                  placeholder: "请选择",
                  clearable: true,
                  multiple: false,
                  options: {
                    a: "代下单",
                    b: "自主下单"
                  }
                }
              },
              label: "下单方式"
            },
            list: {
              slot: "searchs",
              type: "button",
              label: "搜索",
              props: {
                type: "primary"
              },
              event: "list:1"
            }
          },
          actions: {}
        },
        componentBlock1: {
          type: "component",
          ctx: "view",
          blocks: {
            componentBlock5: {
              type: "component",
              ctx: "view",
              blocks: {},
              operations: {},
              options: {
                html:
                  '<div dir="ltr" role="row" class="next-row next-row-wrap" style="display: flex;flex-wrap: wrap;margin-left: -10px; margin-right: -10px; margin-bottom: 20px;"><div dir="ltr" role="gridcell" class="next-col next-col-xxs-24 next-col-l-6" style="padding-left: 10px; padding-right: 10px;flex: 0 0 25%;width: 25%;"><div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); border-radius: 6px; padding: 20px; margin-bottom: 20px;border-top: 3px solid #5584ff;"><div class="SalesChart--content--3HwXGPk"><p style="margin: 0 0 30px;">年度总收入</p><div style="margin: 10px 0;display: flex;justify-content: space-between;"><h2 style="font-size: 28px;">￥298,234</h2><div style="display: flex;align-items: flex-end;margin-bottom: 4px;color: green;">12% <i class="next-icon next-icon-arrow-down-filling next-xs SalesChart--arrowIcon--3fNH1ni"></i></div></div></div></div></div><div dir="ltr" role="gridcell" class="next-col next-col-xxs-24 next-col-l-6" style="padding-left: 10px; padding-right: 10px;flex: 0 0 25%;width: 25%;"><div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); border-radius: 6px; padding: 20px; margin-bottom: 20px;border-top: 3px solid #5584ff;"><div class="SalesChart--content--3HwXGPk"><p style="margin: 0 0 30px;">年度总订单</p><div style="margin: 10px 0;display: flex;justify-content: space-between;"><h2 style="font-size: 28px;">13,293</h2><div style="display: flex;align-items: flex-end;margin-bottom: 4px;color: red;">15% <i class="next-icon next-icon-arrow-up-filling next-xs SalesChart--arrowIcon--3fNH1ni"></i></div></div></div></div></div><div dir="ltr" role="gridcell" class="next-col next-col-xxs-24 next-col-l-6" style="padding-left: 10px; padding-right: 10px;flex: 0 0 25%;width: 25%;"><div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); border-radius: 6px; padding: 20px; margin-bottom: 20px;border-top: 3px solid #5584ff;"><div class="SalesChart--content--3HwXGPk"><p style="margin: 0 0 30px;">年度退货单</p><div style="margin: 10px 0;display: flex;justify-content: space-between;"><h2 style="font-size: 28px;">2758</h2><div style="display: flex;align-items: flex-end;margin-bottom: 4px;color: green;">1.3% <i class="next-icon next-icon-arrow-down-filling next-xs SalesChart--arrowIcon--3fNH1ni"></i></div></div></div></div></div><div dir="ltr" role="gridcell" class="next-col next-col-xxs-24 next-col-l-6" style="padding-left: 10px; padding-right: 10px;flex: 0 0 25%;width: 25%;"><div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);border-radius: 6px; padding: 20px; margin-bottom: 20px;border-top: 3px solid #5584ff;"><div class="SalesChart--content--3HwXGPk"><p style="margin: 0 0 30px;">年度客户数</p><div style="margin: 10px 0;display: flex;justify-content: space-between;"><h2 style="font-size: 28px;">3,659</h2><div style="display: flex;align-items: flex-end;margin-bottom: 4px;color: red;">20% <i class="next-icon next-icon-arrow-up-filling next-xs SalesChart--arrowIcon--3fNH1ni"></i></div></div></div></div></div></div>'
              }
            },
            cardBlock1: {
              type: "card",
              ctx: "view",
              style: {
                width: "48%"
              },
              blocks: {
                chartBlock1: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    xAxis: [
                      "周二",
                      "周二",
                      "周二",
                      "周四",
                      "周五",
                      "周六",
                      "周日"
                    ],
                    series1: [120, 132, 101, 134, 90, 230, 210],
                    series2: [220, 182, 191, 234, 290, 330, 310],
                    legend: ["Europe", "Asia"]
                  },
                  options: {
                    type: "bar",
                    tooltip: {
                      show: true,
                      trigger: "axis"
                    },
                    legend: {
                      data: "data.legend"
                    },
                    xAxis: {
                      data: "data.xAxis"
                    },
                    series: [
                      {
                        name: "Europe",
                        data: "data.series1"
                      },
                      {
                        name: "Asia",
                        data: "data.series2"
                      }
                    ]
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "新增订单趋势"
              },
              actions: {}
            },
            cardBlock2: {
              type: "card",
              ctx: "view",
              blocks: {
                chartBlock2: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    legend: ["寄存式订单", "合约式订单", "一般订单"],
                    series: [
                      {
                        value: 335,
                        name: "寄存式订单"
                      },
                      {
                        value: 310,
                        name: "合约式订单"
                      },
                      {
                        value: 234,
                        name: "一般订单"
                      }
                    ]
                  },
                  options: {
                    BASE: "PIE",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "",
                        type: "pie",
                        radius: ["50%", "70%"],
                        data: "data.series"
                      }
                    ]
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "订单分类"
              },
              actions: {},
              style: {
                width: "24%",
                margin: "0 2%"
              }
            },
            cardBlock3: {
              type: "card",
              ctx: "view",
              blocks: {
                chartBlock3: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    legend: [],
                    xAxis: ["1", "2", "3", "4", "5", "6"],
                    series1: [120, 132, 101, 134, 90, 230]
                  },
                  options: {
                    BASE: "LINE",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "新增客户",
                        stack: "总量",
                        areaStyle: {},
                        data: "data.series1"
                      }
                    ]
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "新增客户趋势"
              },
              actions: {},
              style: {
                width: "24%"
              }
            },
            cardBlock4: {
              type: "card",
              ctx: "view",
              blocks: {
                listBlock1: {
                  type: "list",
                  ctx: "view",
                  blocks: {},
                  resource: "order",
                  events: {
                    init: "@list"
                  },
                  fields: {
                    payment: false
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "最近的订单"
              },
              actions: {},
              style: {
                margin: "20px 2% 0 0",
                width: "59%"
              }
            },
            cardBlock5: {
              type: "card",
              ctx: "view",
              blocks: {
                listBlock2: {
                  type: "list",
                  ctx: "view",
                  blocks: {},
                  resource: "chargeback",
                  events: {
                    init: "@list"
                  },
                  fields: {
                    chargebackNo: false,
                    orderTime: false,
                    goodsNo: false
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "最近退单"
              },
              actions: {},
              style: {
                "margin-top": "20px",
                width: "39%"
              }
            },
            cardBlock6: {
              type: "card",
              ctx: "view",
              blocks: {
                chartBlock4: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    legend: [],
                    xAxis: ["1", "2", "3", "4", "5", "6"],
                    series1: [120, 132, 101, 134, 90, 230]
                  },
                  options: {
                    BASE: "LINE",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "新增客户",
                        stack: "总量",
                        areaStyle: {},
                        data: "data.series1"
                      }
                    ]
                  },
                  blocks: {}
                }
              },
              operations: {},
              options: {
                headerTitle: "总营收"
              },
              actions: {},
              style: {
                width: "59%",
                margin: "20px 2% 0 0"
              }
            },
            cardBlock7: {
              type: "card",
              ctx: "view",
              blocks: {
                chartBlock5: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    legend: ["服装", "酒水", "家居"],
                    series: [
                      {
                        value: 335,
                        name: "服装"
                      },
                      {
                        value: 310,
                        name: "酒水"
                      },
                      {
                        value: 234,
                        name: "家居"
                      }
                    ]
                  },
                  options: {
                    BASE: "PIE",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "",
                        type: "pie",
                        radius: ["50%", "70%"],
                        data: "data.series"
                      }
                    ]
                  },
                  blocks: {}
                }
              },
              operations: {},
              options: {
                headerTitle: "营收类目"
              },
              actions: {},
              style: {
                margin: "20px 0 0 0",
                width: "39%"
              }
            }
          },
          operations: {},
          options: {}
        },
        componentBlock2: {
          type: "component",
          ctx: "view",
          blocks: {
            cardBlock9: {
              type: "card",
              ctx: "view",
              blocks: {
                componentBlock3: {
                  type: "component",
                  ctx: "view",
                  blocks: {},
                  operations: {},
                  options: {
                    html:
                      '<div dir="ltr" role="row" style="flex-wrap: wrap; display: flex;"><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex;width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; border-right: 1px solid rgb(240, 240, 240);"><div style="font-size: 12px; margin-bottom: 10px;">订货单 <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">12339</div></div><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex;width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; border-right: 1px solid rgb(240, 240, 240);"><div style="font-size: 12px; margin-bottom: 10px;">退货单(笔) <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">9523</div></div><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex;width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; border-right: 1px solid rgb(240, 240, 240);"><div style="font-size: 12px; margin-bottom: 10px;">订货客户数 <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">30149</div></div><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex; width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; border-right: 1px solid rgb(240, 240, 240);"><div style="font-size: 12px; margin-bottom: 10px;">退款客户数 <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">7493</div></div><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex;width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px; border-right: 1px solid rgb(240, 240, 240);"><div style="font-size: 12px; margin-bottom: 10px;">订货金额 <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">￥ 293439</div></div><div dir="ltr" role="gridcell" class="next-col next-col-l-4" style="display: flex;width: 16.66667%; flex-direction: column; justify-content: center; align-items: center; margin: 20px 0px;"><div style="font-size: 12px; margin-bottom: 10px;">退货金额(元) <i aria-haspopup="true" aria-expanded="false" class="next-icon next-icon-help next-xs"></i></div><div style="font-size: 22px; color: rgb(51, 51, 51); font-weight: bold;">￥ 8054</div></div></div>'
                  },
                  style: {}
                }
              },
              operations: {},
              options: {},
              actions: {}
            },
            cardBlock8: {
              type: "card",
              ctx: "view",
              blocks: {
                componentBlock4: {
                  type: "component",
                  ctx: "view",
                  blocks: {},
                  operations: {},
                  options: {
                    html:
                      '<div dir="ltr" role="row" style="flex-wrap: wrap; display: flex;"><div dir="ltr" role="gridcell" style="flex: 0 0 25%;width: 25%;"><div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;"><h2 style="display: flex; align-items: center; margin: 10px; font-size: 30px; font-weight: 400; color: rgba(0, 0, 0, 0.85);">5675 <i class="next-icon next-icon-arrow-down-filling next-xs" style="margin-left: 10px; color: green;"></i></h2><p style="margin: 0px; color: rgb(102, 102, 102);">日订单量</p></div></div><div dir="ltr" role="gridcell" style="flex: 0 0 25%;width: 25%;"><div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;"><h2 style="display: flex; align-items: center; margin: 10px; font-size: 30px; font-weight: 400; color: rgba(0, 0, 0, 0.85);">7841 <i class="next-icon next-icon-arrow-up-filling next-xs" style="margin-left: 10px; color: rgb(236, 63, 22);"></i></h2><p style="margin: 0px; color: rgb(102, 102, 102);">订单完成</p></div></div><div dir="ltr" role="gridcell" style="flex: 0 0 25%;width: 25%;"><div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;"><h2 style="display: flex; align-items: center; margin: 10px; font-size: 30px; font-weight: 400; color: rgba(0, 0, 0, 0.85);">6521 <i class="next-icon next-icon-arrow-down-filling next-xs" style="margin-left: 10px; color: green;"></i></h2><p style="margin: 0px; color: rgb(102, 102, 102);">月销售量</p></div></div><div dir="ltr" role="gridcell" style="flex: 0 0 25%;width: 25%;"><div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 10px;"><h2 style="display: flex; align-items: center; margin: 10px; font-size: 30px; font-weight: 400; color: rgba(0, 0, 0, 0.85);">￥ 128954 <i class="next-icon next-icon-arrow-up-filling next-xs" style="margin-left: 10px; color: rgb(236, 63, 22);"></i></h2><p style="margin: 0px; color: rgb(102, 102, 102);">累计收入</p></div></div></div>'
                  }
                },
                chartBlock6: {
                  type: "chart",
                  ctx: "view",
                  style: {
                    width: "100%",
                    height: "500px"
                  },
                  data: {
                    legend: [],
                    xAxis: [
                      "2013",
                      "2014",
                      "2015",
                      "2016",
                      "2017",
                      "2018",
                      "2019"
                    ],
                    series1: [120, 132, 101, 134, 90, 230, 210]
                  },
                  options: {
                    BASE: "LINE",
                    title: {
                      text: ""
                    },
                    series: [
                      {
                        name: "",
                        stack: "总量",
                        data: "data.series1"
                      }
                    ]
                  }
                },
                listBlock3: {
                  type: "list",
                  ctx: "view",
                  blocks: {},
                  resource: "order",
                  events: {
                    init: "@list"
                  }
                }
              },
              operations: {},
              options: {
                headerTitle: "订单概览"
              },
              actions: {},
              style: {
                "margin-top": "20px"
              }
            }
          },
          operations: {},
          options: {}
        }
      }
    }
  },
  config: {
    materiels: {
      "field-tag": {
        version: "1.2.0",
        cdn: ["https://h5rsc.vipstatic.com/ams/fields/field-tag@1.2.0.js"]
      },
      "block-chart": {
        version: "0.1.7",
        cdn: [
          "https://h5rsc.vipstatic.com/ams/echarts@4.2.1/dist/echarts.min.js",
          "https://h5rsc.vipstatic.com/ams/block/block-chart@0.1.7.js"
        ]
      }
    }
  }
};

ams.block("order", config);
