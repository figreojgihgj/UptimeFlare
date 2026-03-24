// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Arcwolf 状态监控",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://gitee.com/arcwolf1', label: 'Gitee' },
    { link: 'https://www.arcwolf.top/', label: 'Blog' },
    { link: 'mailto:shiroko_small@outlook.com', label: '邮件', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'foo_monitor',
      // `name` is used at status page and callback message
      name: '博客',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://www.arcwolf.top',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      statusPageLink: 'https://www.arcwolf.top',
    },
    {
    id: 'umami',
    name: 'Umami',
    method: 'GET',
    target: 'https://umami.arcwolf.top',
    checkProxy: 'worker://apac',
    statusPageLink: 'https://umami.arcwolf.top',
  },
  {
    id: 'random',
    name: '随机图',
    method: 'GET',
    target: 'https:/random.arcwolf.top/pic',
    checkProxy: 'worker://apac',
    statusPageLink: 'https:/random.arcwolf.top/pic',
  },
   {
    id: 'exam',
    name: '考试看板',
    method: 'GET',
    target: 'https://exam.arcwolf.top',
    checkProxy: 'worker://apac',
    statusPageLink: 'https://exam.arcwolf.top',
  },
   {
    id: 'wsl',
    name: 'WSL 服务器',
    method: 'TCP_PING',
    target: 'wsl.arcwolf.top:80',
    checkProxy: 'worker://apac',
  },
      // [OPTIONAL] headers to be
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
  
    // Example T
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 12345678,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [

]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
