package com.yonyou.ucf.mdf.app.mobile.module;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import com.yonyou.iuap.utils.PropertyUtil;
import com.yonyou.ucf.mdf.app.mobile.MobileProperties;
import com.yonyou.ucf.mdf.app.mobile.support.RSACipher;
import com.yonyoucloud.ec.sns.error.ECConfigurationException;
import com.yonyoucloud.ec.sns.support.AESCipher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Slf4j
@RequiredArgsConstructor
@Service
public class YhtTokenCipherDecryptService {

    private static final String CIPHER_1 = PropertyUtil.getPropertyByKey("yhttoken.cipher.cipher1", "O7oXBnKW1Si5yOZ-0gI894gqSQnrZMyYVd960FbsRTM=");
    private static final String CIPHER_2 = PropertyUtil.getPropertyByKey("yhttoken.cipher.cipher2", "rA9ZaNxElmC9Xv8V7Rt2u5qZ");

    private final MobileProperties properties;

    private String privateKey;

    public String decrypt(String cipher) {
        byte[] bytes = RSACipher.decryptByPrivateKey(Base64.decode(cipher), getPrivateKey());
        return new String(bytes, StandardCharsets.UTF_8);
    }

    private String getPrivateKey() {

        if (privateKey != null) {
            return privateKey;
        }

        java.security.Security.addProvider(
                new org.bouncycastle.jce.provider.BouncyCastleProvider()
        );

        String yhtTokenPrivateKey = properties.getYhtTokenPrivateKey();
        if (StringUtils.isBlank(yhtTokenPrivateKey)) {
            throw new ECConfigurationException("yht token rsa private key required");
        }

        String decrypt = AESCipher.decrypt(yhtTokenPrivateKey, buildPrivateKeyCipher());
        privateKey = decrypt.replaceAll("-----.*-----\n", "");
        return privateKey;
    }

    private String buildPrivateKeyCipher() {
        return AESCipher.decrypt(CIPHER_1, CIPHER_2);
    }

}
