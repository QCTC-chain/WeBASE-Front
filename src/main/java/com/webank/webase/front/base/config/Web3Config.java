/*
 * Copyright 2014-2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package com.webank.webase.front.base.config;


import static com.webank.webase.front.cert.FrontCertService.frontGmEnSdkNodeCrt;
import static com.webank.webase.front.cert.FrontCertService.frontGmEnSdkNodeKey;
import static com.webank.webase.front.cert.FrontCertService.frontGmSdkCaCrt;
import static com.webank.webase.front.cert.FrontCertService.frontGmSdkNodeCrt;
import static com.webank.webase.front.cert.FrontCertService.frontGmSdkNodeKey;
import static com.webank.webase.front.cert.FrontCertService.frontSdkCaCrt;
import static com.webank.webase.front.cert.FrontCertService.frontSdkNodeCrt;
import static com.webank.webase.front.cert.FrontCertService.frontSdkNodeKey;

import com.webank.webase.front.configapi.ConfigService;
import com.webank.webase.front.configapi.entity.ReqSdkConfig;
import com.webank.webase.front.util.JsonUtils;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.fisco.bcos.sdk.BcosSDK;
import org.fisco.bcos.sdk.client.Client;
import org.fisco.bcos.sdk.codec.datatypes.Bool;
import org.fisco.bcos.sdk.config.ConfigOption;
import org.fisco.bcos.sdk.config.exceptions.ConfigException;
import org.fisco.bcos.sdk.config.model.ConfigProperty;
import org.fisco.bcos.sdk.jni.common.JniException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * init web3sdk getService.
 */
@Data
@Slf4j
@Configuration
@ConfigurationProperties(prefix = "sdk")
public class Web3Config {
    @Autowired
    private ConfigService configService;
    private boolean loadFromDb;

    private String threadPoolSize;
    private String certPath;
    private String useSmSsl;
    private List<String> peers;

    /**
     * only used to get groupList
     * @throws JniException
     */
    @Bean(name = "rpcClient")
    public Client getRpcWeb3j(ConfigOption configOption) throws JniException {

        Client rpcWeb3j = Client.build(configOption);
        // Client rpcWeb3j = bcosSDK.getClient();
        log.info("get rpcWeb3j(only support groupList) client:{}", rpcWeb3j);
        return rpcWeb3j;
    }

    @Bean(name = "singleClient")
    public Client getClient(ConfigOption configOption) throws JniException {

        Client client = Client.build("group", configOption);
        // Client rpcWeb3j = bcosSDK.getClient();
        log.info("get client:{}", client);
        return client;
    }

//    @Bean
//    public Stack<BcosSDK> getBcosSDK() throws ConfigException {
//    public BcosSDK getBcosSDK() throws ConfigException {
//        Stack<BcosSDK> bcosSDKs = new Stack<>(); todo
//        if (loadFromDb) {
//            try {
//                this.initSDKFromDb(bcosSDKs);
//            } catch (ConfigException e) {
//                log.error("push new sdk instance error:[]", e);
//            }
//        } else {
//            BcosSDK bcosSDK = initSDKFromFile();
//            return bcosSDK;
//            bcosSDKs.push(bcosSDK);
//        }
//        return bcosSDKs;
//    }

    @Bean
    public ConfigOption initSDKFromFile() throws ConfigException {
        log.info("start init ConfigProperty");
        // cert config, encrypt type
        Map<String, Object> cryptoMaterial = new HashMap<>();
        // cert use conf
        cryptoMaterial.put("certPath", certPath);
//        cryptoMaterial.put("useSMCrypto", useSmSsl);
        cryptoMaterial.put("useSMCrypto", useSmSsl);
        // user no need set this:cryptoMaterial.put("sslCryptoType", encryptType);
        log.info("init cert cryptoMaterial:{}, (using conf as cert path)", JsonUtils.objToString(cryptoMaterial));

        // peers, default one node in front
        Map<String, Object> network = new HashMap<>();
        network.put("peers", peers);
        log.info("init node network property :{}", JsonUtils.objToString(peers));

        // thread pool config
        log.info("init thread pool property");
        Map<String, Object> threadPool = new HashMap<>();
        threadPool.put("threadPoolSize", threadPoolSize);
        log.info("init thread pool property:{}", JsonUtils.objToString(threadPool));

        // init property
        ConfigProperty configProperty = new ConfigProperty();
        configProperty.setCryptoMaterial(cryptoMaterial);
        configProperty.setNetwork(network);
        configProperty.setThreadPool(threadPool);
        // init config option
        log.info("init configOption from configProperty");
        ConfigOption configOption = new ConfigOption(configProperty);
        // init bcosSDK
//        BcosSDK bcosSDK = new BcosSDK(configOption);
//        log.info("finish init bcos sdk instance, check sdk.log for detail");

        return configOption;
    }


    public void initSDKFromDb(Stack<BcosSDK> bcosSDKs) throws ConfigException {
        ReqSdkConfig config = new ReqSdkConfig();
        boolean useGmSsl = Boolean.parseBoolean(useSmSsl);
        config.setUseSmSsl(useGmSsl);
        config.setPeers(peers);
        if (useGmSsl) {
            config.setCaCertStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontGmSdkCaCrt));
            config.setSdkCertStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontGmSdkNodeCrt));
            config.setSdkKeyStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontGmSdkNodeKey));
            config.setSmEnSdkCertStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontGmEnSdkNodeCrt));
            config.setSmEnSdkKeyStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontGmEnSdkNodeKey));
        } else {
            config.setCaCertStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontSdkCaCrt));
            config.setSdkCertStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontSdkNodeCrt));
            config.setSdkKeyStr(ConfigProperty.getConfigFileContent(certPath + File.separator + frontSdkNodeKey));
        }
        BcosSDK bcosSDK = configService.buildBcosSDK(config);
        if (bcosSDKs.isEmpty()) {
            log.info("push new sdk instance into stack:{}", JsonUtils.objToString(bcosSDK));
            bcosSDKs.push(bcosSDK);
        }
    }


}
