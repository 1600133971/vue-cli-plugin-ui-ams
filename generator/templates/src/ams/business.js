import ams from "@ams-team/ams";

const config = {
  resources: {
    "resource-staging": {
      api: {
        contentType: "form",
        prefix: "//xxx.vip.com/admin/user/",
        create: "add",
        delete: "del",
        update: "edit",
        read: "getUserById",
        list: "getList"
      },
      fields: {
        busines: {
          type: "text",
          label: "营业收入",
          ctx: "view",
          info: "说明内容"
        },
        recharge: {
          type: "text",
          label: "充值收入",
          ctx: "view",
          info: "说明内容"
        },
        cashpay: {
          type: "text",
          label: "现金支付",
          ctx: "view",
          info: "说明内容"
        },
        onlinepay: {
          type: "text",
          label: "网上支付",
          ctx: "view",
          info: "说明内容"
        },
        orderoffline: {
          type: "text",
          label: "实体下单",
          ctx: "view",
          info: "说明内容"
        },
        orderonline: {
          type: "text",
          label: "网上下单",
          ctx: "view",
          info: "说明内容"
        },
        customer: {
          type: "text",
          label: "新增用户",
          ctx: "view",
          info: "说明内容"
        },
        membership: {
          type: "text",
          label: "新增会员",
          ctx: "view",
          info: "说明内容"
        }
      }
    },
    "resource-asset": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        list: "asset"
      },
      fields: {
        applyTime: {
          type: "date",
          label: "申请时间",
          ctx: "view"
        },
        id: {
          type: "text",
          label: "交易号",
          ctx: "view"
        },
        cash: {
          type: "text",
          label: "金额(万元)",
          ctx: "view"
        },
        handleTime: {
          type: "date",
          label: "处理完成时间",
          ctx: "view"
        },
        applyPeople: {
          type: "text",
          label: "申请人",
          ctx: "view"
        },
        applyStatus: {
          type: "select",
          label: "状态",
          ctx: "view",
          props: {
            options: {
              a: "申请中",
              b: "申请失败",
              c: "申请完成"
            },
            multiple: false
          }
        }
      }
    },
    "resource-goods": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        list: "goods",
        create: "add",
        delete: "del",
        update: "edit",
        read: "goodsread"
      },
      fields: {
        name: {
          type: "text",
          label: "商品名称",
          rules: [
            {
              required: true,
              message: "请输入商品名称",
              trigger: "blur"
            }
          ]
        },
        class: {
          type: "select",
          label: "商品分类",
          props: {
            options: {
              a: "智能",
              b: "数码",
              c: "新品"
            },
            multiple: false
          }
        },
        label: {
          type: "select",
          label: "商品标签",
          props: {
            options: {
              a: "预售",
              b: "新品"
            },
            multiple: false
          }
        },
        shop: {
          type: "select",
          label: "在售门店",
          props: {
            options: {
              a: "滨江盒马店",
              b: "余杭盒马店",
              c: "西湖盒马店"
            },
            multiple: false
          }
        },
        sale: {
          type: "text",
          label: "总销量"
        },
        service: {
          type: "select",
          label: "商品服务",
          props: {
            options: {
              a: "可体验",
              b: "可预约"
            },
            multiple: false
          }
        }
      }
    },
    "resource-membership": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        list: "membership",
        create: "add",
        delete: "del",
        update: "edit",
        read: "read"
      },
      fields: {
        name: {
          type: "text",
          label: "会员名称"
        },
        grade: {
          type: "select",
          label: "会员等级",
          ctx: "view",
          props: {
            options: {
              a: "普通会员",
              b: "白银会员",
              c: "黄金会员",
              d: "VIP 会员"
            },
            multiple: false
          }
        },
        balance: {
          type: "text",
          label: "会员余额(元)"
        },
        spend: {
          type: "text",
          label: "累计消费(元)"
        },
        registerTime: {
          type: "date",
          label: "注册时间"
        },
        birthday: {
          type: "date",
          label: "生日时间"
        },
        shop: {
          type: "select",
          label: "归属门店",
          props: {
            options: {
              a: "滨江盒马店",
              b: "余杭盒马店",
              c: "西湖盒马店"
            },
            multiple: false
          }
        }
      }
    },
    "resource-order": {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        list: "order",
        create: "add",
        delete: "del",
        update: "edit",
        read: "read"
      },
      fields: {
        id: {
          type: "text",
          label: "订单编号"
        },
        product: {
          type: "text",
          label: "商品编号"
        },
        name: {
          type: "text",
          label: "订单名称"
        },
        pay: {
          type: "select",
          label: "付款方式",
          props: {
            options: {
              a: "微信付款",
              b: "支付宝付款",
              c: "银行卡付款"
            },
            multiple: false
          }
        },
        type: {
          type: "select",
          label: "订单类型",
          props: {
            options: {
              a: "普通订单",
              b: "代付订单"
            },
            multiple: false
          }
        },
        create: {
          type: "date",
          label: "创建时间"
        },
        logistics: {
          type: "select",
          label: "物流方式",
          props: {
            options: {
              a: "同城配送",
              b: "上门自提",
              c: "快递发货"
            },
            multiple: false
          }
        },
        status: {
          type: "select",
          label: "订单状态",
          props: {
            options: {
              a: "已发货",
              b: "派送中",
              c: "已完成"
            },
            multiple: false
          }
        }
      }
    }
  },
  blocks: {
    router: {
      type: "router",
      data: {
        roles: ["admin"]
      },
      router: {
        routes: [
          {
            path: "/",
            redirect: "/staging",
            meta: {
              hasMenu: true,
              hidden: true
            }
          },
          {
            name: "工作台",
            path: "staging",
            block: "staging",
            meta: {
              icon: "s-home"
            }
          },
          {
            name: "资产管理",
            path: "asset",
            block: "asset",
            meta: {
              icon: "money"
            }
          },
          {
            name: "商品管理",
            path: "goods",
            block: "goods",
            meta: {
              icon: "goods"
            }
          },
          {
            name: "订单管理",
            path: "order",
            block: "order",
            meta: {
              icon: "shopping-cart-1"
            }
          },
          {
            name: "会员管理",
            path: "membership",
            block: "membership",
            meta: {
              icon: "s-custom"
            }
          }
        ]
      },
      blocks: {
        menuTop: {
          type: "component",
          slot: "menuTop",
          style: {
            width: "150px",
            padding: "20px 5px 10px",
            color: "#fff",
            fontSize: "18px",
            textAlign: "center"
          },
          options: {
            is: "div",
            text: "商家管理系统"
          }
        },
        staging: {
          blocks: {
            stagingTop: {
              type: "component",
              options: {
                is: "div"
              },
              style: {
                width: "100%",
                display: "flex",
                color: "#fff",
                justifyContent: "center"
              },
              blocks: {
                stagingTop1: {
                  type: "component",
                  style: {
                    flex: 1,
                    margin: "0 10px",
                    padding: "15px 10px",
                    fontSize: "14px",
                    background: "rgb(27, 201, 142)",
                    borderRadius: "3px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<h5 style="padding:0 20px; font-size: 14px;">年度销售数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;">1,293</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">15%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
                  }
                },
                stagingTop2: {
                  type: "component",
                  style: {
                    flex: 1,
                    margin: "0 10px",
                    padding: "15px 10px",
                    background: "rgb(230, 71, 88)",
                    borderRadius: "3px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<h5 style="font-size:14px;padding:0 20px">年度订单数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;">758</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">13%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
                  }
                },
                stagingTop3: {
                  type: "component",
                  style: {
                    flex: 1,
                    margin: "0 10px",
                    padding: "15px 10px",
                    background: "rgb(159, 133, 255)",
                    borderRadius: "3px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<h5 style="font-size:14px;padding:0 20px">年度会员数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;">5,293</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">25%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
                  }
                },
                stagingTop4: {
                  type: "component",
                  style: {
                    flex: 1,
                    margin: "0 10px",
                    padding: "15px 10px",
                    background: "rgb(229, 217, 54)",
                    borderRadius: "3px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<h5 style="font-size:14px;padding:0 20px">年度总收入</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;">298,234</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">70%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
                  }
                }
              }
            },
            stagingCard: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "收入概览"
              },
              blocks: {
                stagingCardChild: {
                  type: "component",
                  options: {
                    is: "div"
                  },
                  style: {
                    display: "flex"
                  },
                  blocks: {
                    stagingCardChild1: {
                      type: "component",
                      options: {
                        is: "div"
                      },
                      style: {
                        flex: 1,
                        width: "25%",
                        height: "300px"
                      },
                      blocks: {
                        stagingCardCptChart: {
                          type: "chart",
                          style: {
                            width: "100%",
                            height: "300px"
                          },
                          data: {
                            series: [
                              {
                                value: 2000,
                                name: "实体收入"
                              },
                              {
                                value: 10010,
                                name: "网店收入"
                              }
                            ]
                          },
                          options: {
                            legend: {
                              x: "left",
                              orient: "vertical",
                              data: ["实体收入", "网店收入"]
                            },
                            tooltip: {},
                            series: [
                              {
                                name: "收入概括",
                                type: "pie",
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
                                    },
                                    formatter: "{b}: {@score}"
                                  }
                                },
                                radius: ["50%", "70%"],
                                data: "data.series"
                              }
                            ]
                          }
                        }
                      }
                    },
                    stagingCardChild2: {
                      type: "component",
                      options: {
                        is: "div"
                      },
                      style: {
                        flex: 1,
                        paddingTop: "100px"
                      },
                      blocks: {
                        stagingCardChild2Div: {
                          type: "component",
                          options: {
                            is: "div",
                            html:
                              '<h5 style="color:#666;font-size:14px;">实体店收入</h5><p style="display: flex; align-items: baseline; margin-top: 20px; colro:#333;"><b style="font-size:32px;font-weight:500;line-height:30px;height:30px;margin-right:2px;">56,743.89</b><span>万元</span></p><p style="color:#999;font-size:12px;margin-top:10px;"><span style="margin-right:60px;">环比</span><span>66.99%</span></p>'
                          }
                        }
                      }
                    },
                    stagingCardChild3: {
                      type: "component",
                      options: {
                        is: "div"
                      },
                      style: {
                        flex: 1,
                        paddingTop: "100px"
                      },
                      blocks: {
                        stagingCardChild3Div: {
                          type: "component",
                          options: {
                            is: "div",
                            html:
                              '<h5 style="color:#666;font-size:14px;">网上零售收入</h5><p style="display: flex; align-items: baseline; margin-top: 20px; colro:#333;"><b style="font-size:32px;font-weight:500;line-height:30px;height:30px;margin-right:2px;">123,455</b><span>万元</span></p><p style="color:#999;font-size:12px;margin-top:10px;"><span style="margin-right:60px;">环比</span><span>18.99%</span></p>'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            stagingForm: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              blocks: {
                stagingForm1: {
                  type: "form",
                  resource: "resource-staging",
                  style: {
                    flex: 1
                  },
                  data: {
                    busines: "123,459",
                    recharge: "3,954",
                    cashpay: "509,432",
                    onlinepay: "249,234",
                    orderoffline: "12,323",
                    orderonline: "452,234",
                    customer: "2,334",
                    membership: "1,234"
                  },
                  fields: {
                    recharge: false,
                    onlinepay: false,
                    orderonline: false,
                    membership: false
                  }
                },
                stagingForm2: {
                  type: "form",
                  resource: "resource-staging",
                  style: {
                    flex: 1
                  },
                  data: {
                    busines: "123,459",
                    recharge: "3,954",
                    cashpay: "509,432",
                    onlinepay: "249,234",
                    orderoffline: "12,323",
                    orderonline: "452,234",
                    customer: "2,334",
                    membership: "1,234"
                  },
                  fields: {
                    busines: false,
                    cashpay: false,
                    orderoffline: false,
                    customer: false
                  }
                }
              }
            },
            stagingNav: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "常用导航"
              },
              blocks: {
                stagingNavList: {
                  type: "component",
                  operations: {
                    asset: {
                      type: "button",
                      label: "资产管理",
                      style: {
                        width: "350px",
                        height: "55px",
                        margin: "5px auto",
                        color: "#fff",
                        background: "rgb(94, 131, 251)"
                      }
                    },
                    goods: {
                      type: "button",
                      label: "商品管理",
                      style: {
                        width: "350px",
                        height: "50px",
                        margin: "5px auto",
                        color: "#fff",
                        background: "rgb(247, 218, 71)"
                      }
                    },
                    order: {
                      type: "button",
                      label: "订单管理",
                      style: {
                        width: "350px",
                        height: "50px",
                        margin: "5px auto",
                        color: "#fff",
                        background: "rgb(88, 202, 154)"
                      }
                    },
                    membership: {
                      type: "button",
                      label: "会员管理",
                      style: {
                        width: "350px",
                        height: "50px",
                        margin: "5px auto",
                        color: "#fff",
                        background: "rgb(94, 131, 251)"
                      }
                    },
                    staging: {
                      type: "button",
                      label: "工作台",
                      style: {
                        width: "350px",
                        height: "50px",
                        margin: "5px auto",
                        color: "#fff",
                        background: "rgb(159, 133, 255)"
                      }
                    }
                  },
                  events: {
                    asset: "@routerPush:/asset",
                    goods: "@routerPush:/goods",
                    reserve: "@routerPush:/reserve",
                    order: "@routerPush:/order",
                    membership: "@routerPush:/membership",
                    staging: "@routerPush:/staging"
                  }
                }
              }
            },
            stagingPay: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "付款方式"
              },
              blocks: {
                stagingPayCharts1: {
                  type: "chart",
                  style: {
                    width: "50%",
                    height: "300px",
                    float: "left"
                  },
                  data: {
                    series: [
                      {
                        value: 2000,
                        name: "现金"
                      },
                      {
                        value: 10010,
                        name: "微信"
                      },
                      {
                        value: 40010,
                        name: "支付宝"
                      }
                    ]
                  },
                  options: {
                    title: {
                      text: "付款金额",
                      left: "center",
                      textStyle: {
                        color: "#999",
                        fontSize: 12
                      }
                    },
                    legend: {
                      top: "middle",
                      right: 20,
                      itemWidth: 10,
                      itemHeight: 10,
                      orient: "vertical",
                      data: ["现金", "微信", "支付宝"]
                    },
                    tooltip: {},
                    series: [
                      {
                        name: "收入概括",
                        type: "pie",
                        label: {
                          show: true,
                          position: "inner",
                          formatter: "{b}:{c}"
                        },
                        itemStyle: {
                          borderWidth: 10
                        },
                        radius: ["50%", "70%"],
                        data: "data.series"
                      }
                    ]
                  }
                },
                stagingPayCharts2: {
                  type: "chart",
                  style: {
                    width: "50%",
                    height: "300px",
                    float: "left"
                  },
                  data: {
                    series: [
                      {
                        value: 200,
                        name: "现金"
                      },
                      {
                        value: 1010,
                        name: "微信"
                      },
                      {
                        value: 4000,
                        name: "支付宝"
                      }
                    ]
                  },
                  options: {
                    title: {
                      text: "付款单数",
                      left: "center",
                      textStyle: {
                        color: "#999",
                        fontSize: 12
                      }
                    },
                    legend: {
                      top: "middle",
                      right: 20,
                      itemWidth: 10,
                      itemHeight: 10,
                      orient: "vertical",
                      data: ["现金", "微信", "支付宝"]
                    },
                    tooltip: {},
                    series: [
                      {
                        name: "收入概括",
                        type: "pie",
                        label: {
                          show: true,
                          position: "inner",
                          formatter: "{b}:{c}"
                        },
                        radius: ["50%", "70%"],
                        data: "data.series"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        asset: {
          blocks: {
            assetTop: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "资产管理"
              },
              blocks: {
                assetTopCpt: {
                  type: "component",
                  style: {
                    display: "flex"
                  },
                  options: {
                    is: "div"
                  },
                  blocks: {
                    assetTopCpt1: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#333",
                        fontSize: "12px",
                        textAlign: "center"
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>可用余额(元)</p><p style="font-size:22px;margin-top:15px;">0.00</p>'
                      }
                    },
                    assetTopCpt2: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#333",
                        fontSize: "12px",
                        textAlign: "center"
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>待结算(元)</p><p style="font-size:22px;margin-top:15px;">0.00</p>'
                      }
                    },
                    assetTopCpt3: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#333",
                        fontSize: "12px",
                        textAlign: "center"
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>储值资金(元)</p><p style="font-size:22px;margin-top:15px;">0.00</p>'
                      }
                    }
                  }
                }
              }
            },
            assetTab: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              blocks: {
                assetTabCard: {
                  type: "tabs",
                  options: {
                    assetTab1: "提现",
                    assetTab2: "退款"
                  },
                  blocks: {
                    assetTab1: {
                      type: "list",
                      resource: "resource-asset",
                      sorts: {
                        applyTime: true
                      },
                      events: {
                        init: "@list"
                      },
                      operations: {
                        applyTime: {
                          slot: "searchs",
                          type: "field",
                          field: "applyTime",
                          label: "申请时间"
                        },
                        applyStatus: {
                          slot: "searchs",
                          type: "field",
                          field: "applyStatus",
                          label: "状态"
                        }
                      },
                      actions: {
                        fieldChange: function({ path }) {
                          if (
                            path === "searchs.applyStatus" ||
                            path === "searchs.applyTime"
                          ) {
                            this.callAction("@list");
                          }
                        }
                      }
                    },
                    assetTab2: {
                      type: "list",
                      resource: "resource-asset",
                      events: {
                        init: "@list"
                      },
                      operations: {
                        applyTime: {
                          slot: "searchs",
                          type: "field",
                          field: "applyTime",
                          label: "申请时间"
                        },
                        applyStatus: {
                          slot: "searchs",
                          type: "field",
                          field: "applyStatus",
                          label: "状态"
                        }
                      },
                      actions: {
                        fieldChange: function({ path }) {
                          if (
                            path === "searchs.applyStatus" ||
                            path === "searchs.applyTime"
                          ) {
                            this.callAction("@list");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        goods: {
          blocks: {
            goodsList: {
              type: "list",
              resource: "resource-goods",
              operations: {
                name: {
                  slot: "searchs",
                  type: "field",
                  field: "name",
                  label: "商品名称"
                },
                class: {
                  slot: "searchs",
                  type: "field",
                  field: "class",
                  label: "商品分类"
                },
                add: {
                  slot: "searchs",
                  type: "button",
                  label: "添加",
                  props: {
                    type: "primary"
                  }
                },
                edit: {
                  type: "button",
                  label: "编辑",
                  props: {
                    type: "primary",
                    size: "mini"
                  }
                },
                del: {
                  type: "button",
                  label: "删除",
                  props: {
                    type: "danger",
                    size: "mini",
                    plain: true
                  }
                }
              },
              events: {
                init: "@list",
                add: "@goodsAdd.show",
                edit: "@goodsEdit.show",
                del: "c @delete init"
              },
              actions: {
                fieldChange: function({ path }) {
                  if (path === "searchs.name" || path === "searchs.class") {
                    this.callAction("@list");
                  }
                }
              }
            },
            goodsAdd: {
              type: "dialog",
              data: {
                title: "添加商品",
                visible: false
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交",
                  props: {
                    size: "mini",
                    type: "primary"
                  }
                },
                hide: {
                  type: "button",
                  label: "取消",
                  props: {
                    size: "mini"
                  }
                }
              },
              events: {
                submit: "goodsAddForm.submit"
              },
              blocks: {
                goodsAddForm: {
                  type: "form",
                  resource: "resource-goods",
                  ctx: "edit",
                  fields: {
                    sale: false
                  },
                  events: {
                    submit:
                      "@validate @create goodsList.init @goodsAdd.hide @clear"
                  }
                }
              }
            },
            goodsEdit: {
              type: "dialog",
              data: {
                title: "编辑商品",
                visible: false
              },
              operations: {
                submit: {
                  type: "button",
                  label: "提交",
                  props: {
                    size: "mini",
                    type: "primary"
                  }
                },
                hide: {
                  type: "button",
                  label: "取消",
                  props: {
                    size: "mini"
                  }
                }
              },
              events: {
                submit: "goodsEditForm.submit"
              },
              blocks: {
                goodsEditForm: {
                  type: "form",
                  resource: "resource-goods",
                  ctx: "edit",
                  fields: {
                    sale: false
                  },
                  events: {
                    init: "@read",
                    submit:
                      "@validate @create goodsList.init @goodsEdit.hide @clear"
                  }
                }
              }
            }
          }
        },
        order: {
          blocks: {
            orderList: {
              type: "list",
              resource: "resource-order",
              operations: {
                id: {
                  slot: "searchs",
                  type: "field",
                  field: "id",
                  label: "订单编号"
                },
                search: {
                  slot: "searchs",
                  type: "button",
                  props: {
                    type: "primary"
                  },
                  label: "搜索",
                  event: "list:1"
                },
                reset: {
                  slot: "searchs",
                  type: "reset",
                  props: {
                    type: "primary"
                  },
                  label: "重置"
                },
                edit: {
                  type: "button",
                  label: "编辑",
                  props: {
                    type: "primary",
                    size: "mini"
                  }
                },
                del: {
                  type: "button",
                  label: "删除",
                  props: {
                    type: "danger",
                    size: "mini",
                    plain: true
                  }
                }
              },
              events: {
                init: "@list",
                del: "@confirm:删除不可恢复，请确认? @delete init"
              },
              actions: {
                fieldChange: function({ path }) {
                  if (path === "searchs.name" || path === "searchs.class") {
                    this.callAction("@list");
                  }
                }
              }
            }
          }
        },
        membership: {
          blocks: {
            memberList: {
              type: "list",
              resource: "resource-membership",
              operations: {
                name: {
                  slot: "searchs",
                  type: "field",
                  field: "name",
                  label: "会员名称"
                },
                registerTime: {
                  slot: "searchs",
                  type: "field",
                  field: "registerTime",
                  label: "注册时间"
                },
                search: {
                  slot: "searchs",
                  type: "button",
                  props: {
                    type: "primary"
                  },
                  label: "搜索",
                  event: "list:1"
                },
                reset: {
                  slot: "searchs",
                  type: "reset",
                  props: {
                    type: "primary"
                  },
                  label: "重置"
                },
                edit: {
                  type: "button",
                  label: "编辑",
                  props: {
                    type: "primary",
                    size: "mini"
                  }
                },
                del: {
                  type: "button",
                  label: "删除",
                  props: {
                    type: "danger",
                    size: "mini",
                    plain: true
                  }
                }
              },
              events: {
                init: "@list",
                del: "@confirm:删除不可恢复，请确认? @delete init"
              },
              actions: {
                fieldChange: function({ path }) {
                  if (path === "searchs.name" || path === "searchs.class") {
                    this.callAction("@list");
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

ams.block("business", config);
