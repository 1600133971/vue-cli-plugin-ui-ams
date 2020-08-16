import ams from "@ams-team/ams";

const config = {
  resources: {
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
    editImage: {
      data: {},
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
      data: {},
      type: "form",
      resource: "image",
      ctx: "view",
      style: {
        width: "50%"
      }
    }
  },
  config: {
    materiels: {}
  }
};

ams.block("upload", config);
