let errCode = {
  "-1": {
    en: "no active connection available with node, please check node status",
    zh: "节点前置与链节点连接失败，请检查节点状态或front的日志"
  },
  "-32600": {
    en: "Invalid json request",
    zh: "链上错误：json请求错误"
  },
  "-32601": {
    en: "Method not found / not support",
    zh: "链上错误：该方法不存在或无效"
  },
  "-32602": {
    en: "Invalid params when request",
    zh: "链上错误：无效的方法参数"
  },
  "-32603": {
    en: "Node internal error",
    zh: "链上错误：节点内部调用错误，请检查节点日志进行排查"
  },
  "-32604": {
    en: "Request require id value for procedure",
    zh: "内部错误，请求未提供id字段，请检查节点日志进行排查"
  },
  "-32700": {
    en: "Node receive json that parse error",
    zh: "服务端接收到的json无法解析，请检查节点日志进行排查"
  },
  "-40001": {
    en: "GroupID does not exist",
    zh: "GroupID不存在，请检查节点日志进行排查"
  },
  "-40002": {
    en: "Response json parse error",
    zh: "JSON RPC获取的json数据解析错误，请检查节点日志进行排查"
  },
  "-40003": {
    en: "BlockHash does not exist",
    zh: "区块哈希不存在"
  },
  "-40004": {
    en: "BlockNumber does not exist",
    zh: "区块高度不存在"
  },
  "-40005": {
    en: "TransactionIndex is out of range",
    zh: "交易索引越界"
  },
  "-40006": {
    en: "Call needs a 'from' field",
    zh: "call接口需要提供from字段"
  },
  "-40007": {
    en: "Only pbft consensus supports the view property",
    zh: "getPbftView接口，只有pbft共识机制有view属性"
  },
  "-40008": {
    en: "Invalid System Config",
    zh: "getSystemConfigByKey接口，查询无效的key"
  },
  "-40009": {
    en:
      "Don't send requests to this group, the node doesn't belong to the group",
    zh: "非群组内节点发起无效的请求，请检查节点日志进行排查"
  },
  "-40010": {
    en: "RPC module initialization is incomplete",
    zh: "RPC模块初始化尚未完成，请检查节点日志进行排查"
  },
  "-50000": {
    en: "Permission denied",
    zh: "链上权限被拒绝"
  },
  "-50001": {
    en: "Table name already exist",
    zh: "表名已经存在"
  },
  "-50100": {
    en: "Table does not exist",
    zh: "表不存在"
  },
  "-50101": {
    en: "Unknow function call",
    zh: "未知函数调用，请检查节点日志进行排查"
  },
  "-50102": {
    en: "Address invalid",
    zh: "合约地址无效，请检查节点日志进行排查"
  },
  "-51000": {
    en: "Table name and address already exist",
    zh: "表名和地址已经存在"
  },
  "-51001": {
    en: "Table name and address does not exist",
    zh: "该地址不属于管理员，无法删除"
  },
  "-51100": {
    en: "Invalid node ID",
    zh: "错误的节点ID，请检查节点日志进行排查"
  },
  "-51101": {
    en: "The last sealer cannot be removed",
    zh: "不能移除最后一个共识节点"
  },
  "-51102": {
    en: "The node is not reachable",
    zh: "节点无法访问，请检查节点日志进行排查"
  },
  "-51103": {
    en: "The node is not a group peer",
    zh: "节点不是群组成员，请检查节点日志进行排查"
  },
  "-51104": {
    en: "The node is already in the sealer list",
    zh: "节点已经在共识列表中"
  },
  "-51105": {
    en: "The node is already in the observer list",
    zh: "节点已经在观察者列表中"
  },
  "-51200": {
    en: "Contract name and version already exist",
    zh: "合约名称和版本已存在"
  },
  "-51201": {
    en: "Version string length exceeds the maximum limit",
    zh: "版本字符串长度超过最大限制"
  },
  "-51300": {
    en: "Invalid configuration entry",
    zh: "配置条目无效"
  },
  "-51500": {
    en: "Entry parse error",
    zh: "解析错误，请检查节点日志进行排查"
  },
  "-51501": {
    en: "Condition parse error",
    zh: "条件解析错误"
  },
  "-51502": {
    en: "Condition operation undefined",
    zh: "条件操作未定义"
  },
  "-51503": {
    en: "Please provide field 'in field list",
    zh: "请在字段列表中提供字段。"
  },
  "101001": {
    en: "system error",
    zh: "系统异常，请到节点前置的log目录中检查异常原因"
  },
  "101002": {
    en: "param valid fail",
    zh: "参数校验异常，请检查参数的长度、格式、类型是否匹配"
  },
  "101003": {
    en:
      "web3jMap of groupId is null, please call /{groupId}/web3/refresh to refresh",
    zh: "连接当前群组失败，请调用/{groupId}/web3/refresh刷新群组"
  },
  "101004": {
    en: "getGroupList error for no group, web3jMap is empty!",
    zh: "群组列表为空，请到节点服务中检查节点共识状态"
  },
  "102000": {
    en: "WeBASE-Node-Manager system exception",
    zh: "WeBASE-Node-Manager系统异常，请到后台的log目录中检查异常原因"
  },
  "102001": {
    en: "system exception: please check front",
    zh: "系统错误，请到节点前置的log目录中检查异常原因"
  },
  "102002": {
    en: "No group belongs to this groupId(node not belongs to this group)",
    zh: "没有群组属于这个群组id（节点不属于这个群组），请检查节点日志进行排查"
  },
  "102003": {
    en:
      "When webase is v1.3.2 above(inclusive),fisco-bcos node must be v2.4.1 above(inclusive)",
    zh:
      "当webase为v1.3.2以上版本（含）时，fisco bcos节点必须为v2.4.1以上版本（含）"
  },
  "103001": {
    en: "WeBASE-Sign system exception",
    zh: "WeBASE-Sign系统异常，请到sign后台的log目录中检查异常原因"
  },
  "201001": {
    en: "groupId cannot be empty",
    zh: "groupId参数不能为空，请刷新试试"
  },
  "201002": {
    en: "user cannot be empty",
    zh: "用户编号参数不能为空"
  },
  "201004": {
    en: "version cannot be empty",
    zh: "版本号参数不能为空"
  },
  "201005": {
    en: "funcName cannot be empty",
    zh: "合约的方法名参数不能为空"
  },
  "201006": {
    en: "abiInfo cannot be empty",
    zh: "abi参数内容不能为空"
  },
  "201007": {
    en: "bytecodeBin cannot be empty",
    zh: "合约bin参数不能为空"
  },
  "201017": {
    en: "contract's current version has been deployed",
    zh: "合约的当前版本已部署"
  },
  "201009": {
    en: "contract is not deployed",
    zh: "合约未部署，请先部署后再进行调用"
  },
  "201010": {
    en: "save abi error",
    zh: "合约abi保存错误"
  },
  "201011": {
    en: "contract's parameter is error",
    zh: "合约的入参错误，请检查参数格式、类型是否匹配"
  },
  "201012": {
    en: "requst blockNumber is greater than latest",
    zh: "请求的块高大于链上最新块高，请输入正确的块高"
  },
  "201013": {
    en: "get abi error",
    zh: "从链上获取abi失败"
  },
  "201014": {
    en: "contract deploy error",
    zh: "合约部署错误，请检查合约的构造函数入参或检查链状态"
  },
  "201015": {
    en: "user's privateKey is null",
    zh: "当前调用的user私钥为空，请检查user是否存在"
  },
  "201016": {
    en: "file is not exist",
    zh: "文件不存在"
  },
  // "201017": {
  //     en: "failed to get node config",
  //     zh: '获取节点配置失败'
  // },
  "201018": {
    en: "blockNumber and pbftView unchanged",
    zh: "块高和pbftview无增长，请检查节点状态"
  },
  "201019": {
    en: "request function is error",
    zh: "请求的函数不存在或错误"
  },
  "201020": {
    en: "transaction query from chain failed",
    zh: "链上查询交易失败，请检查参数"
  },
  "201021": {
    en: "transaction send to chain failed",
    zh: "交易上链超时，请检查链的共识状态是否正常"
  },
  "201022": {
    en: "node request failed",
    zh: "节点请求失败，请检查节点的共识状态是否正常"
  },
  "201023": {
    en: "contract already exists",
    zh: "合约已存在"
  },
  "201024": {
    en: "contract name cannot be repeated",
    zh: "合约名称不能重复"
  },
  "201025": {
    en: "invalid contract id",
    zh: "合约ID无效"
  },
  "201026": {
    en: "contract has been deployed",
    zh: "合约已部署"
  },
  "201027": {
    en: "send abiInfo fail",
    zh: "发送abi失败"
  },
  "201028": {
    en: "contractbin is null",
    zh: "合约bin为空"
  },
  "201029": {
    en: "contractAddress is null",
    zh: "合约地址为空"
  },
  "201030": {
    en: "contractAddress invalid",
    zh: "合约地址无效"
  },
  "201031": {
    en: "privateKey decode fail, please check base64 format",
    zh: "私钥解码失败，请检查私钥是否使用base64进行编码"
  },
  "201032": {
    en: "not found config of keyServer",
    zh: "找不到keyServer（WeBASE-Sign）的配置"
  },
  "201033": {
    en: "data request sign error",
    zh: "访问webase-sign失败，请检查配置是否正确，网络是否正常"
  },
  "201034": {
    en: "groupId not exist",
    zh: "groupId在链上不存在，请检查节点中的群组列表"
  },
  "201035": {
    en: "version and address cannot all be  null",
    zh: "合约地址不能为空"
  },
  "201037": {
    en: "user name is null",
    zh: "用户名为空"
  },
  "201038": {
    en: "user name already exists",
    zh: "用户名已经存在"
  },
  "201039": {
    en: "private key already exists",
    zh: "私钥已存在"
  },
  "201040": {
    en: "private key not exists",
    zh: "私钥不存在"
  },
  "201041": {
    en: "external user's appId and signUserId cannot be empty",
    zh: "外部用户的appId和signUserId不能为空"
  },
  "201042": {
    en: "There is no sol files in source",
    zh: "源文件中没有sol文件"
  },
  "201043": {
    en: "Invalid group operate type",
    zh: "无效的群组操作类型，请参考接口文档传入对应的参数"
  },
  "201044": {
    en: "Invalid data type",
    zh: "无效的数据类型"
  },
  "201045": {
    en: "Encode string can not be empty",
    zh: "用于签名的交易编码字符串不能为空"
  },
  "201046": {
    en: "Transaction failed!",
    zh: "上链交易失败，请检查交易格式或链状态"
  },
  "201100": {
    en: "Params not fit",
    zh: "参数不合适，请检查参数格式、类型是否匹配"
  },
  "201101": {
    en: "GroupId cannot be empty",
    zh: "群组不能为空"
  },
  "201102": {
    en: "TableName cannot be empty",
    zh: "表名不能为空"
  },
  "201102": {
    en: "TableName cannot be empty",
    zh: "表名不能为空"
  },
  "201103": {
    en: "Permission type cannot be empty",
    zh: "权限类型不能为空"
  },
  "201104": {
    en: "PermissionType not exists",
    zh: "权限类型不存在"
  },
  "201105": {
    en: "From address cannot be empty",
    zh: "交易的发起私钥from地址不能为空"
  },
  "201106": {
    en: "Contract name cannot be empty",
    zh: "合约名称不能为空"
  },
  "201107": {
    en: "System config key cannot be empty",
    zh: "系统配置key不能为空"
  },
  "201108": {
    en: "System config value cannot be empty",
    zh: "系统配置的value不能为空"
  },
  "201109": {
    en: "Node id cannot be empty",
    zh: "节点id不能为空"
  },
  "201100": {
    en: "Params not fit",
    zh: "参数不正确，请检查参数的长度、格式、类型是否匹配"
  },
  "201110": {
    en: "Node type cannot be empty",
    zh: "节点类型不能为空"
  },
  "201111": {
    en: "Permission state cannot be all empty",
    zh: "权限状态不能全部为空"
  },
  "201112": {
    en: "contract address cannot be empty",
    zh: "合约地址不能为空"
  },
  "201120": {
    en: "Group operate fail",
    zh: "群组操作失败"
  },
  "201121": {
    en: "Node internal error",
    zh: "节点内部错误，请查看节点日志进行排查"
  },
  "201122": {
    en: "Group already exists",
    zh: "该群组已存在"
  },
  "201123": {
    en: "Group already running",
    zh: "群组已处于运行状态"
  },
  "201124": {
    en: "Group already stopped",
    zh: "群组已处于停止状态"
  },
  "201125": {
    en: "Group already deleted",
    zh: "群组已处于删除状态"
  },
  "201126": {
    en: "Group not found",
    zh: "群组不存在"
  },
  "201127": {
    en: "Group operate param error",
    zh: "群组操作的参数错误"
  },
  "201128": {
    en: "Group peers not connected",
    zh: "群组内的节点连接异常，请检查节点日志"
  },
  "201129": {
    en: "Group genesis conf already exists",
    zh: "创世块配置文件已存在"
  },
  "201130": {
    en: "Group config.ini already exists",
    zh: "群组配置文件已存在"
  },
  "201131": {
    en: "Group genesis conf not found",
    zh: "群组配置文件不存在，无法添加该节点为共识节点"
  },
  "201132": {
    en: "Group config.ini not found",
    zh: "未找到群组配置文件"
  },
  "201133": {
    en: "Group is stopping",
    zh: "群组正在停止"
  },
  "201134": {
    en: "Group not deleted",
    zh: "群组并未被删除"
  },
  "201151": {
    en: "Unsupported contract param type to encoded",
    zh: "合约交易入参错误，请检查入参个数与入参值是否与ABI匹配"
  },
  "201152": {
    en: "Unsupported contract param type to decoded",
    zh: "合约的返回值解析失败，请查看后台日志进行排查"
  },
  "201153": {
    en: "Unable to create instance of type, check input params",
    zh: "合约的输入参数格式错误，请参考交易提示或合约参数类型进行检查"
  },
  "201154": {
    en: "contract path is exists.",
    zh: "目录已存在。"
  },
  "201155": {
    en: "contract path cannot be empty.",
    zh: "合约路径不能为空"
  },
  "201156": {
    en: "Write front's sdk cert and key fail!",
    zh: "前置的sdk证书和私钥生成失败，请查看后台日志进行排查"
  },
  "201161": {
    en: "Generate project failed in scaffold",
    zh: "项目Scaffold脚手架生成失败，请查看后台日志进行排查"
  },
  "201213": {
    en: "address is invalid",
    zh: "address地址无效"
  },
  "201200": {
    en: "Params not fit",
    zh: "参数不合适，请检查参数格式、类型是否匹配"
  },
  "201201": {
    en: "Address is invalid",
    zh: "地址格式不正确"
  },
  "201202": {
    en: "Permission denied, please check chain administrator permission",
    zh: "权限被拒绝，请检查该私钥用户是否具有权限进行操作"
  },
  "201203": {
    en: "Node id is invalid",
    zh: "节点ID不正确"
  },
  "201204": {
    en: "Invalid node type: sealer, observer, remove",
    zh: "节点类型错误，仅支持：sealer，observer，remove"
  },
  "201205": {
    en: "Permission denied or params error, set system config value fail",
    zh:
      "权限被拒绝或params错误，设置系统配置失败，请检查该私钥用户是否具有权限进行操作"
  },
  "201206": {
    en: "Create system config in db fail for already exist",
    zh: "在数据库中为已存在的创建系统配置失败"
  },
  "201207": {
    en: "System config key is invalid",
    zh: "系统配置的key值不正确"
  },
  "201208": {
    en: "Unsupported for this system config key",
    zh: "不支持修改该系统配置"
  },
  "201209": {
    en: "Provide value by positive integer mode, from 100000 to 2147483647",
    zh: "该参数仅支持正整数，范围为100000到2147483647"
  },
  "201210": {
    en: "Set system config value fail for params error or permission denied",
    zh: "设置参数错误的系统配置值失败或权限被拒绝"
  },
  "201211": {
    en: "Query system config value list fail",
    zh: "查询系统配置列表失败"
  },
  "201216": {
    en: "Node id is invalid",
    zh: "节点id无效"
  },
  "201217": {
    en: "Invalid node type: sealer, observer, remove",
    zh: "错误的节点类型，仅支持：sealer、observer、remove"
  },
  "201218": {
    en:
      "Set node consensus type fail, check permission or node's group config file",
    zh: "设置节点共识类型失败，请检查该用户私钥的权限或检查节点的群组配置文件"
  },
  "201221": {
    en:
      "Contract version should only contains 'A-Z' or 'a-z' or '0-9' or dot mark ",
    zh: "合约版本应仅包含“A-Z”或“A-Z”或“0-9”或点标记"
  },
  "201222": {
    en: "Version of contract is out of length",
    zh: "合约版本号过长"
  },
  "201223": {
    en: "CNS register fail ",
    zh: "CNS注册失败"
  },
  "201224": {
    en: "Version not exists",
    zh: "版本不存在"
  },
  "201225": {
    en: "CNS name cannot be empty",
    zh: "CNS名称不能为空"
  },
  "201226": {
    en: "sql syntax error",
    zh: "sql语法错误"
  },
  "201227": {
    en: "crud sql fail",
    zh: "crud sql fail"
  },
  "201228": {
    en: "Table not exists",
    zh: "表不存在"
  },
  "201231": {
    en: "Cert file not found, please check cert path in config",
    zh: "找不到证书文件，请检查配置中的证书路径"
  },
  "201232": {
    en: "Pem file format error, must surrounded by -----XXXXX PRIVATE KEY-----",
    zh: 'Pem文件格式错误，必须以"--XXXXX PRIVATE KEY---"开始与结束'
  },
  "201233": {
    en: "Pem file content error",
    zh: "pem文件内容的格式错误"
  },
  "201235": {
    en: "P12's password cannot be chinese",
    zh: "p12密码不能为中文"
  },
  "201236": {
    en: "P12's password not match ",
    zh: "p12的密码错误"
  },
  "201237": {
    en: "P12 file content error",
    zh: "p12文件内容的格式错误"
  },
  "201241": {
    en:
      "Exchange or message queue not exists, please check mq server or mq configuration",
    zh: "Exchange或消息队列不存在，请检查mq服务器或mq配置"
  },
  "201242": {
    en: "Database error: data already exists in db",
    zh: "数据库错误：数据库中已存在数据"
  },
  "201243": {
    en:
      "Block range error, from/toBlock must greater than 0, toBlock must be greater than fromBlock",
    zh: "块范围错误，from/toBlock必须大于0，toBlock必须大于fromBlock"
  },
  "201244": {
    en: "Database error: data not exists in db, please check your params",
    zh: "数据库错误：数据库中不存在数据，请检查参数"
  },
  "201245": {
    en: "Only support letter and digit, please check your params",
    zh: "仅支持字母和数字，请检查您的参数"
  },
  "201246": {
    en: "Register contractEvent failed, please check your param",
    zh: "注册contractEvent失败，请检查您的参数"
  },
  "201248": {
    en: "Contract abi invalid, please check abi",
    zh: "合约ABI校验错误，请检查ABI参数格式"
  },
  "201255": {
    en: "Contract address already exists",
    zh: "合约地址已存在"
  },
  "201256": {
    en: "Abi info of this id not exists",
    zh: "此ID的ABI信息不存在"
  },
  "201257": {
    en: "ABI Id cannot be empty",
    zh: "ABI Id不能为空"
  },
  "201263": {
    en: "Solc js file name already exist",
    zh: "文件名已存在"
  },
  "201265": {
    en: "Read solc js file error, please check if file deleted",
    zh: "读取solc js文件错误，请检查文件是否已删除"
  },
  "201311": {
    en: "get event callback fail for time out",
    zh: "获取事件回调超时失败"
  },
  "201312": {
    en: "get event callback error",
    zh: "获取事件回调错误"
  },
  "201501": {
    en: "web3sdk create key pair fail and return null",
    zh: "sdk创建私钥失败并返回Null，请查看后台日志进行排查"
  },
  "201502": {
    en: "pem/p12 manager get key pair error for input params",
    zh: "从pem/p12证书获取私钥失败，请检查入参"
  },
  "201503": {
    en: "pem/p12 manager get key pair error for bc dependency error",
    zh: "pem/p12证书获取私钥对失败，检查bc依赖包版本或检查后台日志进行排查"
  },
  "201504": {
    en: "sign service return error",
    zh: "签名服务返回异常，请检查签名服务或检查私钥是否存在"
  },
  "201510": {
    en: "transaction receipt of this hash not exist",
    zh: "此哈希的交易回执不存在"
  },
  "201511": {
    en: "block of this hash not exist",
    zh: "此哈希的块不存在"
  },
  "201512": {
    en: "call contract error for io exception",
    zh: "调用合约的交易上链失败，请检查参数的长度、格式、类型是否匹配"
  },
  "201513": {
    en: "get transaction receipt fail for exec",
    zh: "获取交易回执失败，返回执行错误，请查看后台日志进行排查"
  },
  "201514": {
    en: "get transaction receipt fail for time out",
    zh: "获取交易回执失败，请求超时，请检查节点状态"
  },
  "201515": {
    en: "transaction receipt fail and parse output fail",
    zh: "交易回执中output输出值解码失败，请查看后台日志进行排查"
  },
  "201516": {
    en: "transaction receipt fail and output is null",
    zh: "交易回执output为空"
  },
  "201517": {
    en: "call contract constant method fail",
    zh: "调用合约constant方法失败，请检查参数的长度、格式、类型是否匹配"
  },
  "201518": {
    en: "get message's hash fail",
    zh: "获取哈希失败，，请检查参数的长度、格式、类型是否匹配"
  },
  "201521": {
    en: "get list of manager on chain fail",
    zh: "获取链上管理员列表失败，请查看后台日志进行排查"
  },
  "201522": {
    en: "table key length error",
    zh: "用户表的键值长度大于最大值255"
  },
  "201523": {
    en: "crud's param parse json error",
    zh: "CRUD方法的入参转Entry/Condition失败，请检查入参"
  },
  "201524": {
    en: "precompiled common transfer to json fail",
    zh: "预编译错误码转JSON失败"
  },
  "201600": {
    en: "BcosSDK is empty, call config api to init one bcosSDK",
    zh: "前置连接节点失败，调用config api来初始化一个BcosSDK"
  },
  "201601": {
    en: "Sdk's peers cannot be empty",
    zh: "Sdk的peers配置不能为空"
  },
  "201602": {
    en: "Sdk's sdk certificates and key cannot be empty",
    zh: "Sdk的Sdk证书和密钥不能为空"
  },
  "201603": {
    en: "Sdk's peers same with new peers",
    zh: "Sdk的peers与新peers相同"
  },
  "201604": {
    en: "webase-front connect to new peers ip port failed!",
    zh: "节点前置连接到新peers IP端口失败!"
  },
  "201605": {
    en: "Build client instance of new group failed",
    zh: "创建新群组的Client实例失败，请检查前置日志进行排查"
  },
  "201606": {
    en: "This group only support Liquid contract of wasm",
    zh: "当前群组仅支持Liquid合约"
  },
  "201607": {
    en: "This group not connected with front's rpc peers",
    zh: "节点前置无法通过已连接的rpc节点访问该群组，请检查前置日志进行排查"
  },
  "201609": {
    en: "This liquid contract already compiling, please wait...",
    zh: "liquid合约编译中，请稍候..."
  },
  "201621": {
    en: "Sealer's weight cannot be null",
    zh: "共识节点的权重值不可为空"
  },
  "201631": {
    en: "Java Command exec timeout",
    zh: "Liquid命令执行超时"
  },
  "201632": {
    en: "Java Command return error",
    zh: "Liquid命令返回错误，请检查日志"
  },
  "201633": {
    en: "When deploying liquid, contract address must not be empty",
    zh: "部署liquid时，合约地址不得为空"
  },
  "201665": {
    en: "Build eventSubscribe instance of new group failed",
    zh: "创建新群组的EventSub实例失败，请检查前置日志进行排查"
  },
  "202000": {
    en: "invalid node info",
    zh: "错误的节点信息"
  },
  "202001": {
    en: "database exception",
    zh: "数据库异常，请查看后台日志进行排查"
  },
  "202002": {
    en: "organization already exists",
    zh: "组织已经存在"
  },
  "202003": {
    en: "organization not exists",
    zh: "组织信息不存在"
  },
  "202004": {
    en: "node already exists",
    zh: "节点已经存在"
  },
  "202005": {
    en: "network id cannot be empty",
    zh: "网络编号不能为空"
  },
  "202006": {
    en: "invalid network id",
    zh: "无效的网络编号"
  },
  "202007": {
    en: "organization id cannot be empty",
    zh: "组织编号不能为空"
  },
  "202008": {
    en: "invalid organization id",
    zh: "无效的组织编号"
  },
  "202009": {
    en: "network_organization_mapping already exists",
    zh: "已有该网络和组织的关联"
  },
  "202010": {
    en: "network_organization_mapping not exist",
    zh: "没有该组织和网络的关联信息"
  },
  "202011": {
    en: "did not find the current organization",
    zh: "未找到本组织信息"
  },
  "202012": {
    en: "user id cannot be empty",
    zh: "用户编号不能为空"
  },
  "202013": {
    en: "invalid user id",
    zh: "无效的用户编号"
  },
  "202014": {
    en: "user already exists",
    zh: "用户信息已经存在"
  },
  "202015": {
    en: "contract already exists",
    zh: "合约信息已经存在"
  },
  "202016": {
    en: "contract id cannot be empty",
    zh: "合约编号不能为空"
  },
  "202017": {
    en: "invalid contract id",
    zh: "无效的合约编号"
  },
  "202018": {
    en: "invalid param info",
    zh: "无效的入参信息"
  },
  "202019": {
    en: "did not find node info",
    zh: "未找到节点信息"
  },
  "202020": {
    en: "current organization already exist",
    zh: "已存在本组织信息"
  },
  "202021": {
    en: "invalid organization type",
    zh: "无效的组织类型"
  },
  "202022": {
    en: "unable to delete deployed contract",
    zh: "不能删除已部署的合约"
  },
  "202023": {
    en: "node ip cannot be empty",
    zh: "节点编号不能为空"
  },
  "202024": {
    en: "node p2p port cannot be empty",
    zh: "节点p2p端口不能为空"
  },
  "202025": {
    en: "did not find node log",
    zh: "找不到节点日志"
  },
  "202026": {
    en: "account info already exists",
    zh: "该帐号已经存在"
  },
  "202027": {
    en: "ccount info not exists",
    zh: "该帐号不存在"
  },
  "202028": {
    en: "account name empty",
    zh: "帐号名称不能为空"
  },
  "202029": {
    en: "invalid account name",
    zh: "无效的账号名称"
  },
  "202030": {
    en: "password error",
    zh: "密码错误"
  },
  "202031": {
    en: "role id cannot be empty",
    zh: "角色编号不能为空"
  },
  "202032": {
    en: "invalid role id",
    zh: "无效的角色编号"
  },
  "202033": {
    en: "invalid attr",
    zh: "无效的attr值"
  },
  "202034": {
    en: "login fail",
    zh: "登录失败，请检查密码或后台服务是否正常"
  },
  "202035": {
    en: "contract has been deployed",
    zh: "该合约已经部署"
  },
  "202036": {
    en: "publicKey cannot be empty",
    zh: "公钥不能为空"
  },
  "202037": {
    en: "user does not exist",
    zh: "用户信息不存在"
  },
  "202038": {
    en: "interface does not exist",
    zh: "接口不存在"
  },
  "202039": {
    en: "do not save this block height",
    zh: "块高参数错误"
  },
  "202040": {
    en: "contract deploy not success",
    zh: "合约部署失败，请检查合约的构造函数入参或检查链状态"
  },
  "202041": {
    en: "invalid user index",
    zh: "错误的用户id"
  },
  "202042": {
    en: "invalid contract index",
    zh: "错误的合约id"
  },
  "202043": {
    en: "did not found system contract:contractDetail",
    zh: "找不到系统合约【contractDetail】"
  },
  "202044": {
    en: "did not found system contract:user",
    zh: "找不到系统合约【user】"
  },
  "202045": {
    en: "the new password cannot be same as old",
    zh: "新旧密码不能一致"
  },
  "202046": {
    en: "contract has not compiled",
    zh: "合约的abi或bin为空，请先编译合约。"
  },
  "202047": {
    en: "did not found system contract:node",
    zh: "找不到系统合约【node】"
  },
  "202048": {
    en: "invalid node id",
    zh: "无效的节点id"
  },
  "202049": {
    en: "contract name is empty",
    zh: "合约名为空"
  },
  "202050": {
    en: "publicKey's length is 130,address's length is 42",
    zh: "公钥长度为130，公钥地址长度为42"
  },
  "202051": {
    en: "invalid node ip",
    zh: "IP或者端口错误"
  },
  "202052": {
    en: "did not find current node info",
    zh: "找不到当前节点信息"
  },
  "202053": {
    en: "system user has not been initialized yet",
    zh: "系统用户尚未初始化"
  },
  "202054": {
    en: "contract had not deploy",
    zh: "合约尚未部署"
  },
  "202055": {
    en: "invalid contract",
    zh: "无的合约"
  },
  "202058": {
    en: "not support transaction",
    zh: "不支持发交易"
  },
  "202111": {
    en: "Fail to parse json",
    zh: "解析json失败"
  },
  "302000": {
    en: "user not logged in",
    zh: "未登录的用户"
  },
  "302001": {
    en: "access denied",
    zh: "没有权限"
  }
  // "201014": {
  //     en: "ContractAddress Already Used",
  //     zh: "合约地址已被使用"
  // },
};
export function chooseLang(code) {
  let lang = localStorage.getItem("lang");
  let message = errCode[code][lang];
  return message;
}
