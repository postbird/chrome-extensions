{
    // 必须存在的信息
    "manifest_version": 2,  // manifest 的版本号
    "name": "My Extension", // 扩展名称
    "version": "versionString", // 扩展的版本号 注意是字符串格式
  
    // 推荐要设置的字段
    
    "default_locale": "en", 
    "description": "A plain text description", // 扩展程序的功能描述
    "icons": {...}, // 扩展程序的图标，会在多个地方去使用，比如商店展示、管理面板等
  
    // 二选一或者一个都不选择
    
    // 使用浏览器操作将图标放置在地址栏右侧的Google Chrome主工具栏中。除了图标外，浏览器操作还可以包含工具提示，徽章和弹出窗口。
    "browser_action": {...}, 
    // 使用chrome.pageAction API将图标放置在地址栏右侧的Google Chrome主工具栏中。
    // 页面操作表示可以在当前页面上执行的操作，但不适用于所有页面。页面操作在不活动时显示为灰色。
    "page_action": {...},
    
  
    // 可选的
    "action": ...,
    "author": ...,
    "automation": ...,
    // 声明后台脚本文件地址
    "background": {
      // 推荐
      "persistent": false,
      // 可选
      "service_worker_script":
    },
    "chrome_settings_overrides": {...}, //settings_overrides 是扩展程序覆盖所选 Chrome 设置的一种方式。
    "chrome_ui_overrides": { // 用户界面覆盖是扩展程序覆盖所选Chrome用户界面属性的一种方式。
      "bookmarks_ui": {
        "remove_bookmark_shortcut": true,
        "remove_button": true
      }
    },
    // 覆盖页面是一种将扩展程序中的HTML文件替换为Google Chrome通常提供的网页的方法。除了HTML之外，覆盖页面通常还包含CSS和JavaScript代码。
    "chrome_url_overrides": {...},
    // 使用命令API添加触发扩展中操作的键盘快捷键，例如，打开浏览器操作或向扩展发送命令的操作。
    "commands": {...},
    "content_capabilities": ...,
    //  内容脚本
    "content_scripts": [{...}],
    // 跨域相关
    "content_security_policy": "policyString",
    "converted_from_user_script": ...,
    "current_locale": ...,
    "declarative_net_request": ...,
    // DevTools的 API
    "devtools_page": "devtools.html",
    // 用于添加拦截，阻止或修改正在使用的Web请求的规则
    "event_rules": [{...}],
    // 声明哪些扩展程序、应用和网页可以通过runtime.connect和runtime.sendMessage连接到的的扩展程序。
    "externally_connectable": {
      "matches": ["*://*.example.com/*"]
    },
    // 使用chrome.fileBrowserHandler API扩展Chrome OS文件浏览器。例如，你可以使用此API使用户能够将文件上传到你的网站。
    "file_browser_handlers": [...],
    // 使用chrome.fileSystemProvider API创建文件系统，可以从Chrome OS上的文件管理器访问。
    "file_system_provider_capabilities": {
      "configurable": true,
      "multiple_mounts": true,
      "source": "network"
    },
    // 扩展程序的主页
    "homepage_url": "http://path/to/homepage",
    // 引入共享 module
    "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
    // 如果允许在隐身模式下运行，请将“隐身”清单键与“跨越”或“拆分”一起使用，以指定此扩展程序的行为方式。
    // 使用“not_allowed”可阻止在隐身模式下启用此扩展程序。
    "incognito": "spanning, split, or not_allowed",
    "input_components": ...,
    // 在开发期间加载扩展程序、应用或主题时，此值可用于控制扩展程序，应用或主题的唯一ID。
    "key": "publicKey",
    // 最小版本的 chrome 要求
    "minimum_chrome_version": "versionString",
    "nacl_modules": [...],
    "oauth2": ...,
    // 是否可离线
    "offline_enabled": true,
    // 通过多功能框API，您可以在Google Chrome的地址栏中注册关键字，地址栏也称为omnibox。
    "omnibox": {
      "keyword": "aString"
    },
    // 使用chrome.permissions API在运行时请求声明的可选权限而不是安装时间，以便用户了解为什么需要权限并仅授予必要的权限。
    "optional_permissions": ["tabs"],
    // 允许用户通过提供选项页面来自定义扩展的行为。
    "options_page": "options.html",
    "options_ui": {
      "chrome_style": true,
      "page": "options.html"
    },
    //  权限列表
    "permissions": ["tabs"],
    "platforms": ...,
    // 安装要求 https://developer.chrome.com/extensions/manifest/requirements
    "requirements": {...},
    // Chrome将不再允许沙盒页面内的外部Web内容（包括嵌入式框架和脚本）。请改用webview。
    "sandbox": [...],
    // short_name（建议最多12个字符）是扩展名的简短版本。
    "short_name": "Short Name",
    "signature": ...,
    "spellcheck": ...,
    // 与本地和同步存储区域不同，托管存储区域要求其结构声明为JSON架构，并且经过Chrome严格验证。
    // 此模式必须存储在“storage”清单键的“managed_schema”属性指示的文件中，并声明扩展支持的企业策略。
    "storage": {
      "managed_schema": "schema.json"
    },
    "system_indicator": ...,
    // 使用chrome.ttsEngine API使用扩展实现文本到语音转换（TTS）引擎。
    "tts_engine": {...},
    "update_url": "http://path/to/updateInfo.xml",
    "version_name": "aString",
    "web_accessible_resources": [...]
  }