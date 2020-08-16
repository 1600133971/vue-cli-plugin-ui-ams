import Vue from "vue";
import ams from "@ams-team/ams";

Vue.use(ams);

<%_ if (options.type === 'app') { _%>
import "../ams/app";
<%_ } else if (options.type === 'sell') { _%>
import "../ams/sell";
<%_ } else if (options.type === 'government') { _%>
import "../ams/government";
<%_ } else if (options.type === 'customer') { _%>
import "../ams/customer";
<%_ } else if (options.type === 'business') { _%>
import "../ams/business";
<%_ } else if (options.type === 'order') { _%>
import "../ams/order";
<%_ } else if (options.type === 'upload') { _%>
import "../ams/upload";
<%_ } else if (options.type === 'login') { _%>
import "../ams/login";
<%_ } else { _%>
import "../ams/base";
<%_ } _%>
