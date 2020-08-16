import ams from "@ams-team/ams";

const config = {
  resources: {
    resource: {
      api: {
        contentType: "form",
        prefix:
          "https://easy-mock.com/mock/5c76c559086fe75d555c7744/templates/demo/",
        list: "asset"
      },
      fields: {
        time: {
          type: "date",
          label: "申请时间",
          ctx: "view"
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
            redirect: "/analysis",
            meta: {
              hasMenu: true,
              hidden: true
            }
          },
          {
            name: "客源分析",
            path: "analysis",
            block: "analysis",
            meta: {
              icon: "s-home"
            }
          },
          {
            name: "卖品转化",
            path: "transform",
            block: "transform",
            meta: {
              icon: "s-marketing"
            }
          },
          {
            path: "*",
            redirect: "/analysis",
            meta: {
              hidden: true
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
            text: "客源分析系统"
          }
        },
        analysis: {
          blocks: {
            analysisTop: {
              type: "card",
              style: {
                width: "100%"
              },
              blocks: {
                analysisTopCpt: {
                  type: "component",
                  style: {
                    display: "flex"
                  },
                  options: {
                    is: "div"
                  },
                  blocks: {
                    analysisTop1: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#999",
                        fontSize: "12px"
                      },
                      options: {
                        is: "div",
                        html:
                          '<i class="el-icon-s-shop" style="color: #3080fe;font-size:40px;float:left;margin:16px 0 0 40px;"></i><div style="margin-left:100px;"><p>到店用户数</p><p style="font-size:24px;color:#3080fe;font-weight:700;margin:10px 0;">3,341</p><p>累计232,434 周同比26%</p></div>'
                      }
                    },
                    analysisTop2: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#999",
                        fontSize: "12px"
                      },
                      options: {
                        is: "div",
                        html:
                          '<i class="el-icon-postcard" style="color: #3080fe;font-size:40px;float:left;margin:16px 0 0 40px;"></i><div style="margin-left:100px;"><p>新增会员卡用户数</p><p style="font-size:24px;color:#3080fe;font-weight:700;margin:10px 0;">882</p><p>累计32,349 周同比45%</p></div>'
                      }
                    },
                    analysisTop3: {
                      type: "component",
                      style: {
                        flex: 1,
                        padding: "10px",
                        color: "#999",
                        fontSize: "12px"
                      },
                      options: {
                        is: "div",
                        html:
                          '<i class="el-icon-user" style="color: #3080fe;font-size:40px;float:left;margin:16px 0 0 40px;"></i><div style="margin-left:100px;"><p>新增用户数</p><p style="font-size:24px;color:#3080fe;font-weight:700;margin:10px 0;">2,823</p><p>累计483,475 周同比87%</p></div>'
                      }
                    }
                  }
                }
              }
            },
            analysisCustomer: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "用户画像"
              },
              blocks: {
                analysisCustomerCharts1: {
                  type: "chart",
                  style: {
                    width: "50%",
                    height: "300px",
                    float: "left"
                  },
                  data: {
                    series: [
                      {
                        value: 835,
                        name: "女"
                      },
                      {
                        value: 310,
                        name: "男"
                      }
                    ]
                  },
                  options: {
                    title: {
                      text: "性别分布",
                      left: "left",
                      textStyle: {
                        color: "#666",
                        fontSize: 14,
                        fontWeight: 700
                      }
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                      {
                        name: "性别分布",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "50%"],
                        data: "data.series",
                        label: {
                          formatter: "{b} {d}%",
                          fontSize: 14
                        },
                        animationType: "scale",
                        animationEasing: "elasticOut",
                        animationDelay: function(idx) {
                          return Math.random() * 200;
                        }
                      }
                    ]
                  }
                },
                analysisCustomerCharts2: {
                  type: "chart",
                  style: {
                    width: "50%",
                    height: "300px",
                    float: "left"
                  },
                  data: {
                    series: [209, 352, 200, 49, 39, 10]
                  },
                  options: {
                    title: {
                      text: "年龄分布",
                      left: "left",
                      textStyle: {
                        color: "#666",
                        fontSize: 14,
                        fontWeight: 700
                      }
                    },
                    color: ["#5cb6ff"],
                    tooltip: {
                      trigger: "axis",
                      axisPointer: {
                        type: "shadow"
                      }
                    },
                    grid: {
                      left: "3%",
                      right: "4%",
                      bottom: "3%",
                      containLabel: true
                    },
                    xAxis: [
                      {
                        type: "category",
                        data: [
                          "19岁以下",
                          "20-29岁",
                          "30-39岁",
                          "40-49岁",
                          "50-59岁",
                          "60岁以上"
                        ],
                        axisTick: {
                          alignWithLabel: true
                        }
                      }
                    ],
                    yAxis: {
                      axisLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      splitLine: {
                        lineStyle: {
                          type: "dashed"
                        }
                      }
                    },
                    series: [
                      {
                        type: "bar",
                        barWidth: "40%",
                        data: "data.series"
                      }
                    ]
                  }
                }
              }
            },
            analysisFlow: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "客流分析"
              },
              resource: "resource",
              operations: {
                time: {
                  type: "field",
                  field: "time"
                }
              },
              actions: {
                fieldChange: function(args) {
                  console.log("fieldChange", args);
                }
              },
              blocks: {
                analysisFlowCpt: {
                  type: "component",
                  style: {
                    color: "#666",
                    fontSize: "13px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;margin-right:20px;"><p style="margin-bottom:15px;">卖品区总客流量</p><p style="margin-bottom:15px;"><b>233,495</b></p><p>环比上涨 66%</p></div><div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;margin-right:20px;"><p style="margin-bottom:15px;">卖品区总客流量</p><p style="margin-bottom:15px;"><b>4,592</b></p><p>环比上涨 66%</p></div><div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;"><p style="margin-bottom:15px;">平均停留时长</p><p style="margin-bottom:15px;"><b>0.8h</b></p><p>环比上涨 66%</p></div>'
                  }
                }
              }
            },
            analysisVisit: {
              type: "card",
              style: {
                width: "100%",
                margin: "20px auto 0"
              },
              options: {
                headerTitle: "客流到访时间"
              },
              resource: "resource",
              operations: {
                time: {
                  type: "field",
                  field: "time"
                }
              },
              blocks: {
                analysisVisitChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "300px"
                  },
                  data: {
                    xAxis: [
                      "2019-10-01",
                      "2019-10-02",
                      "2019-10-03",
                      "2019-10-04",
                      "2019-10-05",
                      "2019-10-06",
                      "2019-10-07"
                    ],
                    series: [820, 932, 901, 934, 1290, 1330, 1320]
                  },
                  options: {
                    color: ["#5cb6ff"],
                    grid: {
                      left: "3%",
                      right: "4%",
                      bottom: "3%",
                      containLabel: true
                    },
                    tooltip: {
                      trigger: "axis"
                    },
                    xAxis: {
                      type: "category",
                      boundaryGap: false,
                      data: "data.xAxis"
                    },
                    yAxis: {
                      type: "value",
                      axisLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      splitLine: {
                        lineStyle: {
                          type: "dashed"
                        }
                      }
                    },
                    series: [
                      {
                        type: "line",
                        data: "data.series",
                        areaStyle: {}
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        transform: {
          blocks: {
            transformTop: {
              type: "card",
              style: {
                width: "100%",
                marginBottom: "25px"
              },
              options: {
                headerTitle: "卖品区客流分析"
              },
              resource: "resource",
              operations: {
                time: {
                  type: "field",
                  field: "time"
                }
              },
              actions: {
                fieldChange: function(args) {
                  console.log("fieldChange", args);
                }
              },
              blocks: {
                analysisFlowCpt: {
                  type: "component",
                  style: {
                    color: "#666",
                    fontSize: "13px"
                  },
                  options: {
                    is: "div",
                    html:
                      '<div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;margin-right:20px;"><p style="margin-bottom:15px;">卖品区总客流量</p><p style="margin-bottom:15px;"><b>233,495</b></p><p>环比上涨 66%</p></div><div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;margin-right:20px;"><p style="margin-bottom:15px;">卖品区总客流量</p><p style="margin-bottom:15px;"><b>4,592</b></p><p>环比上涨 66%</p></div><div style="display:inline-block;width:156px;border: 1px solid #e1e2e3;padding: 15px;"><p style="margin-bottom:15px;">平均停留时长</p><p style="margin-bottom:15px;"><b>0.8h</b></p><p>环比上涨 66%</p></div>'
                  }
                }
              }
            },
            transformCard1: {
              type: "card",
              style: {
                width: "60%",
                marginRight: "3%",
                height: "450px"
              },
              options: {
                headerTitle: "用户增长数量"
              },
              blocks: {
                transformChard1: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "350px"
                  },
                  data: {
                    series: [209, 352, 200, 49, 39, 10, 20, 140, 189, 280]
                  },
                  options: {
                    color: ["#5cb6ff"],
                    tooltip: {
                      trigger: "axis"
                    },
                    grid: {
                      top: "3%",
                      left: "3%",
                      right: "4%",
                      bottom: "3%",
                      containLabel: true
                    },
                    xAxis: [
                      {
                        type: "category",
                        data: [
                          "1月",
                          "2月",
                          "3月",
                          "4月",
                          "5月",
                          "6月",
                          "7月",
                          "8月",
                          "9月",
                          "10月"
                        ],
                        axisTick: {
                          alignWithLabel: true
                        }
                      }
                    ],
                    yAxis: {
                      axisLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      splitLine: {
                        lineStyle: {
                          type: "dashed"
                        }
                      }
                    },
                    series: [
                      {
                        type: "bar",
                        barWidth: "40%",
                        data: "data.series"
                      }
                    ]
                  }
                }
              }
            },
            transformCpt: {
              type: "component",
              style: {
                width: "37%",
                color: "#666",
                fontSize: "13px"
              },
              blocks: {
                transformCard2: {
                  type: "card",
                  style: {
                    width: "100%",
                    height: "210px",
                    marginBottom: "30px"
                  },
                  options: {
                    headerTitle: "年龄"
                  },
                  blocks: {
                    transformChard2: {
                      type: "chart",
                      style: {
                        width: "100%",
                        height: "130px"
                      },
                      data: {
                        series: [209, 352, 200, 49, 39, 10]
                      },
                      options: {
                        color: ["#5cb6ff"],
                        tooltip: {
                          trigger: "axis"
                        },
                        grid: {
                          top: "0%",
                          left: "3%",
                          right: "4%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: [
                          {
                            type: "category",
                            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
                            axisTick: {
                              alignWithLabel: true
                            }
                          }
                        ],
                        yAxis: {
                          axisLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          splitLine: {
                            lineStyle: {
                              type: "dashed"
                            }
                          }
                        },
                        series: [
                          {
                            type: "bar",
                            barWidth: "40%",
                            data: "data.series"
                          }
                        ]
                      }
                    }
                  }
                },
                transformCard3: {
                  type: "card",
                  style: {
                    width: "100%",
                    height: "210px"
                  },
                  options: {
                    headerTitle: "男女比例"
                  },
                  blocks: {
                    transformChard3: {
                      type: "chart",
                      style: {
                        width: "100%",
                        height: "130px"
                      },
                      data: {
                        series: [209, 352, 200, 49, 39, 10]
                      },
                      options: {
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                          orient: "vertical",
                          left: "right",
                          data: ["女", "男", "其他"]
                        },
                        series: [
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "60%"],
                            data: [
                              {
                                value: 835,
                                name: "女"
                              },
                              {
                                value: 510,
                                name: "男"
                              },
                              {
                                value: 134,
                                name: "其他"
                              }
                            ],
                            itemStyle: {
                              emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                              }
                            }
                          }
                        ]
                      }
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
  config: {
    materiels: {}
  }
};

ams.block("customer", config);
