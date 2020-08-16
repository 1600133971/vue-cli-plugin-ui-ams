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
    divBackground: {
      type: "component",
      style: {
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage:
          "url(https://img.alicdn.com/tfs/TB1xmUiCZbpK1RjSZFyXXX_qFXa-1920-1372.png)",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },
      options: {
        is: "div"
      }
    },
    wrapper: {
      type: "component",
      style: {
        position: "fixed",
        zIndex: 3,
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        background: "rgba(0, 0, 0, .8)"
      },
      options: {
        is: "div"
      },
      blocks: {
        hearder: {
          type: "component",
          style: {
            width: "100%",
            height: "64px",
            lineHeight: "64px",
            fontSize: "38px",
            color: "#447eff",
            textAlign: "center"
          },
          options: {
            is: "h1",
            text: "某某电商销售数据大盘"
          }
        },
        topCard: {
          type: "component",
          options: {
            is: "div"
          },
          style: {
            width: "100%",
            display: "flex",
            color: "#fff",
            justifyContent: "center",
            marginBottom: "20px"
          },
          blocks: {
            topCard1: {
              type: "component",
              style: {
                flex: 1,
                margin: "0 10px",
                padding: "15px 10px",
                fontSize: "14px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "6px"
              },
              options: {
                is: "div",
                html:
                  '<h5 style="padding:0 20px; font-size: 14px;">年度销售数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;color:#4083f9;">1,293</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">15%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
              }
            },
            topCard2: {
              type: "component",
              style: {
                flex: 1,
                margin: "0 10px",
                padding: "15px 10px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "6px"
              },
              options: {
                is: "div",
                html:
                  '<h5 style="font-size:14px;padding:0 20px">年度订单数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;color:#55c899;">758</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">13%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
              }
            },
            topCard3: {
              type: "component",
              style: {
                flex: 1,
                margin: "0 10px",
                padding: "15px 10px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "6px"
              },
              options: {
                is: "div",
                html:
                  '<h5 style="font-size:14px;padding:0 20px">年度会员数</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;color:#f8d85b;">5,293</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">25%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
              }
            },
            topCard4: {
              type: "component",
              style: {
                flex: 1,
                margin: "0 10px",
                padding: "15px 10px",
                border: "1px solid rgba(255,255,255,.3)",
                borderRadius: "6px"
              },
              options: {
                is: "div",
                html:
                  '<h5 style="font-size:14px;padding:0 20px">年度总收入</h5><p style="display: flex; margin: 20px;"><b style="margin: 0px 15px 0px 0px; font-size: 28px;color:#ef6970;">298,234</b><span style="display: flex; align-items: flex-end; margin-bottom: 4px; font-size: 14px;">70%</span></p><img style="width:100%;height: auto;" src="//a.vpimg4.com/upload/upimg2/u/5ee2ee77ef90a2908b06aca4bee8ac3d.png" />'
              }
            }
          }
        },
        centerCard: {
          type: "component",
          options: {
            is: "div"
          },
          style: {
            width: "100%",
            padding: "0 10px",
            color: "#fff",
            marginBottom: "20px"
          },
          blocks: {
            cardLeft: {
              type: "card",
              style: {
                width: "60%",
                marginRight: "3%",
                height: "550px",
                color: "#fff",
                background: "transparent"
              },
              options: {
                headerTitle: "用户增长数量"
              },
              blocks: {
                totalData: {
                  type: "component",
                  style: {
                    width: "100%",
                    display: "flex",
                    color: "#fff",
                    fontSize: "14px",
                    textAlign: "center",
                    justifyContent: "center"
                  },
                  options: {
                    is: "div"
                  },
                  blocks: {
                    totalData1: {
                      type: "component",
                      style: {
                        flex: 1
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>总用户数</p><h5 style="font-size:28px;margin-top:10px;">15,125</h5>'
                      }
                    },
                    totalData2: {
                      type: "component",
                      style: {
                        flex: 1
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>跳出率</p><h5 style="font-size:28px;margin-top:10px;">28.72%</h5>'
                      }
                    },
                    totalData3: {
                      type: "component",
                      style: {
                        flex: 1
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>页面访问量</p><h5 style="font-size:28px;margin-top:10px;">94,381</h5>'
                      }
                    },
                    totalData4: {
                      type: "component",
                      style: {
                        flex: 1
                      },
                      options: {
                        is: "div",
                        html:
                          '<p>转化率</p><h5 style="font-size:28px;margin-top:10px;">78.23%</h5>'
                      }
                    }
                  }
                },
                cardLeftChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "400px"
                  },
                  data: {
                    series: [209, 352, 200, 49, 39, 10]
                  },
                  options: {
                    color: ["rgb(68, 126, 255)"],
                    grid: {
                      top: 30,
                      left: 30,
                      right: 20,
                      bottom: 30
                    },
                    xAxis: {
                      type: "category",
                      boundaryGap: false,
                      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                    },
                    tooltip: {
                      trigger: "axis"
                    },
                    yAxis: {
                      type: "value",
                      axisTick: {
                        show: false
                      },
                      axisLine: {
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
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        areaStyle: {}
                      }
                    ]
                  }
                }
              }
            },
            cardRight: {
              type: "component",
              style: {
                width: "37%",
                color: "#666",
                fontSize: "13px"
              },
              blocks: {
                cardRight1: {
                  type: "card",
                  style: {
                    width: "50%",
                    height: "210px",
                    color: "#fff",
                    background: "transparent"
                  },
                  options: {
                    headerTitle: "跳出率"
                  },
                  blocks: {
                    cardRightChart1: {
                      type: "chart",
                      style: {
                        width: "100%",
                        height: "130px"
                      },
                      data: {
                        series: [209, 352, 200, 49, 39, 10]
                      },
                      options: {
                        color: ["rgb(247, 218, 71)"],
                        grid: {
                          top: 20,
                          left: 10,
                          right: 10,
                          bottom: 20
                        },
                        xAxis: {
                          type: "category",
                          boundaryGap: false,
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          data: [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun"
                          ]
                        },
                        tooltip: {
                          trigger: "axis"
                        },
                        yAxis: {
                          type: "value",
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        series: [
                          {
                            name: "跳出率",
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: "line",
                            symbol: "none",
                            areaStyle: {}
                          }
                        ]
                      }
                    }
                  }
                },
                cardRight2: {
                  type: "card",
                  style: {
                    width: "100%",
                    height: "250px",
                    color: "#fff",
                    background: "transparent",
                    marginTop: "20px"
                  },
                  options: {
                    headerTitle: "总用户趋势"
                  },
                  blocks: {
                    cardRightChart2: {
                      type: "chart",
                      style: {
                        width: "100%",
                        height: "180px"
                      },
                      data: {
                        series: [209, 352, 200, 49, 39, 10]
                      },
                      options: {
                        color: ["#3398DB"],
                        tooltip: {
                          trigger: "axis"
                        },
                        grid: {
                          top: 20,
                          left: 10,
                          right: 10,
                          bottom: 20
                        },
                        xAxis: {
                          type: "category",
                          data: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12"
                          ],
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          }
                        },
                        yAxis: {
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        series: [
                          {
                            name: "直接访问",
                            type: "bar",
                            barWidth: "60%",
                            data: [
                              10,
                              52,
                              200,
                              334,
                              390,
                              330,
                              220,
                              40,
                              89,
                              30,
                              29,
                              70
                            ]
                          }
                        ]
                      }
                    }
                  }
                },
                cardRight3: {
                  type: "card",
                  style: {
                    width: "100%",
                    height: "300px",
                    color: "#fff",
                    background: "transparent",
                    marginTop: "20px"
                  },
                  options: {
                    headerTitle: "支付笔数"
                  },
                  blocks: {
                    cardRightChart3: {
                      type: "chart",
                      style: {
                        width: "100%",
                        height: "220px"
                      },
                      data: {
                        series: [209, 352, 200, 49, 39, 10]
                      },
                      options: {
                        color: ["#3398DB"],
                        tooltip: {
                          trigger: "axis"
                        },
                        grid: {
                          top: 20,
                          left: 10,
                          right: 10,
                          bottom: 30
                        },
                        legend: {
                          bottom: 0,
                          itemWidth: 10,
                          itemHeight: 10,
                          textStyle: {
                            color: "#fff"
                          },
                          data: ["支付宝", "微信"]
                        },
                        xAxis: {
                          type: "category",
                          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          }
                        },
                        yAxis: {
                          axisTick: {
                            show: false
                          },
                          axisLabel: {
                            show: false
                          },
                          axisLine: {
                            show: false
                          },
                          splitLine: {
                            show: false
                          }
                        },
                        series: [
                          {
                            name: "支付宝",
                            type: "bar",
                            data: [10, 52, 200, 334, 390, 330, 220, 40, 89]
                          },
                          {
                            name: "微信",
                            type: "bar",
                            data: [10, 52, 200, 334, 390, 330, 220, 40, 89]
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        bottomCard: {
          type: "component",
          options: {
            is: "div"
          },
          style: {
            width: "100%",
            padding: "0 10px",
            color: "#fff",
            marginBottom: "20px"
          },
          blocks: {
            bottomCard1: {
              type: "card",
              style: {
                width: "32%",
                marginRight: "2%",
                height: "500px",
                color: "#fff",
                background: "transparent"
              },
              blocks: {
                incomeBlock: function() {
                  const h5Style = "padding:0 18px 20px 0; font-size: 18px;";
                  const pStyle = "color: #999;";
                  const p2Style =
                    "color: rgb(68, 126, 255);margin: 23px 0 10px;font-size: 38px;font-weight: 700;";
                  const _html =
                    `<p style="${h5Style}">总收入</p>` +
                    `<p style="${pStyle}">2018年12月份总收入：</p>` +
                    `<p style="${p2Style}">￥ 67,239,18</p>` +
                    `<p style="${pStyle}">28.12% (￥ 23,945)</p>`;
                  return {
                    type: "component",
                    style: {
                      fontSize: "14px"
                    },
                    options: {
                      is: "div",
                      html: _html
                    }
                  };
                },
                incomeChart: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "250px"
                  },
                  data: {
                    series: [209, 352, 200, 49, 39, 10]
                  },
                  options: {
                    color: ["rgb(238, 112, 109)"],
                    tooltip: {
                      trigger: "axis"
                    },
                    grid: {
                      top: 20,
                      left: 10,
                      right: 10,
                      bottom: 30
                    },
                    xAxis: {
                      type: "category",
                      data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                      axisTick: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      axisLine: {
                        show: false
                      }
                    },
                    yAxis: {
                      axisTick: {
                        show: false
                      },
                      axisLabel: {
                        show: false
                      },
                      axisLine: {
                        show: false
                      },
                      splitLine: {
                        show: false
                      }
                    },
                    series: [
                      {
                        type: "bar",
                        data: [10, 52, 200, 334, 390, 330, 220, 40, 89]
                      }
                    ]
                  }
                }
              }
            },
            bottomCard2: {
              type: "card",
              style: {
                width: "32%",
                marginRight: "2%",
                height: "500px",
                color: "#fff",
                background: "transparent"
              },
              options: {
                headerTitle: "产品排名"
              },
              blocks: {
                rankLisk: function() {
                  let _html = [];
                  for (let i = 0; i < 10; i++) {
                    _html.push(
                      `<div style="display: flex;justify-content: space-between;padding: 10px 20px;border-bottom:1px solid #434857;">
                                                <span>产品 ${i + 1}</span>
                                                <span>${(
                                                  Math.random() * 100
                                                ).toFixed(1)}%</span>
                                            </div>`
                    );
                  }
                  _html = _html.join("");
                  return {
                    type: "component",
                    style: {
                      fontSize: "14px"
                    },
                    options: {
                      is: "div",
                      html: _html
                    }
                  };
                }
              }
            },
            bottomCard3: {
              type: "card",
              style: {
                width: "32%",
                height: "500px",
                color: "#fff",
                background: "transparent"
              },
              options: {
                headerTitle: "销售类目"
              },
              blocks: {
                categoryCard: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "400px"
                  },
                  options: {
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                      orient: "vertical",
                      left: "left",
                      textStyle: {
                        color: "#fff"
                      },
                      data: [
                        "直接访问",
                        "邮件营销",
                        "联盟广告",
                        "视频广告",
                        "搜索引擎"
                      ]
                    },
                    series: [
                      {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: [
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
        },
        footerCard: {
          type: "component",
          options: {
            is: "div"
          },
          style: {
            width: "100%",
            padding: "0 10px",
            color: "#fff",
            marginBottom: "20px"
          },
          blocks: {
            footerCard1: {
              type: "card",
              style: {
                width: "32%",
                marginRight: "2%",
                height: "300px",
                color: "#fff",
                background: "transparent"
              },
              blocks: {
                footerChart1: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "250px"
                  },
                  options: {
                    title: {
                      text: "访问来源",
                      left: "center"
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                      {
                        name: "访问来源",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                          normal: {
                            show: false,
                            position: "center"
                          },
                          emphasis: {
                            show: true,
                            textStyle: {
                              fontSize: "30",
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
                      }
                    ]
                  }
                }
              }
            },
            footerCard2: {
              type: "card",
              style: {
                width: "32%",
                marginRight: "2%",
                height: "300px",
                color: "#fff",
                background: "transparent"
              },
              blocks: {
                footerChart2: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "250px"
                  },
                  options: {
                    title: {
                      text: "门店销售",
                      left: "center"
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                      {
                        name: "门店销售",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                          normal: {
                            show: false,
                            position: "center"
                          },
                          emphasis: {
                            show: true,
                            textStyle: {
                              fontSize: "30",
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
                      }
                    ]
                  }
                }
              }
            },
            footerCard3: {
              type: "card",
              style: {
                width: "32%",
                height: "300px",
                color: "#fff",
                background: "transparent"
              },
              blocks: {
                footerChart3: {
                  type: "chart",
                  style: {
                    width: "100%",
                    height: "250px"
                  },
                  options: {
                    title: {
                      text: "新零售",
                      left: "center"
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                      {
                        name: "新零售",
                        type: "pie",
                        radius: ["50%", "70%"],
                        avoidLabelOverlap: false,
                        label: {
                          normal: {
                            show: false,
                            position: "center"
                          },
                          emphasis: {
                            show: true,
                            textStyle: {
                              fontSize: "30",
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
  },
  config: {
    materiels: {}
  }
};

ams.block("sell", config);
