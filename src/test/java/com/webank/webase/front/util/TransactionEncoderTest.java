package com.webank.webase.front.util;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import com.webank.webase.front.base.TestBase;
import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import org.fisco.bcos.sdk.v3.codec.datatypes.generated.Bytes32;
import org.fisco.bcos.sdk.v3.crypto.signature.SignatureResult;
import org.fisco.bcos.sdk.v3.transaction.codec.encode.TransactionEncoderService;
import org.fisco.bcos.sdk.v3.utils.Hex;
import org.fisco.bcos.sdk.v3.utils.Numeric;
import org.junit.Test;

public class TransactionEncoderTest extends TestBase {

   public static BigInteger gasPrice = BigInteger.ONE;
   public static BigInteger gasLimit = BigInteger.TEN;

//    @Test todo
//    public void testSignMessage() {
//        TransactionEncoderService encoderService = new TransactionEncoderService(cryptoSuite);
//
//        TransactionBuilderService txBuilder = new TransactionBuilderService(web3j);
//        return txBuilder.createTransaction("0x0000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
//            groupId, chainId);
//        byte[] encodedMsg = encoderService.encode(createContractTransaction(), null);
//        SignatureResult signedMessage = cryptoSuite.sign(encodedMsg, cryptoKeyPair);
//        String hexMessage = Hex.toHexString(signedMessage.getSignatureBytes());
//        assertThat(hexMessage,
//            is("0xf85a8201f4010a8201f5840add5355887fffffffffffffff801ba01cf44d4680e1ecaf11a9a997b08055ae84c5d417b1fc7c2bdbaffc3fd4a7659aa07a424ef2ad019c599a24309c97f4cd10d0e4293a51d8c1abb095052bf54a7ba7"));
//    }


    // expected: 0x3132330000000000000000000000000000000000000000000000000000000000
    @Test
    public void testBytes32() {
        String input = "123";
        String utf82Hex = Hex.toHexString(input.getBytes(StandardCharsets.UTF_8));
        System.out.println("input " + input);
        // expected: 0x313233
        System.out.println("utf82Hex " + utf82Hex);

        byte[] byteValue = input.getBytes();
        byte[] byteValueUtf8 = utf82Hex.getBytes();

        byte[] byteValueLen32 = new byte[32];
        System.arraycopy(byteValue, 0, byteValueLen32, 0, byteValue.length);
        Bytes32 res1 = new Bytes32(byteValueLen32);
        System.out.println("res1:");
        System.out.println(Hex.toHexString(res1.getValue()));

        byte[] byteValueLen32_1 = new byte[32];
        System.arraycopy(byteValueUtf8, 0, byteValueLen32_1, 0, byteValue.length);
        Bytes32 res2 = new Bytes32(byteValueLen32);
        System.out.println("res2:");
        System.out.println(Hex.toHexString(res2.getValue()));
    }


}
