import ams from "@ams-team/ams";

const config = {
  resources: {
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
    }
  },
  blocks: {
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
          // 默认successCode
          if (res.data.code === 0) {
            this.$message.success("登录成功");
          }
        }
      }
    }
  },
  config: {
    materiels: {}
  }
};

ams.block("login", config);
